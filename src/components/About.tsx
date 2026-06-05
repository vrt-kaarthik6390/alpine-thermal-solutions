/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import {
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Building2,
  ShieldCheck,
  Compass,
  Dna,
  FlaskConical,
  Snowflake,
  Boxes,
  Shield,
  Droplet,
  Thermometer,
  Leaf,
  Globe2,
  Layers,
  Sparkles,
  ShieldAlert,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { STATS_DATA } from '../data';
import pcmImage from '@/assets/pcm.jpg';

export default function About() {
  const verticals = [
  {
    title: 'Vaccines',
    tempRange: '+2°C to +8°C',
    description: 'Strict chilled safety margins for mRNA and traditional vaccine distribution.',
    icon: <Shield className="w-4 h-4" />
  },
  {
    title: 'Biosimilars',
    tempRange: '+2°C to +8°C',
    description: 'Temperature-sensitive biologic products requiring excursion-free logistics.',
    icon: <Droplet className="w-4 h-4" />
  },
  {
    title: 'Gene Therapies',
    tempRange: 'Cryogenic',
    description: 'Sub-zero control for cell and gene therapy cold chain integrity.',
    icon: <Dna className="w-4 h-4" />
  },
  {
    title: 'Active Ingredients',
    tempRange: '±0.5°C',
    description: 'Precision thermal control for pharmaceutical ingredients and APIs.',
    icon: <FlaskConical className="w-4 h-4" />
  }
];

  const edgeCards = [
    {
      num: '01',
      title: 'Custom Polymer Integration',
      description: 'We synthesize the outer barrier polymers directly with nucleating thickeners inside our own reactors, ensuring high strength and puncture immunity.'
    },
    {
      num: '02',
      title: 'Tailored Eutectic plateaus',
      description: 'Instead of shipping bulk water, we chemically modify our solutions to freeze rapidly at exactly +5°C or -21°C, eliminating supercooling hazards.'
    },
    {
      num: '03',
      title: 'Salt-Tolerant Gel Stability',
      description: 'Proprietary visual gel modifiers prevent structural phase separation or salt settling even after hundreds of rapid melt freeze events.'
    },
    {
      num: '04',
      title: 'Rigorous Thermal Mapping',
      description: 'Every setup gets virtual multi-lane environmental mock testing inside our certified lab chambers, with detailed PDF telemetry logs provided.'
    }
  ];

  return (
    <div id="about-us-view" className="font-sans text-slate-800 bg-[#082B3F]">
      
      {/* 8.1 ABOUT US HERO SECTION */}
      <section
        id="about-hero"
        className="relative bg-[#0A1628] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-center min-h-[45vh] flex flex-col justify-center"
      >
        {/* Decorative dynamic frost backlayer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10 pt-16">
          <span className="text-xs font-sans font-bold text-[#00C6D4] tracking-[0.3em] uppercase">
            Corporate Integrity & Works
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-tight uppercase text-white mt-4">
            Who We Are
          </h1>
          <p className="text-[#00C6D4]/27 font-sans text-sm tracking-[0.2em] uppercase font-bold mt-2">
            A Company Built On Engineering Precision
          </p>
          <div className="w-20 h-1 bg-[#00C6D4]/27 mx-auto mt-6" />
          
          <p className="mt-8 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto font-sans">
            Alpine Thermal Solutions is a premium B2B developer and verified ISO manufacturer of passive cooling components, Phase Change Materials (PCM), and leak-proof gel matrices. Standard off-the-shelf packaging fails when exposed to extreme delays on hot airport runways. We bridge this critical gap by designing chemical thermal storage hardware that locks in chilled or frozen states, providing absolute security to the global life science and logistical supply chain.
          </p>
        </div>
      </section>

      {/* 8.2 WHAT WE DO SECTION */}
      <section
        id="about-what-we-do"
        className="py-20 bg-white px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-sans font-bold text-[#00C6D4] tracking-[0.25em] uppercase">
              Operational Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase text-[#0A1628] tracking-tight mt-3">
              Critical Cold Chain, Precisely Controlled
            </h2>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed font-sans max-w-2xl">
              Alpine Thermal Solutions builds components and formulations tailored for high-stakes cold supply chains. We serve logistics partners who cannot afford a single degree of temperature excursion:
            </p>

                        {/* Verticals grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-8">
              {verticals.map((node) => (
                <div
                  key={node.title}
                  className="bg-[#F0F4F8] p-5 rounded-lg border border-slate-200/60 flex flex-col gap-3 group hover:border-[#005F5F] transition-colors"
                >
                  <div className="w-9 h-9 bg-white text-[#005F5F] rounded flex items-center justify-center shadow-sm shrink-0 border border-slate-250">
                    {node.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-sans font-black uppercase text-[#0A1628] tracking-wide mt-1">
                    {node.title}
                  </h3>
                  
                  {/* Temperature Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-sans bg-[#005F5F]/10 text-[#005F5F] px-2 py-0.5 rounded">
                      {node.tempRange || '+2°C to +8°C'}
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {node.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Facility Graphic Blueprint representation */}
          <div className="lg:col-span-5 flex justify-center w-full">
  <div className="w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-[#00C6D4]/20 shadow-xl relative">
    <img
      src={pcmImage}
      alt="PCM Thermal Panels"
      className="w-full h-full object-cover brightness-75"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="font-black text-white uppercase text-base mt-2">
        PCM Manufacturing Facility
      </h3>
      <div className="flex gap-3 mt-3">
        <span className="text-[9px] font-sans bg-[#00C6D4]/15 text-[#00C6D4] px-2 py-1 rounded">+5°C</span>
        <span className="text-[9px] font-sans bg-[#00C6D4]/15 text-[#00C6D4] px-2 py-1 rounded">-21°C</span>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* 8.3 THE ALPINE EDGE SECTION */}
      <section
        id="about-edge"
        className="py-20 bg-[#0A1628] text-white px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-sans font-bold text-[#00C6D4] tracking-[0.25em] uppercase">
              The Alpine Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight text-white mt-3">
              Why We Outperform Commodity Alternatives
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Advanced material integration and chemical engineering over basic assembly.
            </p>
            <div className="w-16 h-1 bg-[#0055CC] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {edgeCards.map((edge) => (
              <div
                key={edge.num}
                className="bg-white/[0.04] p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:bg-[#102A43]/40 transition-colors duration-200"
              >
                {/* Massive corner number badge */}
                <span className="absolute top-1 right-2 font-sans text-5xl md:text-6xl font-black text-blue-600/15 select-none transition-transform group-hover:scale-105 duration-200">
                  {edge.num}
                </span>

                <h3 className="text-base font-sans font-extrabold uppercase text-white tracking-wide mt-4">
                  {edge.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-3 relative z-10">
                  {edge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8.4 OUR FOOTPRINT STRATEGIC DIVISION */}
      <section
        id="about-footprint"
        className="py-20 bg-[#F0F4F8] text-slate-900 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left text column */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-sans font-bold text-[#00C6D4] tracking-[0.25em] uppercase">
              Global Manufacturing Foothold
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight text-[#0D1B2A] mt-3">
              Rooted In India&apos;s Industrial Heartland
            </h2>
            <p className="mt-6 text-sm text-slate-500 leading-relaxed font-sans">
              Our registered office and main industrial works are strategically located at Survey No 29/9, Anumepalli in Hosur, Krishnagiri District. As a major logistics corridor adjacent to Bangalore&apos;s biotech clusters, Hosur offers an unmatched localized gateway for chemical raw materials, skilled thermodynamic technicians, and optimized freight logistics. This allows us to rapidly prototype, validate, and scale customized eutectic configurations for international pharma depots within compressed schedules.
            </p>

            <div className="flex flex-col gap-3 mt-8 font-sans text-xs text-[#0D1B2A]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#00C6D4]" />
                <span className="font-bold">HosurWorks Grid: Survey No 29/9, Anumepalli, Hosur, Krishnagiri District - 635126 </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#0055CC]" />
                <span>Fully certified ISO 9001:2015 B2B Manufacturing Facility</span>
              </div>
            </div>
          </div>

          {/* Right industrial map drawing overlay */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-lg aspect-video bg-[#0D1B2A] rounded-xl border border-slate-700/80 p-6 flex flex-col justify-between text-white relative shadow-xl overflow-hidden font-sans">
              <div className="absolute inset-0 bg-radial-gradient(at bottom right, rgba(0, 85, 204, 0.15) 0%, transparent 60%) pointer-events-none" />
              
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[10px] text-cyan-400 font-extrabold flex items-center gap-1.5 uppercase">
                  <Compass className="w-3.5 h-3.5 animate-spin" />
                  Strategic Logistics Nodes
                </span>
                <span className="text-[9px] text-[#A0AEC0]">Asia Corridor</span>
              </div>

              {/* Grid abstract map */}
              <div className="flex-grow flex items-center justify-center p-4">
                <svg viewBox="0 0 100 45" className="w-full h-full stroke-slate-500 fill-none" strokeWidth="0.75" strokeLinecap="round">
                  {/* Floating abstract world islands vectors */}
                  <path d="M5,10 Q15,4 20,12 T35,15 T45,10" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  <path d="M50,15 Q65,22 75,18 T95,12" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  
                  {/* India outline mockup representation */}
                  <path d="M40,15 L43,24 L48,27 L53,32 L56,38 L54,42 L52,38 L48,34 L45,30 L40,25 L38,20 Z" stroke="#0055CC" strokeWidth="1.5" />
                  
                  {/* Hosur Bangalore Point pulsing node */}
                  <circle cx="53" cy="35" r="2.5" fill="#00C6D4" />
                  <circle cx="53" cy="35" r="6" stroke="#00C6D4" strokeWidth="0.5" className="animate-ping" />

                  {/* Flight trace lines outward */}
                  <path d="M53,35 C55,25 65,15 80,14" stroke="#00C4FF" strokeWidth="0.5" strokeDasharray="3,3" />
                  <path d="M53,35 C45,25 35,15 20,12" stroke="#00C4FF" strokeWidth="0.5" strokeDasharray="3,3" />

                  {/* Labels overlay */}
                  <text x="58" y="36" className="text-[6.5px] text-[#00C6D4] stroke-none fill-[#00C6D4] font-black">HOSUR (WORKS)</text>
                  <text x="12" y="10" className="text-[5px] text-slate-500 fill-slate-500 stroke-none">Europe Gateway</text>
                  <text x="75" y="10" className="text-[5px] text-slate-500 fill-slate-500 stroke-none">APAC Gateway</text>
                </svg>
              </div>

              <div className="flex justify-between text-[8px] border-t border-white/5 pt-2 text-slate-400">
                <span>Airport corridor transit duration (BLR Hub): &lt; 1.5 Hour</span>
                <span className="text-cyan-400 font-extrabold">SECURE IN-BOND STOCKS</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8.5 STATS BAR SECTION */}
      <section
        id="stats-count-bar"
        className="py-16 bg-gradient-to-r from-[#00C6D4] to-[#0055CC] text-white px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {STATS_DATA.map((item, id) => (
            <div
              key={id}
              className="flex flex-col items-center gap-3 border-b md:border-b-0 md:border-r border-white/20 last:border-0 pb-8 md:pb-0 font-sans"
            >
              {/* Static display values with counting indicators */}
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-sans font-black tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-lg sm:text-2xl font-sans font-bold text-white/95">
                  {item.suffix}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-sans font-extrabold uppercase tracking-widest text-[#0D1B2A]">
                {item.label}
              </p>
              <p className="text-[11px] sm:text-xs text-white/80 max-w-xs font-medium">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
