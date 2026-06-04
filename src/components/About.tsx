/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  Dna, 
  FlaskConical, 
  Snowflake, 
  Boxes 
} from 'lucide-react';
import { STATS_DATA } from '../data';

export default function About() {
  const verticals = [
    {
      title: 'Pharmaceuticals & Biologics',
      description: 'Vaccines, biosimilars, gene therapies, and active ingredients requiring strict +2°C to +8°C chilled safety margins or cryogenic sub-zero control.',
      icon: <Dna className="w-5 h-5 text-blue-500" />
    },
    {
      title: 'Clinical Trial Logistics',
      description: 'Ultra-sensitive investigational medical products (IMPs) requiring certified multi-day custody monitoring across global flight corridors.',
      icon: <ShieldCheck className="w-5 h-5 text-[#0055CC]" />
    },
    {
      title: 'Frozen Food Exports',
      description: 'High-value frozen seafood, food concentrates, and premium produce protected via Magnesium Chloride PCM plates at -18°C to -24°C.',
      icon: <Snowflake className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Industrial & Chemical',
      description: 'Thermosensitive specialty polymers, volatile chemical reagents, and lab assay raw materials requiring customized passive cooling grids.',
      icon: <FlaskConical className="w-5 h-5 text-[#FF6B35]" />
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
    <div id="about-us-view" className="font-sans text-slate-800 bg-[#F0F4F8] pt-16">
      
      {/* 8.1 ABOUT US HERO SECTION */}
      <section
        id="about-hero"
        className="relative bg-[#0D1B2A] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-center min-h-[45vh] flex flex-col justify-center"
      >
        {/* Decorative dynamic frost backlayer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.3em] uppercase">
            Corporate Integrity & Works
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-tight uppercase text-white mt-4">
            Who We Are
          </h1>
          <p className="text-blue-400 font-mono text-sm tracking-[0.2em] uppercase font-bold mt-2">
            A Company Built On Engineering Precision
          </p>
          <div className="w-20 h-1 bg-[#0055CC] mx-auto mt-6" />
          
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
            <span className="text-xs font-mono font-bold text-[#0055CC] tracking-[0.25em] uppercase">
              Operational Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase text-[#0D1B2A] tracking-tight mt-3">
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
                  className="bg-[#F0F4F8] p-5 rounded-lg border border-slate-200/60 flex flex-col gap-3 group hover:border-[#0055CC] transition-colors"
                >
                  <div className="w-9 h-9 bg-white text-[#0055CC] rounded flex items-center justify-center shadow-sm shrink-0 border border-slate-250">
                    {node.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-sans font-black uppercase text-[#0D1B2A] tracking-wide mt-1">
                    {node.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {node.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Facility Graphic Blueprint representation */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md bg-[#0D1B2A] border-4 border-double border-slate-700/80 rounded-2xl p-6 text-white text-left relative shadow-xl overflow-hidden font-mono">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none" />
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-[10px] text-cyan-400 font-extrabold tracking-wider">
                  STATION BLOCK: B-12 (REACTOR UNIT)
                </span>
                <span className="text-[9px] text-[#FF6B35]">GRID ACTIVE</span>
              </div>

              {/* Blueprint vector drawing */}
              <div className="py-6 flex items-center justify-center">
                <svg viewBox="0 0 100 70" className="w-full max-h-[220px] stroke-blue-400 fill-none" strokeWidth="0.75" strokeLinecap="round">
                  {/* Blueprint grid dots */}
                  <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="1,9">
                    <line x1="0" y1="5" x2="100" y2="5" />
                    <line x1="0" y1="15" x2="100" y2="15" />
                    <line x1="0" y1="25" x2="100" y2="25" />
                    <line x1="0" y1="35" x2="100" y2="35" />
                    <line x1="0" y1="45" x2="100" y2="45" />
                    <line x1="0" y1="55" x2="100" y2="55" />
                    <line x1="0" y1="65" x2="100" y2="65" />
                  </g>
                  {/* Schematic reactor tank drawing */}
                  <rect x="25" y="10" width="50" height="35" rx="5" stroke="#FFFFFF" strokeWidth="1.5" />
                  <line x1="30" y1="45" x2="30" y2="55" strokeWidth="1.5" />
                  <line x1="70" y1="45" x2="70" y2="55" strokeWidth="1.5" />
                  <line x1="15" y1="55" x2="85" y2="55" strokeWidth="2" strokeLinecap="round" />
                  
                  {/* Pipes */}
                  <path d="M50,4 Q50,10 50,20" stroke="#FF6B35" strokeWidth="1.5" />
                  <circle cx="50" cy="4" r="2" fill="#FF6B35" />
                  <path d="M5,25 L15,25 Q25,25 25,20" stroke="#00C4FF" strokeWidth="1" />
                  
                  {/* Internal impeller blades */}
                  <line x1="50" y1="20" x2="50" y2="35" strokeWidth="1.5" strokeDasharray="2,2" />
                  <line x1="40" y1="35" x2="60" y2="35" strokeWidth="2" />
                  
                  {/* Chemical symbols indicators */}
                  <text x="35" y="25" className="text-[10px] font-bold text-blue-300 stroke-none fill-blue-300">PCM</text>
                  <text x="54" y="32" className="text-[8px] text-cyan-400 stroke-none fill-cyan-400">+5°C / -21°C</text>

                  {/* Dimension overlay labels */}
                  <line x1="25" y1="5" x2="75" y2="5" strokeDasharray="1,1" stroke="#4A5568" />
                  <text x="44" y="4" className="text-[5px] text-slate-500 fill-slate-500 stroke-none">W: 1.50m (Calibrated)</text>
                </svg>
              </div>

              <div className="border-t border-white/5 pt-3 flex flex-col gap-1 text-[9px] text-[#A0AEC0]">
                <div className="flex justify-between">
                  <span>Chemical Matrix:</span>
                  <span className="text-white font-bold">Salt Hydrate + Magnesium</span>
                </div>
                <div className="flex justify-between text-blue-300">
                  <span>Isolation Sealing Quality:</span>
                  <span className="font-bold">Spin-Weld Tested &gt;4.2 bar</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8.3 THE ALPINE EDGE SECTION */}
      <section
        id="about-edge"
        className="py-20 bg-[#0D1B2A] text-white px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.25em] uppercase">
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
                <span className="absolute top-1 right-2 font-mono text-5xl md:text-6xl font-black text-blue-600/15 select-none transition-transform group-hover:scale-105 duration-200">
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
            <span className="text-xs font-mono font-bold text-[#0055CC] tracking-[0.25em] uppercase">
              Global Manufacturing Foothold
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight text-[#0D1B2A] mt-3">
              Rooted In India&apos;s Industrial Heartland
            </h2>
            <p className="mt-6 text-sm text-slate-500 leading-relaxed font-sans">
              Our registered office and main industrial works are strategically located at Survey No 29/9, Anumepalli in Hosur, Krishnagiri District. As a major logistics corridor adjacent to Bangalore&apos;s biotech clusters, Hosur offers an unmatched localized gateway for chemical raw materials, skilled thermodynamic technicians, and optimized freight logistics. This allows us to rapidly prototype, validate, and scale customized eutectic configurations for international pharma depots within compressed schedules.
            </p>

            <div className="flex flex-col gap-3 mt-8 font-mono text-xs text-[#0D1B2A]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B35]" />
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
            <div className="w-full max-w-lg aspect-video bg-[#0D1B2A] rounded-xl border border-slate-700/80 p-6 flex flex-col justify-between text-white relative shadow-xl overflow-hidden font-mono">
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
                  <circle cx="53" cy="35" r="2.5" fill="#FF6B35" />
                  <circle cx="53" cy="35" r="6" stroke="#FF6B35" strokeWidth="0.5" className="animate-ping" />

                  {/* Flight trace lines outward */}
                  <path d="M53,35 C55,25 65,15 80,14" stroke="#00C4FF" strokeWidth="0.5" strokeDasharray="3,3" />
                  <path d="M53,35 C45,25 35,15 20,12" stroke="#00C4FF" strokeWidth="0.5" strokeDasharray="3,3" />

                  {/* Labels overlay */}
                  <text x="58" y="36" className="text-[6.5px] text-[#FF6B35] stroke-none fill-[#FF6B35] font-black">HOSUR (WORKS)</text>
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
        className="py-16 bg-gradient-to-r from-[#FF6B35] to-[#ff5010] text-white px-4 sm:px-6 lg:px-8 text-center"
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
                <span className="text-lg sm:text-2xl font-mono font-bold text-white/95">
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
