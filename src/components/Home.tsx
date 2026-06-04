/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Thermometer, 
  Leaf, 
  Globe2, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  ShieldAlert,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import activePacking from '@/assets/active-packing.jpg';
import pcmPanelsReal from '@/assets/pcm-panels-real.jpg';

interface HomeProps {
  onPageChange: (page: PageId) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  // Stagger state for gallery previews
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredPanel, setHoveredPanel] = useState<'left' | 'right' | null>(null);

  const gallerySlides = [
    {
      title: 'Automated Chemical Formulation Fill',
      category: 'Production Facility',
      description: 'Ultra-precise volumetric dosing of eutectic matrices.',
      seed: 'pharma-box',
      icon: <Layers className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Thermodynamic Calibration Chamber',
      category: 'Research & Lab',
      description: 'Rigorous heat profiles simulating flight cargos.',
      seed: 'laboratory',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Spin-Welding Integrity Tests',
      category: 'Precision Control',
      description: 'Testing molecular seals under sub-atmospheric stresses.',
      seed: 'factory',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-pulse" />
    },
    {
      title: 'Double-Barrier Gel Sealing Roll',
      category: 'Gel Pack Core',
      description: 'Hermetic thermal co-extruded seam stamping.',
      seed: 'logistics',
      icon: <ShieldAlert className="w-5 h-5 text-red-400" />
    }
  ];

  // Auto advancement for the gallery preview carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [gallerySlides.length]);

  return (
    <div id="home-view" className="relative font-sans text-slate-800 bg-[#F0F4F8]">
      
      {/* 7.1 HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-[90vh] flex items-center justify-center bg-[#0D1B2A] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Abstract Cold-Chain Grid Background & Frost Ripples */}
        <div className="absolute inset-0 z-0 opacity-40" aria-hidden="true">
          <svg className="w-full h-full text-blue-900/45 stroke-current" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" strokeWidth="0.15" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            {/* Dynamic thermal contours */}
            <motion.path
              d="M-10,50 Q25,80 50,40 T110,60"
              fill="none"
              stroke="#0055CC"
              strokeWidth="0.5"
              animate={{
                d: [
                  "M-10,50 Q25,80 50,40 T110,60",
                  "M-10,60 Q30,40 55,70 T110,50",
                  "M-10,50 Q25,80 50,40 T110,60"
                ]
              }}
              transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        {/* Ambient lights */}
        <div className="absolute -top-40 right-10 w-[500px] h-[500px] bg-[#0055CC]/15 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute top-[60%] -left-20 w-[400px] h-[400px] bg-[#FF6B35]/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
          {/* Left Hero Content */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            
            {/* Mountain Division Badge */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1.5 bg-[#0055CC]/25 text-blue-300 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#0055CC]/30 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Next-Gen Thermodynamic Architecture</span>
            </motion.div>

            {/* Tagline Headings - Mask staggered reveal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-tight text-white uppercase drop-shadow-md">
              <span className="block">Engineered To Protect.</span>
              <span className="block text-[#0055CC] relative inline-block">
                Built To Perform.
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#FF6B35]/80 rounded-full" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-xl font-sans pl-1 border-l-2 border-blue-500/50"
            >
              High-precision passive thermal packaging, rigid phase-change material panels, and non-toxic eutectic formulas engineered to protect critical pharmaceutical cargo across worldwide lanes.
            </motion.p>

            {/* CTA Controls */}
            <div className="mt-8 flex flex-wrap gap-4 items-center pl-1">
              <motion.button
                id="hero-cta-solutions"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPageChange('products')}
                className="bg-[#FF6B35] text-white px-8 py-4 rounded text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#FF6B35]/20 hover:shadow-[#FF6B35]/45 hover:bg-[#ff5514] transition-all cursor-pointer"
              >
                <span>Explore Solutions Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                id="hero-cta-secondary"
                whileHover={{ y: -3, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPageChange('contact')}
                className="border border-slate-500 px-6 py-4 rounded text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
              >
                Thermal Profiling Inquiry
              </motion.button>
            </div>

            {/* Micro details stats bar */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/5 w-full max-w-lg font-mono">
              <div>
                <span className="block text-xl font-bold text-white">0%</span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-widest mt-1">Excursion Rate</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white">-24°C</span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-widest mt-1">Minimum Range</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-white">100%</span>
                <span className="block text-[10px] text-slate-500 uppercase tracking-widest mt-1">ISO Validated</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Graphic - Side-by-Side Trapezoidal Photos with Custom Splitting Design */}
          <div className="md:col-span-5 flex justify-center items-center w-full min-h-[380px] md:min-h-[450px]">
            <motion.div
              id="hero-trapezoid-panels"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[1.3] md:aspect-[16/11] overflow-hidden rounded-2xl border border-[#0055CC]/25 flex shadow-2xl bg-[#0D1B2A]/40 backdrop-blur-sm shadow-[#0055CC]/15"
            >
              {/* Left Panel: Physical Shipping Box Packing */}
              <div 
                className="h-full relative overflow-hidden transition-all duration-500 ease-out cursor-pointer group/left"
                style={{ 
                  flex: hoveredPanel === 'left' ? 1.4 : hoveredPanel === 'right' ? 0.7 : 1,
                  clipPath: 'polygon(0 0, 100% 0, 81% 100%, 0 100%)',
                  marginRight: '-10%',
                  zIndex: hoveredPanel === 'left' ? 12 : 10
                }}
                onMouseEnter={() => setHoveredPanel('left')}
                onMouseLeave={() => setHoveredPanel(null)}
              >
                <img 
                  src={activePacking} 
                  alt="Pharma cargo active packing" 
                  className="absolute inset-0 w-full h-full object-cover contrast-[1.08] brightness-[1.02] transition-transform duration-700 ease-out group-hover/left:scale-110"
                />
                
                {/* Visual grid blueprint guidelines to keep high-tech feel */}
                <div className="absolute inset-0 bg-[#FF6B35]/5 opacity-40 mix-blend-color-dodge pointer-events-none" />
                
                {/* Gradient shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent flex flex-col justify-end p-5 select-none hover:via-slate-950/15 transition-all duration-300">
                  <span className="text-[9px] font-mono font-extrabold text-cyan-400 tracking-wider px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/20 w-max uppercase">PHARMA SHIPMENT LANES</span>
                  <h3 className="font-sans font-black text-xs sm:text-sm md:text-base text-white uppercase mt-2 leading-tight tracking-wide">
                    Active Insulated Packing
                  </h3>
                  <p className="text-[10px] text-slate-300 font-mono mt-1 hidden sm:block">Pre-Engineered Thermal Barriers</p>
                </div>
              </div>

              {/* Glowing Dynamic Slanted Divider */}
              <div 
                className="absolute top-0 bottom-0 w-[4px] bg-gradient-to-b from-cyan-400 via-blue-500 to-[#FF6B35] z-20 pointer-events-none rounded-full transition-all duration-500 ease-out"
                style={{ 
                  left: hoveredPanel === 'left' ? '60%' : hoveredPanel === 'right' ? '41%' : '50%',
                  transform: 'skewX(-11.5deg)',
                  boxShadow: '0 0 15px rgba(0, 196, 255, 0.7)'
                }}
              />

              {/* Right Panel: Alpine Proprietary PCM Plates Suite */}
              <div 
                className="h-full relative overflow-hidden transition-all duration-500 ease-out cursor-pointer group/right"
                style={{ 
                  flex: hoveredPanel === 'right' ? 1.4 : hoveredPanel === 'left' ? 0.7 : 1,
                  clipPath: 'polygon(19% 0, 100% 0, 100% 100%, 0 100%)',
                  zIndex: hoveredPanel === 'right' ? 12 : 5
                }}
                onMouseEnter={() => setHoveredPanel('right')}
                onMouseLeave={() => setHoveredPanel(null)}
              >
                <img 
                  src={pcmPanelsReal} 
                  alt="Alpine Proprietary PCM Panels" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/right:scale-110"
                />
                
                {/* Visual grid blueprint guidelines to keep high-tech feel */}
                <div className="absolute inset-0 bg-[#0055CC]/5 opacity-40 mix-blend-color-dodge pointer-events-none" />
                
                {/* Gradient shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent flex flex-col justify-end p-5 select-none hover:via-slate-950/15 transition-all duration-300">
                  <span className="text-[9px] font-mono font-extrabold text-orange-400 tracking-wider px-2 py-0.5 rounded bg-orange-950/50 border border-orange-500/20 w-max uppercase">PRODUCT DESIGN</span>
                  <h3 className="font-sans font-black text-xs sm:text-sm md:text-base text-white uppercase mt-2 leading-tight tracking-wide">
                    Phase Change Materials
                  </h3>
                  <p className="text-[10px] text-slate-300 font-mono mt-1 hidden sm:block">High Density Rigid Panels</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </section>

      {/* 7.2 QUICK FEATURE GRID */}
      <section
        id="feature-grid"
        className="py-20 bg-[#F0F4F8] text-slate-900 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Introductions */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.25em] uppercase">
              B2B Critical Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase text-[#0D1B2A] tracking-tight mt-3">
              Reliability Built Round Every Thermal Variable
            </h2>
            <div className="w-16 h-1 bg-[#0055CC] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#0055CC]/10 text-[#0055CC] rounded-lg flex items-center justify-center mb-6">
                  <Thermometer className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-sans font-extrabold text-[#0D1B2A] uppercase tracking-wide">
                  Precision Temperature Control
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mt-3">
                  Our advanced eutectic matrices eliminate phase dispersion valleys, locking precise temperatures (+5°C plateau or cryogenic freeze zones down to -21°C) with razor-thin thresholds.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span>PHARMACEUTICAL</span>
                <span className="text-[#0055CC] font-bold">AA DESIGN</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#0055CC]/10 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-sans font-extrabold text-[#0D1B2A] uppercase tracking-wide">
                  Reusable & Sustainable
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mt-3">
                  Ditch hazardous single-use dry ice sublimation blocks. Our Magnesium Chloride formulations are biodegradable, 100% reusable, and designed for 5+ years of intense logistics circular loops.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span>GREEN ESG LABELS</span>
                <span className="text-[#0055CC] font-bold">100% RECYCLED</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#0055CC]/10 text-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-sans font-extrabold text-[#0D1B2A] uppercase tracking-wide">
                  Global Cold Chain Ready
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mt-3">
                  Compatible with all standard international cargo airline rules, customs declarations, and B2B validation frameworks. Zero risk of flight transport delays or dangerous cargo hold fines.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span>AIRLINE SECURITY</span>
                <span className="text-[#0055CC] font-bold">CE ACCREDITED</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7.3 FEATURED PRODUCTS CATALOGUE PREVIEW */}
      <section
        id="products-mini"
        className="py-20 bg-[#0D1B2A] text-white px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Introductions */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.25em] uppercase">
              Our Product Families
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight mt-3">
              Three Solutions. One Cold Chain Mission.
            </h2>
            <p className="text-sm text-slate-400 font-sans mt-3">
              Precision temperature storage hardware engineered down to the molecular level.
            </p>
            <div className="w-16 h-1 bg-[#0055CC] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Catalog Item 1: Gel Packs */}
            <motion.div
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              className="bg-white/[0.04] border border-white/10 p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Custom graphic representation of a high tech gel pack */}
                <div className="w-full bg-[#102A43] aspect-[4/3] rounded-lg border border-blue-900/40 mb-6 flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
                  {/* Frosted cooling matrix lines */}
                  <div className="absolute inset-x-2 inset-y-4 rounded bg-[#0055CC]/15 border border-cyan-400/20 flex items-center justify-center flex-col relative z-10 backdrop-blur-[2px]">
                    <div className="absolute top-2 right-2 flex gap-1 items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full animate-ping" />
                      <span className="font-mono text-[8px] text-cyan-400 font-bold">0°C TRANSIT</span>
                    </div>
                    {/* Multi seals representation */}
                    <div className="absolute inset-x-0 bottom-0 h-2 bg-cyan-900/30 border-t border-cyan-500/20" />
                    <svg viewBox="0 0 40 40" className="w-14 h-14 stroke-cyan-400 fill-none" strokeWidth="2" strokeLinecap="round">
                      <rect x="5" y="8" width="30" height="24" rx="2" strokeWidth="2.5" />
                      <line x1="5" y1="20" x2="35" y2="20" strokeWidth="4" opacity="0.3" />
                      <path d="M12 15h16M12 25h16" opacity="0.5" />
                    </svg>
                    <span className="font-mono text-[9px] text-blue-300 tracking-widest font-bold uppercase mt-2">
                      Leak-Proof Poly
                    </span>
                  </div>
                  {/* Cooling waves from background */}
                  <div className="absolute bottom-[-100%] w-full h-[150%] bg-[#0055CC]/10 filter blur-[20px] rounded-full" />
                </div>

                <span className="font-mono text-[10px] text-[#0055CC] font-bold uppercase tracking-wider">
                  Product Family 01
                </span>
                <h3 className="text-xl font-sans font-extrabold text-white uppercase mt-2">
                  Leak-Proof Gel Packs
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-3">
                  Highly durable gel formulations enclosed in heavy co-extruded films with heat-sealed seams for zero leak hazards under severe altitude pressure.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Standard 0°C Corridor
                </span>
                <button
                  onClick={() => onPageChange('products')}
                  className="text-[#0055CC] hover:text-[#FF6B35] text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer select-none"
                >
                  <span>Specs Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Catalog Item 2: PCM Panels */}
            <motion.div
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              className="bg-white/[0.04] border border-white/10 p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Custom graphic representation of PCM Panels */}
                <div className="w-full bg-[#102A43] aspect-[4/3] rounded-lg border border-blue-900/40 mb-6 flex items-center justify-center p-4 relative overflow-hidden select-none">
                  {/* Heavy rigid frame panel mockup */}
                  <div className="absolute inset-3 border-4 border-slate-700/80 rounded bg-slate-900 flex flex-col p-2 relative z-10">
                    <div className="h-3 w-full bg-slate-800 border-b border-slate-700/80 flex items-center px-1 font-mono text-[6px] text-slate-400">
                      SPIN-WELDED RESILIENCE
                    </div>
                    <div className="flex-grow flex items-center justify-center bg-[#0D1B2A] relative">
                      <div className="absolute top-1 left-1 bg-cyan-900/50 rounded px-1 text-[7px] text-cyan-300 font-mono">
                        +5°C / +22°C
                      </div>
                      {/* Heavy strength structural ribs */}
                      <div className="grid grid-cols-3 gap-2 w-full px-2">
                        <div className="h-10 bg-slate-800/80 rounded border border-slate-705 shadow-inner" />
                        <div className="h-10 bg-slate-800/80 rounded border border-slate-705 shadow-inner flex items-center justify-center">
                          <Layers className="w-4 h-4 text-cyan-500 opacity-60" />
                        </div>
                        <div className="h-10 bg-slate-800/80 rounded border border-slate-705 shadow-inner" />
                      </div>
                    </div>
                  </div>
                  {/* Bottom lighting */}
                  <div className="absolute top-1/2 w-[160%] bg-[#FF6B35]/5 h-[40%] filter blur-[20px] rounded-full rotate-12" />
                </div>

                <span className="font-mono text-[10px] text-[#0055CC] font-bold uppercase tracking-wider">
                  Product Family 02
                </span>
                <h3 className="text-xl font-sans font-extrabold text-white uppercase mt-2">
                  Rigid PCM Thermal Panels
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-3">
                  Blow-molded heavy-duty HDPE physical plates filled with custom organic or salt-hydrate matric phase change models. Reusable for 1000s of cycles.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Circular 3PL Asset
                </span>
                <button
                  onClick={() => onPageChange('products')}
                  className="text-[#0055CC] hover:text-[#FF6B35] text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer select-none"
                >
                  <span>Specs Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Catalog Item 3: Eutectic Formulations */}
            <motion.div
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              className="bg-white/[0.04] border border-white/10 p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                {/* Custom graphic representation of chemical eutectic split ranges */}
                <div className="w-full bg-[#102A43] aspect-[4/3] rounded-lg border border-blue-900/40 mb-6 flex flex-col items-center justify-center p-4 relative overflow-hidden select-none">
                  {/* Temperature split simulation */}
                  <div className="absolute inset-0 grid grid-cols-2 h-full z-10 border border-slate-700/80 rounded-lg overflow-hidden">
                    {/* Left Chilled Range +5°C */}
                    <div className="bg-cyan-950/80 border-r border-cyan-700/30 flex flex-col items-center justify-center p-3 relative">
                      <div className="absolute top-1.5 left-1.5 bg-[#0055CC]/50 text-white rounded px-1 font-mono text-[6px]">
                        CHILLED
                      </div>
                      <span className="text-lg font-mono font-black text-white leading-none mt-2">
                        +5°C
                      </span>
                      <span className="text-[7.5px] font-sans text-cyan-300 font-medium tracking-wide mt-1 uppercase">
                        Water-Stabilizer
                      </span>
                      {/* Gentle wavy background */}
                      <div className="absolute bottom-0 w-full h-1/3 bg-cyan-700/20 blur-[4px]" />
                    </div>

                    {/* Right Deep-Freeze Range -21°C */}
                    <div className="bg-slate-900 flex flex-col items-center justify-center p-3 relative">
                      <div className="absolute top-1.5 left-1.5 bg-[#FF6B35]/65 text-white rounded px-1 font-mono text-[6px]">
                        FREEZE
                      </div>
                      <span className="text-lg font-mono font-black text-[#FF6B35] leading-none mt-2">
                        -21°C
                      </span>
                      <span className="text-[7.5px] font-sans text-slate-400 font-medium tracking-wide mt-1 uppercase">
                        Magnesium Eutectic
                      </span>
                      {/* Heat waves */}
                      <Flame className="w-3 h-3 text-orange-500/40 mt-1" />
                    </div>
                  </div>
                </div>

                <span className="font-mono text-[10px] text-[#0055CC] font-bold uppercase tracking-wider">
                  Product Family 03
                </span>
                <h3 className="text-xl font-sans font-extrabold text-white uppercase mt-2">
                  Tailored Eutectic Systems
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mt-3">
                  Chemically modified liquids featuring rapid molecular freezing nucleators. Powerful alternatives to flight-hazardous dry ice.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Dry Ice Substitute
                </span>
                <button
                  onClick={() => onPageChange('products')}
                  className="text-[#0055CC] hover:text-[#FF6B35] text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer select-none"
                >
                  <span>Specs Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7.4 ABOUT US MINI PREVIEW */}
      <section
        id="about-preview"
        className="py-20 bg-[#F0F4F8] text-slate-900 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column SVG illustration of a modern pharmaceutical thermal warehouse */}
          <div className="relative group cursor-pointer flex justify-center">
            <div className="w-full max-w-lg aspect-[4/3] bg-[#0D1B2A] rounded-2xl relative overflow-hidden shadow-xl p-6 border border-slate-700/30 flex flex-col justify-between text-white">
              <div className="flex justify-between items-start border-b border-white/5 pb-4">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    Manufacturing Facility Node
                  </span>
                  <p className="font-sans font-extrabold text-sm uppercase text-slate-200 mt-0.5">
                    Anumepalli Plant, Hosur
                  </p>
                </div>
                <div className="bg-[#102A43] border border-blue-900/40 rounded px-2 py-0.5 text-[8px] font-mono tracking-widest text-[#FFF] uppercase">
                  Active Works
                </div>
              </div>

              {/* Graphic architecture drawing layout */}
              <div className="flex-grow flex items-center justify-center p-3 relative">
                {/* Simulated factory schematic layout */}
                <svg viewBox="0 0 100 60" className="w-full max-h-[180px] stroke-slate-500 fill-none" strokeWidth="0.75" strokeLinecap="round">
                  {/* Grid background reference lines */}
                  <g stroke="rgba(255,255,255,0.03)" strokeWidth="0.5">
                    <line x1="0" y1="10" x2="100" y2="10" />
                    <line x1="0" y1="20" x2="100" y2="20" />
                    <line x1="0" y1="30" x2="100" y2="30" />
                    <line x1="0" y1="40" x2="100" y2="40" />
                    <line x1="0" y1="50" x2="100" y2="50" />
                    <line x1="20" y1="0" x2="20" y2="60" />
                    <line x1="40" y1="0" x2="40" y2="60" />
                    <line x1="60" y1="0" x2="60" y2="60" />
                    <line x1="80" y1="0" x2="80" y2="60" />
                  </g>
                  {/* Factory silhouette contours */}
                  <polygon points="10,50 10,35 25,25 40,35 55,25 70,35 85,25 85,50" stroke="#0055CC" strokeWidth="1.5" />
                  {/* Structural ceiling struts */}
                  <line x1="10" y1="35" x2="85" y2="35" strokeDasharray="3,3" />
                  {/* Distilling columns pipelines */}
                  <rect x="20" y="38" width="8" height="12" rx="0.5" stroke="#4A5568" />
                  <rect x="34" y="42" width="10" height="8" rx="0.5" stroke="#4A5568" />
                  <path d="M28,45 C31,45 31,48 34,48" stroke="#FF6B35" strokeWidth="1.5" />
                  <line x1="45" y1="30" x2="45" y2="15" strokeWidth="1.5" />
                  {/* Thermography sensors */}
                  <circle cx="45" cy="15" r="2" fill="#00C4FF" />
                  {/* Finished goods stacking crates */}
                  <rect x="62" y="44" width="6" height="6" stroke="#FFFFFF" />
                  <rect x="68" y="44" width="6" height="6" stroke="#FFFFFF" />
                  <rect x="65" y="38" width="6" height="6" stroke="#FFFFFF" />
                  <rect x="74" y="44" width="6" height="6" stroke="#FFFFFF" />
                </svg>
              </div>

              {/* Facility footer parameters overlay */}
              <div className="flex justify-between items-center bg-[#102A43]/50 border-t border-white/5 p-2 rounded text-[9px] font-mono">
                <span className="text-slate-400">Total plant floor area: 1,200 m²</span>
                <span className="text-blue-400 font-bold">CALIBRATED LOGS ACTIVE</span>
              </div>
            </div>
            
            {/* Visual backdrop decorative shadow */}
            <div className="absolute top-4 -right-4 w-full h-full border border-[#0055CC]/15 rounded-2xl z-[-1] hidden sm:block" />
          </div>

          {/* Right Column Text */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.25em] uppercase">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight text-[#0D1B2A] mt-3">
              Engineering Precision Meets Cold Chain Expertise
            </h2>
            <p className="mt-6 text-sm text-slate-500 leading-relaxed font-sans">
              Alpine Thermal Solutions is built on B2B engineering perfection rather than commodity marketing. For years, we have worked silently behind the scenes of major logistics agencies, clinical trial sponsors, and frozen produce carriers to develop robust thermal systems that withstand extreme transit bottlenecks. Our registered manufacturing works in Hosur are equipped with state-of-the-art chemical blending vats, seal stamping lines, and calibrated temperature simulation chambers.
            </p>
            
            {/* Action read full story */}
            <motion.button
              whileHover={{ y: -2, backgroundColor: '#0055CC', borderColor: '#0055CC', color: 'white' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPageChange('about')}
              className="mt-8 border-2 border-[#0055CC] text-[#0055CC] font-bold px-6 py-3 rounded text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors cursor-pointer select-none"
            >
              <span>Read Full Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

        </div>
      </section>

      {/* 7.5 GALLERY PREVIEW CAROUSEL */}
      <section
        id="gallery-carousel-mini"
        className="py-20 bg-[#0D1B2A] text-white px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Introductions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <span className="text-xs font-mono font-bold text-blue-400 tracking-[0.25em] uppercase">
                Calibrated Asset Frames
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight mt-3">
                Precision In Every Frame
              </h2>
            </div>
            
            {/* Dynamic Slider controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length)}
                className="w-10 h-10 bg-[#16222F]/80 hover:bg-[#0055CC] text-white border border-slate-700 hover:border-blue-500 rounded flex items-center justify-center transition-colors cursor-pointer select-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % gallerySlides.length)}
                className="w-10 h-10 bg-[#16222F]/80 hover:bg-[#0055CC] text-white border border-slate-700 hover:border-blue-500 rounded flex items-center justify-center transition-colors cursor-pointer select-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sliding Display Frame */}
          <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/5 p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center justify-between shadow-xl min-h-[400px]">
            {/* Left descriptive details */}
            <div className="flex flex-col items-start text-left lg:w-1/2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase font-extrabold tracking-widest">
                {gallerySlides[activeSlide].icon}
                <span>{gallerySlides[activeSlide].category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-sans font-black text-white uppercase tracking-wide mt-4 leading-snug">
                {gallerySlides[activeSlide].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans mt-4 max-w-sm">
                {gallerySlides[activeSlide].description}
              </p>

              {/* View all gallery action redirecting */}
              <button
                onClick={() => onPageChange('gallery')}
                className="mt-8 text-blue-400 hover:text-cyan-300 text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer select-none"
              >
                <span>Browse Full Gallery View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right illustration diagram of slide */}
            <div className="lg:w-1/2 flex items-center justify-center relative w-full">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md aspect-video bg-[#102A43] border-2 border-slate-700/80 rounded-xl relative flex flex-col overflow-hidden shadow-inner p-4"
              >
                {/* Visual grid reference lines internally */}
                <div className="absolute inset-0 bg-radial-gradient(at center, rgba(0, 85, 204, 0.15), transparent 70%) pointer-events-none" />
                <div className="absolute inset-5 border border-dashed border-slate-700/30 rounded pointer-events-none" />

                {/* Simulated visual layout depends on activeSlide seed context */}
                <span className="font-mono text-[9px] text-[#0055CC] font-bold uppercase tracking-widest absolute top-2 left-6">
                  * Live Calibration Node: #{activeSlide + 1}
                </span>

                <div className="flex-grow flex items-center justify-center p-4">
                  {activeSlide === 0 && (
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center gap-1 relative">
                        <div className="w-1.5 h-12 bg-slate-800 rounded-full overflow-hidden flex flex-col justify-end">
                          <motion.div className="h-4/5 bg-cyan-400" animate={{ height: ['40%', '98%', '40%'] }} transition={{ repeat: Infinity, duration: 3 }} />
                        </div>
                        <div className="w-8 h-10 bg-blue-900/60 border border-blue-500/30 rounded flex items-center justify-center font-mono text-[8px]">
                          +5°C
                        </div>
                        <div className="w-1.5 h-12 bg-slate-800 rounded-full overflow-hidden flex flex-col justify-end">
                          <motion.div className="h-1/5 bg-cyan-400" />
                        </div>
                      </div>
                      <span className="font-mono text-[8px] text-[#FF6B35] font-extrabold tracking-wider">CHEMICAL FORMULATION CHAMBER</span>
                    </div>
                  )}

                  {activeSlide === 1 && (
                    <div className="flex items-center gap-4">
                      <svg viewBox="0 0 50 50" className="w-12 h-12 stroke-cyan-400 fill-none" strokeWidth="2">
                        <circle cx="25" cy="25" r="20" strokeDasharray="4,4" />
                        <line x1="25" y1="5" x2="25" y2="45" strokeWidth="3" />
                        <line x1="5" y1="25" x2="45" y2="25" strokeWidth="1.5" />
                        <circle cx="25" cy="25" r="5" fill="#0055CC" />
                      </svg>
                      <div className="flex flex-col font-mono text-[8px] gap-1 text-slate-300">
                        <span>Simulation Status: ACTIVE</span>
                        <span className="text-cyan-400">Atmosphere stress: 0.15 bar</span>
                        <span className="text-[#FF6B35]">Equilibrium delta: &lt; 0.05 K</span>
                      </div>
                    </div>
                  )}

                  {activeSlide === 2 && (
                    <div className="flex flex-col items-center gap-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 animate-bounce" />
                      <span className="font-mono text-[9px] text-[#FFFFFF] font-extrabold tracking-widest uppercase">Weld Integrity: OK (Pressure verified)</span>
                    </div>
                  )}

                  {activeSlide === 3 && (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-36 h-8 bg-gradient-to-r from-blue-700 via-[#0055CC] to-blue-900 border border-blue-500/30 rounded-full flex justify-between items-center px-4 relative overflow-hidden">
                        <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
                        <span className="font-mono text-[8px] font-bold text-white uppercase tracking-widest">Double-Seal</span>
                        <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
                      </div>
                      <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">Ultrasonic Seam Transducer Active</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center text-[7.5px] font-mono border-t border-white/5 pt-2 text-slate-400">
                  <span>SYSTEM: ALPINE_OS_1.4</span>
                  <span className="text-cyan-400">STATUS: VALID_CALIBRATION_SECURE</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dots tracker indicators */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {gallerySlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  activeSlide === i ? 'w-8 bg-[#0055CC]' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7.6 CONTACT CTA SECTION */}
      <section
        id="home-contact-cta"
        className="bg-[#0D1B2A] text-white border-t-4 border-b-4 border-[#FF6B35] relative overflow-hidden"
      >
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black uppercase text-white tracking-tight leading-none">
            Ready To Optimize Your Cold Chain?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans max-w-xl leading-relaxed">
            Request a custom-calibrated thermal profiling test, download product schematic drawings, or request a complete sample kit tailored around your exact cargo parameters.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
            
            {/* Primary Action */}
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPageChange('contact')}
              className="bg-[#FF6B35] text-white px-8 py-4 rounded text-xs sm:text-sm font-extrabold uppercase tracking-widest hover:bg-[#ff5514] transition-all cursor-pointer shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/45 select-none"
            >
              Request A Sample Kit Pack
            </motion.button>

            {/* Secondary Action Link */}
            <motion.button
              onClick={() => onPageChange('products')}
              className="group text-blue-400 hover:text-cyan-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-1 cursor-pointer select-none py-2"
            >
              <span>View Core Specifications</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">
                →
              </span>
            </motion.button>

          </div>
        </div>
      </section>

    </div>
  );
}
