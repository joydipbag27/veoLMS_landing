import React from 'react';
import { ArrowUpRight, Users } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import {
  TopStickerBadge,
  RightStickerBadge,
  BottomCircleBadge
} from '../doodles/Doodles';

export default function HeroSection({ onToast }) {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-12 w-full max-w-6xl mx-auto relative z-10 text-center">

      {/* Central Typographic Poster artwork container */}
      <div className="relative inline-flex flex-col items-start justify-center text-left select-none md:mt-6">

        {/* Sticker badges */}
        <TopStickerBadge text="OPEN SOURCE LMS" />
        <RightStickerBadge text="Self-Hostable" />
        <BottomCircleBadge text="v1.0 BETA" />

        {/* Line 1: THE OPEN */}
        <div className="font-grotesk font-bold uppercase text-white tracking-tight text-[3.2rem] sm:text-[5.8rem] md:text-[7.8rem] lg:text-[9.2rem] xl:text-[10rem] leading-[0.9]">
          THE OPEN
        </div>

        {/* Line 2: Platform */}
        <div className="editorial-overlap relative z-20 font-editorial italic text-white text-[2.9rem] sm:text-[5.1rem] md:text-[6.8rem] lg:text-[8.1rem] xl:text-[8.4rem] leading-[0.9] -mt-4 sm:-mt-8 md:-mt-1 lg:-mt-10 ml-3 sm:ml-6 md:ml-10 lg:ml-8 cursor-default">
          Platform
        </div>

        {/* Line 3: FOR MODERN */}
        <div className="font-grotesk font-bold uppercase text-white tracking-tight text-[3.2rem] sm:text-[5.8rem] md:text-[7.8rem] lg:text-[9.2rem] xl:text-[10rem] leading-[0.9] mt-2 sm:mt-4 md:-mt-3">
          FOR MODERN
        </div>

        {/* Line 4: Education */}
        <div className="editorial-overlap relative z-20 font-editorial italic text-white text-[2.9rem] sm:text-[5.1rem] md:text-[6.8rem] lg:text-[8.1rem] xl:text-[8.8rem] leading-[0.9] -mt-4 sm:-mt-8 md:-mt-11 lg:-mt-10 ml-4 sm:ml-8 md:ml-14 lg:ml-8 relative inline-block cursor-default">
          Education
        </div>

      </div>

      {/* Supporting Copy */}
      <div className="mt-6 md:mt-4 max-w-[90vw] sm:max-w-[70vw] md:max-w-[48vw] mx-auto relative z-10 px-4">
        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">
          Build your own learning platform with complete ownership of your brand, content, users, and data. Open source, self-hostable, and built for modern education.
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-6 flex items-center justify-center gap-3.5 relative z-10 flex-wrap">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#D9FF00] hover:bg-[#e5ff33] text-[#080809] font-bold px-6 py-3 rounded-full text-xs md:text-sm shadow-[0_4px_20px_rgba(217,255,0,0.2)] hover:shadow-[0_6px_28px_rgba(217,255,0,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <GithubIcon size={16} />
          <span>View on GitHub</span>
          <ArrowUpRight size={16} />
        </a>

        <a
          href="#community"
          className="inline-flex items-center gap-2 bg-transparent hover:bg-white/[0.04] text-slate-200 hover:text-white font-semibold px-5.5 py-3 rounded-full text-xs md:text-sm border border-white/15 hover:border-white/35 hover:-translate-y-0.5 transition-all cursor-pointer"
          onClick={() => onToast?.("💬 Joining VeoLMS Discord & Discussions")}
        >
          <Users size={16} />
          <span>Join Community</span>
        </a>
      </div>

    </section>
  );
}
