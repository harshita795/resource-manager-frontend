import { useState } from "react";
import { useRouter } from "next/router";
import api from "../utils/axios";

export default function AddResource() {
  const [form, setForm] = useState({ title: "", description: "", type: "" });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await api.post("/resources", form);
      router.push("/");
    } catch (err) {
      console.error(
        "Error adding resource:",
        err.response?.data || err.message
      );
      setError("Failed to add resource.");
    }
  };

  return (
    <div className="container">
      <h1>Add a New Resource</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
