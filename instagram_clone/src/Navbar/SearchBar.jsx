import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
    return (
        <div className="nav-search-bar">
            <LuSearch size="20px" color="#777" />
            <input type="text" placeholder="Search" />
        </div>
    );
};

export default SearchBar;
