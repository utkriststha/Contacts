import React from "react";
import "./search_sort.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

function SearchSort({
  search,
  handleSearch,
  searchBy,
  handleSearchBy,
  sortBy,
  handleSortBy,
}) {
  return (
    <div className="searchSort">
      <div>
        <form
          className="searchBar"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="searchInput"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          {search && (
            <div
              className="closeBtn"
              onClick={() => {
                handleSearch("");
              }}
            >
              <IoIosCloseCircleOutline />
            </div>
          )}
          <select
            name="searchBy"
            id="searchBy"
            className="selectMenu"
            value={searchBy}
            onChange={(e) => handleSearchBy(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="name">Full Name</option>
            <option value="uname">Username</option>
            <option value="email">Email ID</option>
            <option value="phone">Phone No</option>
            <option value="website">Website</option>
            <option value="address">Address</option>
            <option value="zip">ZIP</option>
            <option value="company">Company</option>
          </select>
        </form>
      </div>
      <div>
        <form className="sortBy">
          <label>Sort By:</label>
          <select
            name="sort"
            id="sort"
            className="selectMenu"
            value={sortBy}
            onChange={(e) => handleSortBy(e.target.value)}
          >
            <option value="a-z">A-Z (Name)</option>
            <option value="z-a">Z-A (Name)</option>
            <option value="firstAdded">First Added</option>
            <option value="lastAdded">Last Added</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default SearchSort;
