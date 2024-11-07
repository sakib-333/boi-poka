import React from "react";

import Star from "./assets/star.svg";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <Link to={`/books/id=${book.bookId}`}>
      <div className="mx-auto max-w-[375px] w-full border p-4 space-y-3 rounded-xl">
        <div className="bg-base-200 h-[230px] rounded-lg">
          <img
            className="w-full h-full box-border rounded-xl"
            src={book.image}
            alt="book"
          />
        </div>
        <div className="flex font-sans font-bold space-x-2">
          {book.tags.map((tag, indx) => (
            <p
              key={`tag_id_${indx}`}
              className="px-3 py-1 rounded-3xl bg-green-100 text-green-500"
            >
              {tag}
            </p>
          ))}
        </div>
        <div>
          <h1 className="font-bold md:text-xl lg:text-2xl">{book.bookName}</h1>
          <p className="text-sm lg:text-base font-sans">By : {book.author}</p>
        </div>
        <div className="border-b-2 border-dashed"></div>
        <div className="flex items-center justify-between">
          <p>{book.category}</p>
          <p className="flex items-center font-sans space-x-1">
            <span>{book.rating}</span> <img src={Star} alt="star" />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
