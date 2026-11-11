import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Gift } from 'lucide-react';
import { useChristmasTheme } from './ChristmasTheme';
// @ts-ignore
import vianocnaGiftCardImg from '../assets/images/vianocna_darcekova_poukazka.png';
// @ts-ignore
import classicGiftCardImg from '../assets/images/darcekova_poukazka.png';

const POPUP_DELAY_MS = 5000;
const BOOKIO_URL = 'https://services.bookio.com/baan-thai-massage-galanta/gift-cards';

export function GiftCardPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { isChristmas } = useChristmasTheme();

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
      // Trigger conversion event for Google Ads
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18303717684/oYj_CNKC3MscELSi8pdE'
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[880px] max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row z-10 border border-brand-peach-light/30"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 p-2 sm:p-2.5 bg-white/90 hover:bg-white text-brand-green-dark hover:text-brand-peach-dark rounded-full shadow-lg backdrop-blur-md transition-all duration-200 cursor-pointer"
              aria-label="Zatvoriť"
            >
              <X size={20} className="sm:w-5 sm:h-5" />
            </button>

            {/* Christmas Visual / Graphic - exact 1:1 aspect ratio to fill edge-to-edge */}
            <div className="w-full md:w-[440px] lg:w-[470px] aspect-square shrink-0 relative bg-[#0e1a14] overflow-hidden">
              <a
                href={BOOKIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBuyClick}
                className="block w-full h-full cursor-pointer"
                title={isChristmas ? "Kúpiť vianočnú darčekovú poukážku online" : "Kúpiť darčekovú poukážku online"}
              >
                <img
                  src={isChristmas ? vianocnaGiftCardImg : classicGiftCardImg}
                  alt={isChristmas ? "Vianočná darčeková poukážka Baan Thai Massage" : "Darčeková poukážka Baan Thai Massage"}
                  loading="lazy"
                  className="w-full h-full object-cover select-none"
                />
              </a>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 sm:p-7 md:p-8 lg:p-9 flex flex-col justify-between bg-gradient-to-b from-white via-bg-alt/30 to-bg-alt/60 min-w-0">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-peach-light/25 border border-brand-peach-dark/20 text-brand-peach-dark text-[10px] uppercase tracking-[0.25em] font-bold mb-3">
                  {isChristmas && <Sparkles className="w-3 h-3 text-brand-peach-dark" />}
                  {isChristmas ? "Vianočná darčeková poukážka" : "Darčekové poukážky"}
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-serif text-brand-green-dark leading-tight mb-2">
                  Darujte viac než len poukážku
                </h2>
                
                <p className="text-base sm:text-lg font-serif italic text-brand-peach-dark mb-3">
                  Darujte oddych, ktorý má zmysel.
                </p>
                
                <div className="w-12 h-[1px] bg-brand-peach-dark/40 mb-3.5"></div>

                <p className="text-text-muted font-light text-xs sm:text-sm leading-relaxed mb-4">
                  {isChristmas 
                    ? "Potešte svojich blízkych pod stromčekom darom skutočného uvoľnenia a harmónie. Elektronickú vianočnú poukážku zakúpite pohodlne online cez Bookio a obdržíte ju okamžite do e-mailu."
                    : "Elektronickú darčekovú poukážku zakúpite jednoducho online cez Bookio a môžete ju okamžite darovať svojim blízkym."}
                </p>

                {/* Highlight badges */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-text-dark">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-brand-green-light/20">
                    <div className="w-2 h-2 rounded-full bg-brand-peach-dark shrink-0"></div>
                    <span className="font-light text-[11px] sm:text-xs">Nákup za pár minút</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-brand-green-light/20">
                    <div className="w-2 h-2 rounded-full bg-brand-peach-dark shrink-0"></div>
                    <span className="font-light text-[11px] sm:text-xs">Doručenie e-mailom</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={BOOKIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBuyClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 bg-brand-green-dark hover:bg-brand-peach-dark text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-brand-peach-dark/25 text-center group cursor-pointer"
                >
                  <Gift className="w-4 h-4 text-brand-peach-light group-hover:rotate-12 transition-transform" />
                  Kúpiť darčekovú poukážku online
                </a>
                
                <p className="text-[10px] text-text-muted/70 text-center mt-2">
                  Okamžité doručenie • Platba kartou online cez Bookio
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
