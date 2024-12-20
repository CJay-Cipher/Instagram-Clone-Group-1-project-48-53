import React from 'react'
import Pic1 from '../../assets/pic1.png'
import Pic2 from '../../assets/pic2.png'
import Pic3 from '../../assets/pic3.png'

function Pictures() {
  return (
    <div className='pic'>
      <div>
        <img src={Pic1} alt="" />
      </div>
      <div>
        <img src={Pic2} alt="" />
      </div>
      <div>
        <img src={Pic3} alt="" />
      </div>
      <div>
        <img src={Pic3} alt="" />
      </div>
      <div>
        <img src={Pic1} alt="" />
      </div>
      <div>
        <img src={Pic2} alt="" />
      </div>
      <div>
        <img src={Pic2} alt="" />
      </div>
      <div>
        <img src={Pic1} alt="" />
      </div>
    </div>
  )
}

export default Pictures
