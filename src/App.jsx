import React, { useState, useRef, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Header from './components/common/Header';
import Toast from './components/common/Toast';

import HeroSection from './components/sections/HeroSection';
import VisionSection from './components/sections/VisionSection';
import PrinciplesSection from './components/sections/PrinciplesSection';
import BuildingSection from './components/sections/BuildingSection';
import RoadmapSection from './components/sections/RoadmapSection';
import ContributeSection from './components/sections/ContributeSection';
import { FinalCtaSection, FooterSection } from './components/sections/FinalCtaFooterSection';

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
      orientation: 'vertical',
      gestureOrientation: 'vertical',
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
        <HeroSection onToast={showToast} />
        <VisionSection />
        <PrinciplesSection />
        <BuildingSection />
        <RoadmapSection />
        <ContributeSection onToast={showToast} />
        <FinalCtaSection onToast={showToast} />
      </main>

      {/* Footer Reveal Container (motion.dev under-page reveal pattern) */}
      <div 
        className="relative w-full" 
        style={{ 
          height: footerHeight ? `${footerHeight}px` : 'auto',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' 
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
