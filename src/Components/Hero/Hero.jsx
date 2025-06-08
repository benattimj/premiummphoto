import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Capturing Your Story Through Timeless Photography</h1>
        <p>I photograph those heart-warming, beautiful and real moments, I freeze them in time and I tell your story, creating images that will last you a lifetime.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
