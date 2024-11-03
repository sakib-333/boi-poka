import React, { useState } from "react";

import ChevronUpIcon from "./assets/chevron-up-icon.svg";
import ChevronDownIcon from "./assets/chevron-down-icon.svg";

const ListedBooks = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="card bg-base-300 rounded-box grid h-20 place-items-center font-sans font-bold">
        Books
      </div>
      <div className="flex justify-center">
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
              <button>Rating</button>
            </li>
            <li>
              <button>Number of pages</button>
            </li>
            <li>
              <button>Publisher year</button>
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
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 p-6 border-b-0 border-l-0 border-r-0"
        >
          Tab content 1
        </div>
        {/* Read Books end */}
        {/* Wishlist Books start */}

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab font-sans"
          aria-label="Wishlist Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 p-6 border-b-0 border-l-0 border-r-0"
        >
          Tab content 2
        </div>
        {/* Wishlist Books end */}
      </div>
    </div>
  );
};

export default ListedBooks;
