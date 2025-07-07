import { useState } from "react";
import { useAddBookMutation } from "../features/bookApi";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
export default function AddBookPage() {
  const [book, setBook] = useState({ title: "", author: "", genre: "", isbn: "", description: "", copies: 0, available: true });
  const [addBook] = useAddBookMutation();
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setBook({ ...book, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addBook(book);
    setToast(true);
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl mb-4">Add Book</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input required name="title" placeholder="Title" className="border p-2" onChange={handleChange} />
        <input required name="author" placeholder="Author" className="border p-2" onChange={handleChange} />
        <input required name="genre" placeholder="Genre" className="border p-2" onChange={handleChange} />
        <input required name="isbn" placeholder="ISBN" className="border p-2" onChange={handleChange} />
        <textarea required name="description" placeholder="Description" className="border p-2" onChange={handleChange} />
        <input required name="copies" type="number" placeholder="Copies" className="border p-2" onChange={handleChange} />
        <label>
          <input type="checkbox" name="available" checked={book.available} onChange={handleChange} /> Available
        </label>
        <button type="submit" className="bg-blue-600 text-white p-2">Add Book</button>
      </form>
      <Toast message="Book Added Successfully" show={toast} onClose={() => setToast(false)} />
    </div>
  );
}