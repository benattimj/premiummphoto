import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import gallery_6 from '../../assets/gallery-6.png'
import gallery_7 from '../../assets/gallery-7.png'
import gallery_8 from '../../assets/gallery-8.png'

import gallery_20 from '../../assets/gallery-20.jpeg'

import gallery_21 from '../../assets/gallery-21.jpeg'

import gallery_22 from '../../assets/gallery-22.jpeg'
import gallery_23 from '../../assets/gallery-23.jpeg'

import gallery_24 from '../../assets/gallery-24.jpeg'

import gallery_25 from '../../assets/gallery-25.jpeg'

import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
        <img src={gallery_6} alt="" />
        <img src={gallery_7} alt="" />
        <img src={gallery_8} alt="" />
        
        <img src={gallery_20} alt="" />
        <img src={gallery_21} alt="" />
        <img src={gallery_22} alt="" />
        <img src={gallery_23} alt="" />
        <img src={gallery_24} alt="" />
        
        <img src={gallery_25} alt="" />


        
      </div>
      <button className='btn dark-btn'>See more here! <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
