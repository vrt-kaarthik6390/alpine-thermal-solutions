/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';

// Global Layout Components
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

// Page Views
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

import { ArrowUp } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor viewport depth for Back To Top floating button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Soft switch routing resetting page depth index
  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col justify-between selection:bg-[#0055CC] selection:text-white relative">
      
      {/* 13. PAGE LOAD INITIALIZATION MODULE */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* 4. GLOBAL NAVIGATION HEADER */}
          <Header currentPage={currentPage} onPageChange={handlePageChange} />

          {/* DYNAMIC TRANSITION CONTAINER */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                className="relative"
              >
                {currentPage === 'home' && <Home onPageChange={handlePageChange} />}
                {currentPage === 'about' && <About />}
                {currentPage === 'products' && <Products onPageChange={handlePageChange} />}
                {currentPage === 'gallery' && <Gallery />}
                {currentPage === 'contact' && <Contact />}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* 5. GLOBAL PRE-FOOTER DIRECTORIES */}
          <PreFooter onPageChange={handlePageChange} />

          {/* 6. GLOBAL FOOTER STRIP */}
          <Footer />

          {/* Back-To-Top Tactile Action Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                id="back-to-top-button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                whileHover={{ scale: 1.1, backgroundColor: '#0055CC' }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-40 bg-[#0D1B2A] text-white border border-white/15 p-3 rounded-full shadow-lg shadow-black/30 flex items-center justify-center cursor-pointer select-none"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}

    </div>
  );
}
