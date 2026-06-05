/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  

  return (
    <footer
      id="alpine-global-footer"
      className="bg-[#0A0F19] text-slate-500 text-center py-6 border-t border-[#0055CC]/15"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copy text */}
        <p className="text-xs text-slate-500 font-sans tracking-wide">
          &copy; {currentYear !== 2026 ? "2025 - " + currentYear : "2025 - 2026"} Alpine Thermal Solutions. All Rights Reserved. Regd. Works: Tamil Nadu, India.
        </p>
      </div>
    </footer>
  );
}
