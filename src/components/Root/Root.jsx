import React, { useState } from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { BookVibeContext } from "../../Context/BookVibeContext";
import { useLoaderData } from "react-router-dom";

const Root = () => {
  const books = useLoaderData();
  const [wishlist, setWishlist] = useState([]);

  return (
    <BookVibeContext.Provider value={{ books, wishlist, setWishlist }}>
      <Header />
      <Body />
      <Footer />
    </BookVibeContext.Provider>
  );
};

export default Root;
