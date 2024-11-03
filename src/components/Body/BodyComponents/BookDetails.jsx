import React from "react";

import BannerImage from "./assets/banner-image.svg";

const BookDetails = () => {
  return (
    <div className="hero min-h-fit">
      <div className="hero-content flex-col lg:flex-row lg:space-x-8">
        <div className="card w-full bg-base-200 max-w-sm">
          <img src={BannerImage} alt="book" />
        </div>
        <div className="space-y-3">
          <div className="border-b border-gray-400 space-y-3 pb-3">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              The Catcher in the Rye
            </h1>
            <p className="font-sans">By : Awlad Hossain</p>
          </div>
          <div className="font-sans border-b border-gray-400 pb-3">Fiction</div>
          <p className="font-sans">
            <strong>Review :</strong> Sit amet consectetur. Interdum porta
            pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim
            elementum penatibus pellentesque ac. Nec accumsan euismod nulla
            adipiscing lectus. Morbi elementum a auctor erat diam tellus.
            Fermentum faucibus nulla enim ornare. Id neque neque pretium enim
            platea urna non dictum. Faucibus dignissim ridiculus nibh tristique
            massa non.
          </p>
          <div className="font-sans flex items-center space-x-3 pb-3 border-b border-gray-400">
            <strong>Tag</strong>
            <p className="px-3 py-1 rounded-3xl bg-green-100 text-green-500">
              #Young Adult
            </p>
            <p className="px-3 py-1 rounded-3xl bg-green-100 text-green-500">
              #Identity
            </p>
          </div>
          <div className="font-sans grid grid-cols-2">
            <p>Number of Pages:</p>
            <strong>281</strong>
            <p>Publisher:</p>
            <strong>J.B Lippincott & Co.</strong>
            <p>Year of Publishing:</p>
            <strong>1960</strong>
            <p>Rating:</p>
            <strong>4.8</strong>
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
