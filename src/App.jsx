import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButon'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
        <Title subTitle='My Services' title='What I Offer'/>
        <Programs/>
      
        <Title title='Photos'/>
        <Campus/>
          <About setPlayState={setPlayState}/>
          
        <Title title=' Reviews'/>
        <Testimonials/>
        <Title title='Contact'/>
        <Contact/>
        <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <WhatsAppButton /> {/* Aqui está o botão */}
    </div>
  )
}

export default App