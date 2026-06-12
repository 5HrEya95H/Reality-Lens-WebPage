import { useState } from "react";
import Button from "../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const HeroSection = ({ isImageLoaded, setIsImageLoaded }) => {
	const [platform, setPlatform] = useState("windows(cloud)");
	const downloadLink =
		platform === "windows(cloud)"
			? "https://github.com/hannuverma/RealityLens/releases/download/windows.exe/RealityLens.exe"
			: platform === "mac"
				? "https://github.com/hannuverma/RealityLens-DEMO/releases/download/v5/RealityLens_Cloud.app.zip"
				: platform === "linux"
					? "https://github.com/hannuverma/RealityLens-DEMO/releases/download/linux/RealityLens_Cloud"
					: "https://github.com/hannuverma/RealityLens-DEMO/releases/download/android_v1/RealityLens.apk";

	const handleDownload = () => {
		window.location.href = downloadLink;
	};

	useGSAP(() => {
    if(isImageLoaded){
      const tl = gsap.timeline();
			tl.from("#bg", {
				opacity: 0,
				duration: 0.5,
				ease: "power1.inOut",
				delay: 0.1,
			});
			tl.from("#navline", {
				opacity: 0,
				scale: 0,
				duration: 1,
				ease: "power1.inOut",
			});
			tl.from(
				"#navbar",
				{
					opacity: 0,
					duration: 1,
					ease: "power1.inOut",
				},
				"<",
			);

			const headHeroSplit = new SplitText("#headHero", { type: "words" });
			const paraHeroSplit = new SplitText("#paraHero", { type: "lines" });

			tl.from(
				headHeroSplit.words,
				{
					opacity: 0,
					yPercent: 10,
					duration: 1,
					ease: "power1.inOut",
					stagger: 0.1,
				},
				"-=0.5",
			);

			tl.from(
				paraHeroSplit.lines,
				{
					opacity: 0,
					yPercent: 10,
					duration: 1,
					ease: "power1.inOut",
					stagger: 0.1,
				},
				"-=0.5",
			);

			tl.from(
				"#buttons",
				{
					opacity: 0,
					duration: 1,
				},
				"-=0.5",
			);
    }
	}, [isImageLoaded]);

	return (
		<section
			id='HeroSection'
			className='relative h-[125vh] w-screen overflow-visible bg-transparent
      '
		>
			<img
				id='bg'
				onLoad={() => {
					setIsImageLoaded(true);
					console.log("Image loaded");
				}}
				src='/images/NewHeroBG.png'
				className='absolute opacity-70 -top-20 w-full h-[calc(100%+5rem)] object-cover'
				alt='background'
			/>

			<nav
				id='navbar'
				className=' relative z-20 h-20 flex justify-between items-center px-8 md:px-12 bg-black/25 backdrop-blur-md'
			>
				<a
					href='#'
					className='flex items-center gap-2'
				>
					<img
						className='h-10 w-10'
						src='/images/Logo.png'
						alt='Reality Lens'
					/>
					<h1 className='text-white font-bold text-lg md:text-2xl'>
						Reality Lens
					</h1>
				</a>

				<div className='flex items-center gap-6 text-white'>
					<div className='hidden md:flex gap-6'>
						<a
							href='https://github.com/hannuverma/RealityLens.git'
							className='text-xl'
						>
							GitHub
						</a>
						<a
							href='#Features'
							className='text-xl'
						>
							Features
						</a>
						<a
							href='#HowItWorks'
							className='text-xl'
						>
							How It Works
						</a>
					</div>
					<Button
						type='Solid'
						text='Download Now'
						onClick={handleDownload}
					/>
				</div>
			</nav>
			<div
				id='navline'
				className='relative z-20 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent'
			></div>

			<div
				className='relative z-30 text-white flex flex-col gap-6 h-[80vh] px-8  justify-center items-center text-center
                     md:px-12 md:justify-end md:w-[50vw] md:items-start md:text-left'
			>
				<h1
					id='headHero'
					className='text-4xl md:text-5xl lg:text-6xl font-bold leading-[1]'
					style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
				>
					Can You <span className='text-cyan-300'>Trust</span> What You See
					Online?
				</h1>
				<p
					id='paraHero'
					className='text-sm text-center md:text-lg md:text-left w-[80vw] md:w-[50vw]'
					style={{ textShadow: "0 2px 10px rgba(0,0,0,1)" }}
				>
					Instantly verify screenshots, deepfakes, and manipulated stats with
					<span className='text-cyan-300 font-bold'> Reality-Lens.</span> <br />
					A native Windows tool{" "}
					<span className='text-cyan-300 font-bold'>
						{" "}
						Works Anywhere with just One Click.
					</span>
				</p>
				<div
					id='buttons'
					className='flex flex-col items-center gap-3 sm:flex-row md:w-[40vw] md:[&>*:first-child]:flex-[1] md:[&>*:last-child]:flex-[3] sm:[&>*]:w-auto'
				>
					<select
						name='OS'
						id=''
						value={platform}
						onChange={(e) => setPlatform(e.target.value)}
						className=' hover:cursor-pointer px-2 h-12 w-[40vw] rounded-full text-white font-semibold bg-grey-800 border border-cyan-300/20
                 hover:border-cyan-100 hover:shadow-[0_0_32px_rgba(0,213,255,0.6)] transition-all duration-300
                 shadow-[inset_0_4px_10px_rgba(0,255,255,0.6),inset_0_-4px_10px_rgba(0,255,255,0.4)]
                 text-sm md:text-lg md:w-80 md:px-6 md:w-full/3'
					>
						<option
							className='bg-black text-white'
							value='windows(cloud)'
						>
							Windows
						</option>
						<option
							className='bg-black text-white'
							value='mac'
						>
							MacOS
						</option>
						<option
							className='bg-black text-white'
							value='linux'
						>
							Linux
						</option>
						<option
							className='bg-black text-white'
							value='Mobile App'
						>
							Mobile App
						</option>
					</select>
					<Button
						type='Solid'
						onClick={handleDownload}
						className=' hover:cursor-pointer px-2  max-h-12 h-[10vw] w-[40vw] rounded-full text-white  bg-cyan-800 border border-cyan-300/20
                 hover:border-cyan-100 hover:shadow-[0_0_32px_rgba(0,213,255,0.6)] transition-all duration-300
                 shadow-[inset_0_4px_10px_rgba(0,0,0,0.6),inset_0_-4px_10px_rgba(0,255,255,0.4)]
                 text-sm md:text-lg md:w-80 md:px-6 leading-tight md:2full/3'
					>
						Download for {platform.charAt(0).toUpperCase() + platform.slice(1)}
					</Button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
