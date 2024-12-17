import React from 'react'
import { FaChessBoard } from "react-icons/fa6";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";

function Buttons() {
  return (
    <div className='buttons'>
      <button><FaChessBoard/> <span>PUBLICATIONS</span></button>
      <button><BiSolidMoviePlay/> <span>REELS</span></button>
      <button><IoMdContact/> <span>MARKS</span></button>
    </div>
  )
}

export default Buttons
