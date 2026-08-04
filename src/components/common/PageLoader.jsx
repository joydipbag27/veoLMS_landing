import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import veolmsLogo from "../../assets/veolms-logo/White Logo.svg";

// ============================================================================
// ANIMATION TIMING CONFIGURATION (Tweak durations here)
// ============================================================================
const LOADER_TIMINGS = {
  // Phase 1: How long the mascot remains centered in idle mode (ms)
  IDLE_PAUSE_MS: 3100,

  // Phase 2: How long it takes for the mascot to move upward to the top area
  LOGO_MOVE_MS: 650,
  LOGO_MOVE_SEC: 0.65,

  // Phase 3: How long it takes for the mascot logo to fade out once at the top
  LOGO_FADE_MS: 300,
  LOGO_FADE_SEC: 0.3,

  // Phase 4: How long it takes for the curtain screen to slide up and reveal landing page
  CURTAIN_SLIDE_MS: 750,
  CURTAIN_SLIDE_SEC: 0.75,
};

export default function PageLoader({ onComplete }) {
  const [phase, setPhase] = useState("loading"); // 'loading' | 'moving' | 'logoFading' | 'curtainSliding' | 'complete'

  useEffect(() => {
    // Step 1: Start moving logo up to top area after idle pause
    const moveTimer = setTimeout(() => {
      setPhase("moving");
    }, LOADER_TIMINGS.IDLE_PAUSE_MS);

    return () => clearTimeout(moveTimer);
  }, []);

  useEffect(() => {
    if (phase === "moving") {
      // Step 2: Once logo reaches top area, fade out logo FIRST
      const fadeLogoTimer = setTimeout(() => {
        setPhase("logoFading");
      }, LOADER_TIMINGS.LOGO_MOVE_MS);
      return () => clearTimeout(fadeLogoTimer);
    }

    if (phase === "logoFading") {
      // Step 3: Once logo is completely gone, start curtain slide up & reveal landing page
      const curtainTimer = setTimeout(() => {
        setPhase("curtainSliding");
        onComplete?.(); // Reveal landing page
      }, LOADER_TIMINGS.LOGO_FADE_MS);
      return () => clearTimeout(curtainTimer);
    }

    if (phase === "curtainSliding") {
      // Step 4: Unmount loader after curtain slide completes
      const finishTimer = setTimeout(() => {
        setPhase("complete");
      }, LOADER_TIMINGS.CURTAIN_SLIDE_MS);
      return () => clearTimeout(finishTimer);
    }
  }, [phase, onComplete]);

  if (phase === "complete") return null;

  const isMoving = phase === "moving";
  const isLogoFading = phase === "logoFading";
  const isCurtainSliding = phase === "curtainSliding";
  const isMovedOrFading = isMoving || isLogoFading || isCurtainSliding;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isCurtainSliding ? "-100%" : "0%" }}
        transition={{
          duration: LOADER_TIMINGS.CURTAIN_SLIDE_SEC,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="fixed inset-0 z-[100] bg-[#080809] flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden border-b border-white/10"
      >
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[450px] h-[450px] rounded-full bg-[#D9FF00]/[0.03] blur-[120px]" />
        </div>

        {/* Centered Octopus Mascot Container */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Transforming Octopus Mascot */}
          <motion.div
            initial={{ scale: 1, x: 0, y: 0, opacity: 1 }}
            animate={
              isMovedOrFading
                ? {
                    y: "-38vh",
                    scale: 0.5,
                    opacity: isLogoFading || isCurtainSliding ? 0 : 1,
                  }
                : {
                    y: [0, -6, 0],
                    scale: [1, 1.02, 1],
                    opacity: 1,
                  }
            }
            transition={
              isMovedOrFading
                ? {
                    y: {
                      duration: LOADER_TIMINGS.LOGO_MOVE_SEC,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    scale: {
                      duration: LOADER_TIMINGS.LOGO_MOVE_SEC,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    opacity: {
                      duration: LOADER_TIMINGS.LOGO_FADE_SEC,
                      ease: "easeOut",
                    },
                  }
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="relative flex items-center justify-center"
          >
            {/* Octopus Logo Icon */}
            <img
              src={veolmsLogo}
              alt="VeoLMS Mascot"
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_0_25px_rgba(217,255,0,0.25)]"
            />
          </motion.div>

          {/* Initializing Text Label */}
          <motion.div
            animate={{
              opacity: isMovedOrFading ? 0 : [0.4, 1, 0.4],
              y: isMovedOrFading ? 12 : 0,
            }}
            transition={
              isMovedOrFading
                ? { duration: 0.25, ease: "easeOut" }
                : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
            className="mt-6 font-mono text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-medium flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9FF00] animate-pulse" />
            <span>Initializing Assets</span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
