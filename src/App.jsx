import React from 'react'
import EyeSection from './components/EyeSection'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import DataSection from './components/DataSection'


const App = () => {
  return (
    <div className='relative min-w-300 bg-black w-[100vw] overflow-hidden'>
      <div
        className="absolute inset-0 opacity-20 z-50 pointer-events-none"
        style={{
          backgroundImage: "url('/images/Stars.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
        }}
      />      
      <HeroSection/>
      <DataSection/>
      <EyeSection/>
    </div>
  )
}

export default App