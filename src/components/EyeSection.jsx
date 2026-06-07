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

    useGSAP(() =>{
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none",
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
            tl.from("#eye",{
                opacity:0,
                duration:1,
                y: 5,
                ease: "power1.inOut"
            },"-=0.3");

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

            tl.from(headSplit.words,{
                opacity:0,
                yPercent:20,
                duration:1,
                stagger: 0.1,

            });
            tl.from(paraSplit.lines,{
                opacity:0,
                yPercent:20,
                duration:1,
                stagger:0.1,
            });
        });

    return (
        <div
            id="eyeSection"
            className="relative h-screen w-screen flex justify-center"
        >
            {/* HERO TEXT */}
            <div  className="z-50 absolute top-[56%] flex flex-col justify-center items-center gap-4 mx-4">
                <h1 id="headEyeSection"
                    className="text-xl md:text-3xl font-black text-white text-center"
                    style={{
                        textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                        fontFamily: "Bricolage Grotesque",
                    }}
                >
                    Every Post tells a Story. Not every story tells{" "}
                    <span className="text-cyan-300">The Truth.</span>
                </h1>

                <p id="paraEyeSection"
                    className="text-sm w-[50vw] md:text-lg text-white/60 text-center"
                    style={{
                        textShadow: "0 2px 10px rgba(0,0,0,1)",
                        fontFamily: "Sora",
                    }}
                >
                    RealityLens analyzes online content and assigns a{" "}
                    <span className="text-cyan-300">
                        Reality Score, confidence rating, supporting evidence,
                        and clear explanations
                    </span>
                    —helping you understand what can be trusted, what needs
                    verification, and what may be misleading.
                </p>
            </div>

            <section
                ref={containerRef}
                className="relative h-screen w-screen overflow-hidden bg-black"
            >
                {/* BACKGROUND */}
                <img id="bgEyeSection"
                    src="/images/eyeSectionBG.jpg"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <img
                    src="/images/Gradients/EyeSection/top-left.png"
                    className="absolute inset-0 w-[26vw] h-[40vw] z-10 pointer-events-none"
                />

                <img
                    src="/images/Gradients/EyeSection/right-bot.png"
                    className="absolute bottom-0 right-0 w-[26vw] h-[40vw] z-10 pointer-events-none"
                />

                <img
                    src="/images/Gradients/EyeSection/center.png"
                    className="absolute w-screen h-screen z-10 pointer-events-none"
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
                    className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0  opacity-40 md:opacity-60 lg:opacity-100"
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
                <div id="eye" className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-20 flex
                scale-75 md:scale-100">
                    <Eye side="left" emotion={emotion} />
                </div>
            </section>
        </div>
    );
};

export default EyeSection;