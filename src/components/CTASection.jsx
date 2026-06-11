import React from "react";
import { useState } from "react";
import Button from "./Button";

const CTASection = () => {


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


	return (
		<section className='mx-auto mt-20 w-full max-w-5xl px-5 pb-20 md:px-8'>
			<div
  			className="relative overflow-hidden rounded-3xl border flex flex-col gap-6 items-center border-cyan-400 bg-cyan-950/50 px-6 py-16 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:px-10"
			>				
				<h2 className='text-4xl font-semibold text-white'>
					Ready to see the truth?
				</h2>
				<p className='mx-auto mt-3 max-w-xl text-sm text-slate-300'>
					RealityLens v1.0 is now available for Windows. No installation
					required, just download and run.
				</p>
				<Button type="Solid" text="Download Now" onClick={handleDownload} />

				<p className='mt-4 text-xs uppercase tracking-[0.08em] text-slate-400'>
					Size 24MB • No installation required • Windows 10/11
				</p>
			</div>
		</section>
	);
};

export default CTASection;
