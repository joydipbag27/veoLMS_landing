import React from 'react';
import { OpenEducationUnderline } from '../doodles/Doodles';
import { GithubIcon, DiscordIcon } from '../common/Icons';
import { ArrowUpRight } from 'lucide-react';

import futureBgImage from '../../assets/mymind-tZCrFpSNiIQ-unsplash.jpg';

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

  return (
    <section className="w-full bg-[#080809] border-t border-white/10 relative z-10 pt-24 pb-12 overflow-hidden">
      
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6">
        
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

          {/* Primary Action Buttons (Subtle Outlined Style with Hover Lift) */}
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

        {/* LOWER PORTION: 4-Column Editorial Footer Grid */}
        <div className="pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 select-none">
          
          {/* Column 1: Product */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D9FF00] mb-5">
              Product
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#docs" onClick={(e) => { e.preventDefault(); onToast?.("📚 Documentation"); }} className="hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              </li>
              <li>
                <a href="#releases" onClick={(e) => { e.preventDefault(); onToast?.("🚀 Releases"); }} className="hover:text-white transition-colors">Releases (v1.0 Beta)</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Community */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#a5b4fc] mb-5">
              Community
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#discussions" onClick={(e) => { e.preventDefault(); onToast?.("💬 GitHub Discussions"); }} className="hover:text-white transition-colors">Discussions</a>
              </li>
              <li>
                <a href="#contribute" className="hover:text-white transition-colors">Contributing Guide</a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord Server</a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sponsor Project</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff7849] mb-5">
              Resources
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#architecture" onClick={(e) => { e.preventDefault(); onToast?.("⚡ Architecture Decisions"); }} className="hover:text-white transition-colors">Architecture Decisions</a>
              </li>
              <li>
                <a href="#changelog" onClick={(e) => { e.preventDefault(); onToast?.("📝 Changelog"); }} className="hover:text-white transition-colors">Changelog</a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => { e.preventDefault(); onToast?.("📰 Open Education Blog"); }} className="hover:text-white transition-colors">Project Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#38bdf8] mb-5">
              Legal
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-400">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AGPL-3.0 License</a>
              </li>
              <li>
                <a href="#privacy" onClick={(e) => { e.preventDefault(); onToast?.("🔒 Privacy Policy"); }} className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#coc" onClick={(e) => { e.preventDefault(); onToast?.("🤝 Code of Conduct"); }} className="hover:text-white transition-colors">Code of Conduct</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM EMOTIONAL ENDING STATEMENT */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-500 font-mono text-xs select-none">
          
          {/* Philosophy Ending Quote */}
          <div className="text-center sm:text-left text-slate-300 font-editorial italic text-lg sm:text-xl">
            "Open source isn't just our license. It's how we're building VeoLMS."
          </div>

          {/* Sub-bar License Credit */}
          <div className="uppercase tracking-widest text-[0.68rem] text-slate-400 shrink-0">
            © {new Date().getFullYear()} VEOLMS — AGPL-3.0 LICENSE
          </div>

        </div>

      </div>

    </section>
  );
}
