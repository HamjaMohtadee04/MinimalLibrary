import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../features/bookApi";
export default function BookDetailsPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetBookQuery(id!);
  if (isLoading || !data) return <div className="p-4">Loading...</div>;
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl mb-2">{data.title}</h1>
      <p><strong>Author:</strong> {data.author}</p>
      <p><strong>Genre:</strong> {data.genre}</p>
      <p><strong>ISBN:</strong> {data.isbn}</p>
      <p><strong>Copies:</strong> {data.copies}</p>
      <p><strong>Available:</strong> {data.available ? "Yes" : "No"}</p>
      <p className="mt-4"><strong>Description:</strong> {data.description}</p>
    </div>
  );
}