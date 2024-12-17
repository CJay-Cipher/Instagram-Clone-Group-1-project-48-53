import React from 'react'
import Mlogo from '../../assets/m_logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

function Information() {
  return (
    <div className='info'>
        <p>mediamodifier</p>
        <div className='message'>send a message</div>
        <div className='contact-icon'>
            <BsPersonCheckFill className='icon'/>
        </div>
        <div className="dropdown">
            <IoIosArrowDown className='icon'/>
        </div>
        <div className="dots">
            <BsThreeDots className='icon'/>
        </div>
    </div>
  )
}

export default Information
