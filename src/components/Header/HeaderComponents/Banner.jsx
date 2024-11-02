import React from "react";

import BannerBook from "./assets/banner-book.svg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerBook} className="max-w-sm rounded-lg" />
        <div className="max-w-[525px] space-y-7 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl lg:leading-extra-tight font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="px-7 py-5 hover:bg-green-600 bg-green-500 text-white font-bold font-sans rounded-lg">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
