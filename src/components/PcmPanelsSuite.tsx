/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Snowflake, Info, Activity } from 'lucide-react';

interface PanelModel {
  id: string;
  name: string;
  temp: string;
  dimensions: string;
  capacity: string;
  weight: string;
  colorHex: string;
  textColor: string;
  customStyle?: React.CSSProperties;
  embossedText: string;
  subText?: string;
  stickerLabels?: string[];
  pouchTexture?: boolean;
}

export default function PcmPanelsSuite() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Replicating the exact colored panels from the user's photograph with accurate labels & specs
  const panels: PanelModel[] = [
    {
      id: 'white-large',
      name: 'Alpine High-Capacity Carrier Panel',
      temp: '+4°C (Stabilized Cold-Chain)',
      dimensions: '400 x 300 x 35 mm',
      capacity: '2400 ml',
      weight: '3200 g',
      colorHex: '#EDEDE8',
      textColor: '#4A5568',
      embossedText: 'ALPINE THERMAL SOLUTIONS',
      subText: 'PCM PANEL',
      stickerLabels: ['BATCH CODE: 9866-10A', 'PASSIVE SHIELD'],
      customStyle: {
        top: '4%',
        left: '8%',
        width: '84%',
        height: '24%',
        boxShadow: 'inset 0 4px 10px rgba(255,255,255,1), 0 10px 20px rgba(0,0,0,0.4)',
      },
    },
    {
      id: 'pink-medium',
      name: 'Alpine Bio-Pharma Medium Block',
      temp: '+22°C (Controlled Room Temperature)',
      dimensions: '210 x 173 x 30 mm',
      capacity: '1290 ml',
      weight: '1600 g',
      colorHex: '#D5507E',
      textColor: '#FFFFFF',
      embossedText: 'ALPINE THERMAL SOLUTIONS',
      subText: 'PCM PANEL',
      stickerLabels: ['210x173x30 mm | mm', '1290ml/8g | 1600g | 800ml'],
      customStyle: {
        top: '32%',
        left: '4%',
        width: '44%',
        height: '31%',
        boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.4), 0 8px 16px rgba(0,0,0,0.4)',
      },
    },
    {
      id: 'dark-blue-compact',
      name: 'Alpine Compact Cargo Spacer',
      temp: '+5°C (Chilled Payload Protection)',
      dimensions: '230 x 98 x 30 mm',
      capacity: '980 ml',
      weight: '1100 g',
      colorHex: '#0E3980',
      textColor: '#FFFFFF',
      embossedText: 'ALPINE',
      subText: 'THERMAL SOLUTIONS',
      stickerLabels: ['ALPINE 98a6 10010'],
      customStyle: {
        top: '32%',
        left: '52%',
        width: '44%',
        height: '14%',
        boxShadow: 'inset 0 3px 6px rgba(255,255,255,0.3), 0 6px 12px rgba(0,0,0,0.4)',
      },
    },
    {
      id: 'cyan-standard',
      name: 'Alpine Sub-Zero Frozen Block',
      temp: '-21°C (Ultra Cold Vaccine Stage)',
      dimensions: '203 x 188 x 56 mm',
      capacity: '1500 ml',
      weight: '1750 g',
      colorHex: '#42A4CC',
      textColor: '#1A365D',
      embossedText: 'ALPINE THERMAL SOLUTIONS',
      subText: 'PCM PANEL',
      stickerLabels: ['106-175x30 mm | 1500g', '203x188x56 mm'],
      customStyle: {
        top: '49%',
        left: '52%',
        width: '44%',
        height: '28%',
        boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.4), 0 8px 16px rgba(0,0,0,0.4)',
      },
    },
    {
      id: 'cream-emballiso',
      name: 'Alpine Emball’iso Interlock Panel',
      temp: '+2°C to +8°C (Regulatory Clinical)',
      dimensions: '230 x 180 x 35 mm',
      capacity: '1310 ml',
      weight: '1310 g',
      colorHex: '#D4D7CE',
      textColor: '#2D3748',
      embossedText: 'EMBALL’ISO CO-BRANDED',
      subText: 'ALPINE ACTIVE PANEL',
      stickerLabels: ['ALPINE 1310g', '230x180x35 | EMBALL’ISO'],
      customStyle: {
        top: '66%',
        left: '4%',
        width: '44%',
        height: '29%',
        boxShadow: 'inset 0 4px 8px rgba(255,255,255,0.7), 0 8px 16px rgba(0,0,0,0.4)',
      },
    },
    {
      id: 'red-mini',
      name: 'Alpine Pilot Core Indicator',
      temp: '+37°C (Incubation Stabilizer)',
      dimensions: '120 x 90 x 25 mm',
      capacity: '250 ml',
      weight: '290 g',
      colorHex: '#B2202A',
      textColor: '#FFFFFF',
      embossedText: 'ALPINE',
      subText: 'THERMAL SHIELD',
      stickerLabels: ['ALPINE ACTIVE', 'PILOT RUN'],
      customStyle: {
        top: '80%',
        left: '52%',
        width: '18%',
        height: '16%',
        boxShadow: 'inset 0 3px 6px rgba(255,255,255,0.4), 0 6px 12px rgba(0,0,0,0.3)',
      },
    },
    {
      id: 'silver-foiled',
      name: 'Alpine Last-Mile Flexible Gel pouch',
      temp: '0°C (Hydrated Last-Mile Gel)',
      dimensions: '150 x 200 mm flexible',
      capacity: '400 ml',
      weight: '410 g',
      colorHex: '#B8BCBF',
      textColor: '#2D3748',
      embossedText: 'ALPINE LAST MILE SOLUTIONS',
      subText: 'LONG DURATION POUCH',
      stickerLabels: ['PRODUCT CODE: LS-400', 'DO NOT FREEZE'],
      pouchTexture: true,
      customStyle: {
        top: '80%',
        left: '73%',
        width: '23%',
        height: '16%',
        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.8), 0 5px 12px rgba(0,0,0,0.4)',
      },
    },
  ];

  const activePanel = panels.find((p) => p.id === hoveredId);

  return (
    <div className="relative w-full h-full flex flex-col bg-[#08121E] text-white">
      {/* Dynamic Grid Background mimicking the professional dark table / cutting mat in the photo */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none select-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 196, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 196, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Ambient glowing vignette */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-transparent to-black/40 pointer-events-none" />

      {/* Main product arrangement area */}
      <div className="relative flex-grow pointer-events-auto h-full w-full overflow-hidden">
        {panels.map((panel) => {
          const isHovered = hoveredId === panel.id;
          return (
            <motion.div
              key={panel.id}
              style={{
                position: 'absolute',
                borderRadius: panel.pouchTexture ? '8px' : '12px',
                backgroundColor: panel.colorHex,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0.5rem',
                border: panel.pouchTexture ? '1px solid rgba(255,255,255,0.4)' : '1.5px solid rgba(0,0,0,0.25)',
                ...panel.customStyle,
              }}
              className="group/panel overflow-hidden transition-all duration-300"
              animate={{
                scale: isHovered ? 1.05 : 1,
                y: isHovered ? -4 : 0,
                zIndex: isHovered ? 30 : 10,
                boxShadow: isHovered 
                  ? '0 12px 28px rgba(0, 196, 255, 0.5), inset 0 4px 12px rgba(255,255,255,0.6)' 
                  : panel.customStyle?.boxShadow,
              }}
              onMouseEnter={() => setHoveredId(panel.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Embossed details layout to match exact physical appearance from photo */}
              <div className="flex flex-col h-full w-full justify-between select-none relative">
                {/* Simulated metallic foil finish pattern */}
                {panel.pouchTexture && (
                  <div className="absolute inset-0 bg-[#E0E4E7]/40 z-0 pointer-events-none opacity-60 mix-blend-color-dodge" 
                       style={{ backgroundImage: 'repeating-linear-gradient(45deg, #CCC 0px, #CCC 2px, transparent 2px, transparent 8px)' }} />
                )}

                {/* Relieved/Embossed Alpine Mountain Crest Graphic to make panels intensely real */}
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0"
                  style={{ color: panel.textColor }}
                >
                  <svg viewBox="0 0 100 50" className="w-16 h-16 fill-current">
                    <polygon points="10,45 50,10 90,45" />
                    <polygon points="30,45 50,25 70,45" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </div>

                {/* Relief Indentation Holes (Dual circle cavities) seen on the panels in real life */}
                {!panel.pouchTexture && (
                  <div className="absolute inset-x-0 top-[40%] flex justify-around pointer-events-none z-0">
                    <div className="w-[14px] h-[14px] rounded-full bg-black/10 border border-white/5 shadow-inner" />
                    <div className="w-[14px] h-[14px] rounded-full bg-black/10 border border-white/5 shadow-inner" />
                  </div>
                )}

                {/* Section Top: Embossed brand name */}
                <div className="z-10 flex flex-col">
                  <span 
                    style={{ color: panel.textColor }}
                    className="text-[8px] sm:text-[9px] font-sans font-black tracking-widest uppercase opacity-75"
                  >
                    {panel.embossedText}
                  </span>
                  <span 
                    style={{ color: panel.textColor }}
                    className="text-[6.5px] sm:text-[7.5px] font-mono font-bold tracking-[0.2em] uppercase opacity-60 mt-0.5"
                  >
                    {panel.subText}
                  </span>
                </div>

                {/* Section Bottom: Specs label stickers matching photo */}
                <div className="z-10 flex flex-wrap gap-1 items-end justify-between">
                  {panel.stickerLabels && panel.stickerLabels.map((lbl, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white/95 text-slate-800 text-[5px] sm:text-[6px] font-mono border border-slate-300 font-bold px-1 py-[1px] rounded shadow-xs uppercase leading-none max-w-full truncate"
                    >
                      {lbl}
                    </div>
                  ))}
                  
                  {/* Phase temp pill code indicator */}
                  <span 
                    style={{ backgroundColor: 'rgba(0,0,0,0.15)', color: panel.textColor }}
                    className="text-[6px] sm:text-[7px] font-sans font-black px-1 py-0.5 rounded ml-auto text-right"
                  >
                    {panel.temp.split(' ')[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Dynamic Spec Panel Overlay showing detailed metrics of the hovered block */}
        <AnimatePresence>
          {hoveredId && activePanel && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.98 }}
              className="absolute bottom-3 left-3 right-3 bg-slate-900/95 border border-[#0055CC]/30 rounded-xl p-4 shadow-xl z-40 backdrop-blur-md flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <div 
                      className="w-3 h-3 rounded-full border border-white/20" 
                      style={{ backgroundColor: activePanel.colorHex }} 
                    />
                    <h4 className="text-xs sm:text-sm font-sans font-black uppercase text-white tracking-wide">
                      {activePanel.name}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/30">
                    <Snowflake className="w-3 h-3 animate-pulse text-cyan-400" />
                    PCM Thermal Target: {activePanel.temp}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <span className="text-[9px] font-mono font-extrabold px-1.5 py-0.5 bg-[#FF6B35]/20 text-[#FF6B35] rounded uppercase border border-[#FF6B35]/25">
                    ISO CERTIFIED
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-slate-800 font-mono text-[9px] sm:text-[10px]">
                <div>
                  <span className="text-slate-500 block text-[8px] uppercase tracking-wider">Dimensions:</span>
                  <span className="text-white font-extrabold">{activePanel.dimensions}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[8px] uppercase tracking-wider">Capacity:</span>
                  <span className="text-white font-extrabold">{activePanel.capacity}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[8px] uppercase tracking-wider">Dry Weight:</span>
                  <span className="text-white font-extrabold">{activePanel.weight}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Permanent Prompt / Instructions Overlay when no pack is chosen */}
        <AnimatePresence>
          {!hoveredId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              className="absolute bottom-3 left-3 right-3 bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between pointer-events-none select-none"
            >
              <div className="flex items-center gap-3">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" />
                <p className="text-[10px] sm:text-xs font-sans text-slate-400">
                  <span className="font-bold text-white uppercase tracking-wider block sm:inline">Alpine PCM Plate Matrix </span>
                  &mdash; Hover over any phase change material panel to review physical specs and cold-chain targets
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
