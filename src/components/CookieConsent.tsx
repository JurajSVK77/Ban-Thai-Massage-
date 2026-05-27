import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Settings, Check, X, ShieldAlert } from "lucide-react";

interface CookieSettings {
  essential: boolean;
  analytical: boolean;
  marketing: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Local states for custom toggles in settings
  const [tempSettings, setTempSettings] = useState<CookieSettings>({
    essential: true,
    analytical: false,
    marketing: false,
  });

  const [savedSettings, setSavedSettings] = useState<CookieSettings | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("baanthai_cookie_consent");
      if (stored) {
        const parsed = JSON.parse(stored) as CookieSettings;
        setSavedSettings(parsed);
        setTempSettings(parsed);
      } else {
        // Show banner if not yet responded
        setIsVisible(true);
      }
    } catch (e) {
      console.error("Error reading cookie consent", e);
      setIsVisible(true);
    }

    // Listen to custom event to reopen settings
    const handleReopen = () => {
      setShowSettings(true);
      setIsVisible(true);
    };

    window.addEventListener("open-cookie-settings", handleReopen);
    return () => {
      window.removeEventListener("open-cookie-settings", handleReopen);
    };
  }, []);

  const saveConsent = (updated: CookieSettings) => {
    try {
      localStorage.setItem("baanthai_cookie_consent", JSON.stringify(updated));
      setSavedSettings(updated);
      setIsVisible(false);
      setShowSettings(false);
    } catch (e) {
      console.error("Error saving cookie consent", e);
    }
  };

  const handleAcceptAll = () => {
    const allOn = {
      essential: true,
      analytical: true,
      marketing: true,
    };
    saveConsent(allOn);
  };

  const handleRejectOptional = () => {
    const onlyEssential = {
      essential: true,
      analytical: false,
      marketing: false,
    };
    saveConsent(onlyEssential);
  };

  const handleSaveSelection = () => {
    saveConsent(tempSettings);
  };

  // Trigger to reopen at any time
  const handleOpenConsent = () => {
    if (savedSettings) {
      setTempSettings(savedSettings);
    }
    setShowSettings(true);
    setIsVisible(true);
  };

  return (
    <>
      {/* Floating trigger widget at bottom-left corner */}
      <AnimatePresence>
        {!isVisible && savedSettings && (
          <motion.button
            id="cookie-consent-trigger"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 0.85, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ opacity: 1, scale: 1.05, y: -2 }}
            onClick={handleOpenConsent}
            title="Nastavenia cookies"
            className="fixed bottom-6 left-6 z-50 p-3.5 bg-brand-green-dark text-white rounded-full shadow-xl shadow-black/20 border border-white/15 cursor-pointer flex items-center justify-center group"
          >
            <Shield className="w-5 h-5 text-brand-peach-light group-hover:rotate-12 transition-transform duration-300" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out text-[11px] uppercase tracking-widest font-semibold text-brand-peach-light/90 whitespace-nowrap pl-0 group-hover:pl-2">
              Cookies
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Cookie Banner / Settings Overlay */}
      <AnimatePresence>
        {isVisible && (
          <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none p-4 md:p-8">
            {/* Backdrop blur overlay only when in explicit details settings panel */}
            {showSettings && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
                onClick={() => setShowSettings(false)}
              />
            )}

            <motion.div
              id="cookie-consent-banner"
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="w-full max-w-2xl bg-white/95 backdrop-blur-md rounded-3xl border border-brand-green-dark/10 shadow-2xl pointer-events-auto overflow-hidden text-brand-green-dark"
            >
              {/* Inner container */}
              <div className="p-6 md:p-8 space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-peach-light/30 rounded-xl text-brand-peach-dark">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif text-brand-green-dark font-semibold">
                      Táto webová stránka používa súbory cookies
                    </h3>
                  </div>
                  {showSettings && (
                    <button 
                      onClick={() => setShowSettings(false)}
                      className="p-1 hover:bg-black/5 rounded-full transition-colors text-text-muted cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Body Content */}
                <div className="space-y-4 text-sm font-light leading-relaxed text-text-dark/85">
                  {!showSettings ? (
                    <>
                      <p>
                        Na našej webovej stránke používame nevyhnutné cookies, ktoré sú potrebné na správne fungovanie stránky. So súhlasom návštevníka môžeme používať aj analytické alebo marketingové cookies, ktoré nám pomáhajú zlepšovať naše služby a komunikáciu.
                      </p>
                      <p className="text-xs text-text-muted hover:text-brand-peach-dark transition-colors font-medium">
                        Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať.
                      </p>
                    </>
                  ) : (
                    // Settings Category Lists
                    <div className="space-y-4 pt-2">
                      <p className="text-xs text-text-muted mb-4">
                        Prispôsobte si nastavenia cookies pre našu webstránku:
                      </p>
                      
                      {/* Category: Essential */}
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-green-dark/[0.02] border border-brand-green-dark/5">
                        <input
                          type="checkbox"
                          id="cookie-essential"
                          checked
                          disabled
                          className="mt-1 h-4 w-4 rounded border-brand-green-dark/20 text-brand-green-dark focus:ring-brand-green-dark accent-brand-peach-dark"
                        />
                        <div className="space-y-1">
                          <label htmlFor="cookie-essential" className="text-sm font-semibold text-brand-green-dark flex items-center gap-1.5">
                            Nevyhnutné cookies
                            <span className="text-[10px] bg-brand-green-dark/10 text-brand-green-dark px-1.5 py-0.5 rounded-full font-medium">Vždy aktívne</span>
                          </label>
                          <p className="text-xs text-text-muted">
                            Tieto cookies sú nevyhnutné pre správne fungovanie, navigáciu a bezpečnosť našej webstránky, preto ich nemožno vypnúť.
                          </p>
                        </div>
                      </div>

                      {/* Category: Analytical */}
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-green-dark/[0.02] border border-brand-green-dark/5 hover:border-brand-green-dark/10 transition-colors">
                        <input
                          type="checkbox"
                          id="cookie-analytical"
                          checked={tempSettings.analytical}
                          onChange={(e) => setTempSettings({ ...tempSettings, analytical: e.target.checked })}
                          className="mt-1 h-4 w-4 rounded border-brand-green-dark/20 text-brand-green-dark focus:ring-brand-green-dark accent-brand-peach-dark cursor-pointer"
                        />
                        <div className="space-y-1 cursor-pointer" onClick={() => setTempSettings({ ...tempSettings, analytical: !tempSettings.analytical })}>
                          <label htmlFor="cookie-analytical" className="text-sm font-semibold text-brand-green-dark cursor-pointer">
                            Analytické cookies
                          </label>
                          <p className="text-xs text-text-muted">
                            Pomáhajú nám pochopiť, ako návštevníci interagujú s webstránkou, anonymne merajú návštevnosť a reportujú štatistiky na zlepšovanie služieb.
                          </p>
                        </div>
                      </div>

                      {/* Category: Marketing */}
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-green-dark/[0.02] border border-brand-green-dark/5 hover:border-brand-green-dark/10 transition-colors">
                        <input
                          type="checkbox"
                          id="cookie-marketing"
                          checked={tempSettings.marketing}
                          onChange={(e) => setTempSettings({ ...tempSettings, marketing: e.target.checked })}
                          className="mt-1 h-4 w-4 rounded border-brand-green-dark/20 text-brand-green-dark focus:ring-brand-green-dark accent-brand-peach-dark cursor-pointer"
                        />
                        <div className="space-y-1 cursor-pointer" onClick={() => setTempSettings({ ...tempSettings, marketing: !tempSettings.marketing })}>
                          <label htmlFor="cookie-marketing" className="text-sm font-semibold text-brand-green-dark cursor-pointer">
                            Marketingové cookies
                          </label>
                          <p className="text-xs text-text-muted">
                            Používajú sa na sledovanie návštevníkov na rôznych stránkach, čo nám umožňuje zobrazovať relevantné novinky a ponuky (napríklad z našich social médií).
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2 border-t border-brand-green-dark/5">
                  <div className="flex items-center">
                    {!showSettings ? (
                      <button
                        onClick={() => {
                          setTempSettings(savedSettings || { essential: true, analytical: false, marketing: false });
                          setShowSettings(true);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-brand-peach-dark transition-colors h-10 px-3 -ml-3 rounded-lg hover:bg-black/[0.02] cursor-pointer"
                      >
                        <Settings className="w-3.5 h-3.5" />
                        Nastavenia cookies
                      </button>
                    ) : (
                      <span className="text-xs text-text-muted font-medium">
                        Svoj súhlas môžete kedykoľvek zmeniť.
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    {!showSettings ? (
                      <>
                        <button
                          onClick={handleRejectOptional}
                          className="h-10 px-4 py-2 border border-brand-green-dark/15 text-brand-green-dark hover:bg-brand-green-dark/[0.03] text-xs font-bold rounded-full transition-colors order-2 sm:order-1 cursor-pointer uppercase tracking-wider"
                        >
                          Odmietnuť voliteľné cookies
                        </button>
                        <button
                          onClick={handleAcceptAll}
                          className="h-10 px-6 py-2 bg-brand-green-dark hover:bg-brand-green-dark/95 text-white text-xs font-bold rounded-full shadow-md shadow-brand-green-dark/10 transition-all hover:shadow-lg hover:shadow-brand-green-dark/15 order-1 sm:order-2 cursor-pointer uppercase tracking-wider"
                        >
                          Prijať všetko
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setShowSettings(false)}
                          className="h-10 px-4 py-2 border border-brand-green-dark/15 text-brand-green-dark hover:bg-brand-green-dark/[0.03] text-xs font-bold rounded-full transition-colors cursor-pointer uppercase tracking-wider"
                        >
                          Späť
                        </button>
                        <button
                          onClick={handleSaveSelection}
                          className="h-10 px-6 py-2 bg-brand-green-dark hover:bg-brand-green-dark/95 text-white text-xs font-bold rounded-full shadow-md shadow-brand-green-dark/10 transition-all hover:shadow-lg hover:shadow-brand-green-dark/15 cursor-pointer uppercase tracking-wider inline-flex items-center justify-center gap-2"
                        >
                          <Check className="w-3.5 h-3.5 text-brand-peach-light" />
                          Uložiť výber
                        </button>
                      </>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
