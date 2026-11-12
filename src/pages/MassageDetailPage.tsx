import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Sparkles, CheckCircle2, AlertCircle, ShieldCheck, MapPin, Phone, Gift, Calendar } from "lucide-react";
import { MassageDetail, MASSAGES_DATA } from "../data/massages";

interface MassageDetailPageProps {
  massage: MassageDetail;
  onBack: () => void;
  onSelectOtherMassage: (slug: string) => void;
}

export function MassageDetailPage({ massage, onBack, onSelectOtherMassage }: MassageDetailPageProps) {
  useEffect(() => {
    // Dynamické nastavenie SEO titulku a popisu
    const prevTitle = document.title;
    document.title = massage.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute("content") : "";
    if (metaDesc) {
      metaDesc.setAttribute("content", massage.metaDescription);
    }

    // Scroll na začiatok stránky
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Schema.org Service & BreadcrumbList JSON-LD
    const scriptId = "massage-jsonld-schema";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Domov",
              "item": "https://baanthaimassage.sk/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Masáže Galanta",
              "item": "https://baanthaimassage.sk/#sluzby"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": massage.title,
              "item": `https://baanthaimassage.sk/${massage.hash}`
            }
          ]
        },
        {
          "@type": "Service",
          "serviceType": "Thai Massage",
          "name": `${massage.title} Galanta`,
          "alternateName": massage.thaiName,
          "description": massage.metaDescription,
          "provider": {
            "@type": "HealthAndBeautyBusiness",
            "name": "Baan Thai Massage Galanta",
            "url": "https://baanthaimassage.sk/",
            "telephone": "+421905299613",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hody 1679",
              "addressLocality": "Galanta",
              "postalCode": "924 01",
              "addressCountry": "SK"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Galanta"
          },
          "offers": massage.durationOptions.map((opt) => ({
            "@type": "Offer",
            "price": opt.price.toString(),
            "priceCurrency": "EUR",
            "name": `${massage.title} - ${opt.duration}`,
            "availability": "https://schema.org/InStock"
          }))
        }
      ]
    };

    scriptTag.text = JSON.stringify(schemaData);

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute("content", prevDesc);
      }
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, [massage]);

  const otherMassages = MASSAGES_DATA.filter((m) => m.slug !== massage.slug).slice(0, 3);

  return (
    <article className="pt-28 pb-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto font-sans">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs uppercase tracking-wider text-text-muted">
        <button 
          onClick={onBack}
          className="hover:text-brand-green-dark transition-colors flex items-center gap-1 font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Domov
        </button>
        <span>/</span>
        <button 
          onClick={() => {
            window.location.hash = "#sluzby";
            onBack();
          }}
          className="hover:text-brand-green-dark transition-colors font-medium"
        >
          Masáže & Cenník
        </button>
        <span>/</span>
        <span className="text-brand-green-dark font-semibold truncate">{massage.title}</span>
      </nav>

      {/* Main Header Card */}
      <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-xl shadow-brand-green-dark/5 border border-brand-peach-light/40 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              {massage.badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-brand-green-light/20 text-brand-green-dark">
                  <Sparkles className="w-3.5 h-3.5" /> {massage.badge}
                </span>
              )}
              {massage.thaiName && (
                <span className="px-3 py-1 rounded-full text-xs font-serif italic text-brand-peach-dark bg-brand-peach-light/30 border border-brand-peach-dark/20">
                  {massage.thaiName}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-green-dark leading-tight">
              {massage.title}
            </h1>

            <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
              {massage.shortDesc}
            </p>

            {/* Price list grid for this massage */}
            <div className="pt-2 pb-4">
              <p className="text-xs uppercase tracking-widest text-brand-green-dark/70 font-semibold mb-3">
                Dostupné dĺžky procedúry & ceny:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {massage.durationOptions.map((opt, idx) => (
                  <div 
                    key={idx}
                    className={`rounded-2xl p-4 border transition-all ${
                      opt.popular 
                        ? 'bg-brand-green-dark text-white border-brand-green-dark shadow-md shadow-brand-green-dark/20 relative overflow-hidden' 
                        : 'bg-brand-peach-light/20 border-brand-peach-light/50 text-brand-green-dark'
                    }`}
                  >
                    {opt.discountNote && (
                      <span className="absolute top-1.5 right-2 text-[9px] uppercase tracking-wider font-bold bg-[#af8a54] text-white px-2 py-0.5 rounded-full">
                        Akcia
                      </span>
                    )}
                    <div className="flex items-center gap-1.5 text-xs opacity-90 mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{opt.duration}</span>
                    </div>
                    <div className="text-2xl font-serif font-bold">
                      {opt.price} €
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="https://services.bookio.com/baan-thai-massage-b8k3x1s8/widget?lang=sk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-green-dark hover:bg-brand-green text-white font-medium tracking-wide shadow-lg shadow-brand-green-dark/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm sm:text-base text-center"
              >
                <Calendar className="w-4 h-4" />
                Rezervovať termín online
              </a>
              <a
                href="#darcekove-poukazky"
                onClick={() => {
                  window.location.hash = "#darcekove-poukazky";
                  onBack();
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-peach-light/40 hover:bg-brand-peach-light/60 text-brand-green-dark border border-brand-peach-dark/30 font-medium tracking-wide transition-all text-sm text-center"
              >
                <Gift className="w-4 h-4 text-brand-peach-dark" />
                Kúpiť darčekový poukaz
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-[1/1] shadow-xl border border-brand-peach-light/30 group">
              <img
                src={massage.image}
                alt={massage.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 text-xs text-brand-green-dark flex items-center justify-between">
                <span className="font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#af8a54]" />
                  Certifikovaná masérka Kay
                </span>
                <span className="text-text-muted">Hody, Galanta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Main Details (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Detailed Overview */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-peach-light/30 shadow-sm space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#af8a54]" />
              O procedúre & jej podstata
            </h2>
            {massage.overview.map((para, i) => (
              <p key={i} className="text-text-muted font-light leading-relaxed text-base">
                {para}
              </p>
            ))}
          </section>

          {/* Key Benefits */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-peach-light/30 shadow-sm space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Zdravotné a regeneračné účinky
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {massage.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-peach-light/15 border border-brand-peach-light/40">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-dark shrink-0 mt-0.5" />
                  <span className="text-sm text-text-dark font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-peach-light/30 shadow-sm space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#af8a54]" />
              Ako masáž prebieha krok za krokom
            </h2>
            <div className="space-y-4 pt-1">
              {massage.howItWorks.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-brand-green-dark text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Preparation & Contraindications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-brand-peach-light/20 rounded-3xl p-6 border border-brand-peach-light/50 space-y-3">
              <h3 className="text-lg font-serif font-medium text-brand-green-dark">
                Ako sa pripraviť
              </h3>
              <p className="text-sm text-text-muted font-light leading-relaxed">
                {massage.preparation}
              </p>
            </section>

            <section className="bg-amber-50/70 rounded-3xl p-6 border border-amber-200/60 space-y-3">
              <h3 className="text-lg font-serif font-medium text-amber-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                Kedy zvoliť inú procedúru
              </h3>
              <ul className="text-xs text-amber-950/80 space-y-1.5 list-disc list-inside font-light">
                {massage.contraindications.map((ci, i) => (
                  <li key={i}>{ci}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar Info & Booking (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-brand-green-dark text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl sticky top-28">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-brand-green-light font-semibold">
                Súkromné štúdio
              </p>
              <h3 className="text-xl sm:text-2xl font-serif font-light">
                Baan Thai Massage Galanta
              </h3>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Štúdio v tichej záhrade v Hodoch pri Galante vyhradené počas masáže výhradne pre vás.
              </p>
            </div>

            <div className="space-y-3 text-xs border-y border-white/10 py-4">
              <div className="flex items-center gap-2.5 text-white/90">
                <MapPin className="w-4 h-4 text-brand-green-light shrink-0" />
                <span>Hody 1679, 924 01 Galanta (parkovanie priamo pred salónom)</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <Phone className="w-4 h-4 text-brand-green-light shrink-0" />
                <a href="tel:+421905299613" className="hover:underline">+421 905 299 613</a>
              </div>
              <div className="flex items-center gap-2.5 text-white/90">
                <Clock className="w-4 h-4 text-brand-green-light shrink-0" />
                <span>Po – Pia: 10:00 – 20:00 | So – Ne: 10:00 – 18:00</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://services.bookio.com/baan-thai-massage-b8k3x1s8/widget?lang=sk"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#af8a54] hover:bg-[#977340] text-white text-sm font-semibold tracking-wide transition-all shadow-md text-center"
              >
                Rezervovať cez Bookio
              </a>
              <p className="text-[11px] text-center text-white/70">
                Voľné termíny v reálnom čase, bezplatné zrušenie do 24h vopred.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Massages */}
      <section className="border-t border-brand-peach-light/40 pt-12">
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-widest text-[#af8a54] font-semibold mb-1">
            Ďalšie masáže v našej ponuke
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-green-dark">
            Objavte ďalšie terapie v Galante
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherMassages.map((item) => (
            <div
              key={item.slug}
              onClick={() => onSelectOtherMassage(item.slug)}
              className="bg-white rounded-3xl p-5 border border-brand-peach-light/40 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-lg text-brand-green-dark group-hover:text-[#af8a54] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted font-light line-clamp-2 leading-relaxed mb-4">
                  {item.shortDesc}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs pt-3 border-t border-brand-peach-light/30">
                <span className="font-serif font-bold text-brand-green-dark text-sm">
                  od {item.durationOptions[0].price} €
                </span>
                <span className="text-[#af8a54] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Pozrieť detail →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
