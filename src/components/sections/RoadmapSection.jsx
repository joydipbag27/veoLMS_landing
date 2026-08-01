import React, { useState } from 'react';
import { BuildingPublicUnderline } from '../doodles/Doodles';

const roadmapPhases = [
  {
    id: 'foundation',
    phaseNum: '01',
    title: 'Foundation',
    status: 'Released',
    statusBg: 'bg-[#D9FF00] text-[#080809]',
    statusBorder: 'border-[#D9FF00]',
    accentColor: '#D9FF00',
    checkpoints: [
      { name: 'Authentication', desc: 'Enterprise-grade OAuth, session cookies, and RBAC' },
      { name: 'Users', desc: 'Student and instructor profile schema management' },
      { name: 'Courses', desc: 'Course creation, metadata engine, and module structure' },
      { name: 'Enrollments', desc: 'Automated student enrollment and course access locks' }
    ],
    description: 'Core engine and CLI starter templates establishing security, authentication, and base database schemas.'
  },
  {
    id: 'learning-experience',
    phaseNum: '02',
    title: 'Learning Experience',
    status: 'In Progress',
    statusBg: 'bg-[#a5b4fc] text-[#0f172a]',
    statusBorder: 'border-[#a5b4fc]',
    accentColor: '#a5b4fc',
    checkpoints: [
      { name: 'Video Streaming', desc: 'HLS adaptive bitrate playback with chapter markers' },
      { name: 'Assignments', desc: 'Student submissions, instructor grading, and feedback' },
      { name: 'Certificates', desc: 'Dynamic PDF certificate generation on course completion' }
    ],
    description: 'HLS adaptive video player, interactive student quizzes, and automated certification engine.'
  },
  {
    id: 'platform',
    phaseNum: '03',
    title: 'Platform',
    status: 'Planned',
    statusBg: 'bg-[#38bdf8] text-[#080809]',
    statusBorder: 'border-[#38bdf8]',
    accentColor: '#38bdf8',
    checkpoints: [
      { name: 'Plugin SDK', desc: 'Clean extension hooks for third-party integrations' },
      { name: 'Themes', desc: 'Custom white-label CSS theme generator' },
      { name: 'API', desc: 'Comprehensive REST and GraphQL developer endpoints' },
      { name: 'Storage', desc: 'S3, R2, and local file storage adapters' }
    ],
    description: 'Extensible plugin marketplace, custom white-label theme engine, and multi-tenant cloud infrastructure.'
  }
];

export default function RoadmapSection() {
  const [activePhase, setActivePhase] = useState('foundation');
  const [hoveredCp, setHoveredCp] = useState(null);

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 select-none">
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] md:text-xs uppercase tracking-widest text-[#D9FF00] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D9FF00] animate-pulse" />
          <span className="text-slate-300 font-semibold">ROADMAP</span>
        </div>

        <div className="select-none flex flex-col items-center">
          <h2 className="font-grotesk font-extrabold uppercase text-white text-[3.2rem] sm:text-[5rem] md:text-[6.2rem] leading-[0.9] tracking-tight text-center">
            Building
          </h2>
          <div className="font-editorial italic text-white text-[3rem] sm:text-[4.6rem] md:text-[5.8rem] leading-[0.9] tracking-tight text-center font-normal mt-1 sm:mt-2">
            <span className="relative inline-block">
              in public.
              <BuildingPublicUnderline />
            </span>
          </div>
        </div>

        <p className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mt-6 font-normal max-w-2xl mx-auto">
          Every release, architectural decision, and milestone is shared openly with the community. Here's how VeoLMS is evolving.
        </p>
      </div>

      {/* Serpentine Vector Path Journey Container */}
      <div className="relative w-full min-h-[1100px] md:min-h-[1250px] py-10">
        
        {/* Background Responsive Vector SVG Path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1000 1300"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Base Guide Path */}
          <path
            d="M 500 30 C 880 180, 880 400, 500 520 C 120 640, 120 860, 500 980 C 820 1080, 780 1200, 500 1270"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="3"
            strokeDasharray="6 6"
          />

          {/* Accent Glowing Serpentine Path */}
          <path
            d="M 500 30 C 880 180, 880 400, 500 520 C 120 640, 120 860, 500 980 C 820 1080, 780 1200, 500 1270"
            stroke="#D9FF00"
            strokeWidth="2.5"
            strokeOpacity="0.5"
            strokeDasharray="14 14"
          />
        </svg>

        {/* Phase 01: FOUNDATION */}
        <div className="relative z-10 my-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          
          {/* Floating Editorial Card (Left Side) */}
          <div
            onMouseEnter={() => setActivePhase('foundation')}
            className={`w-full md:w-[480px] bg-[#121316] border rounded-3xl p-8 sm:p-10 relative overflow-hidden transition-all duration-400 shadow-2xl group cursor-pointer ${
              activePhase === 'foundation'
                ? 'border-[#D9FF00] scale-[1.02] shadow-[0_10px_40px_rgba(217,255,0,0.1)]'
                : 'border-white/15 hover:border-white/30'
            }`}
          >
            {/* Background Watermark */}
            <div className="absolute -right-2 -bottom-4 font-grotesk font-extrabold text-[8rem] text-white/[0.04] select-none pointer-events-none">
              01
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-widest">PHASE 01</span>
                <div className="flex items-center gap-2 font-mono text-[0.7rem] font-bold px-3.5 py-1 rounded-full bg-[#D9FF00] text-[#080809] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#080809]" />
                  <span>Released</span>
                </div>
              </div>

              <h3 className="font-grotesk text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Foundation
              </h3>

              {/* Checkpoint Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {roadmapPhases[0].checkpoints.map((cp, idx) => (
                  <span
                    key={idx}
                    onMouseEnter={() => setHoveredCp(cp.name)}
                    onMouseLeave={() => setHoveredCp(null)}
                    className={`font-mono text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                      hoveredCp === cp.name
                        ? 'bg-[#D9FF00] text-[#080809] font-bold scale-105'
                        : 'bg-white/[0.06] border border-white/10 text-slate-200 hover:border-[#D9FF00]/40'
                    }`}
                  >
                    • {cp.name}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-4 mt-2">
                {roadmapPhases[0].description}
              </p>
            </div>
          </div>

          {/* Connector Line & Path Node Marker */}
          <div className="hidden md:flex items-center gap-4 text-slate-500 font-mono text-xs">
            <div className={`h-px transition-all duration-300 border-t border-dashed ${activePhase === 'foundation' ? 'w-20 border-[#D9FF00]' : 'w-16 border-white/30'}`} />
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-[#D9FF00] border-4 border-[#080809] shadow-lg shadow-[#D9FF00]/40 relative z-10 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#080809]" />
              </div>
              <div className="absolute -inset-1 rounded-full bg-[#D9FF00]/30 animate-ping" />
            </div>
          </div>

        </div>

        {/* Phase 02: LEARNING EXPERIENCE */}
        <div className="relative z-10 my-28 flex flex-col md:flex-row-reverse items-center justify-between gap-8 max-w-5xl mx-auto">
          
          {/* Floating Editorial Card (Right Side) */}
          <div
            onMouseEnter={() => setActivePhase('learning-experience')}
            className={`w-full md:w-[480px] bg-[#121316] border rounded-3xl p-8 sm:p-10 relative overflow-hidden transition-all duration-400 shadow-2xl group cursor-pointer ${
              activePhase === 'learning-experience'
                ? 'border-[#a5b4fc] scale-[1.02] shadow-[0_10px_40px_rgba(165,180,252,0.15)]'
                : 'border-white/15 hover:border-white/30'
            }`}
          >
            {/* Background Watermark */}
            <div className="absolute -right-2 -bottom-4 font-grotesk font-extrabold text-[8rem] text-white/[0.04] select-none pointer-events-none">
              02
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-widest">PHASE 02</span>
                <div className="flex items-center gap-2 font-mono text-[0.7rem] font-bold px-3.5 py-1 rounded-full bg-[#a5b4fc] text-[#0f172a] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f172a] animate-pulse" />
                  <span>In Progress</span>
                </div>
              </div>

              <h3 className="font-grotesk text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Learning Experience
              </h3>

              {/* Checkpoint Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {roadmapPhases[1].checkpoints.map((cp, idx) => (
                  <span
                    key={idx}
                    onMouseEnter={() => setHoveredCp(cp.name)}
                    onMouseLeave={() => setHoveredCp(null)}
                    className={`font-mono text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                      hoveredCp === cp.name
                        ? 'bg-[#a5b4fc] text-[#0f172a] font-bold scale-105'
                        : 'bg-white/[0.06] border border-white/10 text-slate-200 hover:border-[#a5b4fc]/40'
                    }`}
                  >
                    • {cp.name}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-4 mt-2">
                {roadmapPhases[1].description}
              </p>
            </div>
          </div>

          {/* Connector Line & Path Node Marker */}
          <div className="hidden md:flex items-center gap-4 text-slate-500 font-mono text-xs">
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-[#a5b4fc] border-4 border-[#080809] shadow-lg shadow-[#a5b4fc]/40 relative z-10 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0f172a]" />
              </div>
              <div className="absolute -inset-1 rounded-full bg-[#a5b4fc]/30 animate-pulse" />
            </div>
            <div className={`h-px transition-all duration-300 border-t border-dashed ${activePhase === 'learning-experience' ? 'w-20 border-[#a5b4fc]' : 'w-16 border-white/30'}`} />
          </div>

        </div>

        {/* Phase 03: PLATFORM */}
        <div className="relative z-10 my-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          
          {/* Floating Editorial Card (Left Side) */}
          <div
            onMouseEnter={() => setActivePhase('platform')}
            className={`w-full md:w-[480px] bg-[#121316] border rounded-3xl p-8 sm:p-10 relative overflow-hidden transition-all duration-400 shadow-2xl group cursor-pointer ${
              activePhase === 'platform'
                ? 'border-[#38bdf8] scale-[1.02] shadow-[0_10px_40px_rgba(56,189,248,0.15)]'
                : 'border-white/15 hover:border-white/30'
            }`}
          >
            {/* Background Watermark */}
            <div className="absolute -right-2 -bottom-4 font-grotesk font-extrabold text-[8rem] text-white/[0.04] select-none pointer-events-none">
              03
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-slate-400 font-bold uppercase tracking-widest">PHASE 03</span>
                <div className="flex items-center gap-2 font-mono text-[0.7rem] font-bold px-3.5 py-1 rounded-full bg-[#38bdf8] text-[#080809] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#080809]" />
                  <span>Planned</span>
                </div>
              </div>

              <h3 className="font-grotesk text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Platform
              </h3>

              {/* Checkpoint Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {roadmapPhases[2].checkpoints.map((cp, idx) => (
                  <span
                    key={idx}
                    onMouseEnter={() => setHoveredCp(cp.name)}
                    onMouseLeave={() => setHoveredCp(null)}
                    className={`font-mono text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                      hoveredCp === cp.name
                        ? 'bg-[#38bdf8] text-[#080809] font-bold scale-105'
                        : 'bg-white/[0.06] border border-white/10 text-slate-200 hover:border-[#38bdf8]/40'
                    }`}
                  >
                    • {cp.name}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-4 mt-2">
                {roadmapPhases[2].description}
              </p>
            </div>
          </div>

          {/* Connector Line & Path Node Marker */}
          <div className="hidden md:flex items-center gap-4 text-slate-500 font-mono text-xs">
            <div className={`h-px transition-all duration-300 border-t border-dashed ${activePhase === 'platform' ? 'w-20 border-[#38bdf8]' : 'w-16 border-white/30'}`} />
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-[#38bdf8] border-4 border-[#080809] shadow-lg shadow-[#38bdf8]/40 relative z-10 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#080809]" />
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
