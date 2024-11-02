import React from "react";
import Book from "./Book";

const Books = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <Book />
    </div>
  );
};

export default Books;
