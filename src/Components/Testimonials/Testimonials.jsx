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
                            <h3>Murilo </h3>
                        </div>
                    </div>
                    <p>Alex has an incredible eye for detail—every photo felt like a piece of art. He captured moments we didn’t even know we’d want to remember!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Maria </h3>
                        </div>
                    </div>
                    <p>The photos Alex delivered were beyond our expectations. Natural, emotional, and beautifully composed—we were blown away.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Ana</h3>
                        </div>
                    </div>
                    <p>Working with Alex was effortless, and the results were stunning. He doesn’t just take photos—he tells stories through his lens.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Gessy </h3>
                        </div>
                    </div>
                    <p>Alex’s photos truly speak for themselves—every shot was vibrant, authentic, and full of life. He captured the essence of the day perfectly.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Ana</h3>
                        </div>
                    </div>
                    <p>Working with Alex was effortless, and the results were stunning. He doesn’t just take photos—he tells stories through his lens.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Ana</h3>
                        </div>
                    </div>
                    <p>Working with Alex was effortless, and the results were stunning. He doesn’t just take photos—he tells stories through his lens.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Ana</h3>
                        </div>
                    </div>
                    <p>Working with Alex was effortless, and the results were stunning. He doesn’t just take photos—he tells stories through his lens.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Ana</h3>
                        </div>
                    </div>
                    <p>Working with Alex was effortless, and the results were stunning. He doesn’t just take photos—he tells stories through his lens.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
