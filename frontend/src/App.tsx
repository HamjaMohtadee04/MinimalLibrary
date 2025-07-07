
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BooksListPage from "./pages/BooksListPage";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";
import BorrowBookPage from "./pages/BorrowBookPage";
import BorrowSummaryPage from "./pages/BorrowSummaryPage";
import BookDetailsPage from "./pages/BookDetailsPage";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksListPage />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
          <Route path="/borrow/:bookId" element={<BorrowBookPage />} />
          <Route path="/borrow-summary" element={<BorrowSummaryPage />} />
          <Route path="/details/:id" element={<BookDetailsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}