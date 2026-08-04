import React, { useState } from 'react';
import Header from './components/common/Header';
import Toast from './components/common/Toast';

import HeroSection from './components/sections/HeroSection';
import VisionSection from './components/sections/VisionSection';
import PrinciplesSection from './components/sections/PrinciplesSection';
import BuildingSection from './components/sections/BuildingSection';
import RoadmapSection from './components/sections/RoadmapSection';
import ContributeSection from './components/sections/ContributeSection';
import FinalCtaFooterSection from './components/sections/FinalCtaFooterSection';

export default function App() {
  const [activeToast, setActiveToast] = useState(null);

  const showToast = (message) => {
    setActiveToast(message);
    setTimeout(() => {
      setActiveToast(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#080809] text-white flex flex-col justify-between relative overflow-x-clip selection:bg-[#D9FF00] selection:text-[#080809]">
      
      {/* Toast Notification */}
      <Toast message={activeToast} />

      {/* Header Navigation Component */}
      <Header onToast={showToast} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col items-center justify-center w-full pt-16 sm:pt-20">
        <HeroSection onToast={showToast} />
        <VisionSection />
        <PrinciplesSection />
        <BuildingSection />
        <RoadmapSection />
        <ContributeSection onToast={showToast} />
        <FinalCtaFooterSection onToast={showToast} />
      </main>

    </div>
  );
}
