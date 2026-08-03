import React from 'react';
import { GithubIcon } from './Icons';
import veolmsLogo from '../../assets/dark cropped variation.png';

export default function Header({ onToast }) {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 pt-6 pb-2 flex items-center justify-between relative z-30 shrink-0 opacity-85 hover:opacity-100 transition-opacity">
      <a href="#" className="flex items-center gap-2.5 font-grotesk text-xl font-extrabold tracking-tight text-white hover:opacity-90 transition-opacity group">
        <img
          src={veolmsLogo}
          alt="VeoLMS Logo"
          className="h-10 w-auto object-contain rounded transition-transform group-hover:scale-105"
        />
      </a>

      <nav className="hidden md:flex items-center gap-8 text-[0.72rem] font-mono uppercase tracking-widest text-slate-400">
        <a href="#manifesto" onClick={(e) => { e.preventDefault(); onToast?.("📖 VeoLMS Open Manifesto"); }} className="hover:text-white transition-colors">Manifesto</a>
        <a href="#docs" onClick={(e) => { e.preventDefault(); onToast?.("📚 Documentation"); }} className="hover:text-white transition-colors">Docs</a>
        <a href="#architecture" onClick={(e) => { e.preventDefault(); onToast?.("⚡ Architecture"); }} className="hover:text-white transition-colors">Architecture</a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/[0.03] border border-white/10 hover:border-[#D9FF00]/40 text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full text-xs font-medium transition-all"
          onClick={() => onToast?.("⭐ Starring VeoLMS on GitHub")}
        >
          <GithubIcon size={14} />
          <span className="hidden sm:inline">GitHub</span>
          <span className="text-[#D9FF00] font-mono text-[0.7rem] font-bold">★ 4.9k</span>
        </a>
      </div>
    </header>
  );
}
