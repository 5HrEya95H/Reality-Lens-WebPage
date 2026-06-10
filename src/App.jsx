import React from 'react'
import EyeSection from './components/EyeSection'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import DataSection from './components/DataSection'
import HowToSection from './components/HowToSection'
import LenisProvider from './components/LenisProvider'

const App = () => {
  return (
    <div className='relative bg-black w-screen overflow-hidden'>
      <LenisProvider/>
      <div
        className="absolute inset-0 opacity-20 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/Stars.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />      
      <HeroSection/>
      <DataSection/>
      <EyeSection/>
      <HowToSection/>
      <FeaturesSection/>
    </div>
  )
}

export default App