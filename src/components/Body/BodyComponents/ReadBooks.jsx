import React from "react";

import LocationIcon from "./assets/location-icon.svg";
import PublisherIcon from "./assets/publisher-icon.svg";
import PageIcon from "./assets/page-icon.svg";
import { Link } from "react-router-dom";

const ReadBooks = ({ book }) => {
  return (
    <div className="w-fit flex flex-col items-center sm:w-full border rounded-2xl p-3 sm:flex-row sm:items-center sm:space-x-4">
      <div className="p-3 max-w-[230px] max-h-[230px] bg-base-200 rounded-lg">
        <img
          className="max-w-[130px] max-h-[172px]"
          src={book.image}
          alt="banner"
        />
      </div>
      <div className="w-full min-h-[190px] flex flex-col justify-between">
        <h1 className="font-bold">{book.bookName}</h1>
        <small className="font-sans">By : {book.author}</small>
        <div className="flex items-center font-sans text-[12px] space-x-3">
          <strong>Tag</strong>
          {book.tags.map((tag, indx) => (
            <p
              key={`read_book_id_${indx}`}
              className="px-3 py-1 rounded-3xl bg-green-100 text-green-500"
            >
              #{tag}
            </p>
          ))}
          <p className="flex items-center space-x-1">
            <img
              className="w-[12px] h-[12px]"
              src={LocationIcon}
              alt="location-icon"
            />
            <span>Year of Publishing: {book.yearOfPublishing}</span>
          </p>
        </div>
        <div className="w-full flex items-center space-x-3">
          <p className="flex items-center space-x-1 font-sans text-[12px]">
            <img
              className="w-[12px] h-[12px]"
              src={PublisherIcon}
              alt="publisher-icon"
            />
            <span>Publisher: {book.publisher}</span>
          </p>
          <p className="flex items-center space-x-1 font-sans text-[12px]">
            <img className="w-[12px] h-[12px]" src={PageIcon} alt="page-icon" />
            <span>{book.totalPages}</span>
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs font-sans">
          <p className="w-fit px-3 py-1 rounded-3xl bg-blue-200 text-blue-500">
            Category: {book.category}
          </p>
          <p className="w-fit px-3 py-1 rounded-3xl bg-orange-200 text-orange-500">
            #{book.category}
          </p>
          <Link
            to={`/books/${book.bookId}`}
            className="w-fit px-3 py-1 rounded-3xl bg-green-400 text-gray-100 hover:bg-base-200 hover:text-black font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBooks;
