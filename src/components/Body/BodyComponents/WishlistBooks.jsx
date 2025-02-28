import React from "react";
import BannerImage from "./assets/banner-image.svg";
import LocationIcon from "./assets/location-icon.svg";

const WishlistBooks = ({book}) => {
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
          <p className="px-3 py-1 rounded-3xl bg-green-100 text-green-500">
            #Young Adult
          </p>
          <p className="px-3 py-1 rounded-3xl bg-green-100 text-green-500">
            #Identity
          </p>
          <p className="flex items-center space-x-1">
            <img
              className="w-[12px] h-[12px]"
              src={LocationIcon}
              alt="location-icon"
            />
            <span>Year of Publishing: 1924</span>
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs font-sans">
          <button className="w-fit px-3 py-1 rounded-3xl bg-green-400 text-gray-100 hover:bg-base-200 hover:text-black font-bold">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistBooks;
