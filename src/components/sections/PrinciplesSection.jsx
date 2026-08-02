import React, { useState, useRef } from 'react';
import { OwnershipUnderline } from '../doodles/Doodles';

const principlesData = [
  {
    id: 'open-source',
    title: 'Open Source',
    watermark: 'OPEN',
    keywords: ['Community', 'Transparent', 'No Lock-in'],
    description: 'Every line of code is published under AGPL-3.0. Built in public with complete transparency and zero vendor lock-in.',
    accentColor: '#D9FF00', // Lime
    textColorOnHover: 'text-[#080809]',
    descColorOnHover: 'text-[#080809]/90',
    keywordColorOnHover: 'text-[#080809]/60',
    gridClass: 'lg:col-span-7 min-h-[360px] md:min-h-[420px]'
  },
  {
    id: 'own-your-data',
    title: 'Own Your Data',
    watermark: 'DATA',
    keywords: ['Self-Hosted', 'Encrypted', 'Full Control'],
    description: 'Your student records, course assets, and analytical data remain exclusively under your jurisdiction. No forced data harvesting.',
    accentColor: '#9333ea', // Deep Purple
    textColorOnHover: 'text-white',
    descColorOnHover: 'text-white/90',
    keywordColorOnHover: 'text-white/60',
    gridClass: 'lg:col-span-5 min-h-[360px] md:min-h-[420px]'
  },
  {
    id: 'your-brand',
    title: 'Your Brand',
    watermark: 'BRAND',
    keywords: ['Custom CSS', 'White-Label', 'No Watermarks'],
    description: 'Customize every pixel, domain, and email template. Make VeoLMS truly yours without forced co-branding or badges.',
    accentColor: '#ff7849', // Soft Orange
    textColorOnHover: 'text-[#080809]',
    descColorOnHover: 'text-[#080809]/90',
    keywordColorOnHover: 'text-[#080809]/60',
    gridClass: 'lg:col-span-5 min-h-[320px] md:min-h-[360px]'
  },
  {
    id: 'deploy-your-way',
    title: 'Deploy Your Way',
    watermark: 'DEPLOY',
    keywords: ['Docker', 'Bare Metal', 'Managed Cloud'],
    description: 'Run locally on Raspberry Pi.',
    accentColor: '#38bdf8', // Muted Blue
    textColorOnHover: 'text-[#080809]',
    descColorOnHover: 'text-[#080809]/90',
    keywordColorOnHover: 'text-[#080809]/60',
    gridClass: 'lg:col-span-3 min-h-[320px] md:min-h-[360px]'
  },
  {
    id: 'modular-by-design',
    title: 'Modular by Design',
    watermark: 'MODULAR',
    keywords: ['Plugins', 'Extensible', 'Clean APIs'],
    description: 'Only load the features you need. Extend platform capabilities through clean plugin hooks and robust API endpoints.',
    accentColor: '#fef08a', // Warm Cream
    textColorOnHover: 'text-[#080809]',
    descColorOnHover: 'text-[#080809]/90',
    keywordColorOnHover: 'text-[#080809]/60',
    gridClass: 'lg:col-span-4 min-h-[320px] md:min-h-[360px]'
  }
];

function PrincipleCard({ card }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = (e) => {
    handleMouseMove(e);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-[#121316] border border-white/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between cursor-pointer select-none transition-colors duration-300 ${card.gridClass}`}
    >
      {/* Expanding solid circle fill animation from mouse position */}
      <div
        className="absolute rounded-full pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          backgroundColor: card.accentColor,
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '50px',
          height: '50px',
          transform: `translate(-50%, -50%) scale(${isHovered ? 28 : 0})`,
          transformOrigin: 'center center'
        }}
      />

      {/* Oversized background typography watermark (5-10% opacity) */}
      <div
        className={`absolute -right-4 -bottom-6 font-grotesk font-extrabold uppercase text-[6.5rem] sm:text-[9.5rem] leading-none pointer-events-none tracking-tighter transition-opacity duration-300 ${
          isHovered ? 'opacity-10 text-black/40' : 'opacity-[0.06] text-white'
        }`}
      >
        {card.watermark}
      </div>

      {/* Card Content Layer */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
        {/* Title */}
        <div>
          <h3
            className={`font-grotesk text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
              isHovered ? card.textColorOnHover : 'text-white'
            }`}
          >
            {card.title}
          </h3>
        </div>

        {/* Dynamic Content Swap: Default Keywords vs Hover Detailed Explanation */}
        <div className="relative mt-8 min-h-[110px] flex items-end">
          {/* Default Keywords (Fades out on hover) */}
          <div
            className={`transition-all duration-300 ease-out flex flex-col gap-2 ${
              isHovered
                ? 'opacity-0 translate-y-2 pointer-events-none'
                : 'opacity-100 translate-y-0'
            }`}
          >
            {card.keywords.map((kw, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-400 font-mono text-xs sm:text-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{kw}</span>
              </div>
            ))}
          </div>

          {/* Detailed Explanation (Fades in on hover) */}
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-400 ease-out ${
              isHovered
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-3 pointer-events-none'
            }`}
          >
            <p className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed ${card.descColorOnHover}`}>
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PrinciplesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
      {/* Section Header - Distinct Bento Section Layout */}
      <div className="mb-12 sm:mb-16 select-none max-w-2xl">
        <div className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-widest text-[#D9FF00] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D9FF00] animate-pulse" />
          <span className="text-slate-300 font-semibold">OUR PRINCIPLES</span>
        </div>

        <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
          Everything starts <span className="font-editorial italic font-normal text-white">with ownership.</span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3 font-normal max-w-xl">
          Educators should own their platform, data, and brand—without vendor lock-in or artificial limits.
        </p>
      </div>

      {/* Asymmetrical Bento Grid Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {principlesData.map((card) => (
          <PrincipleCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
