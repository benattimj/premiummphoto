import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';


const Testimonials = () => {
  const slider = useRef();
  const [slideIndex, setSlideIndex] = useState(0);

  const reviews = [
    {
      name: 'Murilo',
      text: 'Alex has an incredible eye for detail—every photo felt like a piece of art.',
    },
    {
      name: 'Maria',
      text: 'The photos Alex delivered were beyond our expectations.',
    },
    {
      name: 'Ana',
      text: 'Working with Alex was effortless, and the results were stunning.',
    },
    {
      name: 'Gessy',
      text: 'Every shot was vibrant, authentic, and full of life.',
    },
    {
      name: 'Ana',
      text: 'He tells stories through his lens.',
    },
  ];

  const slideForward = () => {
    if (slideIndex < reviews.length - 1) {
      setSlideIndex(prev => prev + 1);
    }
  };

  const slideBackward = () => {
    if (slideIndex > 0) {
      setSlideIndex(prev => prev - 1);
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul
          ref={slider}
          style={{ transform: `translateX(-${slideIndex * 100}%)`, width: `${reviews.length * 100}%` }}
        >
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <div>
                    <h3>{review.name}</h3>
                  </div>
                </div>
                <p>{review.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;