import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Clara </h3>
                        </div>
                    </div>
                    <p>We had a family photo shoot and we are very satisfied, my wife is impressed. The pictures were ready after 2 days, appreciate!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Patrick </h3>
                        </div>
                    </div>
                    <p>The photos Alex delivered were beyond our expectations. Natural, emotional, and beautifully composed—we were blown away.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Ivan </h3>
                        </div>
                    </div>
                    <p>Thank you for creating our wedding memories - We are delighted!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Lewy </h3>
                        </div>
                    </div>
                    <p>I absolutely love them bro!! I can't put into words how happy I am with all of them. You are an outstanding man Alex!! Thank you so much 
Again thanks for making such a special moment an amazing memory for us.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
