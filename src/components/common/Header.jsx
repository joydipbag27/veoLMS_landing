import React from 'react';
import { GithubIcon } from './Icons';
import veolmsLogo from '../../assets/veolms-logo/White Logo.svg';

export default function Header({ onToast }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#080809]/80 backdrop-blur-md border-b border-white/[0.06] transition-all">
      <div className="w-full max-w-[96%] xl:max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-1 sm:py-2 flex items-center justify-between">
        
        {/* Far-left: Enlarged Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <img
            src={veolmsLogo}
            alt="VeoLMS Logo"
            className="h-14 sm:h-16 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[0.72rem] sm:text-xs font-mono uppercase tracking-widest text-slate-400">
          <a href="#manifesto" onClick={(e) => { e.preventDefault(); onToast?.("📖 VeoLMS Open Manifesto"); }} className="hover:text-white transition-colors">Manifesto</a>
          <a href="#docs" onClick={(e) => { e.preventDefault(); onToast?.("📚 Documentation"); }} className="hover:text-white transition-colors">Docs</a>
          <a href="#architecture" onClick={(e) => { e.preventDefault(); onToast?.("⚡ Architecture"); }} className="hover:text-white transition-colors">Architecture</a>
        </nav>

        {/* Far-right: GitHub Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white/[0.04] border border-white/15 hover:border-[#D9FF00]/50 hover:bg-[#D9FF00]/10 text-slate-200 hover:text-white px-4 py-2 rounded-full text-xs font-medium font-mono transition-all shadow-md hover:shadow-[0_0_20px_rgba(217,255,0,0.2)]"
            onClick={() => onToast?.("⭐ Starring VeoLMS on GitHub")}
          >
            <GithubIcon size={15} />
            <span className="hidden sm:inline">GitHub</span>
            <span className="text-[#D9FF00] font-mono text-[0.72rem] font-bold">★ 4.9k</span>
          </a>
        </div>

      </div>
    </header>
  );
}
