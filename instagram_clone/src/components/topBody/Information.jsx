import React from "react";
import Mlogo from "../../assets/m_logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { HiChevronLeft } from "react-icons/hi2";

function Information() {
    return (
        <div className="info">
            <HiChevronLeft className="mobile-left-icon" />
            <h2>mediamodifier</h2>
            <button className="message">send a message</button>
            <button className="contact-icon">
                <BsPersonCheckFill className="icon" />
            </button>
            <button className="dropdown">
                <IoIosArrowDown className="icon" />
            </button>
            <button className="dots">
                <BsThreeDots className="icon" />
            </button>
        </div>
    );
}

export default Information;
