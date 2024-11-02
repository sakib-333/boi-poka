import React from "react";
import Navbar from "./HeaderComponents/Navbar";
import Banner from "./HeaderComponents/Banner";

const Header = () => {
  return (
    <div className="px-2">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Header;
