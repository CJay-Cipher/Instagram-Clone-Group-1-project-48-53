import React from 'react'
import BlueCircle from '../../assets/blue-circle.png'
import PinkCircle from '../../assets/pink-circle.png'

function Circle() {
  return (
    <div className='container'>
      <div className="circle">
        <img src={PinkCircle} alt="" />
        <p>Temlates</p>
      </div>
      <div className="circle">
        <img src={BlueCircle} alt="" />
        <p>Reviews</p>
      </div>
      <div className="circle">
        <img src={PinkCircle} alt="" />
        <p>Mentions</p>
      </div>
      <div className="circle">
        <img src={BlueCircle} alt="" />
        <p>Tips</p>
      </div>
      <div className="circle">
        <img src={PinkCircle} alt="" />
        <p>Blog</p>
      </div>
    </div>
  )
}

export default Circle
