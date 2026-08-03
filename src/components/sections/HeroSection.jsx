import React from 'react';
import { ArrowUpRight, Users } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import {
  TopStickerBadge,
  RightStickerBadge,
  BottomCircleBadge
} from '../doodles/Doodles';

import heroBgImage from '../../assets/brandon-griggs-AhesR5WiAdc-unsplash.jpg';
import veolmsMaskImage from '../../assets/veolms_mask.jpg';

export default function HeroSection({ onToast }) {
  // Image mask style for "MODERN"
  const modernMaskStyle = {
    backgroundImage: `url(${heroBgImage})`,
    backgroundSize: '100% 200%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent'
  };

  // Image mask style for "VeoLMS" in "Meet VeoLMS"
  const veolmsMaskStyle = {
    backgroundImage: `url(${veolmsMaskImage})`,
    backgroundSize: '100% 200%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent'
  };

  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-2 md:py-4 w-full max-w-6xl mx-auto relative z-10 text-center my-auto min-h-[calc(100vh-90px)]">

      {/* Central Typographic Poster artwork container */}
      <div className="relative inline-flex flex-col items-start justify-center text-left select-none md:mt-2">

        {/* Sticker badges */}
        <TopStickerBadge text="OPEN SOURCE LMS" />
        <RightStickerBadge text="Self-Hostable" />
        <BottomCircleBadge text="v1.0 BETA" />

        {/* Top Phrase: Meet VeoLMS */}
        <div className="flex items-center gap-3 mb-1 sm:mb-2 ml-1 sm:ml-2">
          <div className="font-grotesk text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>Meet</span>
            <span style={veolmsMaskStyle} className="font-extrabold cursor-default select-none">
              VeoLMS
            </span>
          </div>
        </div>

        {/* Line 1: THE OPEN (Solid White) */}
        <div className="font-grotesk font-bold uppercase text-white tracking-tight text-[2.8rem] sm:text-[4.8rem] md:text-[6.4rem] lg:text-[7.6rem] xl:text-[8.5rem] leading-[0.88]">
          THE OPEN
        </div>

        {/* Line 2: Platform (Solid White) */}
        <div className="editorial-overlap relative z-20 font-editorial italic text-white text-[2.5rem] sm:text-[4.2rem] md:text-[5.6rem] lg:text-[6.8rem] xl:text-[7.4rem] leading-[0.88] -mt-3.5 sm:-mt-6 md:-mt-8 lg:-mt-9 ml-3 sm:ml-6 md:ml-8 lg:ml-6 cursor-default">
          Platform
        </div>

        {/* Line 3: FOR MODERN (Image Masked ONLY on MODERN) */}
        <div className="font-grotesk font-bold uppercase tracking-tight text-[2.8rem] sm:text-[4.8rem] md:text-[6.4rem] lg:text-[7.6rem] xl:text-[8.5rem] leading-[0.88] mt-1 sm:mt-2 md:-mt-2">
          <span className="text-white">FOR </span>
          <span style={modernMaskStyle}>MODERN</span>
        </div>

        {/* Line 4: Education (Solid White) */}
        <div className="editorial-overlap relative z-20 font-editorial italic text-white text-[2.5rem] sm:text-[4.2rem] md:text-[5.6rem] lg:text-[6.8rem] xl:text-[7.4rem] leading-[0.88] -mt-3.5 sm:-mt-6 md:-mt-8 lg:-mt-9 ml-3 sm:ml-6 md:ml-10 lg:ml-6 relative inline-block cursor-default">
          Education
        </div>

      </div>

      {/* Supporting Copy */}
      <div className="mt-4 md:mt-3 max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] mx-auto relative z-10 px-4">
        <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
          Build your own learning platform with complete ownership of your brand, content, users, and data. Open source, self-hostable, and built for modern education.
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-4 md:mt-5 flex items-center justify-center gap-3 relative z-10 flex-wrap">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#D9FF00] hover:bg-[#e5ff33] text-[#080809] font-bold px-5.5 py-2.5 rounded-full text-xs md:text-sm shadow-[0_4px_20px_rgba(217,255,0,0.2)] hover:shadow-[0_6px_28px_rgba(217,255,0,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <GithubIcon size={15} />
          <span>View on GitHub</span>
          <ArrowUpRight size={15} />
        </a>

        <a
          href="#community"
          className="inline-flex items-center gap-2 bg-transparent hover:bg-white/[0.04] text-slate-200 hover:text-white font-semibold px-5 py-2.5 rounded-full text-xs md:text-sm border border-white/15 hover:border-white/35 hover:-translate-y-0.5 transition-all cursor-pointer"
          onClick={() => onToast?.("💬 Joining VeoLMS Discord & Discussions")}
        >
          <Users size={15} />
          <span>Join Community</span>
        </a>
      </div>

    </section>
  );
}
