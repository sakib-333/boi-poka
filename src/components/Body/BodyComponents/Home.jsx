import React from "react";
import Books from "./Books";

const Home = () => {
  return (
    <div className="mt-8">
      <h1 className="font-bold text-center text-3xl md:text-[35px] lg:text-[40px]">
        Books
      </h1>
      <Books />
    </div>
  );
};

export default Home;
