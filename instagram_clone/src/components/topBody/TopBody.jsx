import React from "react";
import "./topBody.css";
import Mlogo from "../../assets/m_logo.png";
import Information from "./Information.jsx";
import Numbers from "./Numbers.jsx";
import Intro from "./Intro.jsx";

function Header() {
    return (
        <section className="top-body">
            <img src={Mlogo} className="body-profile-pic" alt="user profile image" />
            <div className="information">
                <Information />
                <Numbers />
                <Intro />
            </div>
        </section>
    );
}

export default Header;
