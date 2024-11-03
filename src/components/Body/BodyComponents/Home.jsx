import React from "react";
import Books from "./Books";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="mt-8">
      <Banner />
      <h1 className="font-bold text-center text-3xl md:text-[35px] lg:text-[40px] mt-8">
        Books
      </h1>
      <Books />
    </div>
  );
};

export default Home;
