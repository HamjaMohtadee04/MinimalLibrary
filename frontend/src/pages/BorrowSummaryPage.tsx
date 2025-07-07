import { useGetBorrowSummaryQuery } from "../features/bookApi";
export default function BorrowSummaryPage() {
  const { data, isLoading } = useGetBorrowSummaryQuery();
  if (isLoading) return <div className="p-4">Loading...</div>;
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Borrow Summary</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th>Title</th><th>ISBN</th><th>Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((s, i) => (
            <tr key={i} className="border">
              <td>{s.title}</td>
              <td>{s.isbn}</td>
              <td>{s.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}