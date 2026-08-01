import React, { useState } from 'react';
import { EducationBuildingUnderline } from '../doodles/Doodles';

const buildingSteps = [
  {
    num: '01',
    title: 'CREATE',
    subtitle: 'Build structured learning experiences.',
    capabilities: ['Courses', 'Lessons', 'Sections', 'Rich Editor', 'Drafts'],
    accentColor: '#D9FF00', // Lime
  },
  {
    num: '02',
    title: 'ORGANIZE',
    subtitle: 'Structure and manage your educational content.',
    capabilities: ['Categories', 'Learning Paths', 'Course Management', 'Enrollments', 'File Library'],
    accentColor: '#ff7849', // Soft Orange
  },
  {
    num: '03',
    title: 'TEACH',
    subtitle: 'Deliver interactive lessons and assess student progress.',
    capabilities: ['Video Lessons', 'Quizzes', 'Assignments', 'Certificates', 'Live Sessions (Planned)'],
    accentColor: '#38bdf8', // Muted Blue
  },
  {
    num: '04',
    title: 'ENGAGE',
    subtitle: 'Foster active learning and community discussions.',
    capabilities: ['Discussions', 'Announcements', 'Progress Tracking', 'Notes', 'Bookmarks'],
    accentColor: '#a5b4fc', // Lavender
  },
  {
    num: '05',
    title: 'GROW',
    subtitle: 'Scale your platform with payments, analytics, and APIs.',
    capabilities: ['Analytics', 'Payments', 'Coupons', 'Plugins', 'API Integrations'],
    accentColor: '#fef08a', // Warm Cream
  }
];

export default function BuildingSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 md:py-32 relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 select-none">
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] md:text-xs uppercase tracking-widest text-[#D9FF00] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D9FF00] animate-pulse" />
          <span className="text-slate-300 font-semibold">WHAT WE'RE BUILDING</span>
        </div>

        <div className="select-none flex flex-col items-center">
          <h2 className="font-grotesk font-extrabold uppercase text-white text-[3.2rem] sm:text-[5rem] md:text-[6rem] leading-[0.9] tracking-tight text-center">
            Everything we're building
          </h2>
          <div className="font-editorial italic text-white text-[3rem] sm:text-[4.6rem] md:text-[5.6rem] leading-[0.9] tracking-tight text-center font-normal mt-1 sm:mt-2">
            <span>for </span>
            <span className="relative inline-block">
              modern education.
              <EducationBuildingUnderline />
            </span>
          </div>
        </div>

        <p className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mt-6 font-normal max-w-2xl mx-auto">
          A growing platform designed to give creators, institutions, and organizations everything they need to build modern learning experiences.
        </p>
      </div>

      {/* Vertical Interactive Workflow Journey */}
      <div className="flex flex-col gap-4 select-none">
        {buildingSteps.map((step, idx) => {
          const isActive = activeIndex === idx;

          return (
            <div
              key={step.num}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`transition-all duration-450 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden rounded-3xl cursor-pointer ${
                isActive
                  ? 'bg-[#121316] border border-white/20 p-8 sm:p-10 shadow-2xl'
                  : 'bg-transparent border border-white/10 hover:border-white/20 p-6 sm:p-8 opacity-70 hover:opacity-100'
              }`}
            >
              {/* Left Solid Accent Indicator Line */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-400"
                style={{
                  backgroundColor: step.accentColor,
                  opacity: isActive ? 1 : 0
                }}
              />

              {/* Main Step Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  {/* Step Number */}
                  <span
                    className="font-mono text-sm sm:text-base font-bold transition-colors duration-300"
                    style={{ color: isActive ? step.accentColor : '#64748b' }}
                  >
                    {step.num}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-grotesk text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white transition-colors duration-300"
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Short Sentence */}
                <p className="text-slate-300 text-sm sm:text-base md:text-lg font-normal max-w-md">
                  {step.subtitle}
                </p>
              </div>

              {/* Expandable Capabilities Section */}
              <div
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'grid-rows-[1fr] opacity-100 mt-8 pt-6 border-t border-white/10' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {step.capabilities.map((cap, capIdx) => (
                      <span
                        key={capIdx}
                        className="font-mono text-xs sm:text-sm px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 text-slate-200 hover:border-white/30 transition-all cursor-default"
                        style={{
                          transitionDelay: isActive ? `${capIdx * 40}ms` : '0ms'
                        }}
                      >
                        • {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
