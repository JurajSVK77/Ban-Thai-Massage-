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

export interface DurationOption {
  duration: string;
  price: number;
  popular?: boolean;
  discountNote?: string;
}

export interface LocalizedMassageContent {
  title: string;
  thaiName?: string;
  shortDesc: string;
  badge?: string;
  durationOptions: DurationOption[];
  overview: string[];
  benefits: string[];
  howItWorks: string[];
  preparation: string;
  contraindications: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface MassageDetail {
  slug: string;
  hash: string;
  title: string;
  thaiName?: string;
  shortDesc: string;
  badge?: string;
  image: string;
  durationOptions: DurationOption[];
  overview: string[];
  benefits: string[];
  howItWorks: string[];
  preparation: string;
  contraindications: string[];
  metaTitle: string;
  metaDescription: string;
  en?: LocalizedMassageContent;
}

export function getLocalizedMassage(massage: MassageDetail, lang: string): MassageDetail {
  if (lang === 'en' && massage.en) {
    return {
      ...massage,
      title: massage.en.title,
      thaiName: massage.en.thaiName || massage.thaiName,
      shortDesc: massage.en.shortDesc,
      badge: massage.en.badge || massage.badge,
      durationOptions: massage.en.durationOptions,
      overview: massage.en.overview,
      benefits: massage.en.benefits,
      howItWorks: massage.en.howItWorks,
      preparation: massage.en.preparation,
      contraindications: massage.en.contraindications,
      metaTitle: massage.en.metaTitle,
      metaDescription: massage.en.metaDescription,
    };
  }
  return massage;
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
    metaDescription: "Autentická tradičná thajská masáž v Hodoch pri Galante. Akupresúra, pasívny strečing a uvoľnenie energetických dráh. Rezervácia online cez Bookio.",
    en: {
      title: "Traditional Thai Massage",
      thaiName: "Nuad Boran (นวดโบราณ)",
      shortDesc: "Authentic centuries-old dry therapy combining rhythmic acupressure, gentle stretching, and energy line balancing.",
      badge: "Authentic Therapy",
      durationOptions: [
        { duration: "60 minutes", price: 40 },
        { duration: "90 minutes", price: 56, popular: true, discountNote: "Special promotion €56" },
        { duration: "120 minutes", price: 70 }
      ],
      overview: [
        "Traditional Thai Massage (Nuad Boran) is the cornerstone of traditional Thai healing with a rich 2,500-year history. Unlike oil massages, it is performed fully clothed in comfortable, loose cotton attire without the use of oils.",
        "Certified therapist Kay utilizes rhythmic palm and thumb pressure along the body's energy pathways (Sen lines), seamlessly combined with gentle assisted stretching reminiscent of yoga. This technique effectively releases deep-seated muscular tension and renews vitality."
      ],
      benefits: [
        "Immediate relief from stubborn muscle stiffness and joint tension",
        "Significantly increases overall body flexibility and mobility",
        "Stimulates blood circulation and promotes healthy lymphatic flow",
        "Unblocks energy pathways and restores holistic body balance",
        "Deeply relieves mental stress, fatigue, and burnout"
      ],
      howItWorks: [
        "At the beginning, certified Thai masseuse Kay provides comfortable, loose cotton attire.",
        "The treatment begins with grounding pressure on the feet and legs, stimulating circulation and awakening energy.",
        "Kay methodically progresses through hips, back, shoulders, neck, and arms with rhythmic acupressure and gentle stretching.",
        "The session concludes with relaxing acupressure on the temples, scalp, and head for total mental clarity."
      ],
      preparation: "We recommend avoiding heavy meals for at least 1 hour before your session. No need to bring anything – comfortable cotton clothes and all amenities are provided at our studio in Hody.",
      contraindications: [
        "Recent injuries, fractures, or post-surgery conditions",
        "Acute fever, colds, or infectious illnesses",
        "Advanced osteoporosis and severe bone conditions",
        "Severe cardiovascular diseases",
        "Pregnancy (gentle customized sessions available upon consultation)"
      ],
      metaTitle: "Traditional Thai Massage Galanta | Baan Thai Massage Hody",
      metaDescription: "Authentic traditional Thai massage in Hody, Galanta. Acupressure, passive stretching, and Sen line balancing. Book online."
    }
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
    metaDescription: "Relaxačná thajská olejová masáž v Galante s prírodnými olejmi. Upokojenie tela aj mysle v privátnom štúdiu. Rezervácia online cez Bookio.",
    en: {
      title: "Thai Relaxing Oil Massage",
      thaiName: "Thai Aromatherapy Oil Massage",
      shortDesc: "Smooth, soothing massage with warm natural oils that harmonizes the mind and dissolves accumulated body tension.",
      badge: "Favorite Relaxation",
      durationOptions: [
        { duration: "60 minutes", price: 40 },
        { duration: "90 minutes", price: 56, popular: true, discountNote: "Special promotion €56" },
        { duration: "120 minutes", price: 70 }
      ],
      overview: [
        "Thai Relaxing Oil Massage blends the restorative power of gentle Thai acupressure with smooth, flowing strokes and deeply nourishing natural warm oils.",
        "Perfect for anyone seeking profound relaxation after a demanding workday. The warm natural oil deeply moisturizes the skin while Kay's experienced hands soothe tension without harsh pressure."
      ],
      benefits: [
        "Deeply calms the central nervous system and relieves mental anxiety",
        "Promotes restorative sleep and eases evening restlessness",
        "Nourishes, hydrates, and improves skin elasticity",
        "Assists in lymphatic stimulation and natural detoxification",
        "Leaves a lingering sense of lightness, warmth, and inner calm"
      ],
      howItWorks: [
        "Your session takes place in a quiet, warmly heated studio with soft ambient lighting and soothing music.",
        "We use premium natural massage oils that nourish the skin. Throughout the session, only the area currently being worked on is uncovered for your privacy and comfort.",
        "The natural oils absorb smoothly, leaving your skin soft, supple, and lightly scented.",
        "After the massage, you will have time to gently rest and enjoy a warm herbal tea."
      ],
      preparation: "Please arrive 5 minutes early to settle in comfortably. Everything you need is prepared in the studio. You can safely store your jewelry and watch in the room.",
      contraindications: [
        "Acute skin infections, active eczema, or open wounds",
        "Known allergies to specific natural essential oils",
        "Fever, cold, or acute viral conditions",
        "Severe varicose veins on the lower legs"
      ],
      metaTitle: "Thai Oil Massage Galanta | Baan Thai Massage Hody",
      metaDescription: "Relaxing Thai oil massage in Galanta with premium natural oils. Deep body and mind relaxation in a private studio. Book online."
    }
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
    metaDescription: "Najpopulárnejšia masáž v salóne Baan Thai Massage Galanta. Spojenie thajskej akupresúry a teplého relaxačného oleja. Objednajte sa online.",
    en: {
      title: "Combined Thai & Oil Massage",
      thaiName: "Combined Thai & Oil Massage",
      shortDesc: "The perfect synergy of traditional dry acupressure and warm aromatherapy oil. Our most requested treatment.",
      badge: "Most Popular",
      durationOptions: [
        { duration: "60 minutes", price: 40 },
        { duration: "90 minutes", price: 56, popular: true, discountNote: "Special promotion €56" },
        { duration: "120 minutes", price: 70 }
      ],
      overview: [
        "The Combined Thai & Oil Massage is our salon's signature and most sought-after therapy. It strikes the perfect balance for clients who desire the deep knot-relieving power of dry Thai acupressure combined with the soothing glide of warm massage oil.",
        "The treatment begins with dry pressure techniques to release tight muscle fibers, seamlessly transitioning into an oil massage that softens, calms, and rejuvenates the entire body."
      ],
      benefits: [
        "Highly effective release of stubborn muscle knots and deep tension",
        "Immediate relief without lingering soreness after the session",
        "Enhanced muscular blood flow and flushing of metabolic waste",
        "Ideal balance between targeted therapeutic intensity and luxurious relaxation"
      ],
      howItWorks: [
        "The initial phase applies precise dry acupressure over a soft cotton towel onto key muscle junctions and reflex areas.",
        "Next, warm natural oil is applied in long, flowing strokes across the back, shoulders, arms, and legs.",
        "The massage ends with gentle, soothing touches to the neck, shoulders, and scalp."
      ],
      preparation: "Please arrive 5 minutes before your scheduled appointment. All amenities are ready in your private studio.",
      contraindications: [
        "Acute inflammation or fever",
        "Fresh bruising, sprains, or open injuries",
        "Infectious skin conditions"
      ],
      metaTitle: "Combined Thai & Oil Massage Galanta | Baan Thai Massage",
      metaDescription: "The most popular treatment at Baan Thai Massage Galanta. Combining Thai acupressure with warm soothing oil. Book online."
    }
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
    metaDescription: "Thajská reflexná masáž chodidiel a nôh v Galante. Uvoľnenie ťažkých nôh a reflexná stimulácia organizmu. Rezervujte si termín online.",
    en: {
      title: "Thai Foot Reflexology",
      thaiName: "Nuad Tao (นวดเท้า)",
      shortDesc: "Ancient reflexology therapy targeting key acupressure zones on the feet and calves to revitalize the entire body.",
      badge: "Lightness in Legs",
      durationOptions: [
        { duration: "30 minutes", price: 25 },
        { duration: "60 minutes", price: 40, popular: true }
      ],
      overview: [
        "In Thai healing traditions, the soles of your feet reflect a complete anatomical map of your body. Every vital organ, gland, and joint corresponds to specific reflex zones.",
        "This treatment blends soothing manual foot and calf massage, cooling herbal balm, and focused thumb pressure to bring immediate lightness and vitality to weary legs."
      ],
      benefits: [
        "Immediate elimination of heaviness, fatigue, and swelling in the feet and calves",
        "Stimulates reflex zones to promote healthy functioning of internal organs",
        "Boosts peripheral circulation and assists venous return",
        "Promotes deep relaxation, lowering stress hormones and improving sleep",
        "Increases ankle mobility and flexibility of the foot arches"
      ],
      howItWorks: [
        "Begins with warm, soothing strokes and natural herbal cream to relax foot and calf muscles.",
        "The therapist methodically stimulates reflex points on the soles and toes using precise thumb acupressure.",
        "Concludes with relaxing calf stretches and a light, soothing touch to the shoulders and neck."
      ],
      preparation: "Arrive 5 minutes before your session. Wear comfortable loose trousers that can easily be rolled up to your knees.",
      contraindications: [
        "Severe varicose veins with high thrombosis risk",
        "Fungal infections or open wounds on the feet",
        "First trimester of pregnancy (due to uterine reflex points)"
      ],
      metaTitle: "Thai Foot Reflexology Galanta | Baan Thai Massage Hody",
      metaDescription: "Authentic Thai foot reflexology and leg massage in Galanta. Lightness for tired legs and holistic stimulation. Book online."
    }
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
    metaDescription: "Cielená thajská masáž chrbta, ramien a šije v Hodoch pri Galante. Úľava od bolesti sedavého zamestnania a stresu. Rezervácia cez Bookio.",
    en: {
      title: "Targeted Back, Neck & Shoulder Massage",
      thaiName: "Back, Neck & Shoulder Massage",
      shortDesc: "Intensive targeted relief for desk workers, neck stiffness, upper-back tension, and stress headaches.",
      badge: "Fast Pain Relief",
      durationOptions: [
        { duration: "30 minutes", price: 25 },
        { duration: "60 minutes", price: 40, popular: true }
      ],
      overview: [
        "Prolonged desk work, commuting, poor posture, and stress concentrate heavily into the trapezius, rhomboids, and cervical spine.",
        "Our targeted back and neck massage zeroes in on these problem spots. Therapist Kay applies focused acupressure, warm herbal balm, and deep therapeutic strokes to dissolve stubborn muscle knots."
      ],
      benefits: [
        "Fast, palpable relief from chronic neck, shoulder, and upper-back stiffness",
        "Alleviates tension headaches and pressure behind the eyes",
        "Restores neck rotation and relieves tightness across the chest",
        "Improves cerebral circulation, combating mental fatigue",
        "Helps correct muscular imbalances caused by sedentary work"
      ],
      howItWorks: [
        "Focuses intensely from the lower back up through the spine, shoulder blades, traps, neck, and base of the skull.",
        "A warming Thai herbal balm or soothing oil is applied to ease tight muscle fibers.",
        "Detailed trigger-point work melts away accumulated pressure and spasms."
      ],
      preparation: "Arrive 5 minutes prior to your booking. An ideal treatment at any time of day, including lunch breaks or right after work.",
      contraindications: [
        "Acute radiating disc herniation pain into limbs",
        "Recent spinal trauma or acute inflammatory episodes",
        "Recent rib or vertebral fractures"
      ],
      metaTitle: "Back & Neck Massage Galanta | Baan Thai Massage Hody",
      metaDescription: "Targeted Thai back, neck, and shoulder massage in Hody, Galanta. Fast relief from sedentary work strain. Book via Bookio."
    }
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
      "Kokosový olej sa vďaka teplu rýchlo a hlboko vstrebáva, takže pokožka zostáva zamatovo hebká a nie nepríjemne mastná.",
    ],
    preparation: "Príďte 5 minút pred termínom, aby ste sa v pokoji pripravili. V štúdiu máte k dispozícii všetko potrebné zázemie. Šperky a hodinky si môžete bezpečne odložiť priamo v štúdiu. Po masáži nie je potrebné olej zmývať, nechajte ho pôsobiť ako prírodný balzam.",
    contraindications: [
      "Alergia na kokosový olej alebo orechy",
      "Zvýšená telesná teplota a akútne zápaly kože",
      "Akútne popáleniny kože"
    ],
    metaTitle: "Masáž s horúcim kokosovým olejom Galanta | Baan Thai Massage",
    metaDescription: "Exotická masáž s teplým bio kokosovým olejom v Hodoch pri Galante. Hĺbková hydratácia pokožky a dokonalý hrejivý relax. Objednajte sa online.",
    en: {
      title: "Warm Bio Coconut Oil Massage",
      thaiName: "Warm Bio Coconut Oil Massage",
      shortDesc: "Sensual warming ritual with warm organic coconut oil that deeply nourishes dry skin and warms the whole body.",
      badge: "Premium Ritual",
      durationOptions: [
        { duration: "60 minutes", price: 45 },
        { duration: "90 minutes", price: 62, popular: true },
        { duration: "120 minutes", price: 80 }
      ],
      overview: [
        "An exotic, deeply comforting therapy crafted especially for lovers of soothing warmth and intensive skin hydration. Pure 100% organic virgin coconut oil is gently warmed to body temperature.",
        "The soothing warmth of the coconut oil penetrates deeply into muscle layers, dissolving micro-tensions while its natural, delicious tropical aroma carries your senses away to Thailand."
      ],
      benefits: [
        "Deep hydration, softening, and revitalization of dry, dull skin",
        "Comforting warmth that relieves joint stiffness and muscular fatigue",
        "Natural antibacterial and antioxidant nourishment of pure organic coconut oil",
        "Sensory aromatherapy that encourages endorfin release and profound calm",
        "An exceptional wellness ritual especially during cool autumn and winter months"
      ],
      howItWorks: [
        "Warm coconut oil is applied in long, continuous, soothing strokes across the body.",
        "Kay combines gentle relaxation movements with mild pressure on key energy lines.",
        "The natural coconut oil absorbs deeply, leaving your skin velvety soft and hydrated without greasy residue."
      ],
      preparation: "Please arrive 5 minutes before your appointment. There is no need to wash off the oil afterwards – let it absorb as a rich, natural body balm.",
      contraindications: [
        "Allergy to coconut oil or nuts",
        "Elevated temperature or acute skin inflammation",
        "Fresh sunburn or skin damage"
      ],
      metaTitle: "Warm Coconut Oil Massage Galanta | Baan Thai Massage",
      metaDescription: "Exotic warm organic coconut oil massage in Hody, Galanta. Deep hydration and comforting warmth. Book online."
    }
  }
];
