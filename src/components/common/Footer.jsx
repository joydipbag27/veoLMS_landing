import React from 'react';

export default function Footer({ onToast }) {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-slate-600 font-mono text-[0.68rem] uppercase tracking-wider border-t border-white/[0.04] relative z-20 shrink-0">
      <div>© 2026 VEOLMS — OPEN SOURCE LMS</div>
      <div>AGPL-3.0 LICENSE</div>
    </footer>
  );
}
