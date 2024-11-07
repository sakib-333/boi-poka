import React, { useContext } from "react";
import Book from "./Book";
import { BookVibeContext } from "../../../Context/BookVibeContext";

const Books = () => {
  const { books } = useContext(BookVibeContext);
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {books.map((book) => (
        <Book key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default Books;
