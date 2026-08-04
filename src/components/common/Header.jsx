import React from "react";
import { GithubIcon } from "./Icons";
import veolmsLogo from "../../assets/veolms-logo/White Logo.svg";
import veolmsMaskImage from "../../assets/veolms_mask.jpg";

export default function Header({ onToast }) {
  // Vibrant text mask style matching the hero section for "LMS"
  const lmsGradientStyle = {
    backgroundImage: `url(${veolmsMaskImage}), linear-gradient(135deg, #D9FF00 0%, #a3e635 100%)`,
    backgroundSize: "100% 200%, 100% 100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  const navLinks = [
    {
      label: "Manifesto",
      href: "#manifesto",
      toastMsg: "📖 VeoLMS Open Manifesto",
    },
    { label: "Docs", href: "#docs", toastMsg: "📚 Documentation" },
    {
      label: "Architecture",
      href: "#architecture",
      toastMsg: "⚡ Architecture",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full glass-header bg-[#080809]/60 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-3.5 flex items-center justify-between relative">
        {/* Left: Combined Clickable Brand (Logo + Wordmark) */}
        <a
          href="#"
          className="flex items-center group shrink-0 select-none cursor-pointer py-0.5"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            onToast?.("🚀 VeoLMS Home");
          }}
        >
          <img
            src={veolmsLogo}
            alt="VeoLMS Logo"
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 ease-out"
          />
          <span className="font-space font-bold text-xl sm:text-2xl tracking-tight leading-none flex items-center transition-all duration-300 group-hover:brightness-145">
            <span className="text-white">Veo</span>
            <span style={lmsGradientStyle} className="ml-[2px]">
              LMS
            </span>
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-mono uppercase tracking-widest text-slate-400 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onToast?.(link.toastMsg);
                const target = document.querySelector(link.href);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative py-1.5 text-slate-400 hover:text-white transition-colors duration-200 group/nav"
            >
              <span>{link.label}</span>
              {/* Subtle underline hover animation */}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-white via-[#D9FF00] to-[#D9FF00] scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full shadow-[0_0_8px_rgba(217,255,0,0.6)]" />
            </a>
          ))}
        </nav>

        {/* Far Right: GitHub Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white/[0.04] border border-white/15 hover:border-[#D9FF00]/50 hover:bg-[#D9FF00]/10 text-slate-200 hover:text-white px-4 py-2 rounded-full text-xs font-medium font-mono transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(217,255,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            onClick={() => onToast?.("⭐ Starring VeoLMS on GitHub")}
          >
            <GithubIcon size={15} />
            <span className="hidden sm:inline">GitHub</span>
            <span className="text-[#D9FF00] font-mono text-[0.72rem] font-bold">
              ★ 4.9k
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
