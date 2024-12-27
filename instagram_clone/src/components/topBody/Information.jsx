import React from "react";
import Mlogo from "../../assets/m_logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

function Information() {
    return (
        <div className="info">
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
