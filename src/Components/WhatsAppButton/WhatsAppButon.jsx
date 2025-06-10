import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from '../../assets/whatsapp.png';

const WhatsAppButton = () => {
  const phoneNumber = '447931588770'; // no "+" or spaces
  const message = "Hello! I'm interested in a photography quote. I found your website https://premiummphoto.vercel.app/ and would like more information!";

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <img src={whatsappIcon} alt="WhatsApp" />
    </div>
  );
};

export default WhatsAppButton;