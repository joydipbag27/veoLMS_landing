import React from 'react';

const roadmapData = [
  {
    id: 'q4-2024',
    quarter: 'Q4',
    year: '2024',
    isCompleted: true,
    accentColor: '#ec4899', // Magenta Pink
    textColor: 'text-[#f472b6]',
    dotBg: 'bg-[#ec4899]',
    lineBg: 'bg-[#ec4899]',
    items: [
      { text: 'INTERNAL CORE ENGINE AUDIT', isHighlighted: true },
      { text: 'SECURITY & RBAC ARCHITECTURE', isHighlighted: true }
    ]
  },
  {
    id: 'q1-2025',
    quarter: 'Q1',
    year: '2025',
    isCompleted: true,
    accentColor: '#ffffff',
    textColor: 'text-slate-200',
    dotBg: 'bg-white',
    lineBg: 'bg-white',
    items: [
      { text: 'INTERNAL TESTNET LAUNCH', isHighlighted: true },
      { text: 'HLS ADAPTIVE VIDEO ENGINE', isHighlighted: true }
    ]
  },
  {
    id: 'mainnet',
    isMainnetCard: true,
    quarter: 'Q2',
    year: '2025',
    title: 'MAINNET LAUNCH',
    subtitle: 'V1.0 PUBLIC RELEASE'
  },
  {
    id: 'q2-2025',
    quarter: 'Q2',
    year: '2025',
    isCompleted: false,
    accentColor: '#ffffff',
    textColor: 'text-slate-200',
    dotBg: 'bg-white',
    lineBg: 'bg-white',
    items: [
      { text: 'DYNAMIC SUBSCRIPTION PROGRAM', isHighlighted: false },
      { text: 'INTERACTIVE ASSIGNMENT ENGINE', isHighlighted: false },
      { text: 'AUTOMATED CERTIFICATES API', isHighlighted: false }
    ]
  },
  {
    id: 'q3-2025',
    quarter: 'Q3',
    year: '2025',
    isCompleted: false,
    accentColor: '#ffffff',
    textColor: 'text-slate-200',
    dotBg: 'bg-white',
    lineBg: 'bg-white',
    items: [
      { text: 'ADVANCED ANALYTICS & MONITORING', isHighlighted: false },
      { text: 'WHITE-LABEL THEMES ENGINE', isHighlighted: false }
    ]
  },
  {
    id: 'q4-2025',
    quarter: 'Q4',
    year: '2025',
    isCompleted: false,
    accentColor: '#ffffff',
    textColor: 'text-slate-200',
    dotBg: 'bg-white',
    lineBg: 'bg-white',
    items: [
      { text: 'EXTENSIBLE PLUGIN SDK & MARKETPLACE', isHighlighted: false },
      { text: 'HYBRID CLOUD STORAGE ADAPTERS', isHighlighted: false }
    ]
  }
];

export default function RoadmapSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10 select-none overflow-hidden">
      
      {/* Background Dark Polyhedral Aesthetic matching reference */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none" fill="none">
          <polygon points="0,0 600,0 450,600 0,600" fill="#0d0e14" opacity="0.6" />
          <polygon points="600,0 1200,0 1200,600 800,600" fill="#12131b" opacity="0.4" />
          <polygon points="450,600 800,600 1200,200 300,100" fill="#090a0e" opacity="0.8" />
        </svg>
      </div>

      {/* Section Header - Compact & Left-Aligned */}
      <div className="relative z-10 mb-12 sm:mb-16 select-none max-w-2xl">
        <div className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-widest text-[#D9FF00] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#D9FF00] animate-pulse" />
          <span className="text-slate-300 font-semibold">ROADMAP</span>
        </div>

        <h2 className="font-grotesk font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
          Building <span className="font-editorial italic font-normal text-slate-300">in public.</span>
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3 font-normal max-w-xl">
          Every release, architectural decision, and milestone is shared openly with the community. Here's how VeoLMS is evolving.
        </p>
      </div>

      {/* Horizontal Timeline Container */}
      <div className="relative z-10 w-full overflow-x-auto custom-scrollbar pb-10 pt-6">
        <div className="min-w-[1050px] relative px-4">
          
          {/* Main Axis Baseline */}
          <div className="absolute top-[82px] left-6 right-8 h-[2px] flex items-center pointer-events-none z-0">
            {/* Completed Path Segment (Pink Line) */}
            <div className="h-full w-[26%] bg-[#ec4899] shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
            {/* Mainnet Card Gap & Remaining Path Segment */}
            <div className="h-full flex-1 bg-white/70" />
            {/* Right Arrowhead Indicator */}
            <svg className="w-3 h-3 text-white fill-current shrink-0 -ml-1" viewBox="0 0 10 10">
              <polygon points="0,0 10,5 0,10" />
            </svg>
          </div>

          {/* Timeline Milestones Columns */}
          <div className="relative z-10 flex items-start justify-between">
            
            {roadmapData.map((node) => {
              {/* Highlighted MAINNET LAUNCH Box Mounted on Axis */}
              if (node.isMainnetCard) {
                return (
                  <div key={node.id} className="flex flex-col items-center z-20 mx-1">
                    {/* Empty Space above line for exact alignment */}
                    <div className="h-10" />

                    {/* Central Card Container sitting on the axis line */}
                    <div className="bg-[#12131a] border-2 border-[#a855f7] rounded-xl px-5 py-4 text-center shadow-[0_0_25px_rgba(168,85,247,0.35)] relative group transition-all duration-300 hover:scale-105">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className="text-xl leading-none mb-0.5">🎉</span>
                        <span className="font-grotesk font-extrabold text-sm sm:text-base text-white uppercase tracking-wider leading-none">
                          {node.title}
                        </span>
                        <span className="font-mono text-[0.62rem] text-[#c084fc] uppercase tracking-widest font-semibold mt-0.5">
                          {node.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }

              {/* Standard Milestone Node */}
              return (
                <div key={node.id} className="flex flex-col items-start w-40 sm:w-44">
                  
                  {/* Quarter & Year Header above node */}
                  <div className="h-10 flex flex-col justify-end mb-2 pl-0.5">
                    <span
                      className={`font-grotesk font-bold text-base sm:text-lg leading-none ${
                        node.isCompleted ? 'text-[#ec4899]' : 'text-slate-300'
                      }`}
                    >
                      {node.quarter}
                    </span>
                    <span
                      className={`font-grotesk font-light text-sm sm:text-base leading-none mt-0.5 ${
                        node.isCompleted ? 'text-[#f472b6]' : 'text-slate-400'
                      }`}
                    >
                      {node.year}
                    </span>
                  </div>

                  {/* Axis Node Circular Indicator */}
                  <div className="relative my-2 flex items-center justify-start w-full">
                    <div
                      className={`w-5 h-5 rounded-full border-2 border-[#0a0b0e] flex items-center justify-center relative z-10 ${
                        node.isCompleted
                          ? 'bg-[#ec4899] shadow-[0_0_12px_rgba(236,72,153,0.9)]'
                          : 'bg-white'
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          node.isCompleted ? 'bg-white' : 'bg-[#0a0b0e]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Drop Line Stem & Items List Container */}
                  <div className="pl-2 pt-1 border-l border-white/20 ml-[9px] flex flex-col gap-3 min-h-[140px]">
                    {node.items?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 max-w-[155px]">
                        {/* Bullet Dot */}
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${
                            node.isCompleted
                              ? 'bg-[#ec4899]'
                              : 'bg-white/80'
                          }`}
                        />
                        {/* Deliverable Text */}
                        <span
                          className={`font-grotesk font-bold text-[0.72rem] sm:text-[0.76rem] tracking-wider uppercase leading-tight ${
                            item.isHighlighted
                              ? 'text-[#ec4899]'
                              : node.isCompleted
                              ? 'text-white'
                              : 'text-slate-300'
                          }`}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>

    </section>
  );
}
