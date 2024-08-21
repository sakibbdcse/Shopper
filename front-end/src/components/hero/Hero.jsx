import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEEW ARRIVAILS ONLY</h2>
      </div>
      <div className="hand-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="jand icon" />
      </div>
      <p>Collections</p>
      <p>for evryone</p>
      <div className="hero-latest-btn">
        <div>latest connections</div>
      </div>
    </div>
  )
}

export default Hero