import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      // ------Enter your web3forms access key below-------
      
      formData.append("access_key", "-----Enter your web3forms key----");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Find me on<img src={msg_icon} alt="" /></h3>
          <ul>
  <li>
    <img src={mail_icon} alt="" />
    premiummphotography@gmail.com
  </li>

  {/* 👇 Envolver corretamente dentro do <li> */}
  
  <li>
    <img src={location_icon} alt="" />
    London<br /> United Kingdom
  </li>

   <li>
    <img src={location_icon} alt="" />
    Dubrovnik<br /> Croatia
  </li>

</ul>

        <div className="social-icons">
          <a href="https://www.instagram.com/premiummphotography?igsh=MXIxdGR4Yzl3MDdlYw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/people/Premiummphotography/61563590695825/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>  <a
      href="https://api.whatsapp.com/send?phone=447931588770&text=Hel%C3%A1%21"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
            <FaWhatsapp />
          </a>
        </div>
      </div>
  
    </div>
  )
}

export default Contact
