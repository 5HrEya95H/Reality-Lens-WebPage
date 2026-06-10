import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowToSection = () => {
    const sectionRef = useRef(null);

    useGSAP(()=>{
      
      gsap.set(
        "#title2,#title3,#title4,#title5,#keys img,#Loading,#Verdict,#Window2",
        {
          opacity: 0,
        }
      );

      gsap.set("#Loading,#Verdict", {
        yPercent: 20,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          pin: true,
        },
        defaults: {
          ease: "power2.inOut",
        },
      });

     tl.from("#title1", {
        opacity: 0,
        yPercent: 30,
        duration: 0.25,
      });

      tl.from(
        "#Xwindow",
        {
          opacity: 0,
          yPercent: 20,
          duration: 1,
        },
        "<0.8"
      );

      tl.from(
        "#CircleGrad,#TriGrad",
        {
          opacity: 0,
          duration: 1,
        },
        "<0.2"
      );

      tl.to("#title1", {
  opacity: 0,
  yPercent: -20,
  duration: 0.35,
});

tl.fromTo(
  "#title2",
  {
    opacity: 0,
    yPercent: 20,
  },
  {
    opacity: 1,
    yPercent: 0,
    duration: 0.45,
  },
  );

  tl.to(
    "#CircleGrad",
    {
      yPercent: -20,
      duration: 1,
    },
    "<"
  );

  tl.to(
    "#TriGrad",
    {
      yPercent: 20,
      duration: 1,
    },
    "<"
  );

  tl.to(
    "#keys img",
    {
      opacity: 1,
      yPercent: -30,
      stagger: 0.15,
      duration: 0.8,
    },
    "<"
  );
    tl.to("#keys img", {
    opacity: 0,
    yPercent: -60,
    stagger: 0.1,
  });

  tl.to(
    "#title2",
    {
      opacity: 0,
      yPercent: -20,
      duration: 0.35,
    },
    "<"
  );

  tl.fromTo(
    "#title3",
    {
      opacity: 0,
      yPercent: 20,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 0.45,
    },
  );

  tl.to(
    "#CircleGrad",
    {
      yPercent: -40,
    },
    "<"
  );

  tl.to(
    "#TriGrad",
    {
      yPercent: 40,
    },
    "<"
  );

  tl.to("#Window2", {
    opacity: 1,
    duration: 0.4,
  }, "<");
             
  tl.to("#title3", {
    opacity: 0,
    yPercent: -20,
    duration: 0.35,
  });

  tl.fromTo(
    "#title4",
    {
      opacity: 0,
      yPercent: 20,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: 0.45,
    },
  );

  tl.to(
    "#CircleGrad",
    {
      yPercent: -60,
    },
    "<"
  );

  tl.to(
    "#TriGrad",
    {
      yPercent: 60,
    },
    "<"
  );

  tl.to(
    "#Loading",
    {
      opacity: 1,
      yPercent: 0,
      duration: 1,
    },
    "<"
  );
  tl.to("#title4", {
  opacity: 0,
  yPercent: -20,
  duration: 0.35,
});

tl.fromTo(
  "#title5",
  {
    opacity: 0,
    yPercent: 20,
  },
  {
    opacity: 1,
    yPercent: 0,
    duration: 0.45,
  },
);

tl.to(
  "#CircleGrad",
  {
    yPercent: -80,
  },
  "<"
);

tl.to(
  "#TriGrad",
  {
    yPercent: 80,
  },
  "<"
);

tl.to(
  "#Loading",
  {
    opacity: 0,
    yPercent: -20,
  },
  "<"
);

tl.fromTo(
  "#Verdict",
  {
    opacity: 0,
    yPercent: 20,
  },
  {
    opacity: 1,
    yPercent: 0,
    duration: 1,
  },
  "<"
);



})
    

  return (
    <section ref={sectionRef} className='h-screen w-screen bg-transparent text-white flex flex-col justify-center items-center overflow-hidden'>
        <div className="relative h-24 mt-12 w-full flex justify-center items-center">
          <h1
            id="title1"
            className="absolute text-2xl md:text-4xl lg:text-6xl font-heading"
          >
            1. Got a Suspicious Post?
          </h1>

          <h1
            id="title2"
            className="absolute text-2xl md:text-4xl lg:text-6xl font-heading"
          >
            2. Press The HotKeys!!
          </h1>

          <h1
            id="title3"
            className="absolute text-2xl md:text-4xl lg:text-6xl font-heading"
          >
            3. Select The Post
          </h1>

          <h1
            id="title4"
            className="absolute text-2xl md:text-4xl lg:text-6xl font-heading"
          >
            4. Reality Lens get to work
          </h1>

          <h1
            id="title5"
            className="absolute text-2xl md:text-4xl lg:text-6xl font-heading"
          >
            5. Get Your Instant Verdict
          </h1>
        </div>
        
        <div id="Xwindow" className='relative sm:w-[90vw] md:w-[80vw] overflow-hidden'>
          <div id="Window1">
            <img className="block w-full" src="./images/HowToSection/Window.png"/>
          </div>
          <div id="Window2" className="absolute inset-0">
            <img className="block w-full" src="./images/HowToSection/Window2.png"/>
          </div>
          <img id="Loading" className='absolute h-[14vw] md:h-[9vw] lg:h-[8vw] bottom-[5%] right-[4%]' src="./images/HowToSection/Loading.png"/>
          <img id="Verdict" className='absolute w-[50vw] md:w-[36vw] lg:w-[30vw] bottom-[5%] right-[4%]' src="./images/HowToSection/Results.png"/>
        </div>

        <div id="keys" className='absolute flex flex-row w-screen items-center h-[14vw]  md:h-[10vw] lg:h-[8vw]   justify-center bottom-12'>
            <img className="h-full " src="./images/HowToSection/Key1.png"/>
            <img className="h-full " src="./images/HowToSection/Key2.png"/>
            <img className="h-full " src="./images/HowToSection/Key3.png"/>
        </div>
        
        <img id="CircleGrad" className='absolute left-0 w-[12vw] bottom-[-10%] opacity-30' src="./images/HowToSection/CircleGrad.png"/>
        <img id="TriGrad" className='absolute right-0 w-[16vw] top-[-10%] opacity-30' src="./images/HowToSection/TriGrad.png"/>
    </section>
  )
}

export default HowToSection
