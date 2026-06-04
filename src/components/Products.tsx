/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Thermometer, 
  Layers, 
  ShieldCheck, 
  Leaf, 
  Wrench, 
  Activity,
  Flame,
  Snowflake,
  ShieldAlert
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data';
import { PageId } from '../types';

interface ProductsProps {
  onPageChange: (page: PageId) => void;
}

export default function Products({ onPageChange }: ProductsProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const productFaqs = [
    {
      q: 'What makes salt-hydrated eutectic chemistry superior to water-ice blocks?',
      a: 'Standard water-ice expands aggressively when frozen, stressing film welds and triggering leakage risks on melting. It also holds temperature exactly at 0°C. Eutectics can be chemically calculated to freeze at custom thresholds (like +5°C or -21°C). This allows us to keep biological materials precisely within regulatory boundaries without risking thermal shock or premature thawing.'
    },
    {
      q: 'How long can passive transport containers hold thermal states?',
      a: 'When combined with our multi-wall VIP (Vacuum Insulated Panels) and double layer PCM panels, our passive solutions easily maintain strict +2°C to +8°C payloads for 96 to 120 hours under heavy ISTA extreme summer temperature profiles.'
    },
    {
      q: 'What are the air freight advantages of replacing Dry Ice with Magnesium Chloride formulations?',
      a: 'Dry Ice is classified as Class 9 Dangerous Cargo by IATA because it continuously sublimes into carbon dioxide, creating asphyxiation hazards in aircraft cargo holds. This subjects shippers to strict volume limits, high airline fees, and delays. Our sub-zero eutectic plates are non-subliming and pose zero danger levels, allowing absolute airline approval limits.'
    }
  ];

  return (
    <div id="products-catalog-view" className="font-sans text-slate-800 bg-[#F0F4F8] pt-16">
      
      {/* 9.1 PRODUCTS HERO */}
      <section
        id="products-hero"
        className="relative bg-[#0D1B2A] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-center min-h-[45vh] flex flex-col justify-center"
      >
        <div className="absolute inset-0 bg-radial-gradient(at center right, rgba(0, 85, 204, 0.1) 0%, transparent 60%) pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.3em] uppercase">
            THERMOCEUTICAL HARDWARE CATALOGUE
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-tight uppercase text-white mt-4">
            Three Product Families.<br />One Cold Chain Mission.
          </h1>
          <p className="mt-8 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto font-sans pl-2 border-l-2 border-[#0055CC]/50">
            Alpine&apos;s product families are engineered from the ground up to eliminate temperature excursions across pharma logistics, clinical storage boxes, and frozen maritime produce containers.
          </p>
        </div>
      </section>

      {/* 9.2 PRODUCT 01: LEAD-FREE PREMIUM GEL PACKS */}
      <section
        id="gel-packs-section"
        className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Card representing a physical leak-proof frozen gel pack layout */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-sm aspect-square bg-[#102A43] border-4 border-double border-slate-700/85 rounded-2xl p-6 text-white relative shadow-lg overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/10 to-transparent pointer-events-none" />
              
              <div className="flex justify-between items-start border-b border-white/5 pb-3">
                <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                  COMPONENT BLUEPRINT: PL-250
                </span>
                <span className="text-[9px] text-emerald-400 font-mono font-extrabold uppercase">
                  APPROVED PATTERN
                </span>
              </div>

              {/* Graphic schema */}
              <div className="py-6 flex flex-col items-center justify-center">
                <div className="relative w-48 h-32 bg-[#0D1B2A] border border-cyan-500/20 round flex flex-col justify-between p-3 overflow-hidden shadow-inner font-mono rounded">
                  {/* Outer edge stamped double heat sealed ribs representation */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 border-b border-cyan-400/20" />
                  <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 border-t border-cyan-400/20" />
                  
                  <div className="flex justify-between items-center text-[7px] text-cyan-400 font-extrabold">
                    <span>* DEEP SEALED TRANSIT WRAP *</span>
                    <span>SIZE: 250G</span>
                  </div>

                  {/* Core crystal matrices inside gel */}
                  <div className="flex-grow flex items-center justify-center p-1 relative my-2">
                    {/* Pulsing sub-zero ice symbol */}
                    <div className="flex flex-col items-center">
                      <Thermometer className="w-6 h-6 text-cyan-400 animate-pulse mb-1" />
                      <span className="text-[9px] text-white font-extrabold tracking-widest uppercase">0°C ICE MATRIX</span>
                    </div>
                    {/* Tiny visual bubbles representing salt stabilizers inside gel */}
                    <div className="absolute top-1 left-2 w-2 h-2 rounded-full border border-cyan-300 opacity-20" />
                    <div className="absolute bottom-1 right-2 w-1.5 h-1.5 rounded-full border border-cyan-300 opacity-30" />
                  </div>

                  <div className="flex justify-between items-center text-[7.5px] text-slate-400">
                    <span>Co-extruded high-barrier film</span>
                    <span>100% Hermetic</span>
                  </div>
                </div>
                <span className="text-[9px] text-slate-500 font-mono text-center uppercase tracking-widest mt-4">
                  * Dynamic leakproof polymer seal structure *
                </span>
              </div>

              <div className="border-t border-white/5 pt-3 text-[10px] font-mono text-[#A0AEC0] flex justify-between">
                <span>Burst-Limit Rating: &gt; 120 kg</span>
                <span className="text-cyan-400">CE LOG_PASS</span>
              </div>
            </div>
          </div>

          {/* Right Text details card */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.25em] uppercase">
              PRODUCT 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase text-[#0D1B2A] tracking-tight mt-3">
              Advanced Temperature-Controlled Gel Packs
            </h2>
            <p className="text-[#0055CC] font-mono text-xs font-bold uppercase tracking-widest mt-1">
              Engineered for high-volume, reliable 0°C transit environments
            </p>
            <p className="mt-5 text-sm text-slate-500 leading-relaxed font-sans">
              Alpine Gel Packs represent a dramatic upgrade from commodity water ice or generic cold bricks. Synthesized with customized non-toxic polymer resins, they maintain a stable 0°C plateau, absorbing heat uniform without collapsing or bursting. The outer bag uses multi-layer co-extruded films designed to survive extreme drops and crushing container stresses.
            </p>

            {/* Checklist feature arrays */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6">
              {[
                { title: 'Leak-Proof Seal Guarantee', desc: 'Wider automated heat-seals protect against high-altitude cargo drops.' },
                { title: 'Expansion Safe Resins', desc: 'Formulations engineered with special elastic molecules that adapt safely during crystallization.' },
                { title: 'Salt-Tolerant Stability', desc: 'Allows hundreds of complete freeze-thaw operations without chemical partition.' },
                { title: 'Flexible Standard Sizes', desc: 'Available in standard B2B increments or custom physical fits upon request.' }
              ].map((feat) => (
                <div key={feat.title} className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-sans font-extrabold uppercase text-[#0D1B2A] tracking-wide">
                      {feat.title}
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">
                      {feat.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Application pills */}
            <div className="mt-8 flex flex-col gap-2">
              <span className="text-[10px] font-mono tracking-widest text-[#0055CC] font-bold uppercase">
                TYPICAL ENHANCED APPLICATIONS:
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Vaccine Courier Kits', 'Biological Serology', 'Hospital Last-Mile Logistics', 'Clinical Sample Assays'].map((pill) => (
                  <span
                    key={pill}
                    className="border border-[#0055CC]/30 text-[#0055CC] bg-[#0055CC]/5 hover:bg-[#0055CC] hover:text-white transition-colors duration-150 px-3 py-1.5 rounded text-xs leading-none font-bold"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications Details Table */}
            <div className="w-full mt-8 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden font-sans">
              <div className="bg-slate-100 px-4 py-2 text-xs font-bold uppercase text-[#0D1B2A] tracking-wider border-b border-slate-200">
                Performance Parameters: PL-SERIES
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-200">
                <div className="p-4 flex flex-col gap-3 text-xs">
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400 uppercase font-sans font-bold">Property</span>
                    <span className="text-slate-900 font-extrabold">Value</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400">Plateau Temp:</span>
                    <span className="text-slate-900 font-medium">0°C Chilled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Film Tech:</span>
                    <span className="text-slate-900 font-medium">Co-extruded high barrier</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3 text-xs">
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400 uppercase font-sans font-bold">Property</span>
                    <span className="text-slate-900 font-extrabold">Value</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400">Hermetic Rating:</span>
                    <span className="text-slate-900 font-medium">100% certified</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Burst Resistance:</span>
                    <span className="text-slate-900 font-medium">&gt; 120 kg compression</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9.3 PRODUCT 02: RIGID PCM THERMAL PLATES (REVERSED DESIGN SYSTEM - DARK BARRIERS) */}
      <section
        id="pcm-panels-section"
        className="py-20 bg-[#0D1B2A] text-white px-4 sm:px-6 lg:px-8 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text details column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:order-1">
            <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.25em] uppercase">
              PRODUCT 02
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase text-white tracking-tight mt-3">
              Phase Change Material (PCM) Thermal Panels
            </h2>
            <p className="text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mt-1">
              Rigid, high-density thermal storage units for circular 3PL supply chains
            </p>
            <p className="mt-5 text-sm text-slate-400 leading-relaxed font-sans">
              Alpine rigid PCM Panels are heavy-duty thermal barriers blow-molded with absolute precision using food-grade High-Density Polyethylene (HDPE). Filled with advanced phase change chemical formulations, these plates are engineered to endure high thermal stress, stack cleanly with space efficiency, and isolate payloads from external environment shocks. Built to withstand extensive circular shipping returns.
            </p>

            {/* Checklist feature arrays in dark mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6">
              {[
                { title: 'Blow-Molded Durability', desc: 'Heavy-gauge HDPE shells prevent punctures or physical cargo crush risk.' },
                { title: 'Flat Rib Profile Integration', desc: 'Flat surface profiles allow modular stacking alongside standard parcel coolers.' },
                { title: 'Spin-Welded Plug Resilience', desc: 'High-frequency solid spin fusion seals completely prevent internal chemical leaks.' },
                { title: 'Long-Life B2B Return Asset', desc: 'Eutectic chemistry and rigid body designed for over 1000 freeze cycle returns.' }
              ].map((feat) => (
                <div key={feat.title} className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-sans font-extrabold uppercase text-white tracking-wide">
                      {feat.title}
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5 font-normal">
                      {feat.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Application pills in dark theme */}
            <div className="mt-8 flex flex-col gap-2">
              <span className="text-[10px] font-mono tracking-widest text-[#0055CC] font-bold uppercase">
                TYPICAL RETURNABLE APPLICATIONS:
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Hospital Passive Networks', 'CRO Direct Shipments', 'Frozen Exporters 3PL', 'Bulk Air Cargo Liners'].map((pill) => (
                  <span
                    key={pill}
                    className="border border-[#0055CC] text-white bg-[#0055CC]/15 hover:bg-[#0055CC] transition-colors duration-150 px-3 py-1.5 rounded text-xs leading-none font-bold"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Dark specifications parameters panel */}
            <div className="w-full mt-8 bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden font-sans">
              <div className="bg-white/[0.05] border-b border-white/10 px-4 py-2 text-xs font-bold uppercase text-white tracking-wider">
                Performance Parameters: PCM-SERIES
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/5">
                <div className="p-4 flex flex-col gap-3 text-xs text-slate-400">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="font-bold text-white uppercase font-sans">Property</span>
                    <span className="text-white font-extrabold">Value</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Shell Material</span>
                    <span className="text-white">Virgin HDPE Food-Grade</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Plateau Options:</span>
                    <span className="text-white">+4°C / +22°C / -21°C</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3 text-xs text-slate-400">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="font-bold text-white uppercase font-sans">Property</span>
                    <span className="text-white font-extrabold">Value</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Plug Welding:</span>
                    <span className="text-white">Spin Weld Solid plug</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reusability Index:</span>
                    <span className="text-[#FF6B35] font-extrabold">1000+ Multi-cycles</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Card representing a physical rigid PCM panel stack */}
          <div className="lg:col-span-5 flex justify-center w-full lg:order-2">
            <div className="w-full max-w-sm aspect-square bg-[#0D1B2A] border-4 border-slate-700/85 rounded-2xl p-6 text-white relative shadow-2xl flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
              
              <div className="flex justify-between items-start border-b border-white/5 pb-3">
                <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                  BLOW-MOLD BLUEPRINT: PCM-900
                </span>
                <span className="text-[9px] text-[#FF6B35] font-mono font-bold uppercase">
                  CE VERIFIED
                </span>
              </div>

              {/* Graphic schema */}
              <div className="py-6 flex flex-col items-center justify-center">
                <div className="relative w-40 h-40 bg-[#102A43] border border-cyan-500/15 rounded flex flex-col justify-between p-3 overflow-hidden shadow-inner font-mono">
                  {/* Heavy outer rib lines drawing */}
                  <div className="flex justify-between h-full w-full gap-2 px-1 relative z-10">
                    <div className="w-6 h-full bg-slate-900/90 border border-slate-700 rounded flex flex-col justify-around items-center p-1 shadow-inner">
                      <div className="w-2 h-2 bg-blue-500/40 rounded-full" />
                      <div className="w-2 h-2 bg-blue-500/20 rounded-full" />
                      <div className="w-2 h-2 bg-blue-500/20 rounded-full" />
                    </div>
                    <div className="flex-grow bg-slate-900/90 border border-slate-700 rounded flex flex-col items-center justify-center relative">
                      <Layers className="w-8 h-8 text-cyan-400 animate-pulse opacity-80" />
                      <span className="text-[8px] text-center font-bold tracking-wider leading-none mt-2 uppercase text-white">REUSE CAP</span>
                    </div>
                    <div className="w-6 h-full bg-slate-900/90 border border-slate-700 rounded flex flex-col justify-around items-center p-1 shadow-inner">
                      <div className="w-2 h-2 bg-blue-500/40 rounded-full" />
                      <div className="w-2 h-2 bg-blue-500/20 rounded-full" />
                      <div className="w-2 h-2 bg-blue-500/20 rounded-full" />
                    </div>
                  </div>

                  {/* High frequency welded plug overlay simulation */}
                  <div className="absolute top-1/2 left-[-16px] w-8 h-4 bg-[#FF6B35]/80 rotate-90 flex items-center justify-center border border-white/20">
                    <span className="text-[5px] text-white font-bold tracking-widest uppercase">SPIN</span>
                  </div>
                </div>
                <span className="text-[9px] text-slate-500 font-mono text-center uppercase tracking-widest mt-4">
                  * Structural spin-fused port isolation *
                </span>
              </div>

              <div className="border-t border-white/5 pt-3 text-[10px] font-mono text-[#A0AEC0] flex justify-between">
                <span>Plates Weight: 900G</span>
                <span className="text-cyan-400">ISO_9001_OK</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9.4 PRODUCT 03: TAILORED EUTECTIC SYSTEMS (SPLIT CARDS LAYOUT) */}
      <section
        id="eutectic-form-section"
        className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto">
          {/* Headline intro */}
          <div className="max-w-3xl text-left mb-16">
            <span className="text-xs font-mono font-bold text-[#0055CC] tracking-[0.25em] uppercase">
              PRODUCT 03
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase text-[#0D1B2A] tracking-tight mt-3">
              Tailored Eutectic Formulations
            </h2>
            <p className="text-[#FF6B35] font-mono text-sm font-bold uppercase tracking-widest mt-1">
              Chemically locked thermal safety gates — eliminating supercooling and hysteresis
            </p>
            <p className="mt-5 text-sm text-slate-500 leading-relaxed font-sans">
              Alpine Eutectic systems are custom-blended formulations with chemically engineered crystallization rates. By blending salt-hydrate chains with advanced synthetic seeding particles, we completely eliminate supercooling hills, allowing packs to instantly freeze and maintain precise sub-zero thermal barriers down to -24°C without any toxic emissions or containment pressure risk.
            </p>
          </div>

          {/* SPLIT TEMPERATURE RANGE CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mt-12">
            
            {/* Card 1: Chilled Range +5°C */}
            <div className="bg-[#E3F2FD] border border-blue-200 p-8 rounded-2xl flex flex-col justify-between text-left shadow-sm hover:border-[#0055CC] transition-colors relative overflow-hidden">
              <span className="absolute top-2 right-4 font-mono text-6xl font-black text-blue-300/30 select-none">
                +5°C
              </span>
              <div>
                <div className="w-12 h-12 bg-white text-[#0055CC] rounded-lg border border-blue-200 flex items-center justify-center mb-6">
                  <Snowflake className="w-6 h-6 animate-pulse text-blue-500" />
                </div>
                <h3 className="text-xl font-sans font-black text-[#0D1B2A] uppercase tracking-wide">
                  The Chilled Range
                </h3>
                <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mt-1">
                  +2°C to +8°C Pharmaceutical safety window
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-sans mt-4">
                  Using customized salt-hydrate configurations optimized with rapid nucleating catalysts. Engineered to completely avoid standard supercooling drops, ensuring delicate vaccines and biomedical serologies stay firmly within the critical +2°C to +8°C regulatory transport window of major hospitals and cold-chain hubs.
                </p>

                <div className="mt-6 flex flex-col gap-2 font-mono text-xs">
                  <span className="font-bold text-[#0D1B2A] border-b border-blue-200/50 pb-1.5 uppercase">Typical Use Profiles:</span>
                  <ul className="flex flex-col gap-1.5 text-slate-600">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0055CC]" />
                      <span>mRNA Vaccine Hub parcels (+5°C)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0055CC]" />
                      <span>Recombinant DNA Serology Logistics</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0055CC]" />
                      <span>Investigational Medical Product trials</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-200/60 text-[10px] font-mono text-blue-500 uppercase font-bold tracking-widest flex justify-between">
                <span>Phase plateau threshold: +5.0°C</span>
                <span>Active Latency &gt; 96 Hrs</span>
              </div>
            </div>

            {/* Card 2: Deep Freeze Range -21°C */}
            <div className="bg-[#1A3A52] border border-[#102A43] p-8 rounded-2xl flex flex-col justify-between text-left shadow-lg text-white relatives overflow-hidden hover:border-[#FF6B35] transition-colors relative">
              <span className="absolute top-2 right-4 font-mono text-6xl font-black text-white/5 select-none">
                -21°C
              </span>
              <div>
                <div className="w-12 h-12 bg-[#0D1B2A] text-orange-400 rounded-lg border border-slate-700/80 flex items-center justify-center mb-6">
                  <Flame className="w-6 h-6 animate-pulse text-orange-500" />
                </div>
                <h3 className="text-xl font-sans font-black text-white uppercase tracking-wide">
                  The Deep-Freeze Range
                </h3>
                <p className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest mt-1">
                  Magnesium Chloride based chemical alternative to Dry Ice
                </p>
                <p className="text-sm text-slate-300 leading-relaxed font-sans mt-4">
                  High-latent heat Magnesium Chloride eutectic matrices designed to replace hazardous, restricted dry ice blocks. Sublimation hazard free, zero carbon dioxide release, and completely approved for international passenger and cargo flights without any volume limitations. Reusable indefinitely.
                </p>

                <div className="mt-6 flex flex-col gap-2 font-mono text-xs">
                  <span className="font-bold text-white border-b border-white/5 pb-1.5 uppercase">Typical Use Profiles:</span>
                  <ul className="flex flex-col gap-1.5 text-slate-300">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                      <span>Sub-Zero biomedical courier boxes (-20°C)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                      <span>Deep-Freeze clinical sample corridor holds</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                      <span>Hazard-Free, returnable airline freight kits</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 text-[10px] font-mono text-orange-400 uppercase font-bold tracking-widest flex justify-between">
                <span>Phase plateau threshold: -21.0°C</span>
                <span>Sublimation Rate: 0% (Hassle-Free)</span>
              </div>
            </div>

          </div>

          {/* Product 03 Performance parameters specifications table */}
          <div className="w-full mt-12 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden font-sans text-left">
            <div className="bg-slate-100 px-4 py-2.5 text-xs font-bold uppercase text-[#0D1B2A] tracking-wider border-b border-slate-200">
              Thermodynamic Parameters: EU-SERIES
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-xs text-slate-600">
              <div className="p-4 flex flex-col gap-2">
                <span className="font-bold text-[#0D1B2A] uppercase">PLATEAU PARAM</span>
                <div className="flex justify-between"><span>Chilled target:</span><span className="text-slate-900 font-bold">+5.0°C</span></div>
                <div className="flex justify-between"><span>Supercooling shift:</span><span className="text-[#0055CC] font-semibold">&lt; 0.5°C threshold</span></div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <span className="font-bold text-[#0D1B2A] uppercase">LATENT CAPACITY</span>
                <div className="flex justify-between"><span>Frozen target:</span><span className="text-slate-900 font-bold">-21.0°C</span></div>
                <div className="flex justify-between"><span>Specific density:</span><span className="text-slate-900">1.18 g/cm³</span></div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <span className="font-bold text-[#0D1B2A] uppercase">ESG INTEGRITY KPI</span>
                <div className="flex justify-between"><span>Chemical toxicity:</span><span className="text-emerald-600 font-bold">Non-toxic, safe</span></div>
                <div className="flex justify-between"><span>CO2 Hazard subclass</span><span className="text-emerald-600">0.0 (None, IATA PASS)</span></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9.5 SYSTEM ADVANTAGE GROUP SECTION */}
      <section
        id="products-advantage"
        className="py-20 bg-[#0D1B2A] text-white px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-blue-400 tracking-[0.25em] uppercase">
              Unified Thermal Performance
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight mt-3">
              The Alpine System Advantage
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Eliminating the gaps that happen when mixing packaging from multiple commodity sellers.
            </p>
            <div className="w-16 h-1 bg-[#0055CC] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Harmonized System Fit',
                desc: 'Gel packs, PCM plates, and insulated boxes designed in tandem to avoid thermal pockets.',
                icon: <Wrench className="w-6 h-6 text-blue-400" />
              },
              {
                title: 'Calibrated Mapping',
                desc: 'Our laboratory maps temperature curves under ISTA simulation profiles for compliance.',
                icon: <Activity className="w-6 h-6 text-cyan-400" />
              },
              {
                title: 'Custom Prototyping',
                desc: 'We can adapt chemistry, sizing ratios, and HDPE physical molds around your specific crates.',
                icon: <Layers className="w-6 h-6 text-emerald-400" />
              },
              {
                title: 'True ESG Logistics',
                desc: 'Highly reusable materials and safe chemicals to replace hazardous single use carbon ice.',
                icon: <Leaf className="w-6 h-6 text-[#FF6B35]" />
              }
            ].map((adv) => (
              <div
                key={adv.title}
                className="bg-white/[0.04] p-6 rounded-xl border border-white/10 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 border border-white/10">
                    {adv.icon}
                  </div>
                  <h3 className="text-base font-sans font-extrabold uppercase tracking-wide text-white">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Product FAQ Accordion Block */}
          <div className="max-w-3xl mx-auto mt-24 text-left border-t border-white/5 pt-16">
            <h3 className="text-lg font-sans font-black uppercase text-white tracking-wider mb-8 text-center flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-450" />
              Technical FAQ & Selections
            </h3>

            <div className="flex flex-col gap-4">
              {productFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center font-sans font-bold text-sm text-slate-200 hover:text-white uppercase tracking-wide cursor-pointer focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#FF6B35] font-black text-lg shrink-0">
                      {activeFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="p-5 pt-0 text-xs text-slate-400 leading-relaxed font-sans border-t border-white/5 bg-slate-900/40"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Under Section CTA */}
          <div className="mt-20 flex flex-col items-center">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
              * Dedicated thermal modeling files ready for delivery *
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPageChange('contact')}
              className="bg-[#FF6B35] text-white px-8 py-4 rounded text-xs font-extrabold uppercase tracking-widest hover:bg-[#ff5514] transition-colors cursor-pointer select-none shadow-md shadow-[#FF6B35]/25"
            >
              Get Started On Passive Designs
            </motion.button>
          </div>

        </div>
      </section>

    </div>
  );
}
