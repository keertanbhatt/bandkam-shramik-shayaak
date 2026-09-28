import { isContractor } from "../config/persona";
import { UI } from "../config/uiCopy";

export const BOT_TITLE_GU = UI.botTitleGu;
export const BOT_TITLE_HI = UI.botTitleHi;

const REGISTER_URL = "https://enirmanbocw.gujarat.gov.in/";
const APPLY_URL = "https://sanman.gujarat.gov.in/";

/** Bold Gujarati, Hindi in parentheses */
export function guHi(gu: string, hi: string): string {
  return `**${gu}** (${hi})`;
}

/** Historical arg order (hi, gu) — displays Gujarati first */
export function hiGu(hi: string, gu: string): string {
  return guHi(gu, hi);
}

const workerWelcome = `નમસ્તે 👋

**${BOT_TITLE_GU} તમારું સ્વાગત કરે છે 🤖** (${BOT_TITLE_HI} आपका स्वागत करते हैं 🤖)

📋 નીચેની યોજનાઓમાંથી એક પસંદ કરો અથવા 🔢 **1–14** નંબર લખો.
(📋 नीचे की योजनाओं में से एक चुनें या 🔢 **1–14** नंबर लिखें।)`;

const contractorWelcome = `નમસ્તે 👋

**${BOT_TITLE_GU} 🤖** (${BOT_TITLE_HI} 🤖)

👷‍♂️ ${guHi("શું તમે બાંધકામ શ્રમિક સાથે કામ કરો છો?", "क्या आप निर्माण श्रमिकों के साथ काम करते हैं?")}

${guHi("તમે તેમની નોંધણી અને યોજના અરજી આ પોર્ટલ પરથી કરાવી શકો", "आप उनका पंजीकरण और योजना आवेदन इन पोर्टल पर करवा सकते हैं")}:

🔗 ${REGISTER_URL}
${guHi("· શ્રમિક નોંધણી (ई-निर्माण)", "· श्रमिक पंजीकरण")}

🔗 ${APPLY_URL}
${guHi("· યોજના અરજી (सन्मान)", "· योजना आवेदन")}

📋 ${guHi("નીચે યોજનાઓ જુઓ — બાંધકામ શ્રમિક મિત્રો સુધી જાણકારી પહોંચાડવા", "नीचे योजनाएँ देखें — श्रमिकों तक जानकारी पहुँचाने के लिए")}. 🔢 **1–14** અથવા ☰ **યોજનાઓ** પસંદ કરો.
(📋 नीचे योजनाएँ — श्रमिकों को बताने के लिए। 🔢 **1–14** या ☰ **योजनाएँ**।)`;

const workerHelp = `📌 ${guHi("મદદ", "मदद")}
• 🔢 ${guHi("નંબર અથવા ☰ યોજનાઓ સૂચિ પસંદ કરો", "नंबर या ☰ योजनाएँ सूची से चुनें")}
• 📋 \`મેનુ\` — ${guHi("યોજના સૂચિ", "योजना सूची")}
• ❓ \`મદદ\` — ${guHi("આ સંદેશ", "यह संदेश")}`;

const contractorHelp = `📌 ${guHi("મદદ", "मदद")}
• 🔢 ${guHi("યોજના નંબર અથવા ☰ યોજનાઓ", "योजना नंबर या ☰ योजनाएँ")}
• 📋 \`મેનુ\` — ${guHi("યોજના સૂચિ", "योजना सूची")}
• 👷 ${guHi("નોંધણી/અરજી લિંક welcome સંદેશમાં", "पंजीकरण/आवेदन लिंक वेलकम संदेश में")}
• ❓ \`મદદ\` — ${guHi("આ સંદેશ", "यह संदेश")}`;

export const MSG = {
  welcome: isContractor ? contractorWelcome : workerWelcome,
  listHeader: "**📋 યોજના સૂચિ** (📋 योजना सूची)",
  listButton: "યોજનાઓ (योजनाएँ)",
  invalidScheme: `⚠️ ${guHi(
    "કૃપા કરીને 1 થી 14 વચ્ચે યોજના પસંદ કરો",
    "कृपया 1 से 14 के बीच योजना चुनें",
  )}`,
  schemeNotFound: `🔍 ${guHi("યોજના મળી નહીં", "योजना नहीं मिली")}`,
  backToList: guHi(
    "બીજી યોજના પસંદ કરવા ☰ **યોજનાઓ** દબાવો અથવા `મેનુ` લખો",
    "दूसरी योजना के लिए ☰ **योजनाएँ** दबाएँ या `मेनू` लिखें",
  ),
  help: isContractor ? contractorHelp : workerHelp,
  downloadTitle: guHi("ડાઉનલોડ", "डाउनलोड"),
  docForm: "**અરજી પત્રક** (आवेदन पत्र)",
  docAttachments: "**અરજી સાથેના બિડાણ** (संलग्न दस्तावेज)",
  docFaq: "**પ્રશ્નોત્તર** (प्रश्नोत्तर)",
  pdfSoon: guHi("PDF ટૂંક સમયમાં", "PDF जल्द उपलब्ध"),
  footerMenu: guHi("મેનુ — યોજના સૂચિ", "मेनू — योजना सूची"),
} as const;

export const SCHEME_NAMES_HI: Record<number, string> = {
  1: "शिक्षा सहाय",
  2: "प्रसूति सहाय (प्रसूति पहले)",
  3: "चिकित्सा सहाय (दावा)",
  4: "कुशल श्रमिक सहाय",
  5: "अंतिम संस्कार सहाय",
  6: "प्रधानमंत्री जीवन ज्योति बीमा",
  7: "व्यावसायिक रोग सहाय",
  8: "विशिष्ट कोचिंग",
  9: "नानाजी देशमुख आवास",
  10: "दुर्घटना मृत्यु सहाय",
  11: "चिकित्सा सहाय",
  12: "प्रसूति सहाय व भाग्यलक्ष्मी बॉन्ड",
  13: "पीएचडी योजना",
  14: "आवास सब्सिडी",
};

const SECTION_EMOJI: Record<string, string> = {
  purpose: "🎯",
  eligibility: "👤",
  benefits: "💰",
  documents: "📄",
  terms: "⚖️",
  procedure: "📝",
  whereToApply: "📍",
};

/** Section title with emoji (Gujarati primary, Hindi in parens). */
export function sectionHeading(key: string, hi: string, gu: string): string {
  const emoji = SECTION_EMOJI[key] ?? "▪️";
  return hiGu(hi, `${emoji} ${gu}`);
}

export const SECTION_LABELS: {
  key: string;
  hi: string;
  gu: string;
}[] = [
  { key: "purpose", hi: "योजना का उद्देश्य", gu: "યોજનાનો હેતુ" },
  { key: "eligibility", hi: "पात्रता", gu: "પાત્રતા" },
  { key: "benefits", hi: "लाभ", gu: "લાભ" },
  { key: "documents", hi: "आवश्यक दस्तावेज", gu: "જરૂરી દસ્તાવેજો" },
  { key: "terms", hi: "नियम, शर्तें और नियत समय", gu: "શરતો, નિયમો અને નિયત સમય" },
  { key: "procedure", hi: "कार्यप्रणाली", gu: "કાર્યપદ્ધતિ" },
  { key: "whereToApply", hi: "लाभ कहाँ से मिलेगा", gu: "લાભ ક્યાંથી મેળવવો" },
];

export { APPLY_URL, REGISTER_URL };
