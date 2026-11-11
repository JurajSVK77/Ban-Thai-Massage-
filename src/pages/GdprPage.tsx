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
            Posledná aktualizácia: 11. novembra 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-12 text-text-dark font-light leading-relaxed text-base"
        >
          <div className="space-y-4 text-lg text-text-dark/95">
            <p>
              Ochrana Vášho súkromia je pre nás dôležitá. V tomto dokumente Vás informujeme o tom, ako salón <strong>Baan Thai Massage Galanta</strong> získava, používa, uchováva a chráni osobné údaje zákazníkov a návštevníkov webovej stránky.
            </p>
            <p className="text-base text-text-muted">
              Pri spracúvaní osobných údajov postupujeme v súlade s nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR), zákonom č. 18/2018 Z. z. o ochrane osobných údajov a ďalšími príslušnými právnymi predpismi Slovenskej republiky.
            </p>
          </div>

          {/* 1. Prevádzkovateľ osobných údajov */}
          <section className="space-y-6">
            <h2 className="text-2xl font-serif text-brand-green-dark">1. Prevádzkovateľ osobných údajov</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-brand-green-dark/[0.02] border border-brand-green-light/15 p-6 md:p-8 rounded-2xl font-normal">
              <div className="sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Obchodné meno</p>
                <p className="text-brand-green-dark font-medium font-serif text-lg">Kanlaya Kruzlik – Baan Thai Massage</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Miesto podnikania</p>
                <p className="text-brand-green-dark font-medium">Hody 1679, 924 01 Galanta</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">IČO</p>
                <p className="text-brand-green-dark font-medium font-mono">57664315</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">DIČ</p>
                <p className="text-brand-green-dark font-medium font-mono">1131228065</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Registrácia</p>
                <p className="text-brand-green-dark font-medium">Živnostenský register Okresného úradu Galanta</p>
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
              <div className="sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-1">Web</p>
                <p className="text-brand-green-dark font-medium font-mono">
                  www.baanthaimassage.sk
                </p>
              </div>
            </div>
            <p className="text-xs italic text-text-muted pt-1">
              V ďalšom texte označovaný ako „prevádzkovateľ“ alebo „salón“.
            </p>
          </section>

          {/* 2. Aké osobné údaje spracúvame */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">2. Aké osobné údaje spracúvame</h2>
            <p>
              V závislosti od spôsobu rezervácie, nákupu darčekového poukazu alebo komunikácie môžeme spracúvať:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/95">
              <li>Meno a priezvisko zákazníka.</li>
              <li>Telefónne číslo.</li>
              <li>E-mailovú adresu.</li>
              <li>Dátum a čas rezervácie.</li>
              <li>Druh objednanej masáže.</li>
              <li>Stav a históriu rezervácií.</li>
              <li>Údaje potrebné na zakúpenie a uplatnenie darčekového poukazu.</li>
              <li>Údaje o uskutočnenej online objednávke a platbe.</li>
              <li>Obsah vzájomnej komunikácie prostredníctvom e-mailu, telefónu, kontaktného formulára alebo sociálnych sietí.</li>
              <li>Technické údaje súvisiace s používaním webovej stránky a rezervačného systému.</li>
            </ul>
            <p className="font-medium text-brand-green-dark pt-1">
              Spracúvame iba údaje potrebné na príslušný účel.
            </p>
          </section>

          {/* 3. Rezervácie prostredníctvom Bookio */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">3. Rezervácie prostredníctvom Bookio</h2>
            <p>
              Na evidenciu a správu rezervácií využívame elektronický rezervačný systém <strong>Bookio</strong>.
            </p>
            <p>
              Rezerváciu je možné vytvoriť online, telefonicky alebo osobne.
            </p>
            <p>Osobné údaje používame na:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/95">
              <li>Prijatie a potvrdenie rezervácie.</li>
              <li>Evidenciu objednanej služby a termínu.</li>
              <li>Zmenu alebo zrušenie rezervácie.</li>
              <li>Zasielanie potvrdení a pripomienok termínov.</li>
              <li>Komunikáciu súvisiacu s poskytovaním objednanej služby.</li>
              <li>Primeranú evidenciu uskutočnených rezervácií a riešenie prípadných požiadaviek zákazníkov.</li>
            </ul>
            <div className="p-4 rounded-xl bg-brand-green-dark/[0.03] border border-brand-green-light/15 my-4">
              <p className="text-sm">
                <strong>Právny základ:</strong> Článok 6 ods. 1 písm. b) GDPR – plnenie zmluvy alebo vykonanie opatrení pred jej uzatvorením.
              </p>
              <p className="text-sm text-text-muted mt-2">
                V nevyhnutných prípadoch môžeme údaje uchovávať aj na ochranu našich právnych nárokov na základe oprávneného záujmu podľa článku 6 ods. 1 písm. f) GDPR.
              </p>
            </div>
            <p>
              Systém Bookio vystupuje pri správe rezervácií ako sprostredkovateľ osobných údajov podľa článku 28 GDPR.
            </p>
            <p>
              Prístup k rezervačným údajom majú výlučne osoby oprávnené prevádzkovateľom, a to v rozsahu potrebnom na poskytovanie služieb a komunikáciu so zákazníkmi.
            </p>
          </section>

          {/* 4. Online predaj darčekových poukazov */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">4. Online predaj darčekových poukazov</h2>
            <p>
              Prostredníctvom systému Bookio umožňujeme online zakúpenie darčekových poukazov na naše služby.
            </p>
            <p>Pri nákupe môžu byť spracúvané najmä:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/95">
              <li>Meno a kontaktné údaje kupujúceho.</li>
              <li>E-mailová adresa potrebná na doručenie elektronického poukazu.</li>
              <li>Informácie o zakúpenom poukaze.</li>
              <li>Hodnota poukazu a identifikačný kód.</li>
              <li>Dátum nákupu, stav objednávky a údaje o uskutočnenej platbe.</li>
              <li>Ďalšie údaje potrebné na vybavenie objednávky, ak sú súčasťou nákupného procesu.</li>
            </ul>
            <p>
              Tieto údaje používame na spracovanie objednávky, doručenie poukazu, jeho evidenciu, uplatnenie, prípadné reklamácie a plnenie zákonných povinností.
            </p>
            <div className="p-4 rounded-xl bg-brand-green-dark/[0.03] border border-brand-green-light/15 my-4">
              <p className="text-sm">
                <strong>Právny základ:</strong> Článok 6 ods. 1 písm. b) GDPR – plnenie zmluvy; pri zákonnej evidencii a uchovávaní dokladov článok 6 ods. 1 písm. c) GDPR – plnenie zákonnej povinnosti.
              </p>
            </div>
            <p>
              Online platby zabezpečujú príslušní poskytovatelia platobných služieb prostredníctvom zabezpečeného platobného rozhrania.
            </p>
            <p>
              Prevádzkovateľ nepotrebuje na vybavenie objednávky uchovávať úplné údaje o platobnej karte zákazníka. Údaje o platobných transakciách spracúvajú aj príslušní poskytovatelia platobných služieb podľa svojich zákonných a zmluvných povinností.
            </p>
            <p>
              Podmienky zakúpenia, platnosti a uplatnenia darčekových poukazov upravujú naše všeobecné obchodné podmienky.
            </p>
          </section>

          {/* 5. Platby za masážne služby */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">5. Platby za masážne služby</h2>
            <p>
              Platby za masážne služby prijímame priamo v prevádzke, a to v hotovosti alebo platobnou kartou.
            </p>
            <p>
              Prijaté tržby evidujeme prostredníctvom elektronickej registračnej pokladnice <strong>eKasa</strong>.
            </p>
            <p>
              Pri bežnej evidencii tržieb nezadávame do pokladne meno, priezvisko, telefónne číslo ani e-mail zákazníka.
            </p>
            <p>
              Nevykonávame samostatnú evidenciu zákazníkov na účely bežnej fakturácie masážnych služieb.
            </p>
            <p>
              Údaje o tržbách a účtovné doklady spracúvame na účely plnenia povinností vyplývajúcich z účtovných, daňových a ďalších príslušných právnych predpisov.
            </p>
            <div className="p-4 rounded-xl bg-brand-green-dark/[0.03] border border-brand-green-light/15 my-4">
              <p className="text-sm">
                <strong>Právny základ:</strong> Článok 6 ods. 1 písm. c) GDPR, pokiaľ príslušné doklady alebo transakcie obsahujú osobné údaje.
              </p>
            </div>
            <p>
              Pri platbách kartou môžu byť technické a transakčné údaje spracúvané bankou alebo poskytovateľom platobných služieb.
            </p>
          </section>

          {/* 6. Informácie o zdravotnom stave */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">6. Informácie o zdravotnom stave</h2>
            <p>
              V záujme bezpečnosti poskytovaných masážnych služieb sa môžeme pred masážou zákazníka ústne opýtať na prípadné zdravotné obmedzenia alebo okolnosti, ktoré môžu ovplyvniť vhodnosť masáže.
            </p>
            <p>
              Tieto informácie štandardne nezaznamenávame, neukladáme do systému Bookio a nevytvárame zdravotnú dokumentáciu zákazníkov.
            </p>
            <p>
              Ústne poskytnuté informácie slúžia výlučne na posúdenie vhodnosti konkrétnej masáže alebo potreby jej úpravy.
            </p>
            <p>
              Zákazník nie je povinný oznamovať svoju konkrétnu diagnózu. Ak však nie je možné bezpečne posúdiť vhodnosť masáže, môžeme odporučiť konzultáciu s lekárom alebo poskytnutie služby odmietnuť.
            </p>
            <p className="font-medium text-brand-peach-dark">
              Žiadame zákazníkov, aby citlivé zdravotné informácie neuvádzali do poznámok v online rezervačnom formulári.
            </p>
          </section>

          {/* 7. Komunikácia so zákazníkmi */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">7. Komunikácia so zákazníkmi</h2>
            <p>
              Osobné údaje používame aj pri vybavovaní otázok, požiadaviek, zmien rezervácií, reklamácií alebo inej komunikácie týkajúcej sa našich služieb.
            </p>
            <p>
              Komunikácia môže prebiehať telefonicky, prostredníctvom SMS, e-mailu, rezervačného systému alebo sociálnych sietí.
            </p>
            <div className="p-4 rounded-xl bg-brand-green-dark/[0.03] border border-brand-green-light/15 my-4">
              <p className="text-sm">
                <strong>Právny základ:</strong> Podľa povahy komunikácie článok 6 ods. 1 písm. b) GDPR – predzmluvné vzťahy alebo plnenie zmluvy, prípadne článok 6 ods. 1 písm. f) GDPR – oprávnený záujem na vybavovaní požiadaviek a ochrane práv.
              </p>
            </div>
          </section>

          {/* 8. Marketingová komunikácia */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">8. Marketingová komunikácia</h2>
            <p>
              Ak nám udelíte dobrovoľný súhlas, môžeme Vaše kontaktné údaje používať na zasielanie informácií o novinkách, akciách, darčekových poukazoch a službách salónu.
            </p>
            <p>
              Marketingová komunikácia môže prebiehať prostredníctvom e-mailu alebo SMS.
            </p>
            <div className="p-4 rounded-xl bg-brand-green-dark/[0.03] border border-brand-green-light/15 my-4">
              <p className="text-sm">
                <strong>Právny základ:</strong> Článok 6 ods. 1 písm. a) GDPR – súhlas dotknutej osoby.
              </p>
            </div>
            <p>
              Marketingový súhlas nie je podmienkou vytvorenia rezervácie ani zakúpenia darčekového poukazu.
            </p>
            <p>
              Udelený súhlas môžete kedykoľvek odvolať zaslaním požiadavky na <a href="mailto:info@baanthaimassage.sk" className="text-brand-green font-medium underline">info@baanthaimassage.sk</a> alebo iným dostupným spôsobom uvedeným v marketingovej správe.
            </p>
            <p>
              Odvolanie súhlasu nemá vplyv na zákonnosť predchádzajúceho spracúvania.
            </p>
            <p>
              Potvrdenia rezervácií, pripomienky termínov a informácie nevyhnutné na vybavenie objednávky nepovažujeme za marketingovú komunikáciu, pokiaľ neobsahujú reklamné oznámenia.
            </p>
          </section>

          {/* 9. Prevádzka webovej stránky a cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">9. Prevádzka webovej stránky a cookies</h2>
            <p>
              Naša webová stránka môže používať súbory cookies a obdobné technológie na zabezpečenie funkčnosti, zapamätanie používateľských nastavení a prípadné meranie návštevnosti.
            </p>
            <p>
              Nevyhnutné technické cookies sa používajú na zabezpečenie funkčnosti webovej stránky alebo služieb, ktoré návštevník požaduje.
            </p>
            <p>
              Analytické a marketingové cookies, ktoré vyžadujú súhlas, používame iba po jeho udelení.
            </p>
            <p>
              Návštevník môže svoje nastavenia cookies zmeniť alebo odvolať udelený súhlas prostredníctvom funkcie <strong>Nastavenia cookies</strong> dostupnej na webovej stránke.
            </p>
            <p>
              Podrobnosti o jednotlivých cookies, ich účeloch, poskytovateľoch a dobe používania sú uvedené v samostatnej sekcii <a href="#cookies" className="text-brand-green font-medium underline">Cookies</a>.
            </p>
          </section>

          {/* 10. Ako dlho osobné údaje uchovávame */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">10. Ako dlho osobné údaje uchovávame</h2>
            <p>
              Osobné údaje uchovávame len počas doby potrebnej na splnenie účelu ich spracúvania alebo počas doby stanovenej zákonom.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-text-dark/95">
              <li>
                <strong>Rezervačné údaje:</strong> Počas vybavovania rezervácie a následne počas primeranej doby potrebnej na prevádzkovú evidenciu, komunikáciu a prípadné uplatňovanie právnych nárokov. Konkrétne lehoty sa riadia internými pravidlami uchovávania údajov.
              </li>
              <li>
                <strong>Údaje o darčekových poukazoch:</strong> Počas ich platnosti, vybavovania objednávky a následne počas obdobia potrebného na splnenie zákonných povinností alebo ochranu právnych nárokov.
              </li>
              <li>
                <strong>Účtovné a daňové doklady:</strong> Počas zákonom stanovenej doby, spravidla 10 rokov po roku, ktorého sa týkajú, ak príslušný predpis neustanovuje inak.
              </li>
              <li>
                <strong>Bežná komunikácia:</strong> Počas vybavovania požiadavky a následne po dobu primeranú jej obsahu a účelu.
              </li>
              <li>
                <strong>Marketingové údaje:</strong> Počas trvania platného právneho základu; po odvolaní súhlasu ukončíme marketingové používanie údajov, pokiaľ neexistuje iný právny dôvod ich uchovania.
              </li>
              <li>
                <strong>Cookies:</strong> Podľa druhu a doby platnosti jednotlivých súborov uvedenej v nastaveniach cookies.
              </li>
            </ul>
            <p>
              Po uplynutí príslušnej lehoty údaje vymažeme alebo anonymizujeme, pokiaľ ich ďalšie uchovávanie nevyžaduje zákon alebo preukázateľný právny dôvod.
            </p>
          </section>

          {/* 11. Komu môžu byť osobné údaje sprístupnené */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">11. Komu môžu byť osobné údaje sprístupnené</h2>
            <p>
              Osobné údaje môžu byť v nevyhnutnom rozsahu sprístupnené:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/95">
              <li>Poskytovateľovi rezervačného systému Bookio.</li>
              <li>Poskytovateľom platobných služieb pri online nákupoch poukazov a kartových transakciách.</li>
              <li>Poskytovateľovi webhostingu a technickej správy webovej stránky.</li>
              <li>Poskytovateľom e-mailových a komunikačných služieb.</li>
              <li>Externej účtovníčke alebo účtovnej spoločnosti, pokiaľ sú údaje súčasťou príslušných účtovných podkladov.</li>
              <li>Poskytovateľom technickej podpory a IT služieb, ak je ich prístup nevyhnutný.</li>
              <li>Orgánom verejnej moci, ak poskytnutie údajov vyžaduje zákon.</li>
              <li>Poskytovateľom analytických alebo marketingových služieb, ak ich používame na príslušnom právnom základe.</li>
            </ul>
            <p className="font-semibold text-brand-green-dark pt-1">
              Osobné údaje zákazníkov nepredávame tretím stranám.
            </p>
          </section>

          {/* 12. Prenos osobných údajov do tretích krajín */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">12. Prenos osobných údajov do tretích krajín</h2>
            <p>
              Pri využívaní niektorých medzinárodných technologických, komunikačných alebo cloudových služieb môže dochádzať k spracúvaniu či prenosu osobných údajov mimo Európskeho hospodárskeho priestoru.
            </p>
            <p>
              V takýchto prípadoch sa uplatňujú príslušné požiadavky GDPR, najmä rozhodnutia o primeranosti ochrany, štandardné zmluvné doložky alebo iné zákonom prípustné mechanizmy.
            </p>
            <p>
              Informácie o konkrétnych prenosoch a použitých zárukách poskytujeme na požiadanie, pokiaľ sa na dané spracúvanie vzťahujú.
            </p>
          </section>

          {/* 13. Zabezpečenie osobných údajov */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">13. Zabezpečenie osobných údajov</h2>
            <p>
              Na ochranu osobných údajov prijímame primerané technické a organizačné opatrenia.
            </p>
            <p>
              Rezervácie spravujeme najmä prostredníctvom mobilnej aplikácie Bookio. Prístup k údajom je obmedzený na oprávnené osoby, ktoré ich používajú iba na pracovné a prevádzkové účely.
            </p>
            <p>
              Pri ochrane údajov dbáme najmä na zabezpečenie mobilných zariadení, ochranu prístupových údajov, zachovávanie mlčanlivosti a predchádzanie neoprávnenému sprístupneniu informácií.
            </p>
            <p>
              Osobné údaje nepoužívame na účely nesúvisiace s poskytovaním našich služieb bez príslušného právneho základu.
            </p>
          </section>

          {/* 14. Povinnosť poskytnutia osobných údajov */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">14. Povinnosť poskytnutia osobných údajov</h2>
            <p>
              Pri vytvorení rezervácie potrebujeme základné údaje, ktoré umožňujú identifikovať rezerváciu a v prípade potreby kontaktovať zákazníka.
            </p>
            <p>
              Ak zákazník potrebné údaje neposkytne, nemusí byť možné rezerváciu vytvoriť alebo potvrdiť.
            </p>
            <p>
              Pri online nákupe darčekového poukazu je potrebné poskytnúť údaje nevyhnutné na vybavenie objednávky, platbu a doručenie poukazu.
            </p>
            <p>
              Poskytnutie údajov na marketingové účely je dobrovoľné.
            </p>
          </section>

          {/* 15. Automatizované rozhodovanie a profilovanie */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">15. Automatizované rozhodovanie a profilovanie</h2>
            <p>
              Pri bežnom spracúvaní rezervácií a poskytovaní masážnych služieb nevykonávame automatizované individuálne rozhodovanie vrátane profilovania podľa článku 22 GDPR, ktoré by malo právne alebo obdobne významné účinky na zákazníka.
            </p>
            <p>
              Automatické potvrdenia rezervácií, pripomienky termínov alebo technické spracovanie online objednávky nepredstavujú takéto rozhodovanie.
            </p>
          </section>

          {/* 16. Práva dotknutých osôb */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">16. Práva dotknutých osôb</h2>
            <p>Podľa GDPR máte za zákonom stanovených podmienok právo:</p>
            <ul className="list-disc pl-6 space-y-2 text-text-dark/95">
              <li><strong>Na prístup</strong> k svojim osobným údajom a získanie ich kópie.</li>
              <li><strong>Na opravu</strong> nesprávnych alebo neúplných údajov.</li>
              <li><strong>Na vymazanie</strong> osobných údajov, ak sú splnené zákonné podmienky.</li>
              <li><strong>Na obmedzenie spracúvania</strong> v prípadoch uvedených v GDPR.</li>
              <li><strong>Namietať</strong> proti spracúvaniu založenému na oprávnenom záujme a proti priamemu marketingu.</li>
              <li><strong>Na prenosnosť</strong> údajov, ak sú splnené zákonné podmienky.</li>
              <li><strong>Kedykoľvek odvolať súhlas</strong>, ak je spracúvanie založené na súhlase.</li>
              <li><strong>Podať sťažnosť</strong> príslušnému dozornému orgánu.</li>
            </ul>
            <div className="p-6 rounded-2xl bg-white/70 border border-brand-green-light/20 shadow-xs my-4">
              <p className="text-sm">Svoje práva si môžete uplatniť prostredníctvom e-mailovej adresy:</p>
              <p className="text-base font-semibold text-brand-green-dark mt-1 font-mono">
                <a href="mailto:info@baanthaimassage.sk" className="hover:text-brand-peach-dark transition-colors">
                  info@baanthaimassage.sk
                </a>
              </p>
              <p className="text-xs text-text-muted mt-3">
                Na Vašu žiadosť odpovieme bez zbytočného odkladu, spravidla najneskôr do jedného mesiaca od jej doručenia. V zákonom stanovených prípadoch môže byť lehota predĺžená, o čom Vás budeme informovať.
              </p>
              <p className="text-xs text-text-muted mt-2">
                Ak budeme mať odôvodnené pochybnosti o totožnosti žiadateľa, môžeme požadovať primerané dodatočné overenie totožnosti.
              </p>
            </div>
          </section>

          {/* 17. Dozorný orgán */}
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-brand-green-dark">17. Dozorný orgán</h2>
            <p>
              Ak sa domnievate, že pri spracúvaní Vašich osobných údajov porušujeme príslušné právne predpisy, máte právo podať sťažnosť dozornému orgánu:
            </p>
            <div className="p-6 border border-brand-green-light/20 rounded-2xl bg-white/70 shadow-xs">
              <p className="font-semibold text-brand-green-dark text-lg font-serif">
                Úrad na ochranu osobných údajov Slovenskej republiky
              </p>
              <p className="mt-1">Hraničná 12</p>
              <p>820 07 Bratislava</p>
              <p className="text-sm mt-2">
                Web: <a href="https://dataprotection.gov.sk/" target="_blank" rel="noopener noreferrer" className="text-brand-green font-medium hover:underline">https://dataprotection.gov.sk/</a>
              </p>
            </div>
          </section>

          {/* 18. Zmeny týchto zásad */}
          <section className="space-y-4 pt-4 border-t border-brand-green-light/15">
            <h2 className="text-2xl font-serif text-brand-green-dark">18. Zmeny týchto zásad</h2>
            <p>
              Tieto zásady ochrany osobných údajov môžeme priebežne aktualizovať najmä v prípade zmien právnych predpisov, spôsobu prevádzky salónu alebo používaných technických služieb.
            </p>
            <p>
              Aktuálne znenie je vždy zverejnené na našej webovej stránke:
            </p>
            <p className="font-mono text-sm text-brand-green-dark">
              <a href="https://www.baanthaimassage.sk/#gdpr" className="hover:underline">
                https://www.baanthaimassage.sk/#gdpr
              </a>
            </p>

            <div className="mt-8 pt-6 border-t border-brand-green-light/10 text-sm text-text-muted space-y-1">
              <p className="font-semibold text-brand-green-dark">Baan Thai Massage Galanta</p>
              <p>Hody 1679, 924 01 Galanta</p>
              <p>
                <a href="mailto:info@baanthaimassage.sk" className="hover:underline">
                  info@baanthaimassage.sk
                </a>
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
