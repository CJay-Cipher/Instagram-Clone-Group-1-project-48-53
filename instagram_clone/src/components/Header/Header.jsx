import React from "react";
import "./Header.css";
import InstagramLogo from "../../assets/instagram_logo.png";
import SearchButton from "./SearchButton.jsx";
import Icons from "./Icons.jsx";


function Header() {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <img src={InstagramLogo} alt="" />
          </div>
          <SearchButton />
          <Icons />
        </nav>

        
      </header>
    </>
  );
}

export default Header;
