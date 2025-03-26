import { useQuery } from "@tanstack/react-query";
import api from "../utils/axios";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const fetchResources = async () => {
  const { data } = await api.get("/resources");
  return data;
};

export default function Home() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["resources"],
    queryFn: fetchResources,
  });

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this resource?")) return;
    try {
      await api.delete(`/resources/${id}`);
      refetch();
    } catch (error) {
      alert("Failed to delete resource.");
    }
  };

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  if (error)
    return <p className="text-center mt-5 text-danger">Error fetching data</p>;

  return (
    <div className="container mt-5">
      <h1 className="text-center">Resource Manager</h1>
      <div className="d-flex justify-content-end">
        <Link href="/add">
          <button className="btn btn-primary">Add Resource</button>
        </Link>
      </div>
      <ul className="list-group mt-3">
        {data?.length > 0 ? (
          data.map((resource) => (
            <li
              key={resource.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{resource.title}</h5>
                <p className="mb-1">{resource.description}</p>
                <small className="text-muted">Type: {resource.type}</small>
              </div>
              <div>
                <Link href={`/edit/${resource.id}`}>
                  <button className="btn btn-warning btn-sm me-2">Edit</button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(resource.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center mt-3">No resources found.</p>
        )}
      </ul>
    </div>
  );
}
