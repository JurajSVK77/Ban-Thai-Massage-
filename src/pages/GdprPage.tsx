import { motion } from "motion/react";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export function GdprPage() {
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
            <ShieldAlert className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Ochrana osobných údajov</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-green-dark">
            Ochrana osobných údajov / GDPR
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
            Tento dokument vysvetľuje, ako spracúvame osobné údaje návštevníkov webovej stránky a klientov salónu <strong>Baan Thai Massage Galanta</strong>.
          </p>

          <p>
            Pri spracúvaní osobných údajov postupujeme v súlade s Nariadením Európskeho parlamentu a Rady EÚ 2016/679, známym ako GDPR, a príslušnými právnymi predpismi Slovenskej republiky.
          </p>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif text-brand-green-dark">Prevádzkovateľ</h2>
            <p className="mb-4">Prevádzkovateľom osobných údajov je:</p>
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
            <p className="text-xs italic text-text-muted pt-2">V texte ďalej len „prevádzkovateľ“.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Aké osobné údaje spracúvame</h2>
            <p>
              V závislosti od spôsobu komunikácie alebo rezervácie môžeme spracúvať najmä tieto osobné údaje:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/95">
              <li>Meno a priezvisko,</li>
              <li>Telefónne číslo,</li>
              <li>E-mailová adresa,</li>
              <li>Údaje uvedené v rezervácii,</li>
              <li>Informácie o objednanej službe,</li>
              <li>Dátum a čas rezervácie,</li>
              <li>Komunikácia zaslaná cez kontaktný formulár, e-mail, telefón alebo sociálne siete.</li>
            </ul>
            <p>
              Nespracúvame osobitné kategórie osobných údajov, napríklad zdravotnú dokumentáciu, pokiaľ nám ich klient neposkytne dobrovoľne v rozsahu potrebnom na bezpečné poskytnutie služby (napr. upozornenie na obmedzenia pri masáži).
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-serif text-brand-green-dark">Účely spracúvania osobných údajov</h2>
            <p>Osobné údaje spracúvame najmä na tieto účely:</p>

            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-white/50 border border-brand-green-light/5">
                <h3 className="font-semibold text-brand-green-dark">1. Vybavenie rezervácie</h3>
                <p className="text-sm mt-1">
                  Osobné údaje spracúvame za účelom prijatia, potvrdenia, zmeny alebo zrušenia rezervácie masáže.
                </p>
                <p className="text-xs text-[#af8a54] mt-2 font-medium uppercase tracking-wider">
                  Právny základ: plnenie zmluvy alebo predzmluvné vzťahy.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/50 border border-brand-green-light/5">
                <h3 className="font-semibold text-brand-green-dark">2. Komunikácia so zákazníkom</h3>
                <p className="text-sm mt-1">
                  Údaje používame na odpovede na otázky, vybavenie požiadaviek a poskytovanie informácií o objednanej službe.
                </p>
                <p className="text-xs text-[#af8a54] mt-2 font-medium uppercase tracking-wider">
                  Právny základ: oprávnený záujem alebo predzmluvné vzťahy.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/50 border border-brand-green-light/5">
                <h3 className="font-semibold text-brand-green-dark">3. Vedenie účtovníctva a plnenie zákonných povinností</h3>
                <p className="text-sm mt-1">
                  V prípade vystavenia dokladu alebo faktúry spracúvame osobné údaje v rozsahu potrebnom podľa platných právnych predpisov.
                </p>
                <p className="text-xs text-[#af8a54] mt-2 font-medium uppercase tracking-wider">
                  Právny základ: plnenie zákonnej povinnosti.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/50 border border-brand-green-light/5">
                <h3 className="font-semibold text-brand-green-dark">4. Marketingová komunikácia</h3>
                <p className="text-sm mt-1">
                  Ak nám udelíte súhlas, môžeme vaše kontaktné údaje použiť na zasielanie noviniek, akcií alebo informácií o službách.
                </p>
                <p className="text-xs text-[#af8a54] mt-2 font-medium uppercase tracking-wider">
                  Právny základ: súhlas dotknutej osoby (môžete kedykoľvek odvolať).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/50 border border-brand-green-light/5">
                <h3 className="font-semibold text-brand-green-dark">5. Prevádzka webovej stránky a cookies</h3>
                <p className="text-sm mt-1">
                  Pri návšteve webovej stránky môžeme spracúvať technické údaje, najmä prostredníctvom cookies.
                </p>
                <p className="text-xs text-[#af8a54] mt-2 font-medium uppercase tracking-wider">
                  Právny základ: oprávnený záujem pri nevyhnutných cookies alebo súhlas pri analytických a marketingových cookies.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Ako dlho osobné údaje uchovávame</h2>
            <p>Osobné údaje uchovávame len počas nevyhnutnej doby:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/95">
              <li>Údaje k rezervácii počas doby potrebnej na vybavenie služby a primeranú následnú komunikáciu,</li>
              <li>Účtovné doklady počas zákonom stanovenej doby (spravidla 10 rokov),</li>
              <li>Údaje spracúvané na záklase súhlasu do odvolania súhlasu,</li>
              <li>Údaje z kontaktného formulára počas doby potrebnej na vybavenie požiadavky.</li>
            </ul>
            <p>Po uplynutí potrebnej doby osobné údaje bezpečne vymažeme alebo anonymizujeme.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Komu môžu byť osobné údaje poskytnuté</h2>
            <p>
              Osobné údaje môžu byť v nevyhnutnom rozsahu poskytnuté dôveryhodným partnerom (príjemcom), ktorí zabezpečujú chod našej prevádzky:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/95">
              <li>Poskytovateľ webhostingu,</li>
              <li>Poskytovateľ rezervačného systému (napr. ak je implementovaný na rezerváciu),</li>
              <li>Účtovník alebo účtovná spoločnosť,</li>
              <li>Poskytovateľ e-mailových služieb a technického servisu,</li>
              <li>Orgány verejnej moci, ak to jednoznačne vyžaduje zákon,</li>
              <li>Poskytovatelia analytických alebo marketingových nástrojov, ak návštevník s nimi súhlasil v cookies.</li>
            </ul>
            <p className="font-semibold text-brand-green-dark mt-2">Osobné údaje v žiadnom prípade nepredávame ani nezneužívame na komerčné účely tretích strán.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Prenos osobných údajov mimo EÚ</h2>
            <p>
              Ak používame globálne cloudové služby (napr. Google, Meta/Facebook na komunikáciu alebo analýzu), môže dôjsť k prenosu osobných údajov do tretích krajín vrátane USA. Takýto prenos sa uskutočňuje výhradne na základe rozhodnutia o primeranosti alebo v súlade so štandardnými zmluvnými doložkami schválenými Európskou komisiou podľa GDPR.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Práva dotknutej osoby</h2>
            <p>Podľa GDPR máte voči nám ako prevádzkovateľovi nasledovné práva:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/95">
              <li><strong>Právo na prístup</strong> k svojim osobným údajom a ich prehlľad,</li>
              <li><strong>Právo na opravu</strong> nesprávnych alebo neuplných údajov,</li>
              <li><strong>Právo na vymazanie</strong> údajov (tzv. "právo na zabudnutie"), ak už nie sú potrebné,</li>
              <li><strong>Právo na obmedzenie</strong> spracúvania,</li>
              <li><strong>Právo namietať</strong> proti spracúvaniu vašich údajov,</li>
              <li><strong>Právo na prenosnosť</strong> údajov k inému poskytovateľovi,</li>
              <li><strong>Právo odvolať súhlas</strong> so spracúvaním kedykoľvek, ak je spracúvanie založené na súhlase,</li>
              <li><strong>Právo podať sťažnosť</strong> dozornému orgánu.</li>
            </ul>
            <p>
              Svoje práva si môžete kedykoľvek bezplatne uplatniť zaslaním e-mailu na adresu: <strong>info@baanthaimassage.sk</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Dozorný orgán</h2>
            <p>
              Ak sa domnievate, že vaše osobné údaje spracúvame v rozpore s platnými právnymi predpismi, máte právo podať sťažnosť na dozorny úrad:
            </p>
            <div className="p-5 border border-brand-green-light/20 rounded-xl bg-white bg-opacity-80">
              <p className="font-semibold text-brand-green-dark">Úrad na ochranu osobných údajov Slovenskej republiky</p>
              <p>Hraničná 12</p>
              <p>820 07 Bratislava</p>
              <p className="text-sm mt-1">Web: <a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-brand-green font-medium hover:underline">dataprotection.gov.sk</a></p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">Zmeny týchto zásad</h2>
            <p>
              Tieto zásady ochrany osobných údajov môžeme priebežne aktualizovať, najmä pri zmene používaných služieb, implementácii nových funkcií na webe alebo pri legislatívnych zmenách.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
