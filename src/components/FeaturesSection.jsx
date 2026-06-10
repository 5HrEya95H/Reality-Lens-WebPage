import React from 'react'
import MagicBento from './MagicBento'



const CardsSection = () => {
  return (
    <div className='bg-transparent  w-screen flex flex-col mt-12 gap-12 justify-center items-center text-white'>
        <h2 className='text-2xl md:text-4xl lg:text-6xl font-heading'>Why Reality Lens?</h2>
        <MagicBento 
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={32}
          glowColor="0, 255, 255"
          disableAnimations={false}
        />
    </div>
  )
}

export default CardsSection
