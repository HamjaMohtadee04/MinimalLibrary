import { useState, useEffect } from "react";
import { useGetBookQuery, useUpdateBookMutation } from "../features/bookApi";
import { useParams, useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
export default function EditBookPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetBookQuery(id!);
  const [updateBook] = useUpdateBookMutation();
  const [book, setBook] = useState<any>(null);
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { if (data) setBook(data); }, [data]);
  if (isLoading || !book) return <div className="p-4">Loading...</div>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setBook({ ...book, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateBook({ id: id!, book });
    setToast(true);
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input required name="title" value={book.title} className="border p-2" onChange={handleChange} />
        <input required name="author" value={book.author} className="border p-2" onChange={handleChange} />
        <input required name="genre" value={book.genre} className="border p-2" onChange={handleChange} />
        <input required name="isbn" value={book.isbn} className="border p-2" onChange={handleChange} />
        <textarea required name="description" value={book.description} className="border p-2" onChange={handleChange} />
        <input required name="copies" type="number" value={book.copies} className="border p-2" onChange={handleChange} />
        <label>
          <input type="checkbox" name="available" checked={book.available} onChange={handleChange} /> Available
        </label>
        <button type="submit" className="bg-blue-600 text-white p-2">Update Book</button>
      </form>
      <Toast message="Book Updated Successfully" show={toast} onClose={() => setToast(false)} />
    </div>
  );
}