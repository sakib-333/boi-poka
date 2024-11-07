import React from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { BookVibeContext } from "../../Context/BookVibeContext";
import { useLoaderData } from "react-router-dom";

const Root = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <BookVibeContext.Provider value={{}}>
      <Header />
      <Body />
      <Footer />
    </BookVibeContext.Provider>
  );
};

export default Root;
