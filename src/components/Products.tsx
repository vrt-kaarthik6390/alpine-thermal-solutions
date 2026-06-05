/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, HelpCircle, ChevronDown } from 'lucide-react';
import { PageId } from '../types';
import product1 from '@/assets/product1.jpeg';
import product4 from '@/assets/product4.jpeg';
import product8 from '@/assets/product8.jpeg';
import product2 from '@/assets/product2.jpeg';
import product5 from '@/assets/product5.jpeg';
import product7 from '@/assets/product7.jpeg';

interface ProductsProps {
  onPageChange: (page: PageId) => void;
}

const gelPackImages = [product1, product4, product8, product1, product4, product8];
const pcmImages = [product2, product5, product7, product2, product5, product7];

function FilmStrip({ images }: { images: string[] }) {
  return (
    <div className="relative h-[500px] overflow-hidden flex gap-4">

      {/* Scrolling photos */}
      <div className="relative flex-grow overflow-hidden">
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-current to-transparent z-10 pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-current to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex flex-col gap-4"
          animate={{ y: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-full h-56 rounded-xl overflow-hidden border border-[#00C6D4]/20 relative group shrink-0"
            >
              <img
                src={img}
                alt="product"
                className="w-full h-full object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function Products({ onPageChange }: ProductsProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const productFaqs = [
    {
      q: 'What makes eutectic chemistry superior to water-ice blocks?',
      a: 'Standard water-ice expands aggressively when frozen, stressing film welds and triggering leakage risks. Eutectics can be chemically calculated to freeze at custom thresholds like +5°C or -21°C — keeping biological materials precisely within regulatory boundaries without thermal shock.'
    },
    {
      q: 'How long can passive containers hold thermal states?',
      a: 'When combined with our multi-wall VIP and double layer PCM panels, our passive solutions maintain strict +2°C to +8°C payloads for 96 to 120 hours under heavy ISTA extreme summer temperature profiles.'
    },
    {
      q: 'What are the air freight advantages over Dry Ice?',
      a: 'Dry Ice is classified as Class 9 Dangerous Cargo by IATA. Our sub-zero eutectic plates are non-subliming and pose zero danger, allowing absolute airline approval without volume limits or fees.'
    }
  ];

  return (
    <div id="products-catalog-view" className="font-sans text-slate-800 bg-[#0A1628]">

      {/* HERO */}
      <section className="relative bg-[#0A1628] text-white py-24 px-4 sm:px-6 lg:px-8 text-center min-h-[45vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto relative z-10 pt-16">
          <span className="text-xs font-sans font-bold text-[#00C6D4] tracking-[0.3em] uppercase">
            Product Catalogue
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-tight uppercase text-white mt-4">
            Two Products.<br />One Cold Chain Mission.
          </h1>
          <p className="mt-6 text-sm text-slate-400 max-w-2xl mx-auto">
            Engineered from the ground up to eliminate temperature excursions across pharma logistics, clinical storage, and frozen cargo.
          </p>
        </div>
      </section>

      {/* PRODUCT 01 — GEL PACKS */}
      <section className="py-20 bg-white text-slate-800 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — Film Strip */}
          <div className="lg:col-span-4" style={{ color: 'white' }}>
            <div className="relative h-[520px] overflow-hidden flex gap-3 rounded-2xl">

              {/* Scrolling photos */}
              <div className="relative flex-grow overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{ y: ['0%', '-50%'] }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                  {gelPackImages.map((img, i) => (
                    <div key={i} className="w-full h-52 rounded-xl overflow-hidden border border-slate-200 shrink-0 group">
                      <img src={img} alt="gel pack" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <span className="text-xs font-sans text-[#00C6D4] tracking-[0.25em] uppercase">Product 01</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#0A1628] tracking-tight mt-2">
              Leak-Proof Gel Packs
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-xl">
              Synthesized with non-toxic polymer resins. Maintains a stable 0°C plateau, surviving extreme drops and crushing container stresses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8">
              {[
                { title: 'Leak-Proof Seal', desc: 'Wider automated heat-seals protect against high-altitude cargo drops.' },
                { title: 'Expansion Safe', desc: 'Elastic molecules adapt safely during crystallization.' },
                { title: 'Salt-Tolerant', desc: 'Hundreds of freeze-thaw operations without chemical partition.' },
                { title: 'Custom Sizes', desc: 'Standard B2B increments or custom physical fits on request.' }
              ].map((feat) => (
                <div key={feat.title} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#00C6D4] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-black uppercase text-[#0A1628] tracking-wide block">{feat.title}</span>
                    <span className="text-xs text-slate-400 mt-1 block">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {[
                { label: 'Plateau Temp', value: '0°C' },
                { label: 'Film Tech', value: 'Co-extruded' },
                { label: 'Hermetic Rating', value: '100%' },
                { label: 'Burst Resistance', value: '>120kg' }
              ].map((spec) => (
                <div key={spec.label} className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm">
                  <span className="block text-xl font-black text-[#00C6D4]">{spec.value}</span>
                  <span className="block text-[10px] font-sans text-slate-400 uppercase tracking-widest mt-1">{spec.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCT 02 — PCM PANELS */}
      <section className="py-20 bg-[#0A1628] text-white px-4 sm:px-6 lg:px-8 border-t border-[#00C6D4]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — Text */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <span className="text-xs font-sans text-[#00C6D4] tracking-[0.25em] uppercase">Product 02</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-2">
              Rigid PCM Thermal Panels
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl">
              Blow-molded HDPE plates filled with phase change formulations. Built for 1000+ freeze cycle returns in circular 3PL supply chains.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8">
              {[
                { title: 'Blow-Molded HDPE', desc: 'Heavy-gauge shells prevent punctures or physical cargo crush risk.' },
                { title: 'Flat Rib Profile', desc: 'Modular stacking alongside standard parcel coolers.' },
                { title: 'Spin-Welded Plug', desc: 'High-frequency fusion seals prevent internal chemical leaks.' },
                { title: '1000+ Cycles', desc: 'Designed for extensive circular shipping returns.' }
              ].map((feat) => (
                <div key={feat.title} className="flex gap-3 bg-white/[0.03] p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#00C6D4] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-black uppercase text-white tracking-wide block">{feat.title}</span>
                    <span className="text-xs text-slate-400 mt-1 block">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {[
                { label: 'Shell Material', value: 'HDPE' },
                { label: 'Plateau Options', value: '3 Ranges' },
                { label: 'Plug Welding', value: 'Spin Weld' },
                { label: 'Reusability', value: '1000+' }
              ].map((spec) => (
                <div key={spec.label} className="bg-white/[0.03] border border-[#00C6D4]/10 rounded-xl p-4 text-center">
                  <span className="block text-xl font-black text-[#00C6D4]">{spec.value}</span>
                  <span className="block text-[10px] font-sans text-slate-500 uppercase tracking-widest mt-1">{spec.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Film Strip */}
          <div className="lg:col-span-4">
            <div className="relative h-[520px] overflow-hidden flex gap-3 rounded-2xl">
              
              {/* Scrolling photos */}
              <div className="relative flex-grow overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A1628] to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A1628] to-transparent z-10 pointer-events-none" />
                <motion.div
                  className="flex flex-col gap-3"
                  animate={{ y: ['0%', '-50%'] }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                  {pcmImages.map((img, i) => (
                    <div key={i} className="w-full h-52 rounded-xl overflow-hidden border border-[#00C6D4]/20 shrink-0 group">
                      <img src={img} alt="pcm panel" className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-all duration-500" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0A1628] text-white px-4 sm:px-6 lg:px-8 border-t border-[#00C6D4]/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-sans text-[#00C6D4] tracking-[0.25em] uppercase">Got Questions</span>
            <h2 className="text-2xl font-black uppercase text-white tracking-tight mt-2">Technical FAQ</h2>
          </div>

          <div className="flex flex-col gap-4">
            {productFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center text-sm font-bold text-slate-200 hover:text-white uppercase tracking-wide cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#00C6D4] shrink-0 ml-4 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPageChange('contact')}
              className="bg-[#00C6D4] text-[#0A1628] px-8 py-4 rounded-lg text-sm font-extrabold uppercase tracking-widest hover:bg-[#00e0f0] transition-colors cursor-pointer shadow-lg shadow-[#00C6D4]/20"
            >
              Request A Sample Kit
            </motion.button>
          </div>
        </div>
      </section>

    </div>
  );
}