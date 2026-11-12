import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS_SK: FaqItem[] = [
  {
    question: "Ako prebieha thajská masáž a čo si mám na ňu obliecť?",
    answer: "Pri Tradičnej thajskej masáži (suchej) vám v salóne poskytneme čistý, pohodlný voľný bavlnený úbor (nohavice a tričko), cez ktorý masáž prebieha bez použitia oleja. Pri olejových masážach sa aplikujú kvalitné prírodné oleje, pričom telo je po celý čas diskrétne zakryté uterákmi pre váš maximálny komfort a súkromie."
  },
  {
    question: "Kde presne sa salón nachádza a ako je to s parkovaním v Galante?",
    answer: "Náš salón Baan Thai Massage sa nachádza na adrese Hody 1679, 924 01 Galanta (v pokojnej mestskej časti Hody). Štúdio je situované v tichej záhrade rodinného domu, čo zaručuje úplný pokoj a diskrétnosť. Pre všetkých klientov je k dispozícii bezplatné a bezproblémové parkovanie priamo pred salónom."
  },
  {
    question: "Ako si vytvorím rezerváciu a dá sa prísť aj bez ohlásenia?",
    answer: "Vzhľadom na to, že štúdio je vyhradené počas každej masáže výlučne pre jedného klienta a masérka Kay sa venuje každému osobne bez zhonu, odporúčame rezerváciu vopred. Najrýchlejšie a kedykoľvek (24/7) si vyberiete termín cez náš online rezervačný systém Bookio. Rezerváciu radi potvrdíme aj telefonicky na čísle +421 905 299 613 alebo priamo u Kay na čísle +421 918 854 630."
  },
  {
    question: "Ako fungujú online darčekové poukážky cez Bookio?",
    answer: "Darčekovú poukážku viete zakúpiť online za pár minút cez náš overený systém Bookio. Po zaplatení kartou vám elektronická poukážka okamžite príde na e-mail vo formáte PDF, pripravená na vytlačenie alebo darovanie. Obdarovaný si následne sám jednoducho vyberie termín a masáž podľa vlastných preferencií."
  },
  {
    question: "Aké spôsoby platby prijímate priamo v salóne?",
    answer: "Za masážne služby priamo v prevádzke môžete zaplatiť v hotovosti alebo platobnou kartou prostredníctvom platobného terminálu (evidované cez eKasa). Online darčekové poukážky sa platia platobnou kartou cez zabezpečenú platobnú bránu Bookio."
  },
  {
    question: "Mám bolesti chrbta zo sedavého zamestnania. Ktorá masáž je pre mňa najlepšia?",
    answer: "Pre unavený a stuhnutý chrbát odporúčame začať s Cielenou masážou chrbta a ramien (30 alebo 60 min), prípadne s našou najobľúbenejšou Mix thajskou olejovou masážou (60 alebo 90 min), ktorá skombinuje uvoľnenie svalových hrčiek akupresúrou a upokojujúci relaxačný olej."
  },
  {
    question: "Kedy masáž nie je vhodná (kontraindikácie) a ako je to v tehotenstve?",
    answer: "Masáž neodporúčame pri akútnej horúčke, infekčných a vírusových ochoreniach, čerstvých zlomeninách, otvorených ranách a závažných neliečených kardiovaskulárnych ťažkostiach. V tehotenstve (najmä v 1. trimestri) sú tradičné akupresúrne techniky a stimulácia reflexných bodov kontraindikované. Ak máte akékoľvek zdravotné pochybnosti, vždy nás vopred informujte."
  },
  {
    question: "Čo ak potrebujem rezervovaný termín zrušiť alebo presunúť?",
    answer: "Chápeme, že do plánov môžu vstúpiť nečakané udalosti. Prosíme vás, aby ste termín zrušili alebo zmenili aspoň 24 hodín vopred – buď priamo cez link v potvrdzujúcom e-maile z Bookio, alebo telefonicky na číslach +421 905 299 613 / +421 918 854 630 (Kay), aby sme uvoľnený termín mohli ponúknuť iným záujemcom."
  }
];

export const FAQS_EN: FaqItem[] = [
  {
    question: "How does the Thai massage proceed and what should I wear?",
    answer: "For the Traditional Thai massage (dry), we provide a clean, comfortable, loose-fitting cotton outfit (pants and shirt) in the salon, through which the massage is performed without oil. For oil massages, high-quality natural oils are applied, with the body discretely draped with towels throughout the entire session for your complete comfort and privacy."
  },
  {
    question: "Where exactly is the salon located and how is parking in Galanta?",
    answer: "Our Baan Thai Massage salon is located at Hody 1679, 924 01 Galanta (in the peaceful residential district of Hody). The studio is situated in a quiet garden setting, ensuring absolute privacy and tranquility. Free and convenient parking is available directly in front of the salon for all our clients."
  },
  {
    question: "How do I make a reservation and can I visit without an appointment?",
    answer: "Since our studio is reserved exclusively for one client at a time and therapist Kay attends to everyone personally without rush, advance booking is recommended. You can quickly choose an available time slot 24/7 via our online Bookio reservation system. We are also happy to confirm reservations by phone at +421 905 299 613 or directly with Kay at +421 918 854 630."
  },
  {
    question: "How do online gift vouchers work through Bookio?",
    answer: "You can purchase a gift voucher online in just a few minutes via our verified Bookio platform. After paying by card, the electronic voucher is instantly sent to your email as a PDF, ready to print or gift. The recipient can then easily select their preferred massage and appointment date."
  },
  {
    question: "What payment methods do you accept at the salon?",
    answer: "For massage services at the salon, you can pay in cash or by credit/debit card via our POS payment terminal (registered through eKasa). Online gift vouchers are purchased with credit/debit cards via Bookio's secure payment gateway."
  },
  {
    question: "I suffer from back pain and work a sedentary job. Which massage is best for me?",
    answer: "For a tired and stiff back, we recommend starting with our Targeted Back, Neck & Shoulder Massage (30 or 60 min), or our most popular Combined Thai & Oil Massage (60 or 90 min), which unites acupressure knot release with soothing aromatherapy oil."
  },
  {
    question: "When is a massage not recommended (contraindications) and what about pregnancy?",
    answer: "Massages are not recommended in cases of acute fever, infectious illnesses, recent fractures, open wounds, or severe untreated cardiovascular conditions. During pregnancy (especially in the 1st trimester), deep acupressure and foot reflex stimulation are contraindicated. If you have any medical doubts, please always inform us in advance."
  },
  {
    question: "What if I need to cancel or reschedule my appointment?",
    answer: "We understand unexpected situations happen. Please cancel or reschedule your appointment at least 24 hours in advance – either via the link in your Bookio confirmation email, or by phone at +421 905 299 613 / +421 918 854 630 (Kay), allowing us to offer the slot to other guests."
  }
];

export function FaqSection() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const faqs = isEn ? FAQS_EN : FAQS_SK;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24">
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "inLanguage": isEn ? "en" : "sk",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-peach-light/40 text-brand-green-dark border border-brand-peach-dark/20 mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#af8a54]" /> {isEn ? "Frequently Asked Questions" : "Často kladené otázky"}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-brand-green-dark leading-tight">
          {isEn ? (
            <>Everything you need to know <span className="italic font-normal text-brand-peach-dark">before your visit</span></>
          ) : (
            <>Všetko, čo potrebujete vedieť <span className="italic font-normal text-brand-peach-dark">pred návštevou</span></>
          )}
        </h2>
        <p className="text-text-muted mt-4 max-w-xl mx-auto font-light text-sm sm:text-base leading-relaxed">
          {isEn
            ? "Clear answers to the most common questions regarding Thai massages, reservations, parking, and gift vouchers in Galanta."
            : "Prehľadné odpovede na najčastejšie otázky o priebehu thajských masáží, rezerváciách, parkovaní a darčekových poukážkach v Galante."}
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-3xl border border-brand-peach-light/50 overflow-hidden shadow-sm transition-all hover:border-brand-peach-dark/40"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4 select-none group"
              >
                <span className="text-base sm:text-lg font-serif font-medium text-brand-green-dark group-hover:text-[#af8a54] transition-colors">
                  {faq.question}
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'bg-brand-green-dark text-white rotate-180' : 'bg-brand-peach-light/30 text-brand-green-dark'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-sm sm:text-base text-text-muted font-light leading-relaxed border-t border-brand-peach-light/20">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Helpful footer CTA inside FAQ */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-brand-peach-light/25 border border-brand-peach-light/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h4 className="font-serif text-lg text-brand-green-dark">
            {isEn ? "Have more questions?" : "Máte ďalšie otázky?"}
          </h4>
          <p className="text-xs sm:text-sm text-text-muted font-light mt-1">
            {isEn ? (
              <>
                We are happy to assist you by phone at <a href="tel:+421905299613" className="font-medium text-brand-green-dark underline">+421 905 299 613</a>, directly with Kay at <a href="tel:+421918854630" className="font-medium text-brand-green-dark underline">+421 918 854 630</a>, or by email at <a href="mailto:info@baanthaimassage.sk" className="font-medium text-brand-green-dark underline">info@baanthaimassage.sk</a>.
              </>
            ) : (
              <>
                Radi vám poradíme telefonicky na <a href="tel:+421905299613" className="font-medium text-brand-green-dark underline">+421 905 299 613</a>, priamo u Kay na <a href="tel:+421918854630" className="font-medium text-brand-green-dark underline">+421 918 854 630</a> alebo e-mailom na <a href="mailto:info@baanthaimassage.sk" className="font-medium text-brand-green-dark underline">info@baanthaimassage.sk</a>.
              </>
            )}
          </p>
        </div>
        <a
          href="https://services.bookio.com/baan-thai-massage-b8k3x1s8/widget?lang=sk"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-green-dark hover:bg-brand-green text-white text-xs sm:text-sm font-medium tracking-wide transition-all shadow-md shrink-0"
        >
          {isEn ? "Book an appointment online" : "Rezervovať termín online"}
        </a>
      </div>
    </section>
  );
}
