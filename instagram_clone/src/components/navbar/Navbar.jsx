import React from "react";
import "./navbar.css";
import mainLogo from "../../assets/nav_icons/instagram_logo.png";
import SearchBar from "./SearchBar";
import NavIcon from "./NavIcon";

// Navbar icons
import { GoHomeFill } from "react-icons/go";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CiSquarePlus } from "react-icons/ci";
import { IoCompassOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

import userImage from "../../assets/nav_icons/user_image_lg.png";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo-box">
                    <img src={mainLogo} alt="Main Logo" />
                </div>
                <SearchBar />
                <div className="nav-links">
                    <NavIcon Icon={GoHomeFill} />
                    <NavIcon Icon={LiaFacebookMessenger} />
                    <NavIcon Icon={CiSquarePlus} />
                    <NavIcon Icon={IoCompassOutline} />
                    <NavIcon Icon={IoMdHeartEmpty} />

                    <img src={userImage} id="user-image" alt="User Nav Image" />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
