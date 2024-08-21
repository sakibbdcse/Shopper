import React from 'react';
import hand_icon from '../../assets/hand_icon.png';
import arow_icon from '../../assets/arrow.png';
import hero_image from '../../assets/hero_image.png'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEEW ARRIVAILS ONLY</h2>
        <div className="hand-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="jand icon" />
        </div>
        <p>Collections</p>
        <p>for evryone</p>
        <div className="hero-latest-btn">
          <div>latest connections</div>
          <img src={arow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero