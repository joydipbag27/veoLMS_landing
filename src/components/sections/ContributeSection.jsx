import React, { useState } from 'react';
import { ShapeFutureUnderline } from '../doodles/Doodles';
import { GithubIcon, DiscordIcon } from '../common/Icons';
import { ArrowUpRight, MessageSquare, Heart, BookOpen } from 'lucide-react';

const contributionCards = [
  {
    id: 'code',
    title: 'Contribute Code',
    desc: 'Help build new features, review pull requests, fix bugs, and improve the core platform.',
    action: 'View GitHub',
    url: 'https://github.com',
    accentColor: '#D9FF00', // Lime
    hoverText: 'text-[#080809]',
    gridSpan: 'sm:col-span-2 md:col-span-1 min-h-[220px]'
  },
  {
    id: 'docs',
    title: 'Improve Documentation',
    desc: 'Write guides, tutorials, architecture examples, API documentation, and onboarding content.',
    action: 'Improve Docs',
    url: 'https://github.com',
    accentColor: '#a5b4fc', // Lavender
    hoverText: 'text-[#0f172a]',
    gridSpan: 'sm:col-span-1 min-h-[220px]'
  },
  {
    id: 'design',
    title: 'Design & UX',
    desc: 'Help improve branding, user experience, accessibility, and modern visual design system.',
    action: 'Design Together',
    url: 'https://github.com',
    accentColor: '#ff7849', // Soft Orange
    hoverText: 'text-[#080809]',
    gridSpan: 'sm:col-span-1 min-h-[220px]'
  },
  {
    id: 'sponsor',
    title: 'Support Development',
    desc: 'Financial contributions help accelerate core development, infrastructure, and releases.',
    action: 'Sponsor VeoLMS',
    url: 'https://github.com',
    accentColor: '#f43f5e', // Rose
    hoverText: 'text-white',
    gridSpan: 'sm:col-span-2 md:col-span-1 min-h-[220px]'
  },
  {
    id: 'issues',
    title: 'Report Issues & Ideas',
    desc: 'Share bugs, feature requests, and public discussions that directly shape the project roadmap.',
    action: 'Open Discussion',
    url: 'https://github.com',
    accentColor: '#38bdf8', // Muted Blue
    hoverText: 'text-[#080809]',
    gridSpan: 'sm:col-span-1 min-h-[220px]'
  },
  {
    id: 'share',
    title: 'Spread the Word',
    desc: 'Share VeoLMS with educators, organizations, and developers who believe in open education.',
    action: 'Share Project',
    url: 'https://github.com',
    accentColor: '#fef08a', // Warm Cream
    hoverText: 'text-[#080809]',
    gridSpan: 'sm:col-span-1 min-h-[220px]'
  }
];

export default function ContributeSection({ onToast }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
      
      {/* Asymmetrical 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, Supporting Copy & Philosophy Statement */}
        <div className="lg:col-span-5 select-none sticky top-12">
          
          {/* Top Tag: • CONTRIBUTE */}
          <div className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] md:text-xs uppercase tracking-widest text-[#D9FF00] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D9FF00] animate-pulse" />
            <span className="text-slate-300 font-semibold">CONTRIBUTE</span>
          </div>

          {/* Headline */}
          <div className="flex flex-col items-start text-left mb-4">
            <h2 className="font-grotesk font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
              Help shape the future of <span className="font-editorial italic font-normal text-white">VeoLMS.</span>
            </h2>
          </div>

          {/* Supporting Copy */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            VeoLMS is built in public and driven by its community. Whether you contribute code, improve documentation, support development financially, or simply share ideas, every contribution helps move the project forward.
          </p>

          {/* Understated Philosophy Statement */}
          <div className="mt-10 p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-slate-400 text-xs sm:text-sm font-mono leading-relaxed">
            <p>
              "Every contribution matters — whether it's your first pull request, a documentation fix, a feature suggestion, or helping fund development."
            </p>
          </div>

        </div>

        {/* Right Column: 6 Interactive Contribution Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contributionCards.map((card) => {
            const isHovered = hoveredCard === card.id;

            return (
              <a
                key={card.id}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onToast?.(`Thank you for wanting to ${card.action}!`)}
                className={`bg-[#121316] border border-white/12 rounded-3xl p-7 relative overflow-hidden flex flex-col justify-between transition-all duration-400 cursor-pointer select-none group ${card.gridSpan} ${
                  isHovered ? 'scale-[1.02] border-transparent shadow-2xl' : 'hover:border-white/30'
                }`}
              >
                {/* Solid Fill Background Animation */}
                <div
                  className="absolute inset-0 transition-opacity duration-400 pointer-events-none"
                  style={{
                    backgroundColor: card.accentColor,
                    opacity: isHovered ? 1 : 0
                  }}
                />

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <h3
                      className={`font-grotesk text-2xl font-bold tracking-tight mb-2 transition-colors duration-300 ${
                        isHovered ? card.hoverText : 'text-white'
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                        isHovered ? `${card.hoverText} opacity-90` : 'text-slate-400'
                      }`}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Primary Action Link */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-300 ${
                        isHovered ? card.hoverText : 'text-[#D9FF00]'
                      }`}
                    >
                      <span>{card.action}</span>
                      <ArrowUpRight
                        size={14}
                        className={`transition-transform duration-300 ${
                          isHovered ? 'translate-x-1 -translate-y-1' : ''
                        }`}
                      />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>

      {/* Bottom Final Invitation Actions Row */}
      <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono tracking-wider uppercase select-none">
        
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onToast?.("⭐ Starred on GitHub")}
          className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/12 text-slate-300 hover:text-white px-4 py-2.5 rounded-full transition-all"
        >
          <GithubIcon size={14} className="text-[#D9FF00]" />
          <span>Star on GitHub</span>
        </a>

        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onToast?.("💬 Joined Discord Server")}
          className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/12 text-slate-300 hover:text-white px-4 py-2.5 rounded-full transition-all"
        >
          <DiscordIcon size={14} className="text-[#a5b4fc]" />
          <span>Join Discord</span>
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onToast?.("❤️ Sponsor VeoLMS")}
          className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/12 text-slate-300 hover:text-white px-4 py-2.5 rounded-full transition-all"
        >
          <Heart size={14} className="text-[#f43f5e]" />
          <span>Sponsor</span>
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onToast?.("📖 Read Documentation")}
          className="flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] border border-white/12 text-slate-300 hover:text-white px-4 py-2.5 rounded-full transition-all"
        >
          <BookOpen size={14} className="text-[#38bdf8]" />
          <span>Read Documentation</span>
        </a>

      </div>

    </section>
  );
}
