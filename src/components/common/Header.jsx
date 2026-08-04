import React from "react";
import { motion } from "framer-motion";
import { GithubIcon } from "./Icons";
import veolmsLogo from "../../assets/veolms-logo/White Logo.svg";
import veolmsMaskImage from "../../assets/veolms_mask.jpg";

export default function Header({ onToast, isAppLoaded = true }) {
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
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isAppLoaded ? 1 : 0, y: isAppLoaded ? 0 : -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full glass-header bg-[#080809]/60 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300"
    >
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
          <motion.span 
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: isAppLoaded ? 1 : 0, x: isAppLoaded ? 0 : -5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-space font-bold text-xl sm:text-2xl tracking-tight leading-none flex items-center transition-all duration-300 group-hover:brightness-125"
          >
            <span className="text-white">Veo</span>
            <span style={lmsGradientStyle} className="ml-[2px]">
              LMS
            </span>
          </motion.span>
        </a>

        {/* Center: Navigation Links */}
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: isAppLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-mono uppercase tracking-widest text-slate-400 absolute left-1/2 -translate-x-1/2"
        >
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
        </motion.nav>

        {/* Right: GitHub Action Button */}
        <motion.div 
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: isAppLoaded ? 1 : 0, x: isAppLoaded ? 0 : 5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onToast?.("⭐ Starred on GitHub!")}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
          >
            <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover:text-white transition-colors" />
            <span className="text-xs font-mono text-slate-300 group-hover:text-white font-medium">
              GitHub
            </span>
            <span className="flex items-center gap-1 font-mono text-[0.68rem] text-[#D9FF00] bg-[#D9FF00]/10 px-2 py-0.5 rounded-full border border-[#D9FF00]/20 font-bold ml-0.5">
              <span>★</span>
              <span>4.9k</span>
            </span>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}
