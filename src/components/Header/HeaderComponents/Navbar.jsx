import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 font-sans p-0 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/listed-books"}>Listed Books</NavLink>
            </li>
            <li>
              <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
            </li>
            <li>
              <NavLink to={"/sign-in"}>Sign In</NavLink>
            </li>
            <li>
              <NavLink to={"/sign-up"}>Sign Up</NavLink>
            </li>
          </ul>
        </div>
        <h1 className="font-bold md:text-xl lg:text-[28px]">Book Vibe</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/listed-books"}>Listed Books</NavLink>
          </li>
          <li>
            <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden md:flex md:space-x-4">
        <NavLink
          to={"/sign-in"}
          className="text-sm px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Sign In
        </NavLink>
        <NavLink
          to={"/sign-up"}
          className="text-sm px-4 py-2 bg-cyan-400 text-white rounded-lg"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
