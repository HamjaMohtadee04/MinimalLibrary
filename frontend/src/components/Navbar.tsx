import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">MinimalLibrary</div>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">All Books</Link>
        <Link to="/add" className="hover:underline">Add Book</Link>
        <Link to="/borrow-summary" className="hover:underline">Borrow Summary</Link>
      </div>
    </nav>
  );
}


