import { useState } from "react";

const Search = ({handleSearch}) => {

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input onChange={handleSearch} type="text" id="name" />
    </div>
  );
};

export default Search;
