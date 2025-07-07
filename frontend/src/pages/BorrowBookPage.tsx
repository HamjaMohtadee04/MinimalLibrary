
import { useState } from "react";
import { useBorrowBookMutation } from "../features/bookApi";
import { useParams, useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
export default function BorrowBookPage() {
  const { bookId } = useParams();
  const [borrow, setBorrow] = useState({ quantity: 1, dueDate: "" });
  const [borrowBook] = useBorrowBookMutation();
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBorrow({ ...borrow, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await borrowBook({ bookId: bookId!, quantity: Number(borrow.quantity), dueDate: borrow.dueDate });
    setToast(true);
    setTimeout(() => navigate("/borrow-summary"), 1000);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl mb-4">Borrow Book</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input required type="number" name="quantity" min={1} placeholder="Quantity" className="border p-2" onChange={handleChange} />
        <input required type="date" name="dueDate" className="border p-2" onChange={handleChange} />
        <button type="submit" className="bg-green-600 text-white p-2">Borrow</button>
      </form>
      <Toast message="Book Borrowed Successfully" show={toast} onClose={() => setToast(false)} />
    </div>
  );
}