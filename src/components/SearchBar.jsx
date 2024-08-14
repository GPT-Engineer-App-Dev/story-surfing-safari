import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search stories..."
      className="p-2 border rounded mb-4 w-full"
    />
  );
};

export default SearchBar;