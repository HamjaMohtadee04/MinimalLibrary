import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Book {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
}

export interface BorrowSummary {
  title: string;
  isbn: string;
  totalQuantity: number;
}

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL, // dynamic base URL
  }),
  tagTypes: ["Books", "Borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => "books",
      providesTags: ["Books"],
    }),
    getBook: builder.query<Book, string>({
      query: (id) => `books/${id}`,
    }),
    addBook: builder.mutation<void, Partial<Book>>({
      query: (book) => ({ url: "books", method: "POST", body: book }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<void, { id: string; book: Partial<Book> }>({
      query: ({ id, book }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({ url: `books/${id}`, method: "DELETE" }),
      invalidatesTags: ["Books"],
    }),
    borrowBook: builder.mutation<
      void,
      { bookId: string; quantity: number; dueDate: string }
    >({
      query: ({ bookId, quantity, dueDate }) => ({
        url: `borrow/${bookId}`,
        method: "POST",
        body: { quantity, dueDate },
      }),
      invalidatesTags: ["Books", "Borrow"],
    }),
    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => "borrow/summary",
      providesTags: ["Borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = bookApi;
