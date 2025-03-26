import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "../../utils/axios";

export default function EditResource() {
  const router = useRouter();
  const { id } = router.query; // Get resource ID from URL
  const [form, setForm] = useState({ title: "", description: "", type: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchResource = async () => {
      try {
        const { data } = await api.get(`/resources/${id}`);
        setForm(data);
      } catch (err) {
        setError("Failed to load resource.");
      } finally {
        setLoading(false);
      }
    };
    fetchResource();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await api.put(`/resources/${id}`, form);
      router.push("/");
    } catch (err) {
      setError("Failed to update resource.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container">
      <h1>Edit Resource</h1>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select
            name="type"
            className="form-select"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Article">Article</option>
            <option value="Video">Video</option>
            <option value="Tutorial">Tutorial</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
}
