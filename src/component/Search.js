import React from "react";

const Search = ({ showData, setInput }) => {
  const searchData = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input type="text" onChange={searchData} />
      <button onClick={showData}>Search</button>
    </div>
  );
};

export default Search;
