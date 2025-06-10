import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpeg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} /> */}
      </div>
      <div className="about-right">
        <h3>About Alex</h3>
          <p>My name is Alex  and I'm a freelance photographer specialising in portraits, weddings and lifestyle photography. 
I was interested in photography from a young age and I have been involved in photography for several years where I worked on different events during those years. 
I was born in Dubrovnik and I am now based in London and I'm available to hire for commercial projects worldwide.</p>
        <p>My approach is centered around creating a deeply personalized experience so that you can fully immerse yourself in your wedding without ever worrying about the photography..</p>
      </div>
    </div>
  )
}

export default About
