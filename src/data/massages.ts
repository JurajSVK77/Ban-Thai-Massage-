// @ts-ignore
import thajskaMasazImg from "../assets/images/Thajska_masaz.png";
// @ts-ignore
import olejovaMasazImg from "../assets/images/Olejova_masaz.png";
// @ts-ignore
import masazNohImg from "../assets/images/Masaz_noh.png";
// @ts-ignore
import masazChrbtaImg from "../assets/images/Masaz_chrbta.png";
// @ts-ignore
import olejRukaImg from "../assets/images/Olej_ruka.png";

export interface MassageDetail {
  slug: string;
  hash: string;
  title: string;
  thaiName?: string;
  shortDesc: string;
  badge?: string;
  image: string;
  durationOptions: {
    duration: string;
    price: number;
    popular?: boolean;
    discountNote?: string;
  }[];
  overview: string[];
  benefits: string[];
  howItWorks: string[];
  preparation: string;
  contraindications: string[];
  metaTitle: string;
  metaDescription: string;
}

export const MASSAGES_DATA: MassageDetail[] = [
  {
    slug: "tradicna-thajska-masaz",
    hash: "#masaz-tradicna-thajska",
    title: "Tradičná thajská masáž",
    thaiName: "Nuad Boran (นวดโบราณ)",
    shortDesc: "Autentická tisícročná suchá terapia spájajúca akupresúru, pasívny strečing a harmonizáciu energetických dráh Sen.",
    badge: "Autentická terapia",
    image: thajskaMasazImg,
    durationOptions: [
      { duration: "60 minút", price: 40 },
      { duration: "90 minút", price: 56, popular: true, discountNote: "Mimoriadna akcia 56 €" },
      { duration: "120 minút", price: 70 }
    ],
    overview: [
      "Tradičná thajská masáž (Nuad Boran) predstavuje pilier tradičnej thajskej medicíny s viac ako 2500-ročnou históriou. Na rozdiel od olejových masáží sa vykonáva v špeciálnom voľnom bavlnenom odeve bez použitia oleja.",
      "Terapeutka Kay využíva váhu vlastného tela, palce, dlane, predlaktia a kolená na systematické stláčanie akupresúrnych bodov pozdĺž energetických dráh (tzv. Sen dráh). Tieto techniky sú doplnené o jemný pasívny strečing pripomínajúci asistovanú jogu, ktorý prináša okamžité uvoľnenie aj hlbokým svalovým štruktúram."
    ],
    benefits: [
      "Okamžitá úľava od stuhnutosti svalov, šliach a kĺbov",
      "Výrazné zvýšenie celkovej flexibility a rozsahu pohybu tela",
      "Podpora krvného obehu a stimulácia lymfatického toku",
      "Uvoľnenie energetických blokád a obnovenie rovnováhy organizmu",
      "Hĺbkové odbúranie psychického stresu a chronickej vyčerpanosti"
    ],
    howItWorks: [
      "Na úvod vám certifikovaná thajská masérka Kay poskytne pohodlný voľný bavlnený úbor (nohavice a tričko).",
      "Masáž začína jemným tlakom na chodidlá a nohy, čím sa prebúdza krvný obeh a energia stúpa smerom nahor.",
      "Postupne sa prechádza cez bedrá, chrbát, ramená, šiju až k hlave za pomoci rytmickej akupresúry a šetrného naťahovania.",
      "Na záver nasleduje jemná stimulácia tváre, spánkov a hlavy, ktorá zanecháva pocit osvieženia a ľahkosti."
    ],
    preparation: "Pred masážou odporúčame nejesť ťažké jedlá aspoň 1 hodinu. Nie je potrebné si nič nosiť – všetko potrebné oblečenie a zázemie dostanete priamo u nás v salóne v Hodoch.",
    contraindications: [
      "Čerstvé poúrazové a pooperačné stavy",
      "Akútne horúčkovité a infekčné ochorenia",
      "Pokročilá osteoporóza a závažné ochorenia kostí",
      "Ťažké formy kardiovaskulárnych ochorení",
      "Tehotenstvo (odporúčame zvoliť špecializovanú jemnú masáž po dohode)"
    ],
    metaTitle: "Tradičná thajská masáž Galanta | Baan Thai Massage Hody",
    metaDescription: "Autentická tradičná thajská masáž v Hodoch pri Galante. Akupresúra, pasívny strečing a uvoľnenie energetických dráh. Rezervácia online cez Bookio."
  },
  {
    slug: "thajska-olejova-masaz",
    hash: "#masaz-thajska-olejova",
    title: "Thajská relaxačná olejová masáž",
    thaiName: "Thai Aromatherapy Oil Massage",
    shortDesc: "Plynulá uvoľňujúca masáž s prírodnými teplými olejmi, ktorá harmonizuje myseľ a zbavuje telo nahromadeného napätia.",
    badge: "Obľúbená relaxácia",
    image: olejovaMasazImg,
    durationOptions: [
      { duration: "60 minút", price: 40 },
      { duration: "90 minút", price: 56, popular: true, discountNote: "Mimoriadna akcia 56 €" },
      { duration: "120 minút", price: 70 }
    ],
    overview: [
      "Thajská relaxačná olejová masáž spája blahodarné účinky thajských tlakových techník s jemnými, plynulými ťahmi západnej relaxačnej masáže a výživnou silou prírodných olejov.",
      "Je ideálna pre každého, kto hľadá uvoľnenie po náročnom pracovnom dni alebo hektickom období. Teplý prírodný olej vyživuje pokožku do hĺbky, zatiaľ čo citlivé ruky masérky uvoľňujú zatuhnuté svaly bez agresívneho tlaku."
    ],
    benefits: [
      "Hĺbkové upokojenie nervového systému a odbúranie psychického napätia",
      "Zlepšenie kvality spánku a zmiernenie úzkostí či nepokoja",
      "Zvýšenie elasticity, hebkosti a hydratácie pokožky",
      "Podpora detoxikácie organizmu a stimulácia lymfy",
      "Dlhotrvajúci pocit harmónie a vnútornej rovnováhy"
    ],
    howItWorks: [
      "Masáž prebieha v diskrétnom, príjemne vykúrenom štúdiu s tlmeným osvetlením a relaxačnou hudbou.",
      "Používame vysoko kvalitné prírodné masážne oleje, ktoré vyživujú pokožku, pričom počas celej procedúry je nezakrytá iba masírovaná časť tela pre váš maximálny komfort a súkromie.",
      "Oleje sa ľahko vstrebávajú a zanechávajú pokožku jemnú, hydratovanú a príjemne voňavú.",
      "Po procedúre je k dispozícii priestor na pokojné vydýchanie a osvieženie."
    ],
    preparation: "Príďte 5 minút pred termínom, aby ste sa v pokoji pripravili. V štúdiu máte k dispozícii všetko potrebné zázemie. Šperky a hodinky si môžete bezpečne odložiť priamo v štúdiu.",
    contraindications: [
      "Akútne kožné infekcie, ekzémy v akútnom štádiu a otvorené rany",
      "Alergie na špecifické prírodné éterické oleje",
      "Horúčka a akútne virózy",
      "Pokročilé kŕčové žily v oblasti dolných končatín"
    ],
    metaTitle: "Thajská olejová masáž Galanta | Baan Thai Massage Hody",
    metaDescription: "Relaxačná thajská olejová masáž v Galante s prírodnými olejmi. Upokojenie tela aj mysle v privátnom štúdiu. Rezervácia online cez Bookio."
  },
  {
    slug: "mix-thajska-olejova-masaz",
    hash: "#masaz-mix-thajska-olejova",
    title: "Mix Thajská olejová masáž",
    thaiName: "Combined Thai & Oil Massage",
    shortDesc: "Dokonalá symbióza tradičnej akupresúry a upokojujúceho oleja. Najžiadanejšia voľba pre optimálnu regeneráciu.",
    badge: "Najpopulárnejšia",
    image: olejRukaImg,
    durationOptions: [
      { duration: "60 minút", price: 40 },
      { duration: "90 minút", price: 56, popular: true, discountNote: "Mimoriadna akcia 56 €" },
      { duration: "120 minút", price: 70 }
    ],
    overview: [
      "Mix thajská olejová masáž je najobľúbenejšou procedúrou v našom salóne. Predstavuje harmonický kompromis pre tých, ktorí chcú pocítiť účinnosť hĺbkovej akupresúry na odstránenie svalových uzlov, no zároveň túžia po pôžitku z hrejivého relaxačného oleja.",
      "Procedúra začína suchým tlakovým uvoľnením hlavných svalových partií a následne plynule prechádza do olejovej masáže, ktorá svaly dokonale upokojí a zvláčni."
    ],
    benefits: [
      "Účinné rozmasírovanie stuhnutých a preťažených svalových partií",
      "Okamžitý pocit uvoľnenia bez nadmernej svalovej únavy po masáži",
      "Výrazné prekrvenie svalstva a odplavenie kyseliny mliečnej",
      "Ideálny balanc medzi liečebnou intenzitou a relaxačným pôžitkom"
    ],
    howItWorks: [
      "Úvodná časť zahŕňa cielený suchý tlak cez uterák na kľúčové reflexné zóny a svalové úpony chrbta a končatín.",
      "Následne masérka aplikuje teplý prírodný olej a plynulými ťahmi uvoľňuje celé telo vrátane šije, ramien a končatín.",
      "Záver patrí jemnému premasírovaniu šije a hlavy."
    ],
    preparation: "Príďte 5 minút pred termínom, aby ste sa v pokoji pripravili. V štúdiu máte k dispozícii všetko potrebné zázemie.",
    contraindications: [
      "Akútne zápaly a horúčky",
      "Čerstvé hematómy a poúrazové stavy",
      "Infekčné kožné lézie"
    ],
    metaTitle: "Mix thajská olejová masáž Galanta | Baan Thai Massage",
    metaDescription: "Najpopulárnejšia masáž v salóne Baan Thai Massage Galanta. Spojenie thajskej akupresúry a teplého relaxačného oleja. Objednajte sa online."
  },
  {
    slug: "reflexna-masaz-chodidiel",
    hash: "#masaz-reflexna-chodidiel",
    title: "Thajská reflexná masáž chodidiel",
    thaiName: "Nuad Tao (นวดเท้า)",
    shortDesc: "Starodávna reflexná terapia zameraná na akupresúrne body chodidiel a lýtok.",
    badge: "Ľahkosť v nohách",
    image: masazNohImg,
    durationOptions: [
      { duration: "30 minút", price: 25 },
      { duration: "60 minút", price: 40, popular: true }
    ],
    overview: [
      "Chodidlá sú podľa thajskej medicíny mapou celého ľudského tela. Každý orgán, žľaza a štruktúra má na chodidle svoju presnú reflexnú zónu.",
      "Táto procedúra kombinuje manuálnu masáž chodidiel a lýtok, aplikáciu chladivého bylinného balzamu a presné stimulovanie bodov. Prináša úžasný pocit ľahkosti do unavených nôh."
    ],
    benefits: [
      "Okamžité odstránenie pocitu ťažkých, opuchnutých a unavených nôh",
      "Reflexná stimulácia a posilnenie funkcie vnútorných orgánov",
      "Zlepšenie krvného obehu a podpora návratu žilovej krvi",
      "Hlboké zníženie hladiny stresu a podpora kvalitného spánku",
      "Zlepšenie hybnosti členkov a klenby chodidla"
    ],
    howItWorks: [
      "Masáž začína uvoľnením a prehriatím chodidiel a lýtok pomocou prírodného krému.",
      "Masérka precíznou akupresúrou cielene stimuluje reflexné body chodidiel a uvoľňuje energetické blokády.",
      "Masáž končí uvoľnením lýtkových svalov a jemným premasírovaním ramien a šije."
    ],
    preparation: "Príďte 5 minút pred termínom, aby ste sa v pokoji pripravili. V štúdiu máte k dispozícii všetko potrebné zázemie. Šperky a hodinky si môžete bezpečne odložiť priamo v štúdiu.",
    contraindications: [
      "Pokročilé závažné varixy (kŕčové žily) s rizikom trombózy",
      "Plesňové a infekčné ochorenia chodidiel a nechtov",
      "Otvorené rany a pľuzgiere na chodidlách",
      "Prvý trimester tehotenstva (reflexné body maternice)"
    ],
    metaTitle: "Reflexná masáž chodidiel Galanta | Baan Thai Massage Hody",
    metaDescription: "Thajská reflexná masáž chodidiel a nôh v Galante. Uvoľnenie ťažkých nôh a reflexná stimulácia organizmu. Rezervujte si termín online."
  },
  {
    slug: "masaz-chrbta-a-ramien",
    hash: "#masaz-chrbta-a-ramien",
    title: "Masáž chrbta a ramien / šije",
    thaiName: "Back, Neck & Shoulder Massage",
    shortDesc: "Intenzívna cielená terapia pre ľudí so sedavým zamestnaním, bolesťami šije, krčnej chrbtice a hlavy.",
    badge: "Rýchla úľava od bolesti",
    image: masazChrbtaImg,
    durationOptions: [
      { duration: "30 minút", price: 25 },
      { duration: "60 minút", price: 40, popular: true }
    ],
    overview: [
      "Dlhé sedenie za počítačom, šoférovanie, nedostatok pohybu a emočný stres sa najčastejšie ukladajú do trapézov, medzilopatkových svalov a krčnej chrbtice.",
      "Naša cielená masáž chrbta a šije sa špecificky zameriava na tieto kritické oblasti. Thajská masérka Kay využíva kombináciu cieleného akupresúrneho tlaku, hrejivého bylinného balzamu a olejových ťahov na dôkladné rozptýlenie zatvrdnutých svalových spazmov."
    ],
    benefits: [
      "Rýchla a citeľná úľava od chronickej bolesti šije a ramien",
      "Zmiernenie tenzných bolestí hlavy a tlaku za očami",
      "Zvýšenie rozsahu rotácie krku a uvoľnenie hrudného koša",
      "Zlepšenie prietoku krvi do mozgu a zníženie pocitu únavy",
      "Korekcia svalových dysbalancií spôsobených sedavým štýlom života"
    ],
    howItWorks: [
      "Masáž sa sústredí prioritne na oblasť od krížov, cez chrbticu, medzilopatkový priestor, ramená, šiju až po spodinu lebky.",
      "Používa sa hrejivý bylinný thajský balzam alebo relaxačný olej podľa preferencie klienta.",
      "Dôkladné rozmasírovanie svalových hrčiek (trigger pointov) prináša okamžité uvoľnenie nahromadeného tlaku."
    ],
    preparation: "Príďte 5 minút pred termínom, aby ste sa v pokoji pripravili. Ideálna procedúra kedykoľvek počas dňa, aj počas obednej prestávky alebo po práci.",
    contraindications: [
      "Akútne vyžarujúce bolesti z hernie disku (vyskočenej platničky) do končatín v akútnom štádiu",
      "Čerstvé blokády s akútnym zápalom",
      "Zlomeniny rebier alebo stavcov"
    ],
    metaTitle: "Masáž chrbta a šije Galanta | Baan Thai Massage Hody",
    metaDescription: "Cielená thajská masáž chrbta, ramien a šije v Hodoch pri Galante. Úľava od bolesti sedavého zamestnania a stresu. Rezervácia cez Bookio."
  },
  {
    slug: "masaz-s-horucim-kokosovym-olejom",
    hash: "#masaz-kokosovy-olej",
    title: "Masáž s horúcim bio kokosovým olejom",
    thaiName: "Warm Bio Coconut Oil Massage",
    shortDesc: "Zmyselná zahrievacia procedúra s teplým prírodným kokosovým olejom, ktorá vyživuje suchú pokožku a zahreje celé telo.",
    badge: "Prémiový rituál",
    image: olejovaMasazImg,
    durationOptions: [
      { duration: "60 minút", price: 45 },
      { duration: "90 minút", price: 62, popular: true },
      { duration: "120 minút", price: 80 }
    ],
    overview: [
      "Exotická hrejivá terapia určená najmä pre milovníkov jemného tepla a hĺbkovej hydratácie. 100% čistý panenský kokosový olej je jemne zohriaty na príjemnú telesnú teplotu.",
      "Príjemné teplo kokosového oleja preniká hlboko do svalového tkaniva, uvoľňuje mikronapätie, stimuluje krvný obeh a jeho neodolateľná prírodná aróma prenesie vaše zmysly do slnečného Thajska."
    ],
    benefits: [
      "Dokonalá hydratácia, zjemnenie a omladenie suchej či unavenej pokožky",
      "Príjemné prehriatie celého organizmu a úľava stuhnutým kĺbom",
      "Antibakteriálne a antioxidačné účinky čistého panenského kokosového oleja",
      "Zmyselná aromaterapia podporujúca uvoľnenie endorfínov",
      "Vynikajúca procedúra najmä počas jesenných a zimných chladných mesiacov"
    ],
    howItWorks: [
      "Nahriaty kokosový olej je postupne jemnými plynulými ťahmi nanášaný na celé telo.",
      "Masérka spája relaxačné hmaty s miernym tlakom na energetické body.",
      "Kokosový olej sa vďaka teplu rýchlo a hlboko vstrebáva, takže pokožka zostáva zamatovo hebká a nie nepríjemne mastná."
    ],
    preparation: "Príďte 5 minút pred termínom, aby ste sa v pokoji pripravili. V štúdiu máte k dispozícii všetko potrebné zázemie. Šperky a hodinky si môžete bezpečne odložiť priamo v štúdiu. Po masáži nie je potrebné olej zmývať, nechajte ho pôsobiť ako prírodný balzam.",
    contraindications: [
      "Alergia na kokosový olej alebo orechy",
      "Zvýšená telesná teplota a akútne zápaly kože",
      "Akútne popáleniny kože"
    ],
    metaTitle: "Masáž s horúcim kokosovým olejom Galanta | Baan Thai Massage",
    metaDescription: "Exotická masáž s teplým bio kokosovým olejom v Hodoch pri Galante. Hĺbková hydratácia pokožky a dokonalý hrejivý relax. Objednajte sa online."
  }
];
