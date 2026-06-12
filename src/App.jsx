import React, { useState } from 'react'
import EyeSection from './components/EyeSection'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import DataSection from './components/DataSection'
import HowToSection from './components/HowToSection'
import LenisProvider from './components/LenisProvider'
import Footer from './components/Footer'
import CTASection from './components/CTASection'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className='relative bg-black w-screen overflow-hidden'>
      <LenisProvider/>
      <div
        className="absolute inset-0 opacity-20 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/Stars.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
          zIndex: 2,
        }}
      />      
      <LoadingScreen isImageLoaded={isImageLoaded} />
      <HeroSection isImageLoaded={isImageLoaded} setIsImageLoaded={setIsImageLoaded}/>
      <DataSection/>
      <EyeSection/>
      <HowToSection/>
      <FeaturesSection/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default App