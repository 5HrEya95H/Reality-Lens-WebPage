import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import Eye from "./Eye";
import Posts from "./Posts";
import gsap from "gsap";


const EyeSection = () => {
    const [emotion, setEmotion] = useState("normal");
  const orbitRef = useRef(null);
  const containerRef = useRef(null);

    const hoverTimeout = useRef(); 
    
  const images = [
    "./images/Posts/fake/1.jpg",
    "./images/Posts/sus/1.jpg",
    "./images/Posts/fake/2.jpg",
    "./images/Posts/true/1.jpg",
    "./images/Posts/sus/2.jpg",
    "./images/Posts/sus/3.jpg",
    "./images/Posts/fake/3.jpg",
    "./images/Posts/true/2.jpg",
  ];


 const [radius, setRadius] = useState(0);

    useEffect(() => {
    const updateRadius = () => {
        setRadius(Math.min(window.innerWidth * 0.42, 500));
    };

    updateRadius(); // initial

    window.addEventListener("resize", updateRadius);

    return () =>
        window.removeEventListener("resize", updateRadius);
    }, []);

  useLayoutEffect(() => {
        const ctx = gsap.context(() => {
        const posts = gsap.utils.toArray(".orbit-post");

        posts.forEach((post) => {
        const x = Number(post.dataset.x);
        const y = Number(post.dataset.y);

        gsap.from(post, {
            x: 2*x,
            y: 2*y,
            scale: 2,
            opacity: 0,
            rotation: 0,

            duration: 1,
            ease: "expo.out",
        });
        });

        gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 180,
        repeat: -1,
        ease: "none",
        });

        gsap.to(".orbit-post", {
        rotation: -360,
        duration: 180,
        repeat: -1,
        ease: "none",
        });
    }, containerRef);

    return () => ctx.revert();
    }, []);


  return (
    <section
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-black"
    >
      {/* Orbit Ring */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border-2
          border-cyan-800/60
        "
        style={{
            width: radius * 2,
            height: radius * 2,
        }}
      />

      {/* Orbiting Posts */}
     <div
        ref={orbitRef}
        className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-0
            h-0
        "
        >
        {images.map((image, i) => {
            const angle = (360 / images.length) * i;
            const rad = (angle * Math.PI) / 180;

            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            const getEmotion = () => {
                if (image.includes("/fake/")) return "angry";
                if (image.includes("/sus/")) return "suspicious";
                if (image.includes("/true/")) return "happy";
                return "normal";
            };

            return (
                <div
                key={i}
                className="orbit-post absolute hover:shadow-[0_0_32px_rgba(0,213,255,0.6)]
                transition-all
                duration-300"
                data-x={x}
                data-y={y}
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                }}
                    onMouseEnter={() => {
                        clearTimeout(hoverTimeout.current);
                        setEmotion(getEmotion());
                        }}
                    onMouseLeave={() => {
                        hoverTimeout.current = setTimeout(() => {
                            setEmotion("normal");
                        }, 150);
                    }}
                >
                <div className="post-content">
                    <Posts image={image} />
                </div>
                </div>
            );
            })}
</div>

      {/* Eye */}
      <div
        className="
          absolute
          left-1/2
          top-[40%]
          -translate-x-1/2
          -translate-y-1/2
          z-20
        "
      >
        <Eye side="left" emotion={emotion} />
      </div>
    </section>
  );
};

export default EyeSection;
