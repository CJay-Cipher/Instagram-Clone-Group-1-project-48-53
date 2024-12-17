import React from 'react'
import './Body.css'
import Mlogo from "../../assets/m_logo.png";
import Information from "./Information.jsx";
import Numbers from "./Numbers.jsx";
import Intro from "./Intro.jsx";
import Circle from "./Circle.jsx";

function Body() {
  return (
<>
<div className='body'>
    <div className="black">
            <img src={Mlogo} alt="" />
            <div className="information">
                <Information />
                <Numbers />
                <Intro />
            </div>
        </div>
        <div>
            <Circle />
        </div>
</div>
    

</>
  )
}

export default Body
