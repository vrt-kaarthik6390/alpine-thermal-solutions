/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Thermometer,
  Layers,
  ShieldCheck,
  Gauge,
  Sparkles,
  Zap,
  Info
} from 'lucide-react';
import { GALLERY_DATA } from '../data';

export default function Gallery() {
  // Carousel active indices
  const [indexGels, setIndexGels] = useState(0);
  const [indexPcm, setIndexPcm] = useState(0);
  const [indexEut, setIndexEut] = useState(0);

  // Group slide arrays
  const gelSlides = GALLERY_DATA.slice(0, 3);
  const pcmSlides = GALLERY_DATA.slice(3, 6);
  const eutSlides = GALLERY_DATA.slice(6, 9);

  // Auto advancements
  useEffect(() => {
    const timerG = setInterval(() => {
      setIndexGels((prev) => (prev + 1) % 3);
    }, 4000);
    const timerP = setInterval(() => {
      setIndexPcm((prev) => (prev + 1) % 3);
    }, 4500);
    const timerE = setInterval(() => {
      setIndexEut((prev) => (prev + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(timerG);
      clearInterval(timerP);
      clearInterval(timerE);
    };
  }, []);

  return (
    <div id="gallery-panel-view" className="font-sans text-slate-800 bg-[#F0F4F8] pt-16">

      {/* 10.1 GALLERY HERO */}
      <section
        id="gallery-hero"
        className="relative bg-[#0D1B2A] text-white py-20 px-4 sm:px-6 lg:px-8 text-center min-h-[35vh] flex flex-col justify-center"
      >
        <div className="absolute inset-0 bg-radial-gradient(at right bottom, rgba(0, 85, 204, 0.1) 0%, transparent 60%) pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.3em] uppercase">
            Alpine Systems Works Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-tight uppercase mt-4">
            Precision In Every Frame
          </h1>
          <p className="mt-4 text-sm text-slate-300 font-sans max-w-2xl mx-auto pl-2 border-l-2 border-blue-500/50">
            Take a deep technical look inside our calibrated testing, co-extruded polymers, blow-mold casing parameters, and spectrophotometric formulations.
          </p>
        </div>
      </section>

      {/* 10.2 SECTION 1: GEL PACKS CAROUSEL (LIGHT DESIGN BLOCK) */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
            <div>
              <span className="text-xs font-mono font-bold text-[#0055CC] tracking-widest uppercase">
                Dynamic Component Group A
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase text-[#0D1B2A] tracking-tight mt-1">
                Gel Pack Sealing & Volume
              </h2>
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => setIndexGels((prev) => (prev - 1 + 3) % 3)}
                className="w-10 h-10 hover:bg-[#0055CC] border border-slate-300 hover:text-white rounded flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Gel Pack slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIndexGels((prev) => (prev + 1) % 3)}
                className="w-10 h-10 hover:bg-[#0055CC] border border-slate-300 hover:text-white rounded flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Gel Pack slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider Core representation */}
          <div className="bg-[#F0F4F8] border border-slate-200 rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center min-h-[380px]">
            {/* Descriptive block */}
            <div className="lg:w-1/2 flex flex-col items-start text-left">
              <div className="flex items-center gap-1.5 text-xs text-[#0055CC] font-mono uppercase font-bold tracking-widest">
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Gels Calibration Node #{indexGels + 1}</span>
              </div>
              <h3 className="text-xl font-sans font-black text-[#0D1B2A] uppercase tracking-wide mt-3">
                {gelSlides[indexGels].title}
              </h3>
              <p className="text-sm text-slate-500 tracking-relaxed font-sans mt-3">
                {gelSlides[indexGels].description}
              </p>

              <div className="mt-6 flex items-center gap-2 bg-white border border-slate-200 rounded p-3 text-[11px] font-mono text-slate-600 max-w-sm">
                <Info className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Engineered using multi-layer co-extruded films with guaranteed burst resistance &gt;120 kg.</span>
              </div>
            </div>

            {/* Visual Vector Schematic display */}
            <div className="lg:w-1/2 flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={indexGels}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md aspect-video bg-[#0D1B2A] rounded-xl border border-slate-800 p-5 text-white text-left font-mono relative shadow-md"
                >
                  <span className="absolute top-2 right-4 text-[7px] text-cyan-400 font-bold uppercase tracking-widest">WELD INTEGRITY ASSURED</span>

                  <div className="flex-grow flex items-center justify-center my-4 h-32">
                    {indexGels === 0 && (
                      <div className="flex flex-col items-center">
                        <Thermometer className="w-8 h-8 text-cyan-400 animate-pulse mb-2" />
                        <span className="text-[10px] text-white font-extrabold tracking-widest">SEAM HEAT WELD TESTER</span>
                        <span className="text-[8px] text-slate-400 mt-1">Ultrasonic frequency: 28 kHz</span>
                      </div>
                    )}
                    {indexGels === 1 && (
                      <div className="flex gap-4">
                        <div className="w-12 h-10 border border-slate-700 bg-slate-900 rounded flex flex-col items-center justify-center">
                          <span className="text-[8px] text-white">CH1</span>
                          <span className="text-[6.5px] text-cyan-400">0.02 bar</span>
                        </div>
                        <div className="w-12 h-10 border border-slate-750 bg-slate-900 rounded flex flex-col items-center justify-center">
                          <span className="text-[8px] text-white">CH2</span>
                          <span className="text-[6.5px] text-cyan-400">0.01 bar</span>
                        </div>
                      </div>
                    )}
                    {indexGels === 2 && (
                      <div className="flex flex-col items-center gap-1.5">
                        <Gauge className="w-8 h-8 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
                        <span className="text-[8.5px] text-emerald-400 font-extrabold uppercase">Volumetric filling dosing OK</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/5 pt-2 flex justify-between text-[7px] text-slate-500">
                    <span>UNIT CALIB ID: #GP-{indexGels + 1}</span>
                    <span>ALARM SET: 0.05 K delta</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots tracker Gels */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {gelSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndexGels(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${indexGels === i ? 'w-6 bg-[#0055CC]' : 'w-2 bg-slate-200 hover:bg-slate-350'
                  }`}
                aria-label={`Go to gel pack slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10.3 SECTION 2: PCM THERMAL PLATES (DARK DESIGN BLOCK) */}
      <section className="py-16 bg-[#0D1B2A] text-white px-4 sm:px-6 lg:px-8 border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-widest uppercase text-orange-400">
                Dynamic Component Group B
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight text-white mt-1">
                PCM Panel Rigid HDPE Structural
              </h2>
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => setIndexPcm((prev) => (prev - 1 + 3) % 3)}
                className="w-10 h-10 hover:bg-[#0055CC] text-white border border-slate-700 hover:border-blue-500 rounded flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous PCM Panel slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIndexPcm((prev) => (prev + 1) % 3)}
                className="w-10 h-10 hover:bg-[#0055CC] text-white border border-slate-700 hover:border-blue-500 rounded flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next PCM Panel slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider Core representation */}
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center min-h-[380px]">
            {/* Descriptive block */}
            <div className="lg:w-1/2 flex flex-col items-start text-left">
              <div className="flex items-center gap-1.5 text-xs text-orange-400 font-mono uppercase font-bold tracking-widest">
                <ShieldCheck className="w-4 h-4 text-orange-400" />
                <span>PCM Calibration Node #{indexPcm + 4}</span>
              </div>
              <h3 className="text-xl font-sans font-black text-white uppercase tracking-wide mt-3">
                {pcmSlides[indexPcm].title}
              </h3>
              <p className="text-sm text-slate-300 tracking-relaxed font-sans mt-3">
                {pcmSlides[indexPcm].description}
              </p>

              <div className="mt-6 flex items-center gap-2 bg-slate-900 border border-white/5 rounded p-3 text-[11px] font-mono text-slate-400 max-w-sm">
                <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Engineered using virgin food-grade HDPE shells, sealed via molecular spin-fused weld port anchors.</span>
              </div>
            </div>

            {/* Visual Vector Schematic display */}
            <div className="lg:w-1/2 flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={indexPcm}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md aspect-video bg-[#102A43] rounded-xl border border-blue-900/35 p-5 text-white text-left font-mono relative shadow-xl"
                >
                  <span className="absolute top-2 right-4 text-[7px] text-[#FF6B35] font-bold uppercase tracking-widest">HDPE PROFILE VERIFIED</span>

                  <div className="flex-grow flex items-center justify-center my-4 h-32">
                    {indexPcm === 0 && (
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-slate-800 rounded border-2 border-slate-600 flex items-center justify-center p-2 shadow-inner">
                          <Layers className="w-8 h-8 text-cyan-400" />
                        </div>
                        <div className="flex flex-col text-[8px] text-slate-300">
                          <span>Case Thickness: 2.80 mm</span>
                          <span>Flat Stack Profile index: OK</span>
                          <span>Internal chamber ribbing: Verified</span>
                        </div>
                      </div>
                    )}
                    {indexPcm === 1 && (
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-6 rounded-full bg-slate-800 border-2 border-dashed border-[#FF6B35] flex items-center justify-center text-[7px] animate-pulse">
                          SPIN WELD FUSION LAB RX
                        </div>
                        <span className="text-[8px] text-slate-400 mt-2">Plugs depth tolerance: &lt; 0.1 mm</span>
                      </div>
                    )}
                    {indexPcm === 2 && (
                      <div className="flex items-baseline gap-1 bg-slate-900 border border-slate-750 px-4 py-2 rounded text-[11.5px] font-bold text-center">
                        <span>Plateau Locked:</span>
                        <span className="text-cyan-400 font-black">+4.0°C</span>
                        <span className="text-[7.5px] text-slate-500">CORRIDOR</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/5 pt-2 flex justify-between text-[7px] text-slate-500">
                    <span>UNIT CALIB ID: #PCM-{indexPcm + 4}</span>
                    <span>PLATES VOLUME VALUE: 900G</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots tracker Pcm */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {pcmSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndexPcm(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${indexPcm === i ? 'w-6 bg-[#FF6B35]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                aria-label={`Go to pcm slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10.4 SECTION 3: EUTECTIC CHEMISTRIES (LIGHT DESIGN BLOCK) */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 text-left">
            <div>
              <span className="text-xs font-mono font-bold text-[#0055CC] tracking-widest uppercase">
                Dynamic Component Group C
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase text-[#0D1B2A] tracking-tight mt-1">
                Eutectic chemistry Molecular Formula
              </h2>
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => setIndexEut((prev) => (prev - 1 + 3) % 3)}
                className="w-10 h-10 hover:bg-[#0055CC] border border-slate-300 hover:text-white rounded flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Eutectic slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIndexEut((prev) => (prev + 1) % 3)}
                className="w-10 h-10 hover:bg-[#0055CC] border border-slate-300 hover:text-white rounded flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Eutectic slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider Core representation */}
          <div className="bg-[#F0F4F8] border border-slate-200 rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center min-h-[380px]">
            {/* Descriptive block */}
            <div className="lg:w-1/2 flex flex-col items-start text-left">
              <div className="flex items-center gap-1.5 text-xs text-[#0055CC] font-mono uppercase font-bold tracking-widest">
                <Sparkles className="w-4 h-4 text-blue-500 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Chemistry Calibration Node #{indexEut + 7}</span>
              </div>
              <h3 className="text-xl font-sans font-black text-[#0D1B2A] uppercase tracking-wide mt-3">
                {eutSlides[indexEut].title}
              </h3>
              <p className="text-sm text-slate-500 tracking-relaxed font-sans mt-3">
                {eutSlides[indexEut].description}
              </p>

              <div className="mt-6 flex items-center gap-2 bg-white border border-slate-200 rounded p-3 text-[11px] font-mono text-slate-600 max-w-sm">
                <Info className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Stable Magnesium Chloride and salt hydrates with zero phase segregation over 500+ freeze cycles.</span>
              </div>
            </div>

            {/* Visual Vector Schematic display */}
            <div className="lg:w-1/2 flex items-center justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={indexEut}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md aspect-video bg-[#0D1B2A] rounded-xl border border-slate-800 p-5 text-white text-left font-mono relative shadow-md"
                >
                  <span className="absolute top-2 right-4 text-[7px] text-cyan-400 font-bold uppercase tracking-widest">THERMOCHEMICAL CALIB PLOTTING</span>

                  <div className="flex-grow flex items-center justify-center my-4 h-32">
                    {indexEut === 0 && (
                      <div className="flex gap-4">
                        <div className="flex flex-col text-[8.5px] text-[#A0AEC0] gap-1 max-w-[140px]">
                          <span>Spectrometry Phase Map:</span>
                          <span className="text-[#FF6B35]">No phase separation</span>
                          <span className="text-cyan-400">Stable Salt chains</span>
                        </div>
                        <div className="w-16 h-12 bg-slate-900 border border-slate-700/80 rounded flex items-center justify-center relative shadow-inner">
                          <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                        </div>
                      </div>
                    )}
                    {indexEut === 1 && (
                      <div className="flex flex-col items-center">
                        <span className="text-[12px] text-white font-black">MgCl₂ Eutectic Plateau</span>
                        <span className="text-[9px] text-[#FF6B35] tracking-widest mt-1">-21.0°C SUB-ZERO CORES</span>
                      </div>
                    )}
                    {indexEut === 2 && (
                      <div className="flex gap-2">
                        <div className="h-10 px-2.5 bg-slate-900 border border-slate-750 rounded flex items-center text-[8.5px] text-white font-extrabold gap-1 animate-pulse">
                          <span>Log Node: ACTIVE</span>
                          <span className="text-emerald-400">Excursion Delta: 0.0 K</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/5 pt-2 flex justify-between text-[7px] text-slate-500">
                    <span>UNIT CALIB ID: #EUT-{indexEut + 7}</span>
                    <span>PLATES STABILIZED CYCLE INDEX: 500+</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots tracker Eutectics */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {eutSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndexEut(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${indexEut === i ? 'w-6 bg-[#0055CC]' : 'w-2 bg-slate-200 hover:bg-slate-350'
                  }`}
                aria-label={`Go to eutectic slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
