import React from 'react';
import { FoundationUnderline } from '../doodles/Doodles';

const CloudPublicIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

const CodeBracketsIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CommunityUsersIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SpinnerDottedIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={`${className} animate-spin`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export default function VisionSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 md:py-28 relative z-10 text-center flex flex-col items-center justify-center">

      {/* Top Tag: • OUR VISION */}
      <div className="flex items-center gap-2.5 font-mono text-[0.72rem] md:text-xs uppercase tracking-widest text-[#D9FF00] mb-8 select-none">
        <span className="w-2 h-2 rounded-full bg-[#D9FF00] animate-pulse" />
        <span className="text-slate-300 font-semibold">OUR VISION</span>
      </div>

      {/* Main Headline */}
      <div className="select-none flex flex-col items-center">
        <h2 className="font-grotesk font-extrabold text-white text-[3.6rem] sm:text-[5.8rem] md:text-[7.2rem] lg:text-[8rem] leading-[0.9] tracking-tight text-center">
          Education
        </h2>
        <h2 className="font-grotesk font-extrabold text-white text-[3.6rem] sm:text-[5.8rem] md:text-[7.2rem] lg:text-[8rem] leading-[0.9] tracking-tight text-center">
          deserves
        </h2>
        <div className="font-editorial italic text-white text-[3.2rem] sm:text-[5.2rem] md:text-[6.6rem] lg:text-[7.5rem] leading-[0.9] tracking-tight text-center font-normal mt-1 sm:mt-2">
          <span>an open </span>
          <span className="relative inline-block">
            foundation.
            <FoundationUnderline />
          </span>
        </div>
      </div>

      {/* Paragraph Copy */}
      <div className="mt-10 max-w-2xl mx-auto text-center px-4 space-y-4">
        <p className="text-slate-300 text-base sm:text-lg md:text-[1.15rem] leading-relaxed font-normal">
          Most learning platforms ask educators to adapt to their software.<br className="hidden sm:inline" />
          We believe software should adapt to educators instead.
        </p>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          VeoLMS is being built as an open platform where creators, institutions, and organizations have the freedom to build, customize, and grow—without unnecessary limitations.
        </p>
      </div>

      {/* Three Pillars Row */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 font-medium text-xs sm:text-sm text-white">
        
        {/* Pillar 1 */}
        <div className="flex items-center gap-2 px-4 sm:border-r sm:border-white/15">
          <CloudPublicIcon className="w-4 h-4 text-[#D9FF00]" />
          <span>Built in public.</span>
        </div>

        {/* Pillar 2 */}
        <div className="flex items-center gap-2 px-4 sm:border-r sm:border-white/15">
          <CodeBracketsIcon className="w-4 h-4 text-[#D9FF00]" />
          <span>Open by design.</span>
        </div>

        {/* Pillar 3 */}
        <div className="flex items-center gap-2 px-4">
          <CommunityUsersIcon className="w-4 h-4 text-[#D9FF00]" />
          <span>Driven by the community.</span>
        </div>

      </div>

      {/* Bottom Status Badge */}
      <div className="mt-12">
        <div className="inline-flex items-center gap-2.5 bg-white/[0.02] border border-white/20 hover:border-white/40 text-slate-300 px-5 py-2.5 rounded-full font-mono text-[0.72rem] tracking-wider uppercase transition-colors">
          <SpinnerDottedIcon className="w-3.5 h-3.5 text-[#D9FF00]" />
          <span>UNDER ACTIVE DEVELOPMENT</span>
        </div>
      </div>

    </section>
  );
}
