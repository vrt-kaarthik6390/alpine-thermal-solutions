/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import product1 from '@/assets/product1.jpeg';
import product2 from '@/assets/product2.jpeg';
import product3 from '@/assets/product3.jpeg';
import product4 from '@/assets/product4.jpeg';
import product5 from '@/assets/product5.jpeg';
import product6 from '@/assets/product6.jpeg';
import product7 from '@/assets/product7.jpeg';
import product8 from '@/assets/product8.jpeg';
import tempControlBg from '@/assets/ice.png';
import reusableBg from '@/assets/green.png';
import globalBg from '@/assets/B2B.png';

interface HomeProps {
  onPageChange: (page: PageId) => void;
}

const bentoCards = [
  { img: product1, tag: 'Gel Packs', title: 'Leak-Proof Gel Series', span: 'col-span-1 row-span-2' },
  { img: product2, tag: 'PCM Panels', title: 'Rigid PCM Plates', span: 'col-span-1 row-span-1' },
  { img: product3, tag: 'Pharma', title: 'Active Packing', span: 'col-span-1 row-span-1' },
  { img: product4, tag: 'Cold Chain', title: 'Insulated Shipping', span: 'col-span-2 row-span-1' },
  { img: product5, tag: 'PCM Design', title: 'Panel Suite', span: 'col-span-1 row-span-1' },
  { img: product6, tag: 'Lab', title: 'Calibration Tests', span: 'col-span-1 row-span-1' },
  { img: product7, tag: 'Product', title: 'Slim Panel Series', span: 'col-span-1 row-span-1' },
  { img: product8, tag: 'Eutectic', title: 'Custom Formulas', span: 'col-span-1 row-span-1' },
];

function BentoCard({ img, tag, title, span }: { img: string; tag: string; title: string; span: string }) {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const randomDelay = Math.random() * 4000 + 2000;
    const randomDuration = Math.random() * 3000 + 2000;

    const flip = () => {
      setShowLabel(true);
      setTimeout(() => setShowLabel(false), randomDuration);
    };

    const interval = setInterval(flip, randomDelay + randomDuration);
    const initial = setTimeout(flip, randomDelay);

    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, []);

  return (
    <div className={`${span} relative rounded-xl overflow-hidden border border-[#00C6D4]/15 cursor-pointer group`}>
      {/* Photo side */}
      <motion.div
        animate={{ opacity: showLabel ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="text-[9px] font-sans text-[#00C6D4] uppercase tracking-widest">{tag}</span>
        </div>
      </motion.div>

      {/* Label side */}
      <motion.div
        animate={{ opacity: showLabel ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[#082B3F] flex flex-col items-center justify-center p-4 border border-[#00C6D4]/20"
      >
        <span className="text-[9px] font-sans text-[#00C6D4] uppercase tracking-[0.2em] mb-3">{tag}</span>
        <h3 className="font-black text-white uppercase text-sm text-center leading-tight tracking-wide">{title}</h3>
        <div className="w-8 h-[1px] bg-[#00C6D4]/40 mt-3" />
      </motion.div>
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-[420px]">
      {bentoCards.map((card, i) => (
        <BentoCard key={i} {...card} />
      ))}
    </div>
  );
}
export default function Home({ onPageChange }: HomeProps) {
  // Stagger state for gallery previews
  const [activeSlide, setActiveSlide] = useState(0);
    // Product carousel state
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  
  const productImages = [
    {
      image: product1,
      title: 'Leak-Proof Gel Packs',
      tag: 'PRODUCT FAMILY 01',
      description: 'Highly durable gel formulations enclosed in heavy co-extruded films with heat-sealed seams for zero leak hazards under severe altitude pressure.'
    },
    {
      image: product2,
      title: 'Rigid PCM Thermal Panels',
      tag: 'PRODUCT FAMILY 02',
      description: 'Blow-molded heavy-duty HDPE physical plates filled with custom organic or salt-hydrate matric phase change models. Reusable for 1000s of cycles.'
    }
  ];
  
  const nextProduct = () => {
    setActiveProductIndex((prev) => (prev + 1) % productImages.length);
  };
  
  const prevProduct = () => {
    setActiveProductIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };
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

  // Intersection Observer for scroll reveal & scroll listener for parallax effects
  useEffect(() => {
    // 1. Intersection Observer for Fade-in/Slide-up sections
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    // 2. Parallax floating effects on scroll (Anti-gravity)
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          parallaxElements.forEach((el) => {
            const speed = parseFloat(el.getAttribute('data-speed') || '0.1');
            const yPos = scrolled * speed;
            (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home-view" className="relative font-sans text-slate-800 bg-[#F0F4F8]">
      
      {/* 7.1 HERO SECTION */}
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center bg-[#0A1628] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-reveal"
      >
        {/* Anti-gravity / Parallax background elements */}
        <div 
          className="absolute top-1/4 left-[10%] w-72 h-72 bg-[#00C6D4]/8 rounded-full blur-[100px] pointer-events-none parallax-element"
          data-speed="0.15"
        />
        <div 
          className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-[#0055CC]/12 rounded-full blur-[120px] pointer-events-none parallax-element"
          data-speed="0.08"
        />


        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
          {/* Left Hero Content */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            

            {/* Tagline Headings - Mask staggered reveal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight leading-tight text-white uppercase drop-shadow-md">
              <span className="block">Engineered To Protect.</span>
              <span className="block text-[#00C6D4]">
                Built To Perform.
              </span>
            </h1>

            

            {/* CTA Controls */}
            <div className="mt-8 flex flex-col items-center gap-6">
              <motion.button
                id="hero-cta-solutions"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPageChange('products')}
                className="bg-[#00C6D4]/27 text-white px-8 py-4 rounded text-xs sm:text-sm font-extrabold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#00C6D4]/20 hover:shadow-[#00C6D4]/45 hover:bg-[#00A8B5] transition-all cursor-pointer"
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


          </div>

          {/* Right Hero Visual Graphic - Side-by-Side Trapezoidal Photos with Custom Splitting Design */}
          <div className="md:col-span-5 flex justify-center items-center w-full min-h-[380px] md:min-h-[450px] parallax-element" data-speed="0.12">
              <BentoGrid />
          </div>

        </div>

      </section>

      {/* 7.2 QUICK FEATURE GRID */}
      <section
        id="feature-grid"
        className="py-20 bg-[#F0F4F8] text-slate-900 px-4 sm:px-6 lg:px-8 scroll-reveal"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Introductions */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-sans font-bold text-[#005F5F] tracking-[0.25em] uppercase">
              B2B Critical Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase text-[#0D1B2A] tracking-tight mt-3">
              Reliability Built Round Every Thermal Variable
            </h2>
            <div className="w-16 h-1 bg-[#005F5F] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
  {/* Card 1 - Precision Temperature Control */}
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-cover bg-center rounded-xl overflow-hidden relative min-h-[320px]"
    style={{ backgroundImage: `url(${tempControlBg})` }}
  >
    <div className="bg-black/20 backdrop-blur-[2px] p-8 h-full flex flex-col justify-between min-h-[320px]">
      <div>
        <div className="w-12 h-12 bg-white/20 text-white rounded-lg flex items-center justify-center mb-6">
          <Thermometer className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-wide drop-shadow-md">
          Precision Temperature Control
        </h3>
        <p className="text-sm text-white leading-relaxed mt-3 drop-shadow-sm">
          Keeps temperatures exactly where you need them — from +5°C down to -21°C — with almost zero fluctuation.
        </p>
      </div>
      <div className="mt-6 pt-6 border-t border-white/30 flex items-center justify-between font-sans text-[11px] text-white/90">
        <span>PHARMACEUTICAL</span>
        <span className="text-white font-bold">AA DESIGN</span>
      </div>
    </div>
  </motion.div>

  {/* Card 2 - Reusable & Sustainable */}
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-cover bg-center rounded-xl overflow-hidden relative min-h-[320px]"
    style={{ backgroundImage: `url(${reusableBg})` }}
  >
    <div className="bg-black/20 backdrop-blur-[2px] p-8 h-full flex flex-col justify-between min-h-[320px]">
      <div>
        <div className="w-12 h-12 bg-white/20 text-white rounded-lg flex items-center justify-center mb-6">
          <Leaf className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-wide drop-shadow-md">
          Reusable & Sustainable
        </h3>
        <p className="text-sm text-white leading-relaxed mt-3 drop-shadow-sm">
          No dry ice. No waste. Our formula is reusable for 5+ years.
        </p>
      </div>
      <div className="mt-6 pt-6 border-t border-white/30 flex items-center justify-between font-sans text-[11px] text-white/90">
        <span>GREEN ESG LABELS</span>
        <span className="text-white font-bold">100% RECYCLED</span>
      </div>
    </div>
  </motion.div>

  {/* Card 3 - Global Cold Chain Ready */}
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-cover bg-center rounded-xl overflow-hidden relative min-h-[320px]"
    style={{ backgroundImage: `url(${globalBg})` }}
  >
    <div className="bg-black/20 backdrop-blur-[2px] p-8 h-full flex flex-col justify-between min-h-[320px]">
      <div>
        <div className="w-12 h-12 bg-white/20 text-white rounded-lg flex items-center justify-center mb-6">
          <Globe2 className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-sans font-extrabold text-white uppercase tracking-wide drop-shadow-md">
          Global Cold Chain Ready
        </h3>
        <p className="text-sm text-white leading-relaxed mt-3 drop-shadow-sm">
          Meets all international airline, customs, and B2B standards. No flight delays. No cargo fines.
        </p>
      </div>
      <div className="mt-6 pt-6 border-t border-white/30 flex items-center justify-between font-sans text-[11px] text-white/90">
        <span>AIRLINE SECURITY</span>
        <span className="text-white font-bold">CE ACCREDITED</span>
      </div>
    </div>
  </motion.div>

</div>
        </div>
      </section>

                  {/* 7.3 FEATURED PRODUCTS CATALOGUE PREVIEW */}
      <section
        id="products-mini"
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden scroll-reveal"
      >
        {/* Background Image that changes with active product */}
        <div className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out">
          <img
            src={productImages[activeProductIndex].image}
            alt={productImages[activeProductIndex].title}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-xs font-sans font-bold text-[#0A1628] tracking-[0.25em] uppercase">
              Our Product Families
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black uppercase tracking-tight mt-3 text-white">
              Three Solutions. <span className="text-[#0A1628]">One Cold Chain Mission.</span>
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto mt-3">
              Precision temperature storage hardware engineered down to the molecular level.
            </p>
            <div className="w-16 h-1 bg-[#0A1628] mx-auto mt-4" />
          </div>

          {/* Product Info Card */}
          <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <span className="text-xs font-sans text-[#0A1628] font-bold uppercase tracking-wider">
              {productImages[activeProductIndex].tag}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase mt-2">
              {productImages[activeProductIndex].title}
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mt-4 leading-relaxed">
              {productImages[activeProductIndex].description}
            </p>
            
            {/* Temperature Badges */}
            <div className="flex justify-center gap-3 mt-6">
              <span className="bg-white/10 backdrop-blur-sm text-xs font-sans px-3 py-1.5 rounded-full text-[#0A1628] font-bold">+5°C</span>
              <span className="bg-white/10 backdrop-blur-sm text-xs font-sans px-3 py-1.5 rounded-full text-[#0A1628] font-bold">-21°C</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prevProduct}
              className="bg-white/10 hover:bg-[#0A1628] text-white rounded-full p-3 transition-all cursor-pointer backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {productImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProductIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeProductIndex === idx ? 'w-8 bg-[#0A1628]' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextProduct}
              className="bg-white/10 hover:bg-[#0A1628] text-white rounded-full p-3 transition-all cursor-pointer backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button
              onClick={() => onPageChange('products')}
              className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#00A8B5] text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-lg transition-all cursor-pointer shadow-lg shadow-[#0A1628]/50"
            >
              <span>View Full Product Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7.4 ABOUT US MINI PREVIEW */}
      <section
        id="about-preview"
        className="py-20 bg-[#F0F4F8] text-slate-900 px-4 sm:px-6 lg:px-8 scroll-reveal"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column SVG illustration of a modern pharmaceutical thermal warehouse */}
          <div className="relative group w-full max-w-lg flex justify-center">
  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#00C6D4]/20 shadow-xl relative">
    
    {/* Blurred background photo */}
    <div className="absolute inset-0 z-0">
      <img
        src={product6}
        alt=""
        className="w-full h-full object-cover scale-110 blur-sm brightness-[0.85]"
      />
    </div>
    
    {/* Dark teal overlay */}
    <div className="absolute inset-0 z-0 bg-[#082B3F]/60" />
    
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center gap-6 p-8 h-full">
  <div className="w-16 h-16 rounded-full bg-[#00C6D4]/10 border border-[#00C6D4]/20 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#00C6D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    </svg>
  </div>
  <div className="text-center">
    <h3 className="font-black text-white uppercase text-lg tracking-wide">
      Product Brochure
    </h3>
    <p className="text-slate-200 text-sm mt-2 font-sans">
      Full specifications, thermal data & product range
    </p>
  </div>
  <a
    href="/alpine-catalogue.pdf"
    download="Alpine-Thermal-Brochure.pdf"
    className="flex items-center gap-2 bg-[#00C6D4] text-[#0A1628] px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#00e0f0] transition-all hover:-translate-y-0.5"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    Download Brochure
  </a>
  <span className="font-sans text-[10px] text-slate-300 uppercase tracking-widest">
    PDF Format · Alpine Thermal Solutions
  </span>
</div>

  </div>
  <div className="absolute top-4 -right-4 w-full h-full border border-[#00C6D4]/15 rounded-2xl z-[-1] hidden sm:block" />
</div>

          {/* Right Column Text */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-sans font-bold text-[#00C6D4] tracking-[0.25em] uppercase">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight text-[#0D1B2A] mt-3">
              Engineering Precision Meets Cold Chain Expertise
            </h2>
            <p className="mt-6 text-sm text-slate-500 leading-relaxed font-sans">
              For years, we've worked behind the scenes with logistics agencies, clinical trials, and frozen produce carriers — building thermal systems that survive the toughest transit conditions.Our Hosur facility is equipped with chemical blending vats, seal stamping lines, and calibrated temperature chambers.            
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

      

      {/* 7.6 CONTACT CTA SECTION */}
      <section
        id="home-contact-cta"
        className="bg-[#0D1B2A] text-white border-t-4 border-b-4 border-[#00C6D4] relative overflow-hidden scroll-reveal"
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
              className="bg-[#00C6D4]/27/27 text-white px-8 py-4 rounded text-xs sm:text-sm font-extrabold uppercase tracking-widest hover:bg-[#00C6D4] transition-all cursor-pointer shadow-lg shadow-[#00C6D4]/25 hover:shadow-[#00C6D4]/45 select-none"
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
