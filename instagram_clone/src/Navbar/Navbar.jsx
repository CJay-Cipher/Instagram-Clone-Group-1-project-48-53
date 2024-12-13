import React from "react";
import mainLogo from "../assets/instagram_logo.png";
import SearchBar from "./SearchBar";
import NavIcon from "./NavIcon";
import { GoHomeFill } from "react-icons/go";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo-box">
                    <img src={mainLogo} alt="Main Logo" />
                </div>
                <SearchBar />
                <div className="nav-links">
                    <NavIcon Icon={GoHomeFill} IconTitle="Home" />
                    <NavIcon Icon={BiMessageRoundedDetail} IconTitle="About" />
                    <NavIcon Icon={BsPlusSquare} IconTitle="Contact" />
                    <NavIcon Icon={GoHomeFill} IconTitle="Service" />
                    <NavIcon Icon={FaHeart} IconTitle="Favourite" />
                    <NavIcon Icon={BiMessageRoundedDetail} IconTitle="Home" />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
