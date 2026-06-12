import gsap from 'gsap';
import React, { useEffect } from 'react'

const LoadingScreen = ({isImageLoaded}) => {
    useEffect(() => {
        if (isImageLoaded) {
           gsap.to("#loading-screen", {
            width: 0,
            duration: 1,
            ease: "power1.inOut",
            onComplete: () => {
              const loadingScreen = document.getElementById("loading-screen");
              if (loadingScreen) {
                loadingScreen.style.display = "none";
              }
            },
          });

        }
    }, [isImageLoaded]);

  return (
    <div className='fixed top-0 left-0 w-[100vw] h-screen bg-black z-1' id='loading-screen'>
      
    </div>
  )
}

export default LoadingScreen
