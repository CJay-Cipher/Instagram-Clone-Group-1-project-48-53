import React from "react";
import "./Header.css";
import InstagramLogo from "../../assets/instagram_logo.png";
import SearchButton from "./SearchButton.jsx";
import Icons from "./Icons.jsx";
import Mlogo from "../../assets/m_logo.png";
import Information from "./Information.jsx";
import Numbers from "./Numbers.jsx";
import Intro from "./Intro.jsx";
import Circle from "./Circle.jsx";

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

        <section className="black">
          <img src={Mlogo} alt="" />
          <div className="information">
            <Information />
            <Numbers />
            <Intro />
          </div>
        </section>
        <Circle />
      </header>
    </>
  );
}

export default Header;
