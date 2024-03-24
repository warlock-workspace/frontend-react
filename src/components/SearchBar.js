import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/SearchBar.css";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the properties page with the search query as a parameter
    navigate(`/properties?search=${searchQuery}`);
  };

  return (
    <div className="container">
      <div className="search-bar">
        <form onSubmit={handleSubmit} className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" id="search-btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
