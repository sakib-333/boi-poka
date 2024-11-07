import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { BookVibeContext } from "../../../Context/BookVibeContext";

const BookDetails = () => {
  const { books } = useContext(BookVibeContext);
  const { bookID } = useParams();
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = books.find((book) => book.bookId === Number(bookID));
  return (
    <div className="hero min-h-fit">
      <div className="hero-content flex-col lg:flex-row lg:space-x-8">
        <div className="card w-full bg-base-200 max-w-sm">
          <img src={image} alt="book" />
        </div>
        <div className="space-y-3">
          <div className="border-b border-gray-400 space-y-3 pb-3">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              {bookName}
            </h1>
            <p className="font-sans">By : {author}</p>
          </div>
          <div className="font-sans border-b border-gray-400 pb-3">
            {category}
          </div>
          <p className="font-sans">
            <strong>Review :</strong> {review}
          </p>
          <div className="font-sans flex items-center space-x-3 pb-3 border-b border-gray-400">
            <strong>Tag</strong>
            {tags.map((tag, indx) => (
              <p
                key={`book_details_tag_id_${indx}`}
                className="px-3 py-1 rounded-3xl bg-green-100 text-green-500"
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="font-sans grid grid-cols-2">
            <p>Number of Pages:</p>
            <strong>{totalPages}</strong>
            <p>Publisher:</p>
            <strong>{publisher}</strong>
            <p>Year of Publishing:</p>
            <strong>{yearOfPublishing}</strong>
            <p>Rating:</p>
            <strong>{rating}</strong>
          </div>
          <div className="flex items-center font-sans space-x-3">
            <button className="font-bold px-4 py-2 rounded-lg border border-gray-400 hover:bg-black hover:text-white">
              Read
            </button>
            <button className="font-bold px-4 py-2 rounded-lg bg-cyan-400 text-white hover:opacity-50">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
