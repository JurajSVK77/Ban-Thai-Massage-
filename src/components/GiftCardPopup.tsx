import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
// @ts-ignore
import giftCardImg from '../assets/images/darcekova_poukazka.png';

const POPUP_DELAY_MS = 5000;

export function GiftCardPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBuyClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'gift_card_click', {
        source: 'popup',
        location: 'homepage'
      });
      // Also trigger conversion event for Google Ads as requested in previous steps just in case
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18303717684/oYj_CNKC3MscELSi8pdE'
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[900px] max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full text-brand-green-dark hover:bg-brand-peach-light hover:text-white transition-colors"
              aria-label="Zatvoriť"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-brand-green-dark">
              <img
                src={giftCardImg}
                alt="Darčeková poukážka Baan Thai Massage"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-bg-alt/40">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-peach-dark mb-4 block">
                DARČEKOVÉ POUKÁŽKY
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-green-dark mb-2">
                Darujte viac než len poukážku
              </h2>
              <p className="text-xl font-medium text-brand-green-dark mb-6">
                Darujte oddych, ktorý má zmysel.
              </p>
              
              <div className="w-12 h-[1px] bg-brand-green mx-auto md:mx-0 mb-6"></div>

              <p className="text-text-muted font-light leading-relaxed mb-8">
                Elektronickú darčekovú poukážku zakúpite jednoducho online cez Bookio a môžete ju okamžite darovať svojim blízkym.
              </p>

              <a
                href="https://services.bookio.com/baan-thai-massage-galanta/gift-cards"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBuyClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-dark text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-all shadow-lg hover:bg-brand-peach-dark hover:shadow-brand-peach-dark/20 text-center"
              >
                Kúpiť darčekovú poukážku online
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
