/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  Send, 
  Loader2,
  Clock
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Pharma & Biologics',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Inline focus validators
  const validateField = (name: string, value: string) => {
    let err = '';
    if (name === 'name' && value.trim().length < 3) {
      err = 'Name must be at least 3 characters.';
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        err = 'Provide a valid business email address.';
      }
    } else if (name === 'message' && value.trim().length < 10) {
      err = 'Message must contain at least 10 characters.';
    }
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Final checks
    const finalErrors: Record<string, string> = {};
    if (formData.name.trim().length < 3) finalErrors.name = 'Name must be at least 3 characters.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) finalErrors.email = 'Provide a valid business email address.';
    if (formData.message.trim().length < 10) finalErrors.message = 'Message must contain at least 10 characters.';

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      // Trigger subtle haptic rumble shake conceptually on error bounds
      return;
    }

    setIsSubmitting(true);

    // Simulated B2B lead dispatching delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Dissolve after 5 seconds as specified
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
      // Clear
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        industry: 'Pharma & Biologics',
        message: ''
      });
    }, 1500);
  };

  return (
    <div id="contact-us-view" className="font-sans text-slate-800 bg-[#F0F4F8] pt-16">
      
      {/* 11.1 CONTACT US HERO */}
      <section
        id="contact-hero"
        className="relative bg-[#0D1B2A] text-white py-20 px-4 sm:px-6 lg:px-8 text-center min-h-[35vh] flex flex-col justify-center"
      >
        <div className="absolute inset-0 bg-radial-gradient(at left index, rgba(0, 85, 204, 0.1) 0%, transparent 60%) pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.3em] uppercase">
            Alpine Lead Integration
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-tight uppercase mt-4">
            Get In Touch
          </h1>
          <p className="mt-4 text-sm text-slate-300 font-sans max-w-2xl mx-auto pl-2 border-l-2 border-blue-500/50">
            Have thermodynamic calculations, custom cargo sizing requests, or return loop inquiries? Outperform excursion variables immediately by speaking directly with Alpine engineers.
          </p>
        </div>
      </section>

      {/* 11.2 FORM & INFO COLS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Form */}
          <div className="lg:col-span-7 flex flex-col items-start text-left bg-[#F0F4F8] p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-sans font-black uppercase tracking-wide text-[#0D1B2A] mb-6">
              Send Us A Specification Message
            </h2>

            {/* Success flash screen */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full bg-emerald-50 border-2 border-emerald-500 rounded-lg p-5 flex items-start gap-3 mb-6 relative overflow-hidden"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wide">
                      Specification Query Dispatched
                    </h3>
                    <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                      Thanks for reaching out! Your thermodynamic criteria sheet has been cataloged. An Alpine system diagnostic engineer will correspond within 24 business hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
              
              {/* Name Block */}
              <div className="flex flex-col w-full text-left">
                <label htmlFor="contact-name" className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D1B2A] mb-1.5 flex justify-between">
                  <span>Full Name: *</span>
                  {errors.name && <span className="text-red-500 font-sans font-normal normal-case">{errors.name}</span>}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`bg-white border rounded p-3 text-xs focus:outline-none transition-shadow ${
                    errors.name ? 'border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' : 'border-slate-350 focus:border-[#0055CC] focus:shadow-[0_0_0_3px_rgba(0,85,204,0.15)]'
                  }`}
                />
              </div>

              {/* Company Block */}
              <div className="flex flex-col w-full text-left">
                <label htmlFor="contact-company" className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D1B2A] mb-1.5">
                  Company Name:
                </label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  placeholder="Vibrant Logistics Ltd"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-white border border-slate-350 rounded p-3 text-xs focus:outline-none focus:border-[#0055CC] focus:shadow-[0_0_0_3px_rgba(0,85,204,0.15)] transition-shadow"
                />
              </div>

              {/* Grid block email phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <div className="flex flex-col text-left">
                  <label htmlFor="contact-email" className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D1B2A] mb-1.5 flex justify-between">
                    <span>Business Email: *</span>
                    {errors.email && <span className="text-red-500 font-sans font-normal normal-case">{errors.email}</span>}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="pharma@supplychain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-white border rounded p-3 text-xs focus:outline-none transition-shadow ${
                      errors.email ? 'border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' : 'border-slate-350 focus:border-[#0055CC] focus:shadow-[0_0_0_3px_rgba(0,85,204,0.15)]'
                    }`}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <label htmlFor="contact-phone" className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D1B2A] mb-1.5">
                    Phone Number:
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 87460 99190"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white border border-slate-350 rounded p-3 text-xs focus:outline-none focus:border-[#0055CC] focus:shadow-[0_0_0_3px_rgba(0,85,204,0.15)] transition-shadow"
                  />
                </div>
              </div>

              {/* Industry Dropdown */}
              <div className="flex flex-col w-full text-left">
                <label htmlFor="contact-industry" className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D1B2A] mb-1.5">
                  Target B2B Industry Corridor: *
                </label>
                <select
                  id="contact-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="bg-white border border-slate-355 rounded p-3 text-xs focus:outline-none focus:border-[#0055CC] focus:shadow-[0_0_0_3px_rgba(0,85,204,0.15)] cursor-pointer"
                >
                  <option>Pharma & Biologics</option>
                  <option>Clinical Trial Logistics</option>
                  <option>Frozen Food Export Corridor</option>
                  <option>Specialty Chemical Assay</option>
                  <option>Other passive transport</option>
                </select>
              </div>

              {/* Message Block */}
              <div className="flex flex-col w-full text-left">
                <label htmlFor="contact-message" className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D1B2A] mb-1.5 flex justify-between">
                  <span>Thermodynamic Criteria Message: *</span>
                  {errors.message && <span className="text-red-500 font-sans font-normal normal-case">{errors.message}</span>}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Detail your shipping box size, payload mass, expected lane durations (96 hrs, etc.), and temperature plateau options (+5C or -21C)..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`bg-white border rounded p-3 text-xs focus:outline-none transition-shadow ${
                    errors.message ? 'border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' : 'border-slate-350 focus:border-[#0055CC] focus:shadow-[0_0_0_3px_rgba(0,85,204,0.15)]'
                  }`}
                />
              </div>

              {/* Submit CTA button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FF6B35] text-white hover:bg-[#ff5514] font-extrabold uppercase text-xs tracking-widest py-4 px-6 rounded flex items-center justify-center gap-2 transition-colors cursor-pointer w-full mt-2 shadow-md shadow-[#FF6B35]/25"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Transmitting criteria...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send B2B Message</span>
                  </>
                )}
              </motion.button>

            </form>
          </div>

          {/* Right Column Specifications details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h2 className="text-xl font-sans font-black uppercase tracking-wide text-[#0D1B2A] mb-1">
              Quick Communications
            </h2>
            <div className="w-12 h-1 bg-[#0055CC] mt-2 mb-8" />

            <div className="flex flex-col gap-8 w-full text-slate-600 font-sans text-sm">
              
              {/* Box 1 email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#0055CC]/10 text-[#0055CC] rounded flex items-center justify-center shrink-0 border border-[#0055CC]/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-400">
                    Lead Corruptions & Inquiries:
                  </span>
                  <a
                    href="mailto:sales@alpinethermal.in"
                    className="text-base text-[#0055CC] font-bold hover:underline transition-colors mt-1 focus:outline-none"
                  >
                    sales@alpinethermal.in
                  </a>
                </div>
              </div>

              {/* Box 2 phone dial */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#0055CC]/10 text-emerald-600 rounded flex items-center justify-center shrink-0 border border-emerald-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-400">
                    Works Technical Hotline:
                  </span>
                  <a
                    href="tel:+918746099190"
                    className="text-base text-emerald-600 font-bold hover:underline transition-colors mt-1"
                  >
                    +91 87460 99190
                  </a>
                </div>
              </div>

              {/* Box 3 URL address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#0055CC]/10 text-[#FF6B35] rounded flex items-center justify-center shrink-0 border border-orange-100">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-400">
                    Online Resource Nodes:
                  </span>
                  <a
                    href="https://www.alpinethermal.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-slate-700 hover:text-[#0055CC] font-bold hover:underline transition-colors mt-1"
                  >
                    www.alpinethermal.in
                  </a>
                </div>
              </div>

              {/* Box 4 Registered address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#0055CC]/10 text-[#0D1B2A] rounded flex items-center justify-center shrink-0 border border-slate-250">
                  <MapPin className="w-5 h-5 text-slate-900" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-400">
                    Commercial Manufacturing Plant:
                  </span>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Survey No 29/9, Anumepalli, Hosur, Krishnagiri District - 635126, India.
                  </p>
                </div>
              </div>

            </div>

            {/* Response speed badge */}
            <div className="mt-12 bg-[#E3F2FD] border border-blue-200 p-4 rounded-xl flex items-start gap-3 w-full font-serif text-slate-800">
              <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="flex flex-col text-left font-sans text-xs">
                <span className="font-extrabold uppercase tracking-wide text-blue-900">
                  B2B Response Standard Threshold:
                </span>
                <span className="text-slate-600 mt-1 leading-relaxed">
                  We answer standard criteria inquiries inside **24 business hours**. For emergency shipment excursions or freight holds, call the works hotline directly.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 11.3 RESPONSIVE GOOGLE MAPS EMBED SECTION */}
      <section className="bg-[#0D1B2A] pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 text-white">
            <span className="text-xs font-mono font-bold text-[#FF6B35] tracking-[0.25em] uppercase">
              Works Coordinates Visual
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black uppercase tracking-tight mt-2">
              Find Us On The Grid
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-2">
              Survey No 29/9, Anumepalli, Hosur, Krishnagiri District - 635126
            </p>
            <div className="w-12 h-1 bg-[#0055CC] mx-auto mt-4" />
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-[#102A43] min-h-[400px]">
            {/* Real responsive Google Maps iframe of Hosur */}
            <iframe
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-85 contrast-125"
              title="Alpine Thermal Solutions Hosur Works Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.356291689255!2d77.8239062!3d12.6250654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae710003884773%3A0x9293811c7a091106!2sAnumepalli%2C%20Hosur%2C%20Krishnagiri%20District%20-%20635126!5e0!3m2!1sen!2sin!4v1717387405234!5m2!1sen!2sin"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
