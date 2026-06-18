import React, { useState } from "react";
import Button from "./Button";

const CTASection = () => {
  const [platform] = useState("windows(cloud)");

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
    <>
      <section className="mx-auto mt-20 w-full max-w-5xl px-5 pb-20 md:px-8 pointer-events-auto">
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-cyan-400/30
            bg-[linear-gradient(135deg,rgba(8,51,68,0.95)_0%,rgba(8,20,30,0.95)_50%,rgba(8,51,68,0.95)_100%)]
            backdrop-blur-xl
            px-6 py-16
            text-center
            shadow-[0_0_80px_rgba(34,211,238,0.12)]
            md:px-10
          "
        >
          {/* Top Glow */}
          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

          {/* Bottom Glow */}
          <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />

          {/* Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,211,238,.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Scanner Beam */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute h-full w-40 -skew-x-12 bg-cyan-400/10 blur-2xl"
              style={{
                animation: "scan 8s linear infinite",
              }}
            />
          </div>

          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.4)_100%)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-cyan-300">
              RealityLens v1.0
            </span>

            <h2 className="max-w-3xl text-4xl font-semibold text-white md:text-5xl">
              Ready to see the truth?
            </h2>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              RealityLens v1.0 is now available for Windows and Mac. Simply download and install and start exploring the world
              through AI-powered vision.
            </p>

            <Button
              type="Solid"
              text="Download Now"
              onClick={handleDownload}
              onMouseEnter={(e) => window.dispatchEvent(new CustomEvent('eye-hover', { detail: { element: e.currentTarget, emotion: 'happy' } }))}
              onMouseLeave={() => window.dispatchEvent(new CustomEvent('eye-leave'))}
            />

            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
              Size 244MB • Windows 10/11 and Mac
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scan {
          0% {
            transform: translateX(-200%) skewX(-12deg);
          }
          100% {
            transform: translateX(800%) skewX(-12deg);
          }
        }
      `}</style>
    </>
  );
};

export default CTASection;
