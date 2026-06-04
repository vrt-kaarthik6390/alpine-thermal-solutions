/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ThermometerSnowflake, Zap } from 'lucide-react';
import Logo from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Alpine Thermal Engine...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Dynamic cold state status updates
    if (progress === 15) {
      setStatusText('Loading organic phase-change matrices...');
    } else if (progress === 40) {
      setStatusText('Validating salt-hydrate eutectic equilibria...');
    } else if (progress === 68) {
      setStatusText('Tuning magnesium-chloride thermal latencies...');
    } else if (progress === 90) {
      setStatusText('Establishing leak-proof containment shields...');
    } else if (progress === 100) {
      setStatusText('Thermal stability verified. Welcome.');
      const timeout = setTimeout(() => {
        setIsDone(true);
        setTimeout(onComplete, 600); // Allow fade out animation to finish
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="alpine-preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D1B2A] text-white p-6 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle frost ambient backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/25 via-[#0D1B2A] to-[#0A0F19] opacity-80 pointer-events-none" />

          {/* Core branding symbol */}
          <div className="relative flex flex-col items-center z-10 mb-8">
            <Logo color="white" layout="vertical" iconSize={180} />

            {/* Modern visual progress slider */}
            <div className="w-full bg-slate-800 h-[6px] rounded-full overflow-hidden relative mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-[#0055CC] to-cyan-400"
                style={{ width: `${progress}%` }}
                layoutId="loaderBar"
              />
            </div>

            {/* Under indicators */}
            <div className="flex justify-between items-center w-full px-1 text-slate-400 font-mono text-[10px]">
              <span className="flex items-center gap-1">
                <ThermometerSnowflake className="w-3 h-3 text-cyan-400 animate-pulse" />
                -24°C ACTIVE
              </span>
              <span className="font-bold text-blue-300">{progress}%</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                SECURE
              </span>
            </div>

            {/* Dynamic Status Log Line */}
            <motion.div
              className="h-6 mt-6 flex items-center justify-center text-center px-4"
              key={statusText}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.8, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-mono text-center text-[11px] uppercase tracking-wider text-slate-300">
                {statusText}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
