import React, { useState, useRef, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Header from "./components/common/Header";
import Toast from "./components/common/Toast";

import HeroSection from "./components/sections/HeroSection";
import VisionSection from "./components/sections/VisionSection";
import PrinciplesSection from "./components/sections/PrinciplesSection";
import BuildingSection from "./components/sections/BuildingSection";
import RoadmapSection from "./components/sections/RoadmapSection";
import ContributeSection from "./components/sections/ContributeSection";
import {
  FinalCtaSection,
  FooterSection,
} from "./components/sections/FinalCtaFooterSection";

import croppedRibbonBg from "./assets/ribbons_bg/cropped ribbon.png";
import secondRibbonBg from "./assets/ribbons_bg/cropped ribbon.png";

export default function App() {
  const [activeToast, setActiveToast] = useState(null);
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  const showToast = (message) => {
    setActiveToast(message);
    setTimeout(() => {
      setActiveToast(null);
    }, 3500);
  };

  // Initialize Lenis Super-Smooth Momentum Scrolling Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Track Footer Height for Under-Page Reveal
  useEffect(() => {
    if (!footerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.height > 0) {
          setFooterHeight(entry.contentRect.height);
        }
      }
    });
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#080809] text-white flex flex-col justify-between relative selection:bg-[#D9FF00] selection:text-[#080809]">
      {/* Toast Notification */}
      <Toast message={activeToast} />

      {/* Header Navigation Component */}
      <Header onToast={showToast} />

      {/* Main Content Sections (Elevated z-10 with dark background and shadow curtain) */}
      <main className="relative z-10 bg-[#080809] flex-1 flex flex-col items-center justify-center w-full pt-16 sm:pt-20 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
        
        {/* Continuous Scoped Wrapper for Hero, Vision & Principles */}
        <div className="relative w-full flex flex-col items-center overflow-hidden">
          
          {/* First Ribbon Bridge (Left: Hero → Vision) */}
          <div 
            className="absolute top-[460px] sm:top-[520px] md:top-[450px] -left-[240px] sm:-left-[380px] md:-left-[420px] w-[650px] sm:w-[950px] md:w-[1250px] aspect-[16/9] pointer-events-none z-0 opacity-[0.88] select-none mix-blend-screen"
            style={{
              backgroundImage: `url("${croppedRibbonBg}")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'rotate(0deg) scale(1.35)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 98%)', 
              maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 98%)',
            }}
          />

          {/* Second Ribbon Bridge (Right: Bottom Vision → Principles) */}
          <div 
            className="absolute top-[920px] sm:top-[1060px] md:top-[1160px] -right-[240px] sm:-right-[380px] md:-right-[420px] w-[650px] sm:w-[950px] md:w-[1250px] aspect-[16/9] pointer-events-none z-0 opacity-[0.88] select-none mix-blend-screen"
            style={{
              backgroundImage: `url("${secondRibbonBg}")`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'scaleX(-1) rotate(0deg) scale(1.35)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 98%)', 
              maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 98%)',
            }}
          />

          <HeroSection onToast={showToast} />
          <VisionSection />
          <PrinciplesSection />
        </div>
        <BuildingSection />
        <RoadmapSection />
        <ContributeSection onToast={showToast} />
        <FinalCtaSection onToast={showToast} />
      </main>

      {/* Footer Reveal Container (motion.dev under-page reveal pattern) */}
      <div
        className="relative w-full"
        style={{
          height: footerHeight ? `${footerHeight}px` : "auto",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div
          ref={footerRef}
          className="fixed bottom-0 left-0 right-0 w-full z-0"
        >
          <FooterSection onToast={showToast} />
        </div>
      </div>
    </div>
  );
}
