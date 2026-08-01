import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#121316] border border-[#D9FF00]/30 text-white px-4 py-2.5 rounded-full text-xs font-mono flex items-center gap-2.5 shadow-2xl animate-fade-in">
      <span className="w-1.5 h-1.5 rounded-full bg-[#D9FF00] animate-pulse" />
      <span>{message}</span>
    </div>
  );
}
