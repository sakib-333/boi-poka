import React from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import { BookVibeContext } from "../../Context/BookVibeContext";

const Root = () => {
  return (
    <BookVibeContext.Provider value={{}}>
      <Header />
      <Body />
      <Footer />
    </BookVibeContext.Provider>
  );
};

export default Root;
