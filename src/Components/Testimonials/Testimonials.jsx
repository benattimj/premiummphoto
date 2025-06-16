import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const reviews = [
    { name: 'Clara', text: 'WooooW, thats all I can say the pictures are perfect and more than expected I recommend to everyone.' },
    { name: 'Patrick ', text: 'We had a family photo shoot and we are very satisfied, my wife is impressed. The pictures were ready after 2 days. Thank you.' },
    { name: 'Ivan ', text: 'Thank you for creating our wedding memories - We are delighted!' },
    { name: 'Lewy', text: 'I absolutely love them bro!! I cant put into words how happy I am with all of them. You are an outstanding man Alex!! Thank you so much Again thanks for making such a special moment an amazing memory for us.' },
     ];

  const slideForward = () => {
    if (slideIndex < reviews.length - 1) setSlideIndex(prev => prev + 1);
  };

  const slideBackward = () => {
    if (slideIndex > 0) setSlideIndex(prev => prev - 1);
  };

  return (
    <div className='testimonials'>
      <button className='back-btn' onClick={slideBackward}>
        <img src={back_icon} alt="Back" />
      </button>

      <div className="slider">
        <ul style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <h3>{review.name}</h3>
                </div>
                <p>{review.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <button className='next-btn' onClick={slideForward}>
        <img src={next_icon} alt="Next" />
      </button>
    </div>
  );
};

export default Testimonials;