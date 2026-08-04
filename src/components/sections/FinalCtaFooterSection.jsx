import React from 'react';
import { OpenEducationUnderline } from '../doodles/Doodles';
import { GithubIcon, DiscordIcon } from '../common/Icons';
import { ArrowUpRight } from 'lucide-react';

import futureBgImage from '../../assets/mymind-tZCrFpSNiIQ-unsplash.jpg';
import darkCroppedLogo from '../../assets/veolms-logo/White Logo.svg';
import veolmsMaskImage from '../../assets/veolms_mask.jpg';

export default function FinalCtaFooterSection({ onToast }) {
  // Image mask style for the word "future"
  const futureMaskStyle = {
    backgroundImage: `url("${futureBgImage}")`,
    backgroundSize: '100% 200%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent'
  };

  // Image mask style for the word "VeoLMS"
  const veolmsMaskStyle = {
    backgroundImage: `url("${veolmsMaskImage}")`,
    backgroundSize: '100% 200%',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent'
  };

  return (
    <section className="w-full bg-[#080809] border-t border-white/10 relative z-10 pt-24 pb-12 overflow-hidden">

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* UPPER PORTION: Final Call-To-Action */}
        <div className="text-center max-w-3xl mx-auto mb-24 select-none">

          {/* Top Status Tag */}
          <div className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] md:text-xs uppercase tracking-widest text-[#D9FF00] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D9FF00] animate-pulse" />
            <span className="text-slate-300 font-semibold">JOIN THE JOURNEY</span>
          </div>

          {/* Headline */}
          <div className="select-none flex flex-col items-center mb-8">
            <h2 className="font-grotesk font-extrabold uppercase text-white text-[3.2rem] sm:text-[5rem] md:text-[6.2rem] leading-[0.9] tracking-tight text-center">
              Ready to build the{' '}
              <span style={futureMaskStyle}>future</span>
            </h2>
            <div className="font-editorial italic text-white text-[3rem] sm:text-[4.6rem] md:text-[5.8rem] leading-[0.9] tracking-tight text-center font-normal mt-1 sm:mt-2">
              <span className="relative inline-block">
                of open education?
                <OpenEducationUnderline />
              </span>
            </div>
          </div>

          {/* Supporting Copy */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-2xl mx-auto">
            VeoLMS is still evolving, and we're building it together. Whether you write code, improve documentation, support development, or simply believe education should be open, we'd love to have you with us.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onToast?.("⭐ Starring VeoLMS on GitHub")}
              className="inline-flex items-center gap-2.5 bg-white/[0.04] hover:bg-[#D9FF00] text-slate-200 hover:text-[#080809] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full border border-white/20 hover:border-[#D9FF00] hover:-translate-y-0.5 transition-all shadow-xl cursor-pointer"
            >
              <GithubIcon size={16} />
              <span>Star on GitHub</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onToast?.("💬 Joining VeoLMS Discord")}
              className="inline-flex items-center gap-2.5 bg-transparent hover:bg-[#a5b4fc] text-slate-200 hover:text-[#0f172a] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full border border-white/20 hover:border-[#a5b4fc] hover:-translate-y-0.5 transition-all shadow-xl cursor-pointer"
            >
              <DiscordIcon size={16} />
              <span>Join Discord</span>
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

        {/* LOWER PORTION: Restructured Footer with Dark Cropped Logo on Left & 3 Column Navigation on Right */}
        <div className="pt-16 border-t border-white/10 relative select-none">

          {/* Background Watermark Text (similar to reference image) */}
          <div className="absolute right-0 bottom-6 pointer-events-none text-white/[0.02] font-grotesk font-black text-[12rem] sm:text-[16rem] md:text-[22rem] uppercase leading-none tracking-tighter select-none z-0 overflow-hidden translate-x-16 translate-y-12">
            VEOLMS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 relative z-10">

            {/* Left Brand Column: Dark Cropped Logo + Project Summary Description */}
            <div className="md:col-span-4 flex flex-col items-start  pr-0 md:pr-4">
              <a href="#" className="inline-flex items-center group mb-4 select-none cursor-pointer">
                <img
                  src={darkCroppedLogo}
                  alt="VeoLMS Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="font-space font-bold text-3xl sm:text-4xl tracking-tight leading-none flex items-center transition-all duration-300 group-hover:brightness-125">
                  <span className="text-white">Veo</span>
                  <span style={veolmsMaskStyle} className="ml-[3px]">
                    LMS
                  </span>
                </span>
              </a>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal mb-5">
                A complete, deployable open-source LMS built around video learning, self-hosting, personal adaptability, and practical infrastructure costs.
              </p>
              <div className="text-slate-400 font-editorial italic text-xs sm:text-sm border-l-2 border-[#D9FF00]/50 pl-3 py-0.5">
                "Open source isn't just our license. It's how we're building VeoLMS."
              </div>
            </div>

            {/* Right Columns: EXPLORE, COMMUNITY, RESOURCES, LEGAL side-by-side */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">

              {/* Column 1: EXPLORE (Electric Lime) */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D9FF00] mb-5">
                  EXPLORE
                </h4>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-400">
                  <li>
                    <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
                  </li>
                  <li>
                    <a href="#docs" onClick={(e) => { e.preventDefault(); onToast?.("📚 Documentation"); }} className="hover:text-white transition-colors">Documentation</a>
                  </li>
                  <li>
                    <a href="#architecture" onClick={(e) => { e.preventDefault(); onToast?.("⚡ Architecture"); }} className="hover:text-white transition-colors">Architecture</a>
                  </li>
                  <li>
                    <a href="#releases" onClick={(e) => { e.preventDefault(); onToast?.("🚀 Releases"); }} className="hover:text-white transition-colors">Releases</a>
                  </li>
                </ul>
              </div>

              {/* Column 2: COMMUNITY (Lavender / Soft Purple) */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#a5b4fc] mb-5">
                  COMMUNITY
                </h4>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-400">
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Source Code</a>
                  </li>
                  <li>
                    <a href="#discussions" onClick={(e) => { e.preventDefault(); onToast?.("💬 GitHub Discussions"); }} className="hover:text-white transition-colors">Discussions</a>
                  </li>
                  <li>
                    <a href="#contribute" className="hover:text-white transition-colors">Contributing</a>
                  </li>
                  <li>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a>
                  </li>
                </ul>
              </div>

              {/* Column 3: RESOURCES (Vibrant Coral Orange) */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff7849] mb-5">
                  RESOURCES
                </h4>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-400">
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                  </li>
                  <li>
                    <a href="#blog" onClick={(e) => { e.preventDefault(); onToast?.("📰 Open Education Blog"); }} className="hover:text-white transition-colors">Blog</a>
                  </li>
                  <li>
                    <a href="#changelog" onClick={(e) => { e.preventDefault(); onToast?.("📝 Changelog"); }} className="hover:text-white transition-colors">Changelog</a>
                  </li>
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sponsor</a>
                  </li>
                </ul>
              </div>

              {/* Column 4: LEGAL (Sky Blue) */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-5">
                  LEGAL
                </h4>
                <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-400">
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AGPL-3.0</a>
                  </li>
                  <li>
                    <a href="#privacy" onClick={(e) => { e.preventDefault(); onToast?.("🔒 Privacy Policy"); }} className="hover:text-white transition-colors">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#coc" onClick={(e) => { e.preventDefault(); onToast?.("🤝 Code of Conduct"); }} className="hover:text-white transition-colors">Conduct</a>
                  </li>
                  <li>
                    <a href="#security" onClick={(e) => { e.preventDefault(); onToast?.("🛡️ Security Policy"); }} className="hover:text-white transition-colors">Security</a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Sub-bar line & credits */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-xs select-none relative z-10">
            <div className="uppercase tracking-widest text-[0.68rem] text-slate-400 font-semibold text-center sm:text-left">
              BUILT, BROKEN, DEBUGGED, AND SHIPPED FOR OPEN EDUCATION.
            </div>
            <div className="uppercase tracking-widest text-[0.68rem] text-slate-400 font-medium">
              © {new Date().getFullYear()} VEOLMS
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
