import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Menu, 
  X, 
  ArrowRight,
  Sun,
  Leaf,
  Droplet,
  Heart,
  Facebook
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { BaanLogo } from "./components/BaanLogo";
import { CookieConsent } from "./components/CookieConsent";
import { CookiesPage } from "./pages/CookiesPage";
import { GdprPage } from "./pages/GdprPage";
// @ts-ignore
import mainBanner from "./assets/images/main_banner_1779859205162.png";
// @ts-ignore
import thajskaMasazImg from "./assets/images/Thajska_masaz.png";
// @ts-ignore
import olejovaMasazImg from "./assets/images/Olejova_masaz.png";
// @ts-ignore
import masazChrbtaImg from "./assets/images/Masaz_chrbta.png";
// @ts-ignore
import masazNohImg from "./assets/images/Masaz_noh.png";
// @ts-ignore
import olejRukaImg from "./assets/images/Olej_ruka.png";
// @ts-ignore
import kontajnerImg from "./assets/images/Kontajner.png";

const CONTACT = {
  phone: "+421 905 299 613",
  phone2: "+421 918 854 630",
  formattedPhone: "+421 905 299 613",
  formattedPhone2: "+421 918 854 630",
  facebook: "https://www.facebook.com/baanthaimassagegalanta/",
  email: "info@baanthamassage.sk",
  address: "Hody 1679, Galanta",
  mapsLink: "https://maps.app.goo.gl/we7AN2ndrdAphjtd7",
  bankAccount: {
    iban: "SK09 8360 5207 0042 0988 6242",
    bankDetails: "mBank S.A., pobočka zahraničnej banky"
  }
};

const SERVICES = [
  {
    title: "Tradičná thajská masáž",
    description: "Autentická terapia kombinujúca akupresúru, strečing a prácu s energetickými dráhami tela. Účinne odstraňuje svalové napätie a blokády.",
    image: thajskaMasazImg
  },
  {
    title: "Thajská olejová masáž",
    description: "Relaxačná procedúra s využitím prírodných aromatických olejov. Ideálna na uvoľnenie po stresujúcom dni a na harmonizáciu mysle.",
    image: olejovaMasazImg
  },
  {
    title: "Reflexná masáž chodidiel",
    description: "Stimulácia akupresúrnych bodov na chodidlách, ktorá prináša úľavu nielen nohám, ale priaznivo pôsobí na celé telo.",
    image: masazNohImg
  },
  {
    title: "Masáž chrbta a šije",
    description: "Zameraná na najviac preťažované partie tela. Výborne pomáha pri bolestiach z dlhého sedenia a pri stuhnutom krku.",
    image: masazChrbtaImg
  }
];

const USPS = [
  {
    icon: Heart,
    title: "Autentická Thajská masáž",
    desc: "Salón vedie certifikovaná thajská masérka, ktorá sa každému klientovi venuje osobne. Vďaka individuálnemu prístupu, skúsenostiam a dôrazu na kvalitu si u nás môžete dopriať autentickú thajskú masáž v príjemnej atmosfére a s maximálnou starostlivosťou."
  },
  {
    icon: Leaf,
    title: "Masáž v súkromí tichej záhrady",
    desc: "Doprajte si oddych v samostatnom záhradnom štúdiu, ktoré je zasadené do pokojného prostredia medzi rodinnými domami. Komorná atmosféra, ticho a súkromie vytvárajú ideálne miesto na uvoľnenie tela aj mysle."
  },
  {
    icon: Sun,
    title: "Čas vyhradený len pre vás",
    desc: "V našom súkromnom štúdiu sa každému klientovi venujeme individuálne a bez zhonu. Počas masáže máte priestor na skutočný oddych, súkromie a starostlivosť prispôsobenú vašim potrebám."
  }
];

const HOURS = [
  { days: "Pondelok — Piatok", time: "10:00 - 20:00" },
  { days: "Sobota — Nedeľa", time: "10:00 - 18:00" }
];

const PRICING_DATA = [
  {
    name: "Relaxačná olejová masáž",
    note: "klasická olejová masáž",
    prices: { "30": null, "60": 40, "90": 56 }
  },
  {
    name: "Mix Thajská olejová masáž",
    note: "kombinácia tradičnej a olejovej masáže",
    prices: { "30": null, "60": 40, "90": 56 }
  },
  {
    name: "Tradičná thajská masáž",
    note: "suchá akupresúrna masáž so strečingom",
    prices: { "30": null, "60": 40, "90": 56 }
  },
  {
    name: "Thajská masáž nôh",
    note: "reflexná masáž zameraná na akupresúrne body",
    prices: { "30": 25, "60": 40, "90": null }
  },
  {
    name: "Masáž chrbta a ramien",
    note: "cielené uvoľnenie šije, ramien a celej chrbtice",
    prices: { "30": 25, "60": 40, "90": null }
  },
  {
    name: "Masáž s horúcim kokosovým olejom",
    note: "aromatická masáž s nahriatym kokosovým olejom",
    prices: { "30": null, "60": 45, "90": 62 }
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const BookioButton = ({ className = "" }: { className?: string }) => {
  return (
    <a 
      target="_blank" 
      rel="noreferrer"
      style={{
        minHeight: '37px', 
        padding: '10px 35px 10px 40px', 
        position: 'relative', 
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        cursor: 'pointer', 
        overflow: 'hidden', 
        textDecoration: 'none', 
        borderRadius: '10px', 
        color: '#000000', 
        backgroundColor: '#c5dea7',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }} 
      className={`hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all ${className}`}
      href="https://services.bookio.com/baan-thai-massage-galanta/widget?lang=sk"
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-18303717684/oYj_CNKC3MscELSi8pdE'
          });
        }
      }}
    >
      <div style={{
        position: 'absolute', 
        left: 0, 
        top: 0, 
        height: '100%', 
        width: '30px', 
        background: '#36474f url(https://services.bookio.com/assets/b-bodka-32x32.png) no-repeat center'
      }}></div>
      <span className="font-medium text-[13px] tracking-wide ml-1">Rezervácia termínu</span>
    </a>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLng = i18n.language === "sk" ? "en" : "sk";
    i18n.changeLanguage(nextLng);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center relative z-50 group">
               <BaanLogo className="h-12 md:h-14 w-auto shrink-0 text-[#af8a54] group-hover:text-brand-green-dark transition-colors duration-300" showText={true} theme="custom" />
            </a>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#sluzby" className="text-xs tracking-[0.15em] uppercase font-medium text-text-muted hover:text-brand-green-dark transition-colors">{t('nav.services')}</a>
              <a href="#cennik" className="text-xs tracking-[0.15em] uppercase font-medium text-text-muted hover:text-brand-green-dark transition-colors">{t('nav.pricing')}</a>
              <a href="#o-nas" className="text-xs tracking-[0.15em] uppercase font-medium text-text-muted hover:text-brand-green-dark transition-colors">{t('nav.about')}</a>
              <a href="#kontakt" className="text-xs tracking-[0.15em] uppercase font-medium text-text-muted hover:text-brand-green-dark transition-colors">{t('nav.contact')}</a>
              
              <button onClick={toggleLanguage} className="text-xs tracking-[0.15em] uppercase font-bold text-brand-green-dark hover:text-brand-peach-dark transition-colors cursor-pointer w-8">
                {i18n.language === 'en' ? 'SK' : 'EN'}
              </button>
              
              <motion.a 
                href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-brand-green-dark text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-green-dark/20"
              >
                <div className="absolute inset-0 w-0 bg-brand-green transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative flex items-center">
                  <Phone className="w-3 h-3 mr-2" />
                  {t('nav.call')}
                </span>
              </motion.a>
            </div>

            <div className="flex items-center md:hidden gap-4">
              <button onClick={toggleLanguage} className="text-xs tracking-[0.1em] uppercase font-bold text-brand-green-dark cursor-pointer z-50">
                {i18n.language === 'en' ? 'SK' : 'EN'}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 text-brand-green-dark p-2"
              >
                <div className="relative w-6 h-5">
                  <span className={`absolute h-0.5 bg-current w-full transform transition-all duration-300 ${isOpen ? 'rotate-45 top-2' : 'top-0'}`} />
                  <span className={`absolute h-0.5 bg-current transform transition-all duration-300 top-2 ${isOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                  <span className={`absolute h-0.5 bg-current w-full transform transition-all duration-300 ${isOpen ? '-rotate-45 top-2' : 'top-4'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-xl flex flex-col justify-center items-center space-y-8"
          >
            <a href="#sluzby" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-brand-green-dark hover:text-brand-peach-dark transition-colors">{t('nav.services')}</a>
            <a href="#cennik" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-brand-green-dark hover:text-brand-peach-dark transition-colors">{t('nav.pricing')}</a>
            <a href="#o-nas" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-brand-green-dark hover:text-brand-peach-dark transition-colors">{t('nav.about')}</a>
            <a href="#kontakt" onClick={() => setIsOpen(false)} className="text-2xl font-serif text-brand-green-dark hover:text-brand-peach-dark transition-colors">{t('nav.contact')}</a>
            
            <motion.a 
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="mt-8 px-8 py-4 bg-brand-peach-dark text-white text-xs uppercase tracking-widest font-bold rounded-full shadow-lg shadow-brand-peach-dark/20 text-center flex items-center justify-center gap-2"
            >
              <Facebook className="w-4 h-4" />
              {t('nav.followUs')}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-12 overflow-hidden bg-bg-base flex flex-col items-center justify-center">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main title above the banner with expressive yet delicate display typography */}
        <div className="text-center mb-10 md:mb-14 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-brand-green-dark tracking-wide leading-tight"
          >
            {t('hero.title1')} <span className="italic font-normal text-brand-peach-dark">{t('hero.title2')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm md:text-base text-text-muted mt-6 max-w-2xl mx-auto font-light leading-relaxed hidden sm:block"
          >
            {t('hero.seoDesc')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-[1px] bg-brand-peach-dark/30 mx-auto mt-6 sm:mt-8"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-[16/9] sm:aspect-[2.5/1] lg:aspect-[3.5/1] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-green-dark/10 group bg-brand-peach-light/20 flex flex-col items-center justify-center"
        >
          {/* 
            PLACEHOLDER PRE UPLOADNUTÚ GRAFIKU BANNERU 
            Zmeňte 'src' parameter na URL vašej nahranej grafiky. 
            Pre najlepší výsledok použite grafiku v pôvodnom pomere strán zobrazenú vyššie.
          */}
          <img 
            src={mainBanner} 
            alt="Baan Thai Massage Banner"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black/10 pointer-events-none transition-opacity duration-1000 group-hover:bg-transparent"></div>
          
          {/* Overlay elements only if needed. Assuming the uploaded banner has all the text, 
              we leave this space relatively clean, but could add strong CTA buttons below it. */}
        </motion.div>

        {/* Elegant slogan below the banner */}
        <div className="text-center mt-12 mb-2 max-w-3xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-brand-green-dark tracking-wider italic"
          >
            {t('hero.subtitle1')} <span className="font-normal text-brand-peach-dark">{t('hero.subtitle2')}</span>
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 md:mt-12"
        >
          <motion.a 
            href={`#sluzby`}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-full sm:w-auto text-center px-10 py-4 bg-brand-green-dark text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-all shadow-lg hover:bg-brand-green hover:shadow-brand-green/30 cursor-pointer"
          >
            {t('hero.cta')}
          </motion.a>
          
          <BookioButton className="w-full sm:w-auto mt-2 sm:mt-0" />
          
          <motion.a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-brand-green text-brand-green-dark text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-colors hover:bg-brand-green hover:text-white shadow-sm cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            {t('hero.book')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  const { t } = useTranslation();
  return (
    <section className="relative z-20 px-6 md:px-12 hidden md:block mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USPS.map((usp, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              key={i} 
              className="bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] border border-brand-green-light/10 flex items-start gap-5 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-peach-light/30 flex flex-shrink-0 items-center justify-center text-brand-peach-dark">
                <usp.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-text-dark mb-2">{t(`usps.usp${i + 1}.title`)}</h3>
                <p className="text-xs text-text-muted leading-relaxed font-light">{t(`usps.usp${i + 1}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useTranslation();
  return (
    <section id="sluzby" className="py-32 bg-bg-base relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-peach-dark mb-4 block">{t('services.label')}</span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-green-dark mb-6">{t('services.title')}</h2>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: 64 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
             className="h-[1px] bg-brand-green mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-32 relative">
          {/* Decorative dividing line for desktop */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "80%" }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-[10%] left-1/2 w-[1px] bg-brand-green-light/30 -translate-x-1/2" 
          />

          {SERVICES.map((service, i) => (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                }
              }}
              key={i} 
              className={`group flex flex-col ${i % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] rounded-bl-[5rem] mb-8 relative aspect-[4/3] bg-bg-alt shadow-lg shadow-brand-green-dark/5"
              >
                <div className="absolute inset-0 bg-brand-green-dark/10 group-hover:bg-transparent transition-colors z-10 duration-700"></div>
                <motion.img 
                  variants={{
                    hidden: { scale: 1.2 },
                    visible: { scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
                  }}
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
              <div className="px-4">
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="flex items-center gap-4 mb-4"
                >
                  <span className="text-sm font-serif italic text-brand-peach-dark">0{i + 1}.</span>
                  <div className="h-[1px] flex-1 bg-brand-green-light/50"></div>
                </motion.div>
                <motion.h3 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="text-3xl font-serif text-text-dark mb-4"
                >
                  {t(`services.s${i + 1}.title`)}
                </motion.h3>
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="text-text-muted font-light leading-relaxed mb-8"
                >
                  {t(`services.s${i + 1}.desc`)}
                </motion.p>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                >
                  <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-bold text-brand-green-dark hover:text-brand-peach-dark transition-colors border-b border-transparent hover:border-brand-peach-dark pb-1">
                    {t('services.bookLabel')} <ArrowRight className="w-3 h-3 ml-2" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { t } = useTranslation();
  const [selectedDuration, setSelectedDuration] = useState<"all" | "30" | "60" | "90">("all");

  const filteredData = PRICING_DATA.filter((item) => {
    if (selectedDuration === "all") return true;
    return item.prices[selectedDuration] !== null;
  });

  return (
    <section id="cennik" className="py-32 bg-bg-alt/40 relative overflow-hidden">
      {/* Decorative vectors / blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-peach-light/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-brand-green-light/25 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-peach-dark mb-4 block">{t('pricing.label')}</span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-green-dark mb-6">{t('pricing.title')}</h2>
          <div className="w-16 h-[1px] bg-brand-green mx-auto mb-6"></div>
          <p className="text-text-muted font-light leading-relaxed">
            {t('pricing.desc1')} <strong className="font-semibold text-brand-peach-dark">{t('pricing.desc2')}</strong> {t('pricing.desc3')} <strong className="font-bold text-brand-peach-dark text-lg">{t('pricing.desc4')}</strong> {t('pricing.desc5')}
          </p>
        </motion.div>

        {/* Duration Filter Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white/85 backdrop-blur-md p-1.5 rounded-full border border-brand-green-light/25 shadow-md inline-flex gap-1">
            <button
              onClick={() => setSelectedDuration("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${selectedDuration === "all" ? 'bg-brand-green-dark text-white shadow-sm' : 'text-text-muted hover:text-brand-green-dark cursor-pointer'}`}
            >
              {t('pricing.all')}
            </button>
            <button
              onClick={() => setSelectedDuration("30")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${selectedDuration === "30" ? 'bg-brand-green-dark text-white shadow-sm' : 'text-text-muted hover:text-brand-green-dark cursor-pointer'}`}
            >
              30 min
            </button>
            <button
              onClick={() => setSelectedDuration("60")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${selectedDuration === "60" ? 'bg-brand-green-dark text-white shadow-sm' : 'text-text-muted hover:text-brand-green-dark cursor-pointer'}`}
            >
              60 min
            </button>
            <button
              onClick={() => setSelectedDuration("90")}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${selectedDuration === "90" ? 'bg-brand-green-dark text-white shadow-sm' : 'text-text-muted hover:text-brand-green-dark cursor-pointer'}`}
            >
              90 min
            </button>
          </div>
        </motion.div>

        {/* Pricing List Container */}
        <div className="max-w-4xl mx-auto bg-white/75 backdrop-blur-xl rounded-[2.5rem] border border-brand-green-light/15 p-6 md:p-12 shadow-xl shadow-brand-green-dark/5">
          
          <div className="space-y-2">
            <AnimatePresence mode="popLayout">
              {filteredData.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-brand-green-light/10 last:border-0 hover:bg-bg-alt/30 px-4 md:px-6 rounded-2xl transition-all duration-300 group"
                >
                  <div className="flex-1 pr-6 mb-4 sm:mb-0">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-serif text-text-dark group-hover:text-brand-green-dark transition-colors">{t(`pricing.p${index + 1}.name`)}</h3>
                      {item.prices["90"] && selectedDuration === "all" && (
                        <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-widest bg-brand-peach-light/35 border border-brand-peach-dark/25 text-brand-peach-dark font-semibold">
                          {t('pricing.special')}
                        </span>
                      )}
                    </div>
                    {item.note && (
                      <p className="text-xs text-text-muted mt-1.5 font-light italic uppercase tracking-wider">
                        ({t(`pricing.p${index + 1}.note`)})
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    {/* 30 min */}
                    {(selectedDuration === "all" || selectedDuration === "30") && (
                      <div className={`flex flex-col items-center justify-center min-w-[70px] py-1.5 px-2 rounded-xl transition-all ${item.prices["30"] ? 'bg-bg-alt/65 border border-brand-green-light/20 text-text-dark shadow-sm' : 'opacity-20 text-text-muted pb-4 border-b border-transparent'}`}>
                        <span className="text-[9px] tracking-wider uppercase opacity-60">30 min</span>
                        <span className="text-sm font-medium font-serif mt-0.5">{item.prices["30"] ? `${item.prices["30"]} €` : '—'}</span>
                      </div>
                    )}

                    {/* 60 min */}
                    {(selectedDuration === "all" || selectedDuration === "60") && (
                      <div className={`flex flex-col items-center justify-center min-w-[70px] py-1.5 px-2 rounded-xl transition-all ${item.prices["60"] ? 'bg-bg-alt/65 border border-brand-green-light/20 text-text-dark shadow-sm' : 'opacity-20 text-text-muted pb-4 border-b border-transparent'}`}>
                        <span className="text-[9px] tracking-wider uppercase opacity-60">60 min</span>
                        <span className="text-sm font-medium font-serif mt-0.5">{item.prices["60"] ? `${item.prices["60"]} €` : '—'}</span>
                      </div>
                    )}

                    {/* 90 min */}
                    {(selectedDuration === "all" || selectedDuration === "90") && (
                      <div className={`flex flex-col items-center justify-center min-w-[75px] py-1.5 px-2 rounded-xl transition-all ${item.prices["90"] ? 'bg-brand-peach-light/30 border border-brand-peach-dark/25 text-brand-peach-dark relative overflow-hidden group-hover:scale-105 shadow-sm py-2 px-3' : 'opacity-20 text-text-muted pb-4 border-b border-transparent'} duration-300`}>
                        {item.prices["90"] && <div className="absolute inset-0 bg-brand-peach-dark/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>}
                        <span className={`text-[9px] tracking-widest uppercase ${item.prices["90"] ? 'font-bold text-brand-peach-dark/85' : 'opacity-60'}`}>90 min</span>
                        <span className={`text-sm mt-0.5 flex items-baseline gap-0.5 font-serif ${item.prices["90"] ? 'font-bold text-brand-peach-dark' : 'font-medium'}`}>
                          {item.prices["90"] ? `${item.prices["90"]} €` : '—'}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Reservation Call to Action inside the Pricing box */}
          <div className="mt-12 pt-8 border-t border-brand-green-light/15 text-center flex flex-col items-center">
            <p className="text-xs text-text-muted max-w-md mx-auto mb-6 leading-relaxed">
              {t('pricing.bookingInfo')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
              <motion.a 
                href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-green-dark text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-all shadow-lg hover:shadow-brand-green/35 hover:bg-brand-green cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                {CONTACT.formattedPhone}
              </motion.a>
              <motion.a 
                href={`tel:${CONTACT.phone2.replace(/\s+/g, '')}`} 
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-brand-green text-brand-green-dark text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-colors hover:bg-brand-green hover:text-white shadow-sm cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                {CONTACT.formattedPhone2}
              </motion.a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function About() {
  const { t } = useTranslation();
  return (
    <section id="o-nas" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Soft decorative background shadow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-brand-peach-light/20 blur-[80px] rounded-full"></div>
            
            <div className="aspect-[3/4] rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-10 w-4/5 mx-auto lg:mx-0">
                <img src={kontajnerImg} alt="Therapy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            
            <div className="absolute bottom-4 right-0 w-3/5 aspect-square organic-blob-alt overflow-hidden border-[8px] border-white shadow-xl z-20">
               <img src={olejRukaImg} alt="Spa Container Studio" className="w-full h-full object-cover scale-110" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="w-full lg:w-1/2 pl-0 lg:pl-10"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-peach-dark mb-4 block">{t('about.label')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-green-dark mb-8 leading-[1.1]">
              {t('about.title1')} <br/>{t('about.title2')} <span className="italic font-light">{t('about.title3')}</span>
            </h2>
            
            <div className="space-y-6 text-text-muted font-light leading-relaxed text-lg">
              <p>
                <strong>Baan Thai Massage</strong> {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>
              <p>
                {t('about.p3')} <strong className="text-brand-peach-dark font-semibold">{t('about.p4')}</strong>
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6 p-6 bg-bg-alt/50 rounded-3xl border border-brand-green-light/20">
               <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-brand-green-light/30">
                  <Droplet className="w-6 h-6 text-brand-peach-dark" strokeWidth={1.5} />
               </div>
               <div>
                  <h4 className="text-sm uppercase tracking-widest font-bold text-text-dark">{t('about.featureTitle')}</h4>
                  <p className="text-xs text-text-muted mt-1">{t('about.featureDesc')}</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useTranslation();
  return (
    <section id="kontakt" className="py-24 bg-brand-green-dark relative overflow-hidden">
      {/* Decorative floral/leaf design on background */}
      <svg className="absolute top-0 right-0 text-white/5 w-[600px] h-[600px] transform translate-x-1/4 -translate-y-1/4 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
         <path d="M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0 Z" />
      </svg>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-brand-peach-light mb-4 block">{t('contact.label')}</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 leading-[1.1]">
            {t('contact.title1')} <br/><span className="italic font-light text-brand-peach-light">{t('contact.title2')}</span>
          </h2>
          
          <div className="space-y-12">
             <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-green-light mb-4">{t('contact.phoneLabel')}</p>
                <div className="flex flex-col gap-4">
                  <div className="group">
                    <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="text-3xl font-serif text-white hover:text-brand-peach-light transition-colors relative inline-block">
                      {CONTACT.formattedPhone}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-peach-light transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                  <div className="group">
                    <a href={`tel:${CONTACT.phone2.replace(/\s+/g, '')}`} className="text-3xl font-serif text-white hover:text-brand-peach-light transition-colors relative inline-block">
                      {CONTACT.formattedPhone2}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-peach-light transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
             </div>
             
             <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-green-light mb-3">{t('contact.emailLabel')}</p>
                <a href={`mailto:${CONTACT.email}`} className="text-xl text-white/90 hover:text-brand-peach-light transition-colors font-light">
                  {CONTACT.email}
                </a>
             </div>
             
             <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-green-light mb-4">{t('contact.hoursLabel')}</p>
                <div className="space-y-3">
                      <div className="flex justify-between max-w-sm border-b border-white/10 pb-3">
                         <span className="text-white/80 font-light">{t('contact.days1')}</span>
                         <span className="text-white font-serif">{HOURS[0].time}</span>
                      </div>
                      <div className="flex justify-between max-w-sm border-b border-white/10 pb-3">
                         <span className="text-white/80 font-light">{t('contact.days2')}</span>
                         <span className="text-white font-serif">{HOURS[1].time}</span>
                      </div>
                </div>
             </div>

             <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-green-light mb-3">{t('contact.accountLabel')}</p>
                <div className="flex flex-col gap-1">
                  <div className="text-xl text-white/90 font-mono font-light tracking-wide hover:text-brand-peach-light transition-colors cursor-all-scroll select-all">
                    IBAN: {CONTACT.bankAccount.iban}
                  </div>
                  <div className="text-sm text-white/70 font-light hover:text-brand-peach-light transition-colors">
                    Banka: {CONTACT.bankAccount.bankDetails}
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-peach-light/10 blur-[80px] rounded-full pointer-events-none"></div>
           
           <div className="flex flex-col items-center text-center space-y-6 relative z-10">
              {/* Integrated Brand Logo */}
              <BaanLogo className="w-48 h-48 sm:w-56 sm:h-56 text-brand-peach-light mb-2 animate-fade-in" showText={true} theme="dark" />
              
              <div className="w-12 h-12 rounded-full bg-brand-green-light/10 border border-brand-green-light/20 text-brand-peach-light flex items-center justify-center mb-2">
                 <MapPin strokeWidth={1} className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white sr-only">{t('nav.contact')}</h3>
              <p className="text-brand-green-light/90 font-light max-w-xs text-lg leading-relaxed mt-2 text-center">
                <strong className="text-white font-serif text-2xl font-normal tracking-wide block mb-2">Baan Thai Massage Galanta</strong>
                Hody 1679<br/>
                924 01 Galanta<br/>
                Slovensko<br/>
                IČO: 57664315<br/>
                DIČ: 1131228065
              </p>
              
              <div className="pt-8 w-full flex flex-col items-center gap-4">
                <BookioButton className="w-full" />
                <motion.a 
                  href={CONTACT.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-full inline-flex items-center justify-center px-8 py-5 bg-brand-peach-light text-brand-green-dark text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-all shadow-lg hover:bg-white hover:shadow-brand-peach-light/20 cursor-pointer"
                >
                  {t('contact.openMap')}
                </motion.a>
                <motion.a 
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-5 bg-transparent border border-white/20 text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-full transition-colors hover:bg-white/10 cursor-pointer"
                >
                  <Facebook className="w-4 h-4 text-brand-peach-light" />
                  {t('contact.followFb')}
                </motion.a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-green-dark pt-16 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Main top row: Navigation Legal items */}
        <div className="flex flex-col items-center justify-center gap-8 pb-8 border-b border-white/5">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-white/50">
             <a href="#sluzby" className="text-[10px] uppercase tracking-[0.2em] hover:text-brand-peach-light transition-colors">{t('nav.services')}</a>
             <a href="#cennik" className="text-[10px] uppercase tracking-[0.2em] hover:text-brand-peach-light transition-colors">{t('nav.pricing')}</a>
             <a href="#o-nas" className="text-[10px] uppercase tracking-[0.2em] hover:text-brand-peach-light transition-colors">{t('nav.about')}</a>
             <a href="#gdpr" className="text-[10px] uppercase tracking-[0.2em] hover:text-brand-peach-light transition-colors">{t('footer.privacy')}</a>
             <a href="#cookies" className="text-[10px] uppercase tracking-[0.2em] hover:text-brand-peach-light transition-colors">{t('footer.cookies')}</a>
             <button 
               onClick={() => {
                 // Reopen cookie consent banner
                 window.dispatchEvent(new CustomEvent("open-cookie-settings"));
               }} 
               className="text-[10px] uppercase tracking-[0.2em] hover:text-brand-peach-light transition-colors cursor-pointer text-left"
             >
               {t('footer.cookieSettings')}
             </button>
             <a href="#kontakt" className="text-[10px] uppercase tracking-[0.2em] hover:text-brand-peach-light transition-colors">{t('nav.contact')}</a>
             <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.2em] hover:text-brand-peach-light transition-colors inline-flex items-center gap-1">
               <Facebook className="w-2.5 h-2.5" /> Facebook
             </a>
          </div>
        </div>

        {/* Separator and copyright bottom row */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>

      </div>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cookies' | 'gdpr'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#cookies") {
        setCurrentPage("cookies");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (hash === "#gdpr") {
        setCurrentPage("gdpr");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setCurrentPage("home");
      }
    };

    // Run once on initial load to handle direct deep links
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-bg-base text-text-dark font-sans selection:bg-brand-peach-light selection:text-brand-green-dark">
      <Navbar />
      <main>
        {currentPage === "home" && (
          <>
            <Hero />
            <Benefits />
            <Services />
            <Pricing />
            <About />
            <Contact />
          </>
        )}
        {currentPage === "cookies" && <CookiesPage />}
        {currentPage === "gdpr" && <GdprPage />}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
