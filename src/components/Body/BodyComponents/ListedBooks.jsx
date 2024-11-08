import React, { useContext, useEffect, useState } from "react";

import ChevronUpIcon from "./assets/chevron-up-icon.svg";
import ChevronDownIcon from "./assets/chevron-down-icon.svg";
import ReadBooks from "./ReadBooks";
import { BookVibeContext } from "../../../Context/BookVibeContext";
import { sortReadBooks } from "./sortReadBooks";
import { sortWishList } from "./sortWishList";

const ListedBooks = () => {
  const { books, wishlist, setWishlist } = useContext(BookVibeContext);
  const [clicked, setClicked] = useState(false);
  const [tab, setTab] = useState(true);
  const [listedBooks, setListedBooks] = useState(books);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  return (
    <div>
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center font-sans font-bold">
        Books
      </div>
      <div className="flex justify-center mt-4">
        <details className="dropdown font-sans">
          <summary
            className="btn bg-green-500 text-white font-bold"
            onClick={() => setClicked((c) => !c)}
          >
            <span>Sort by</span>
            <img
              src={clicked ? ChevronUpIcon : ChevronDownIcon}
              alt="checvron-icon"
            />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <button
                onClick={() =>
                  tab
                    ? sortReadBooks(listedBooks, setListedBooks, "rating")
                    : sortWishList(wishlist, setWishlist, "rating")
                }
              >
                Rating
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  tab
                    ? sortReadBooks(
                        listedBooks,
                        setListedBooks,
                        "number-of-pages"
                      )
                    : sortWishList(wishlist, setWishlist, "number-of-pages")
                }
              >
                Number of pages
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  tab
                    ? sortReadBooks(
                        listedBooks,
                        setListedBooks,
                        "publisher-year"
                      )
                    : sortWishList(wishlist, setWishlist, "publisher-year")
                }
              >
                Publisher year
              </button>
            </li>
          </ul>
        </details>
      </div>
      {/* Read Books start */}
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-sans border-b-0"
          aria-label="Read Books"
          defaultChecked
          onChange={() => setTab(() => true)}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 p-6 border-b-0 border-l-0 border-r-0 space-y-3"
        >
          {listedBooks.map((book) => (
            <ReadBooks key={book.bookId} book={book} />
          ))}
        </div>
        {/* Read Books end */}
        {/* Wishlist Books start */}

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-sans"
          aria-label="Wishlist Books"
          onChange={() => setTab(() => false)}
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 p-6 border-b-0 border-l-0 border-r-0 space-y-3"
        >
          {wishlist.length ? (
            wishlist.map((book) => <ReadBooks book={book} key={book.bookId} />)
          ) : (
            <h1>No books added</h1>
          )}
        </div>
        {/* Wishlist Books end */}
      </div>
    </div>
  );
};

export default ListedBooks;
