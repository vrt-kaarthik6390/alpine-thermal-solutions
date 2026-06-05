/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import product1 from '@/assets/product1.jpeg';
import product2 from '@/assets/product2.jpeg';
import product3 from '@/assets/product3.jpeg';
import product4 from '@/assets/product4.jpeg';
import product5 from '@/assets/product5.jpeg';
import product6 from '@/assets/product6.jpeg';
import product7 from '@/assets/product7.jpeg';
import product8 from '@/assets/product8.jpeg';

const tabs = ['All', 'Gel Packs', 'PCM Panels'];

const galleryItems = [
  { img: product1, tag: 'Gel Packs', title: 'Alpine Gel Pack Series' },
  { img: product2, tag: 'PCM Panels', title: 'Rigid PCM Plates' },
  { img: product3, tag: 'Gel Packs', title: 'Pharma Packing' },
  { img: product4, tag: 'Gel Packs', title: 'Insulated Shipping' },
  { img: product5, tag: 'PCM Panels', title: 'Panel Suite' },
  { img: product6, tag: 'PCM Panels', title: 'Lab Calibration' },
  { img: product7, tag: 'PCM Panels', title: 'Slim Panel Series' },
  { img: product8, tag: 'Gel Packs', title: 'Custom Formulas' },
];

const stats = [
  { value: '0°C', label: 'Gel Pack Plateau', desc: 'Stable chilled temperature maintained throughout transit' },
  { value: '-21°C', label: 'Deep Freeze Range', desc: 'Safe dry ice alternative' },
  { value: '+5°C', label: 'Pharma Window', desc: 'Precise +2°C to +8°C pharmaceutical safety corridor' },
  { value: '1000+', label: 'PCM Reuse Cycles', desc: 'Rigid HDPE panels built for circular supply chains' },
  { value: '100%', label: 'Hermetic Seal', desc: 'Zero leak guarantee on all gel pack configurations' },
  { value: 'ISO', label: '9001 Certified', desc: 'Verified B2B manufacturing facility in Hosur' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.tag === activeTab);

  return (
    <div id="gallery-panel-view" className="font-sans bg-[#0A1628]">

      {/* HERO */}
      <section className="relative bg-[#0A1628] text-white py-24 px-4 sm:px-6 lg:px-8 text-center min-h-[40vh] flex flex-col justify-center border-b border-[#00C6D4]/10">
        <div className="max-w-4xl mx-auto relative z-10 pt-16">
          <span className="text-xs font-sans font-semibold text-[#00C6D4] tracking-widest uppercase">
            Product Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase text-white mt-4">
            Precision In Every Frame
          </h1>
          <p className="mt-4 text-sm text-slate-400 max-w-xl mx-auto">
            A close look at Alpine Thermal's product range — gel packs, PCM panels, and the engineering behind every unit.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-16 bg-[#ffffff] px-4 sm:px-6 lg:px-8 border-b border-[#000000]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-[#00C6D4]/10 bg-[#0A1628]/85 hover:border-[#00C6D4]/30 transition-colors"
            >
              <span className="text-2xl font-black text-[#00C6D4]">{stat.value}</span>
              <span className="text-[10px] font-sans text-white uppercase tracking-widest mt-1">{stat.label}</span>
              <span className="text-[10px] text-slate-500 mt-2 leading-relaxed hidden lg:block">{stat.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PHOTO GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Tabs */}
          <div className="flex gap-3 mb-12 justify-center flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#00C6D4] text-[#0A1628]'
                    : 'border border-[#00C6D4]/20 text-slate-400 hover:border-[#00C6D4]/50 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-xl overflow-hidden border border-[#00C6D4]/10 cursor-pointer group aspect-square"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />

                {/* Overlay on hover */}
                <motion.div
                  animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent flex flex-col justify-end p-4"
                >
                  <span className="text-[9px] font-sans text-[#00C6D4] uppercase tracking-widest mb-1">{item.tag}</span>
                  <h3 className="font-black text-white uppercase text-sm tracking-wide">{item.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-[#082B3F] text-white px-4 text-center border-t border-[#00C6D4]/10">
        <span className="text-xs font-sans text-[#00C6D4] uppercase tracking-widest">Interested?</span>
        <h2 className="text-2xl font-black uppercase text-white mt-2">Request A Sample Kit</h2>
        <p className="text-slate-400 text-sm mt-3 max-w-md mx-auto">
          Get physical samples of our gel packs and PCM panels delivered to your facility for testing.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 mt-8 bg-[#00C6D4] text-[#0A1628] px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#00e0f0] transition-colors cursor-pointer"
        >
          Get In Touch
        </motion.a>
      </section>

    </div>
  );
}