import React from "react";

import BannerImage from "./assets/banner-image.svg";
import Star from "./assets/star.svg";
import { Link } from "react-router-dom";

const Book = () => {
  const id = 5;
  return (
    <Link to={`/books/id=${id}`}>
      <div className="mx-auto max-w-[375px] w-full border p-4 space-y-3 rounded-xl">
        <div className="bg-base-200 h-[230px] rounded-lg">
          <img
            className="w-full h-full p-4 box-border"
            src={BannerImage}
            alt="book"
          />
        </div>
        <div className="flex font-sans font-bold space-x-2">
          <p className="px-3 py-1 rounded-3xl bg-green-100 text-green-500">
            Young Adult
          </p>
          <p className="px-3 py-1 rounded-3xl bg-green-100 text-green-500">
            Identity
          </p>
        </div>
        <div>
          <h1 className="font-bold md:text-xl lg:text-2xl">
            The Catcher in the Rye
          </h1>
          <p className="text-sm lg:text-base font-sans">By : Awlad Hossain</p>
        </div>
        <div className="border-b-2 border-dashed"></div>
        <div className="flex items-center justify-between">
          <p>Fiction</p>
          <p className="flex items-center font-sans space-x-1">
            <span>5.00</span> <img src={Star} alt="star" />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
