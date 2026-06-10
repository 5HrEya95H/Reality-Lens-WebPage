import React, { useEffect, useRef, useState } from "react";
import Eye from "./Eye";
import Posts from "./Posts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

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

        updateRadius();
        window.addEventListener("resize", updateRadius);

        return () => window.removeEventListener("resize", updateRadius);
    }, []);

    useEffect(() => {
        ScrollTrigger.refresh();
    }, [radius]);

    useGSAP(() =>{
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                },
            });

            tl.from("#bgEyeSection",{
                opacity:0,
                duration:1,
                ease: "power1.inOut"
            })

            tl.from("#posts", {
                opacity: 0,
                scale: 1.5,
                duration: 1.5,
                ease: "power1.out",
            },"-=0.5");

            tl.from(
                "#ring",
                {
                    opacity: 0,
                    scale: 1.5,
                    duration: 1.5,
                    ease: "power1.inOut"
                },
                "<"
            );
            // tl.from("#eye",{
            //     opacity:0,
            //     duration:1,
            //     y: 5,
            //     ease: "power1.inOut"
            // },"-=0.3");

            tl.add(() => {
                // const posts = gsap.utils.toArray(".orbit-post");

                // posts.forEach((post) => {
                //     const x = Number(post.dataset.x);
                //     const y = Number(post.dataset.y);

                //     gsap.from(post, {
                //         x: 2 * x,
                //         y: 2 * y,
                //         scale: 2,
                //         opacity: 0,
                //         duration: 1,
                //         ease: "power1.inOut",
                //     });
                // });

                // orbit rotation
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
            },"-=0.5");

            const headSplit = new SplitText("#headEyeSection",{type:"words"});
            const paraSplit = new SplitText("#paraEyeSection",{type:"lines"});

            const textTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#eyeText",
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
            });

            textTl.from(headSplit.words,{
                opacity:0,
                yPercent:20,
                duration:1,
                stagger: 0.1,
            });
            textTl.from(paraSplit.lines,{
                opacity:0,
                yPercent:20,
                duration:2,
                stagger:0.5,
            });
        });

    return (
    <div
        id="eyeSection"
        className="relative w-screen flex justify-center -mt-36 overflow-visible"
        style={{
            minHeight: Math.max(radius * 2 + 320, window.innerHeight),
        }}
    >
        {/* HERO TEXT */}
<div id="eyeText" className=" pointer-events-none z-50 absolute top-[45%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 px-6 w-full">
    <h1
        id="headEyeSection"
        className="
            text-2xl
            md:text-3xl
            lg:text-4xl
            font-black
            leading-tight
            text-white
            text-center
            max-w-4xl
        "
        style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.35)",
        }}
    >
        Every Post Tells a <span className="text-cyan-300">Story.</span><br/> Not Every Story Tells{" "} 
        <span className="text-cyan-300"> The Truth.</span>
    </h1>

    <p
        id="paraEyeSection"
        className="
            text-sm
            md:text-lg
            leading-7
            text-white/75
            text-center
            max-w-2xl
        "
        style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.25)",
        }}
    >
        RealityLens analyzes online content and provides a{" "}
        <span className="font-medium text-cyan-300">
            Reality Score, confidence rating, supporting evidence,
            and clear explanations
        </span>
        — helping you quickly understand what can be trusted,
        what requires verification, and what may be misleading.
    </p>
</div>

        <section
            ref={containerRef}
            className="relative w-screen overflow-visible bg-transparent"
            style={{
                minHeight: Math.max(radius * 2 + 320, window.innerHeight),
            }}
        >
            {/* BACKGROUND */}
            <img
                id="bgEyeSection"
                src="/images/GridBG.png"
                className="absolute inset-0 w-full h-full object-cover opacity-10 blur-[50] z-0"
            />

            <img
                src="/images/Gradients/EyeSection/right-bot.png"
                className="absolute scale-150 bottom-0 -right-14 w-[48vw] h-[48vw] z-10 pointer-events-none overflow-hidden"
            />

            <img
                src="/images/Gradients/EyeSection/center.png"
                className="absolute w-full h-full z-10 pointer-events-none"
            />

            {/* ORBIT RING */}
            <div
                id="ring"
                className="pointer-events-none z-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-800/60"
                style={{
                    width: radius * 2,
                    height: radius * 2,
                }}
            />

            {/* POSTS */}
            <div
                id="posts"
                ref={orbitRef}
                className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 opacity-40 md:opacity-60 lg:opacity-100"
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
                            className="orbit-post absolute transition-all duration-300"
                            data-x={x}
                            data-y={y}
                            style={{
                                left: `${x}px`,
                                top: `${y}px`,
                                transform: "translate(-50%, -50%)",
                            }}
                            onMouseEnter={(e) => {
                                clearTimeout(hoverTimeout.current);

                                const type = getEmotion();
                                setEmotion(type);

                                e.currentTarget.style.boxShadow =
                                    type === "angry"
                                        ? "0 0 30px rgba(255, 60, 60, 0.9)"
                                        : type === "suspicious"
                                        ? "0 0 30px rgba(255, 200, 0, 0.9)"
                                        : "0 0 30px rgba(0, 255, 180, 0.9)";
                            }}
                            onMouseLeave={(e) => {
                                hoverTimeout.current = setTimeout(() => {
                                    setEmotion("normal");
                                }, 150);

                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <Posts image={image} />
                        </div>
                    );
                })}
            </div>

            {/* EYE */}
            {/* <div
                id="eye"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex scale-75 md:scale-100"
            >
                <Eye side="left" emotion={emotion} />
            </div> */}
        </section>
    </div>
);
};

export default EyeSection;
