import { useEffect, useRef } from "react";
import gsap from "gsap";

const Eye = ({side, emotion="normal"}) => {
  const eyeRef = useRef(null);
  const irisRef = useRef(null);
  const pupilRef = useRef(null);
  const eyelidRef = useRef(null);

  const states = {
    happy:{
      irisGradient:
      "radial-gradient(circle,#15803d 20%,#4ade80 50%,#15803d 80%,#14532d 90%)",
      pupilSize: 56,
      eyelidOffset: -100,
      eyelidFollow: 0,
      eyelidRotate: 0,
    },
    normal: {
      irisGradient:
        "radial-gradient(circle, #005E5E 20%, #02cece 50%, #005E5E 80%, #004343 90%)",
      pupilSize: 48,
      eyelidOffset: -70,
      eyelidFollow: 0,
      eyelidRotate: 0,
    },

    suspicious: {
      irisGradient:
        "radial-gradient(circle, #7A6500 20%, #FFD700 50%, #B8860B 80%, #7A6500 90%)",
      pupilSize: 36,
      eyelidOffset: -30,
      eyelidFollow: 1,
      eyelidRotate: 0,
    },

    angry: {
      irisGradient:
        "radial-gradient(circle, #5C0000 20%, #FF3B3B 50%, #8B0000 80%, #5C0000 90%)",
      pupilSize: 24,
      eyelidOffset: -30,
      eyelidFollow: 1,
      eyelidRotate: side === "left" ? -15 : 15,
    },
  };

  const config = states[emotion];

  useEffect(() => {
    const iris = irisRef.current;
    const pupil = pupilRef.current;

    iris.style.background = config.irisGradient;

    gsap.set(pupil, {
      width: config.pupilSize,
      height: config.pupilSize,
    });

  }, [config]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eye = eyeRef.current;
      const iris = irisRef.current;
      const pupil = pupilRef.current;
      const eyelid = eyelidRef.current;

      const rect = eye.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const proximityRadius = 1200;
      const irisLimit = 40;
      const pupilLimit = 20;

      if (distance < proximityRadius) {
        const angle = Math.atan2(dy, dx);
        const strength = Math.min(distance / proximityRadius, 1);

        const irisx = Math.cos(angle) * irisLimit * strength;
        const irisy = Math.sin(angle) * irisLimit * strength;

        const pupilx = Math.cos(angle) * pupilLimit * strength;
        const pupily = Math.sin(angle) * pupilLimit * strength;

        const eyelidY =
          config.eyelidOffset +
          irisy * config.eyelidFollow;

        gsap.to(eyelid, {
          y: eyelidY,
          rotate: config.eyelidRotate,
          duration: 0.35,
          ease: "power3.out",
        });

        gsap.to(iris, {
          x: irisx,
          y: irisy,
          duration: 0.35,
          ease: "power3.out",
        });

        gsap.to(pupil, {
          x: pupilx,
          y: pupily,
          duration: 0.35,
          ease: "power3.out",
        });

        gsap.to(eye, {
          scale: 1.05,
          duration: 0.4,
        });
      } else {
        gsap.to(iris, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1,0.4)",
        });

        gsap.to(pupil, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1,0.4)",
        });

        gsap.to(eyelid, {
          y: config.eyelidOffset,
          duration: 0.5,
        });

        gsap.to(eye, {
          scale: 1,
          duration: 0.5,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [config]);

  return (
    <div>
      <div
        ref={eyeRef}
        className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-black"
        style={{
          background:
            "radial-gradient(circle, #FFFFFF 50%, #111111 85%)",
        }}
      >
        {/* Eyelid */}
        <div
          ref={eyelidRef}
          className="absolute -left-4  top-0 bg-black z-30"
          style={{
            width: "calc(110% + 24px)",
            height: "100px",

          }}
        />
        {/* Iris */}
        <div
          ref={irisRef}
          className="absolute left-1/2 top-1/2 z-20 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center overflow-hidden"
          style={{
            border: "4px solid black",
          }}
        >
          <div
            ref={pupilRef}
            className="bg-black rounded-full"
          />

          <div className="absolute top-7 right-3 w-4 h-4 bg-white rounded-full opacity-90 blur-[2px]" />
        </div>

        <div className="absolute top-0 left-0 w-full h-8 bg-black/10 blur-md" />
      </div>
    </div>
  );
};

export default Eye;