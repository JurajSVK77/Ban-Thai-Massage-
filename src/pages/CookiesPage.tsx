import { motion } from "motion/react";
import { Shield, ArrowLeft } from "lucide-react";

export function CookiesPage() {
  const handleBackToHome = () => {
    window.location.hash = "";
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-bg-base">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back */}
        <motion.button
          onClick={handleBackToHome}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand-green hover:text-brand-peach-dark transition-colors cursor-pointer mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Späť na domovskú stránku
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-b border-brand-green-light/20 pb-8 mb-12"
        >
          <div className="flex items-center gap-3 text-brand-peach-dark mb-4">
            <Shield className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Právne informácie</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-green-dark">
            Zásady používania cookies
          </h1>
          <p className="text-text-muted font-light mt-4 text-sm">
            Posledná aktualizácia: 27. mája 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-10 text-text-dark font-light leading-relaxed text-base"
        >
          <p className="text-lg text-text-dark/95">
            Webová stránka <strong>Baan Thai Massage Galanta</strong> používa súbory cookies na zabezpečenie správneho fungovania stránky, zlepšovanie používateľského komfortu a prípadne na meranie návštevnosti alebo marketingové účely.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Čo sú cookies</h2>
            <p>
              Cookies sú malé textové súbory, ktoré sa ukladajú do zariadenia návštevníka webovej stránky. Vďaka nim si webová stránka môže zapamätať určité nastavenia alebo zabezpečiť správne fungovanie niektorých funkcií.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif text-brand-green-dark">Aké cookies používame</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/70 border border-brand-green-light/10 shadow-sm">
                <h3 className="text-lg font-serif font-semibold text-brand-green-dark mb-2">1. Nevyhnutné cookies</h3>
                <p className="mb-3">
                  Tieto cookies sú potrebné na základné fungovanie webovej stránky. Bez nich by stránka nemusela fungovať správne. Na používanie nevyhnutných cookies nie je potrebný súhlas návštevníka.
                </p>
                <div className="text-xs bg-brand-green-dark/5 text-brand-green-dark py-2 px-3 rounded-lg inline-block font-medium">
                  <strong>Príklady:</strong> zabezpečenie stránky, uloženie voľby cookies, technické fungovanie webu.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/70 border border-brand-green-light/10 shadow-sm">
                <h3 className="text-lg font-serif font-semibold text-brand-green-dark mb-2">2. Analytické cookies</h3>
                <p className="mb-3">
                  Analytické cookies nám môžu pomáhať zistiť, ako návštevníci používajú našu webovú stránku. Pomáhajú nám pochopiť, ktoré časti webu sú navštevované najčastejšie a ako môžeme stránku zlepšiť.
                </p>
                <p className="text-xs text-text-muted font-bold tracking-wide uppercase text-brand-peach-dark">
                  Tieto cookies používame iba na základe vášho súhlasu.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/70 border border-brand-green-light/10 shadow-sm">
                <h3 className="text-lg font-serif font-semibold text-brand-green-dark mb-2">3. Marketingové cookies</h3>
                <p className="mb-3">
                  Marketingové cookies môžu byť použité na prepojenie webovej stránky so sociálnymi sieťami alebo reklamnými nástrojmi, napríklad Facebook alebo Instagram.
                </p>
                <p className="text-xs text-text-muted font-bold tracking-wide uppercase text-brand-peach-dark">
                  Tieto cookies používame iba na základe vášho súhlasu.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Cookies tretích strán</h2>
            <p>
              Na stránke môžu byť použité služby tretích strán, napríklad rezervačný systém, mapy, sociálne siete alebo analytické nástroje. Tieto služby môžu ukladať vlastné cookies podľa svojich pravidiel.
            </p>
            <p className="font-medium text-[#af8a54]">Príklady tretích strán môžu byť najmä:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/90">
              <li>Rezervačný systém,</li>
              <li>Google Maps,</li>
              <li>Facebook / Instagram,</li>
              <li>Google Analytics, ak bude použitý.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Ako môžete cookies spravovať</h2>
            <p>
              Pri prvej návšteve webovej stránky si môžete vybrať, s ktorými cookies súhlasíte. Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať prostredníctvom nastavení cookies na stránke.
            </p>
            <p>
              Svoje nastavenia cookies na tomto webe môžete kedykoľvek vyvolať kliknutím na tlačidlo nižšie alebo v päte stránky:
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
              className="px-6 py-3 bg-brand-green-dark text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-brand-green transition-all shadow-md cursor-pointer"
            >
              Otvoriť nastavenia cookies
            </button>
            <p className="pt-2">
              Cookies môžete zároveň vymazať alebo zablokovať aj priamo vo svojom internetovom prehliadači (Chrome, Safari, Firefox, Edge atď.).
            </p>
          </section>

          <section className="space-y-6 pt-6 border-t border-brand-green-light/20">
            <h2 className="text-2xl font-serif text-brand-green-dark">Prevádzkovateľ webovej stránky</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-brand-green-dark/[0.02] border border-brand-green-light/10 p-6 rounded-2xl font-normal">
              <div className="sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Obchodné meno</p>
                <p className="text-brand-green-dark font-medium font-serif">Kanlaya Kruzlik - Baan Thai Massage</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Sídlo / miesto podnikania</p>
                <p className="text-brand-green-dark font-medium">Hody 1679, 924 01 Galanta</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">IČO</p>
                <p className="text-brand-green-dark font-medium font-mono">57664315</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Registrácia</p>
                <p className="text-brand-green-dark font-medium">Zapísaná v živnostenskom registri Okresného úradu Galanta</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Číslo živnostenského registra</p>
                <p className="text-brand-green-dark font-medium font-mono">220-43111</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Deň vzniku oprávnenia</p>
                <p className="text-brand-green-dark font-medium font-mono">28.05.2026</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Predmet podnikania</p>
                <p className="text-brand-green-dark font-medium">Wellness masérske služby</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">E-mail</p>
                <p className="text-brand-green-dark font-medium">
                  <a href="mailto:info@baanthaimassage.sk" className="hover:text-brand-peach-dark transition-colors">
                    info@baanthaimassage.sk
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Telefón</p>
                <p className="text-brand-green-dark font-medium">
                  <a href="tel:+421905299613" className="hover:text-brand-peach-dark transition-colors font-mono">
                    +421 905 299 613
                  </a>
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
