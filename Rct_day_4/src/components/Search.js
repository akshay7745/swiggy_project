import React, { useState } from "react";
import "../index.css";
import { handleSearch } from "../utils/helper";
const Search = ({ restaurantsData, handleClick }) => {
  const [text, setText] = useState("");
  return (
    <div className="text-center">
      <input
        value={text}
        className="border-2 border-blue-400 rounded-md outline-none p-1"
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Search Restaurants"
      />
      <button
        className="bg-red-400 rounded-md p-1"
        onClick={() => handleSearch(restaurantsData, text, handleClick)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
