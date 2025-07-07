import { useGetBooksQuery, useDeleteBookMutation } from "../features/bookApi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Toast from "../components/Toast";

export default function BooksListPage() {
  const { data, isLoading } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const [toast, setToast] = useState(false);

  if (isLoading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">All Books</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left whitespace-nowrap">Title</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Author</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Genre</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">ISBN</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Copies</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Available</th>
              <th className="px-4 py-2 text-left whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((b) => (
              <tr key={b._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <Link to={`/details/${b._id}`} className="text-blue-600 hover:underline">
                    {b.title}
                  </Link>
                </td>
                <td className="px-4 py-2">{b.author}</td>
                <td className="px-4 py-2">{b.genre}</td>
                <td className="px-4 py-2">{b.isbn}</td>
                <td className="px-4 py-2">{b.copies}</td>
                <td className="px-4 py-2">{b.available ? "Yes" : "No"}</td>
                <td className="px-4 py-2 flex flex-wrap gap-2">
                  <Link to={`/edit/${b._id}`} className="text-blue-600">Edit</Link>
                  <button
                    onClick={() => {
                      deleteBook(b._id!);
                      setToast(true);
                    }}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                  <Link to={`/borrow/${b._id}`} className="text-green-600">Borrow</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Toast message="Book Deleted Successfully" show={toast} onClose={() => setToast(false)} />
    </div>
  );
}
