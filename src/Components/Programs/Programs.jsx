import React from 'react'
import './Programs.css'
import program_1 from '../../assets/gallery-4.png'
import program_2 from '../../assets/gallery-2.png'
import program_3 from '../../assets/gallery-3.png' // 🔧 Faltava essa linha
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Weddings</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Couples</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Solo</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
