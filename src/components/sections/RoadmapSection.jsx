import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const milestones = [
  {
    phase: '01',
    title: 'FOUNDATION',
    description: 'Build the core learning platform.',
    isLaunch: false
  },
  {
    phase: '02',
    title: 'LAUNCH',
    subtitle: 'PUBLIC V1.0 RELEASE',
    description: 'Public v1.0 Release.',
    isLaunch: true
  },
  {
    phase: '03',
    title: 'ECOSYSTEM',
    description: 'Plugins. Themes. Marketplace.',
    isLaunch: false
  },
  {
    phase: '04',
    title: 'FUTURE',
    description: 'AI Features. Enterprise. Mobile.',
    isLaunch: false
  }
];

export default function RoadmapSection() {
  const targetRef = useRef(null);

  // Track vertical scroll across 300vh target container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  // Calm, expensive spring physics for effortless 60fps motion
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 28,
    stiffness: 80,
    mass: 0.9
  });

  // Transform scroll progress [0, 1] into precise viewport-based horizontal translation
  const x = useTransform(smoothProgress, [0, 1], ['0vw', '-90vw']);

  // Position of traveling flare/comet along timeline
  const cometLeft = useTransform(smoothProgress, [0, 1], ['4%', '95%']);

  return (
    <section 
      ref={targetRef} 
      className="relative h-[320vh] w-full bg-[#080809] select-none"
    >
      {/* Sticky Pinned Keynote Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-10 sm:py-20 px-6 sm:px-12 md:px-20">
        
        {/* Standardized Section Header */}
        <div className="relative z-20 max-w-5xl mx-auto w-full pt-2 flex items-center justify-between select-none">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[0.72rem] md:text-xs uppercase tracking-widest text-[#D9FF00] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D9FF00] animate-pulse" />
              <span className="text-slate-300 font-semibold">ROADMAP</span>
            </div>
            <h2 className="font-grotesk font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight leading-tight">
              Traveling through <span className="font-editorial italic font-normal text-white">our vision.</span>
            </h2>
          </div>
        </div>

        {/* Central Horizontal Timeline Track & Keynote Slides */}
        <div className="relative z-10 w-full my-auto py-8">
          
          {/* Thin Minimal Timeline Base Axis */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -translate-y-1/2 z-0" />

          {/* Active Glowing Progress Line */}
          <motion.div
            style={{ scaleX: smoothProgress }}
            className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-white/40 via-[#D9FF00] to-[#c084fc] origin-left -translate-y-1/2 z-10"
          />

          {/* Primary Animated Traveling Flare Comet (Behind text at z-5) */}
          <motion.div
            style={{ left: cometLeft }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-5 pointer-events-none flex items-center opacity-75 blur-[0.5px]"
          >
            {/* Soft Fading Light Tail */}
            <div className="w-20 h-[2px] bg-gradient-to-l from-[#D9FF00] via-white/40 to-transparent blur-[1px] -mr-1" />
            {/* Flare Core Particle */}
            <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_15px_#FFFFFF,0_0_28px_#D9FF00]" />
          </motion.div>

          {/* Horizontally Moving Presentation Slides (Elevated at z-20 with backdrop blur) */}
          <motion.div
            style={{ x }}
            className="flex items-center gap-16 sm:gap-24 md:gap-32 px-8 sm:px-16 lg:px-24 relative z-20"
          >
            {milestones.map((item, idx) => (
              <div
                key={item.phase}
                className={`shrink-0 w-[76vw] sm:w-[58vw] md:w-[45vw] max-w-[650px] flex flex-col justify-center relative select-none py-10 transition-opacity duration-700 ${
                  item.isLaunch ? 'scale-[1.03]' : ''
                }`}
              >
                {/* Launch Highlight Smooth Atmospheric Purple Lighting (Bleeds seamlessly to outer container) */}
                {item.isLaunch && (
                  <div className="absolute -inset-y-64 -inset-x-64 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.18)_0%,_rgba(168,85,247,0.05)_45%,_transparent_70%)] pointer-events-none z-0 blur-2xl" />
                )}

                <div className="relative z-10">
                  {/* Milestone Phase Tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-slate-500 uppercase bg-[#080809]/80 backdrop-blur-sm px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    {item.isLaunch && (
                      <span className="font-mono text-[0.68rem] font-bold uppercase tracking-widest text-[#c084fc] bg-[#a855f7]/15 border border-[#a855f7]/30 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                        {item.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Extremely Large Keynote Title (Soft backdrop blur masks flare behind text) */}
                  <div className="relative inline-block mb-6">
                    <h3 
                      className={`font-space font-extrabold uppercase tracking-tight text-white leading-[0.92] relative z-20 bg-[#080809]/80 backdrop-blur-md px-3 py-1.5 -mx-3 rounded-2xl ${
                        item.isLaunch ? 'text-6xl sm:text-8xl lg:text-9xl text-white' : 'text-5xl sm:text-7xl lg:text-8xl'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* One Powerful Vision Sentence */}
                  <p className="font-grotesk text-slate-300 text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed max-w-xl bg-[#080809]/80 backdrop-blur-sm px-3 py-1 -mx-3 rounded-xl inline-block">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Minimal Footer Progress Counter with Interactive Documentation Anchor */}
        <div className="relative z-20 max-w-5xl mx-auto w-full pb-2 flex items-center justify-between font-mono text-xs text-slate-600">
          <a 
            href="#docs"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector('#docs');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hover:text-white text-slate-400 transition-colors cursor-pointer group flex items-center gap-1.5"
          >
            <span>VEOLMS ROADMAP DOCUMENTATION</span>
            <span className="text-[#D9FF00] group-hover:translate-x-0.5 transition-transform font-bold">→</span>
          </a>
          <span>01 — 04</span>
        </div>

      </div>
    </section>
  );
}
