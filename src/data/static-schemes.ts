export type SchemeSectionKey =
  | "purpose"
  | "eligibility"
  | "benefits"
  | "documents"
  | "whereToApply"
  | "terms"
  | "procedure";

export type StaticScheme = {
  id: string;
  order: number;
  nameGu: string;
  onlineStatus: "open" | "closed";
  documents: {
    applicationFormLabel: string;
    attachmentsLabel: string;
    faqLabel: string;
    applicationFormUrl?: string;
    attachmentsUrl?: string;
    faqUrl?: string;
  };
  sections: Partial<Record<SchemeSectionKey, string>>;
  menuOptions: {
    key: string;
    order: number;
    labelGu: string;
    sectionKey?: SchemeSectionKey;
    special?: "downloads" | "main_menu";
  }[];
};

const DEFAULT_MENU = (): StaticScheme["menuOptions"] => [
  { key: "purpose", order: 1, labelGu: "યોજનાનો હેતુ", sectionKey: "purpose" },
  { key: "eligibility", order: 2, labelGu: "પાત્રતા", sectionKey: "eligibility" },
  { key: "benefits", order: 3, labelGu: "લાભ", sectionKey: "benefits" },
  { key: "documents", order: 4, labelGu: "જરૂરી દસ્તાવેજો", sectionKey: "documents" },
  { key: "procedure", order: 5, labelGu: "કાર્યપદ્ધતિ", sectionKey: "procedure" },
  { key: "whereToApply", order: 6, labelGu: "લાભ ક્યાંથી મેળવવો", sectionKey: "whereToApply" },
  { key: "downloads", order: 7, labelGu: "અરજી / પ્રશ્નોત્તર ડાઉનલોડ", special: "downloads" },
  { key: "main_menu", order: 0, labelGu: "મુખ્ય મેનુ", special: "main_menu" },
];

export const STATIC_SCHEMES: StaticScheme[] = [
  {
    id: "scheme_01",
    order: 1,
    nameGu: "શિક્ષણ સહાય",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "અરજી સાથેના બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose:
        "રાજયના ઉચ્ચ શિક્ષણના અભ્યાસક્રમોમાં પ્રવેશ મેળવવા માંગતા તેજસ્વી અને જરૂરીયાતમંદ બાંધકામ શ્રમિકના વિદ્યાર્થીઓની કારકિર્દીના ઘડતર માટે બાંધકામ શ્રમિકના કોઈ પણ બે બાળકને વર્ષમાં એક વાર માટે આર્થિક સહાય.",
      eligibility: "નોંધાયેલા બાંધકામ શ્રમિકના કોઈપણ બે બાળકોને વર્ષ માં એકવાર.",
      benefits:
        "• ધોરણ 1–5: ₹1800\n• ધોરણ 6–8: ₹2400\n• ધોરણ 9–10: ₹8000\n• ધોરણ 11–12: ₹10000\n• સ્નાતક/અનુસ્નાતક/પ્રોફેશનલ કોર્સ માટે ₹10000–₹50000 (કોર્સ પ્રમાણે)\n• હોસ્ટેલ સહાય ₹1200/મહિના\n• પુસ્તક સહાય ₹3000–₹10000",
      documents:
        "• બોર્નાફાઈડ\n• ફોટા\n• આધાર\n• પરીણામ\n• ફી પહોંચ\n• હોસ્ટેલ પ્રમાણપત્ર (જરૂર હોય તો)\n• બેંક પાસબુક\n• એફીડેવીટ/સંમતિપત્ર (₹5000+ સહાય માટે)",
      whereToApply: "બાંધકામ બોર્ડની જિલ્લા કચેરી / સન્માન પોર્ટલ ઓનલાઈન.",
      terms:
        "• શૈક્ષણિક વર્ષ/સત્રની નિયત તારીખ સુધી અરજી.\n• દરેક બાળક માટે અલગ અરજી ફોર્મ.\n• વિદ્યાર્થીની વય મર્યાદા 30 વર્ષ (અપંગતા માટે છૂટ).\n• પહેલેથી સરકાર/ખાનગી સમાન શિક્ષણ સહાય મળતી હોય તો બોર્ડ સહાય નહીં.\n• ખોટા દસ્તાવેજ/ખોટી માહિતી પર લાભ રદ અને કાયદેસર કાર્યવાહી.\n• મંજૂર લાભ સીધી બેંક ચુકવણી — આધાર લિંક બેંક ખાતું.",
      procedure:
        "• સન્માન પોર્ટલ / જિલ્લા કચેરી\n• ચકાસણી\n• મંજૂરી\n• સીધી બેંક ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_02",
    order: 2,
    nameGu: "પ્રસૂતિ સહાય યોજના (પ્રસૂતિ પહેલા)",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "સગર્ભાવસ્થા દરમ્યાન નાણાકીય સહાય અને સામાજિક સ્થિરતા.",
      eligibility: "નોંધાયેલ બાંધકામ શ્રમિક / પત્ની — પ્રથમ બે પ્રસૂતિ.",
      benefits:
        "• પત્ની: ₹6000 (પહેલા)\n• મહિલા શ્રમિક: ₹37500\n• પ્રસૂતિ પછી: ₹20000 / ₹6000",
      documents:
        "• ઈ-નિર્માણ\n• ડૉક્ટર/મમતા કાર્ડ\n• જન્મ પ્રમાણપત્ર\n• આધાર\n• બેંક\n• રેશન\n• સોગંદનામું",
      whereToApply: "સન્માન પોર્ટલ / જિલ્લા કચેરી.",
      terms:
        "• સીધી બેંક ચુકવણી (આધાર લિંક ખાતું).\n• ગર્ભાવસ્થાની તારીખથી 6 માસની અંદર પહેલો હપ્તો/અરજી.\n• પ્રસૂતિ પછી 12 માસની અંદર બાકી દસ્તાવેજ અને દાવો.\n• પ્રથમ બે જીવંત જન્મ માટે જ લાભ.\n• નોંધણી ચાલુ હોવી અને યોજના મુજબ પાત્રતા.",
      procedure:
        "• ઓનલાઈન/ઓફલાઈન અરજી\n• જિલ્લા/રાજ્ય મંજૂરી\n• સીધી બેંક ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_03",
    order: 3,
    nameGu: "તબીબી સહાય યોજના (ક્લેમ)",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "બાંધકામ શ્રમિકો માટે સંપૂર્ણ તબીબી તપાસ અને વહેલી સારવાર.",
      eligibility: "નોંધાયેલ બાંધકામ શ્રમિક.",
      benefits: "• પ્રતિ લાભાર્થી ₹1950 સુધી\n• સંમત હોસ્પિટલ/કેમ્પ તપાસ",
      documents: "• ઈ-નિર્માણ કાર્ડ",
      whereToApply: "સંમત હોસ્પિટલ/સંસ્થા — કેમ્પ / બાંધકામ સ્થળ.",
      terms:
        "• માત્ર સંમત/સમજૂતી હોસ્પિટલ અથવા બોર્ડ કેમ્પમાં તપાસ.\n• આયુષ્માન અથવા એમ.ઓ.યુ. હોસ્પિટલમાં જ માન્ય (યોજના મુજબ).\n• ઈ-નિર્માણ કાર્ડ અને ઓળખ ચકાસણી ફરજિયાત.\n• બિલ/અહેવાલ મંજૂરી પછી જ ચુકવણી.\n• એક વર્ષમાં લાભ મર્યાદા યોજના પ્રમાણે.",
      procedure:
        "• સન્માન પોર્ટલ\n• ફાળવણી\n• અહેવાલ\n• બિલ મંજૂરી\n• ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_04",
    order: 4,
    nameGu: "કુશળ શ્રમિક સહાય યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "કૌશલ્ય શિક્ષણ અને રોજગારી માટે કારકિર્દી ઘડતર.",
      eligibility: "નોંધાયેલ શ્રમિક પોતે અથવા કોઈપણ બે બાળકો — કુશળ વિશ્વવિદ્યાલય/સંલગ્ન કોર્સ.",
      benefits:
        "• કોર્સની સંપૂર્ણ ફી પરત\n• સેમિસ્ટર મુજબ (જરૂર હોય તો)",
      documents:
        "• ઈ-નિર્માણ\n• અધ્યયન પ્રમાણપત્ર\n• ફી રસીદ\n• ફોટા\n• પરીણામ\n• આધાર\n• રેશન\n• સોગંદનામું",
      whereToApply: "જિલ્લા કચેરી / સન્માન પોર્ટલ.",
      terms:
        "• કોર્સ/પ્રવેશ પછી 3 માસની અંદર અરજી.\n• શિક્ષણ સહાય યોજના સાથે બેવડો લાભ નહીં.\n• માન્ય કુશળ વિશ્વવિદ્યાલય/સંલગ્ન સંસ્થાનોનો કોર્સ.\n• ફી રસીદ અને અધ્યયન પ્રમાણપત્ર ખોટા હોય તો લાભ રદ.\n• સેમિસ્ટર/વર્ષ મુજબ ફી પરત — નિયત દસ્તાવેજ સાથે.",
      procedure: "• ઓનલાઈન અરજી\n• ચકાસણી\n• સીધી બેંક ચુકવણી પરત",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_05",
    order: 5,
    nameGu: "અંત્યેષ્ઠી સહાય યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "ચાલુ સભ્યપદ દરમ્યાન મૃત્યુ પર વારસદારને સહાય.",
      eligibility: "નોંધાયેલ બાંધકામ શ્રમિક.",
      benefits: "• ₹10,000",
      documents:
        "• મૃત્યુ પ્રમાણપત્ર\n• વારસદાર ઓળખ\n• સ્વઘોષણા\n• બેંક\n• રેશન\n• પેઢીનામું",
      whereToApply: "સન્માન પોર્ટલ ઓનલાઈન.",
      terms:
        "• મૃત્યુ સમયે બાંધકામ બોર્ડમાં નોંધણી ચાલુ હોવી.\n• મૃત્યુ પછી 6 માસની અંદર અરજી.\n• વારસદાર/નામિત વ્યક્તિ જ લાભ મેળવી શકે.\n• મૃત્યુ પ્રમાણપત્ર, વારસાઈ અને ઓળખના સાચા દસ્તાવેજ.\n• એક જ વારસદારને ₹10,000 — બેવડી અરજી નહીં.",
      procedure: "• ઓનલાઈન અરજી\n• મંજૂરી\n• ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_06",
    order: 6,
    nameGu: "પ્રધાનમંત્રી જીવન જ્યોત બીમા યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "કુદરતી મૃત્યુ પર ₹2 લાખ જીવન વીમા કવચ.",
      eligibility: "18–55 વર્ષ, પ્રધાનમંત્રી જીવન જ્યોતિ બીમામાં જોડાયેલ નોંધાયેલ શ્રમિક.",
      benefits: "• પ્રીમિયમ 100% સીધી બેંક ચુકવણી પરત\n• વાર્ષિક",
      documents: "• પ્રીમિયમ રસીદ/વિગત\n• જીવન જ્યોતિ બીમા બેંક ખાતું\n• આધાર\n• ફોટો",
      whereToApply: "જિલ્લા કચેરી / સન્માન પોર્ટલ.",
      terms:
        "• 18–55 વર્ષ, પ્રધાનમંત્રી જીવન જ્યોતિ બીમામાં જોડાયેલ હોવું.\n• પ્રીમિયમ બેંકથી કપાય પછી 6 માસની અંદર અરજી.\n• વાર્ષિક પ્રીમિયમ 100% પરત — નિયત રસીદ/વિગત.\n• ખોટી રસીદ અથવા બેવડી અરજી સ્વીકાર નહીં.\n• મંજૂરી પછી સીધી બેંક ચુકવણી.",
      procedure: "• ઓનલાઈન અરજી\n• ચકાસણી કડી\n• સીધી બેંક ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_07",
    order: 7,
    nameGu: "વ્યવસાયિક રોગોમાં સહાય યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "વ્યવસાયિક રોગો માટે સહાય (વિગતો ટૂંક સમયમાં અપડેટ).",
      eligibility: "નોંધાયેલ બાંધકામ શ્રમિક.",
      benefits: "• યોજના પ્રમાણે નાણાકીય સહાય",
      documents: "• ઈ-નિર્માણ\n• તબીબી અહેવાલ\n• બિલ\n• આધાર\n• બેંક વિગત",
      whereToApply: "સન્માન પોર્ટલ / જિલ્લા કચેરી.",
      terms:
        "• માત્ર નોંધાયેલ બાંધકામ શ્રમિક — ચાલુ નોંધણી.\n• વ્યવસાયિક રોગ બોર્ડ/તબીબ દ્વારા પુષ્ટિ.\n• સારવાર પછી 6 માસની અંદર અરજી અને મૂળ દસ્તાવેજ.\n• યોજના મર્યાદા અને દર મુજબ લાભ.\n• ખોટા દાવા પર કાયદેસર કાર્યવાહી.",
      procedure: "• ઓનલાઈન અરજી\n• જિલ્લા ચકાસણી\n• મંજૂરી\n• ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_08",
    order: 8,
    nameGu: "વિશિષ્ટ કોચિગ યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "સી.એ., જી.પી.એસ.સી., જી.એસ.એસ.એસ.બી., જી.પી.એસ.એસ.બી. જેવી સ્પર્ધાત્મક પરીક્ષાઓ માટે કોચિંગ.",
      eligibility: "નોંધાયેલ શ્રમિકના બાળકો.",
      benefits: "• નોંધણી ફી પરત\n• કોચિંગ/ટ્યુશન ફી પરત",
      documents: "• આધાર\n• ફી રસીદ\n• બેંક\n• રેશન\n• સોગંદનામું\n• અધ્યયન પ્રમાણપત્ર",
      whereToApply: "સન્માન પોર્ટલ.",
      terms:
        "• કોચિંગ/ટ્યુશન પ્રવેશ પછી 6 માસની અંદર અરજી.\n• માન્ય સ્પર્ધાત્મક પરીક્ષા (સી.એ., જી.પી.એસ.સી. વગેરે) માટે.\n• નોંધણી + ફી રસીદ — મૂળ અને પ્રત.\n• એક પરીક્ષા/બાળક માટે યોજના મુજબ એક વાર લાભ.\n• ખોટા દસ્તાવેજ પર લાભ રદ.",
      procedure: "• ઓનલાઈન અરજી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_09",
    order: 9,
    nameGu: "નાનાજી દેશમુખ આવાસ યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "ઈ.ડબલ્યુ.એસ./એલ.આઈ.જી. મકાન ફાળવણી પર કુટુંબને એકવાર સહાય.",
      eligibility: "નોંધાયેલ શ્રમિક, નોંધણી ≥2 વર્ષ.",
      benefits: "• ₹1,60,000",
      documents: "• ઈ-નિર્માણ\n• ફાળવણી પત્ર\n• હપ્તા પત્ર\n• ઓળખ\n• કર બિલ\n• સોગંદનામું",
      whereToApply: "સન્માન પોર્ટલ.",
      terms:
        "• મકાન ફાળવણી પછી 1 વર્ષની અંદર અરજી.\n• નોંધણી ઓછામાં ઓછી 2 વર્ષ.\n• ઈ.ડબલ્યુ.એસ./એલ.આઈ.જી. ફાળવણી પત્ર અને હપ્તા પત્ર ફરજિયાત.\n• સંયુક્ત માલિકી હોય તો બંને માલિકની સહમતિ.\n• ₹1,60,000 એક વાર — બેવડી અરજી નહીં.\n• મંજૂરી પછી સંબંધિત સત્તા પર ડિમાન્ડ ડ્રાફ્ટ.",
      procedure: "• ઓનલાઈન અરજી\n• જિલ્લા કચેરી\n• ડિમાન્ડ ડ્રાફ્ટ દ્વારા ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_10",
    order: 10,
    nameGu: "અકસ્માત મૃત્યુ સહાય યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "અકસ્માત મૃત્યુ પર વારસદારને સહાય.",
      eligibility: "નોંધાયેલ બાંધકામ શ્રમિક.",
      benefits: "• યોજના મુજબ ₹2,00,000 સુધી\n• અકસ્માત મૃત્યુ માટે",
      documents: "• મૃત્યુ/એફ.આઈ.આર.\n• પોસ્ટમોર્ટમ (જરૂર હોય તો)\n• વારસાઈ\n• આધાર\n• બેંક",
      whereToApply: "સન્માન પોર્ટલ.",
      terms:
        "• અકસ્માત/અણધારી ઘટના પર મૃત્યુ — કુદરતી મૃત્યુ અલગ યોજના.\n• ઘટના પછી 6 માસની અંદર અરજી.\n• નોંધણી ચાલુ અને ઈ-નિર્માણ માન્ય.\n• વારસદાર/નામિત વ્યક્તિ — સાચા દસ્તાવેજ.\n• ખોટા દાવા/ખોટા દસ્તાવેજ પર કાર્યવાહી.",
      procedure: "• ઓનલાઈન અરજી\n• જિલ્લા ચકાસણી\n• મંજૂરી\n• ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_11",
    order: 11,
    nameGu: "તબીબી સહાય યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "તબીબી સારવાર માટે સહાય (મુખ્ય તબીબી દાવો યોજના અલગ — યોજના 3).",
      eligibility: "નોંધાયેલ બાંધકામ શ્રમિક.",
      benefits: "• દાખલ ખર્ચ\n• ઓપરેશન ખર્ચ\n• દવા ખર્ચ\n• યોજના મુજબ સહાય",
      documents: "• ઈ-નિર્માણ\n• હોસ્પિટલ બિલ\n• ડિસ્ચાર્જ\n• આધાર\n• બેંક",
      whereToApply: "સન્માન પોર્ટલ / જિલ્લા કચેરી.",
      terms:
        "• માન્ય હોસ્પિટલ/દવાખાનામાં સારવાર.\n• સારવાર પછી 6 માસની અંદર અરજી.\n• યોજના 3 (કેમ્પ/તપાસ) સાથે બેવડો લાભ નહીં (જ્યાં લાગુ).\n• મૂળ બિલ અને તબીબી અહેવાલ ફરજિયાત.\n• મર્યાદા થી વધુ દાવો મંજૂર નહીં.",
      procedure: "• ઓનલાઈન અરજી\n• ચકાસણી\n• મંજૂરી\n• ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_12",
    order: 12,
    nameGu: "પ્રસુતિ સહાય અને મુખ્યમંત્રી ભાગ્યલક્ષ્મી બોન્ડ",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "પ્રસૂતિ સહાય અને બોન્ડ યોજના (વિગતો અપડેટ થશે).",
      eligibility: "નોંધાયેલ મહિલા/પત્ની શ્રમિક.",
      benefits: "• પ્રસૂતિ સહાય\n• ભાગ્યલક્ષ્મી બોન્ડ\n• યોજના પ્રમાણે",
      documents: "• ઈ-નિર્માણ\n• જન્મ પ્રમાણપત્ર\n• મમતા કાર્ડ\n• આધાર\n• બેંક",
      whereToApply: "સન્માન પોર્ટલ.",
      terms:
        "• પ્રથમ/બીજી જીવંત પ્રસૂતિ માટે (યોજના મુજબ).\n• જન્મ પછી 12 માસની અંદર અરજી.\n• બોન્ડ/સહાય માટે અલગ અરજી જરૂર હોય તો અલગ ફોર્મ.\n• સીધી બેંક ચુકવણી — આધાર લિંક ખાતું.\n• ખોટા જન્મ/ઓળખ દસ્તાવેજ પર લાભ રદ.",
      procedure: "• ઓનલાઈન અરજી\n• ચકાસણી\n• મંજૂરી\n• ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_13",
    order: 13,
    nameGu: "પી.એચ.ડી યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "પીએચડી અભ્યાસ માટે સહાય (વિગતો અપડેટ થશે).",
      eligibility: "નોંધાયેલ શ્રમિકના બાળક/શ્રમિક.",
      benefits: "• અભ્યાસ ફી\n• સ્ટિપેન્ડ\n• યોજના મુજબ (અપડેટ થશે)",
      documents: "• ઈ-નિર્માણ\n• પી.એચ.ડી. પ્રવેશ પત્ર\n• અધ્યયન પ્રમાણપત્ર\n• ફી રસીદ\n• આધાર\n• બેંક",
      whereToApply: "સન્માન પોર્ટલ.",
      terms:
        "• માન્ય યુનિવર્સિટીમાં પી.એચ.ડી. પ્રવેશ.\n• પ્રવેશ પછી 3 માસની અંદર અરજી.\n• શિક્ષણ સહાય સાથે બેવડો લાભ નહીં.\n• બધા દસ્તાવેજ મૂળ અને પ્રત — ચકાસણી ફરજિયાત.\n• મંજૂરી પછી સીધી બેંક ચુકવણી.",
      procedure: "• ઓનલાઈન અરજી\n• ચકાસણી\n• મંજૂરી\n• ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
  {
    id: "scheme_14",
    order: 14,
    nameGu: "હાઉસીંગ સબસીડી યોજના",
    onlineStatus: "open",
    documents: {
      applicationFormLabel: "અરજી પત્રક",
      attachmentsLabel: "બિડાણ",
      faqLabel: "પ્રશ્નોત્તર (प्रश्नोत्तर)",
    },
    sections: {
      purpose: "આવાસ સબસીડી (વિગતો અપડેટ થશે).",
      eligibility: "નોંધાયેલ બાંધકામ શ્રમિક.",
      benefits: "• ઘર/ફ્લેટ ખરીદી પર સબસીડી\n• બાંધકામ પર સબસીડી\n• યોજના મુજબ",
      documents: "• ઈ-નિર્માણ\n• મકાન/ફ્લેટ દસ્તાવેજ\n• લોન/કાગળ\n• આધાર\n• બેંક\n• સોગંદનામું",
      whereToApply: "સન્માન પોર્ટલ.",
      terms:
        "• નોંધણી ઓછામાં ઓછી 2 વર્ષ (યોજના મુજબ).\n• એક કુટુંબને એક વાર સબસીડી.\n• મકાન/પ્લોટ માલિકીના સાચા દસ્તાવેજ — નિયત સમયની અંદર અરજી.\n• ખોટા દસ્તાવેજ/ખોટી માહિતી — લાભ રદ.\n• મંજૂરી પછી સીધી બેંક ચુકવણી.",
      procedure: "• ઓનલાઈન અરજી\n• જિલ્લા ચકાસણી\n• મંજૂરી\n• ચુકવણી",
    },
    menuOptions: DEFAULT_MENU(),
  },
];

export function getSchemeByOrder(order: number) {
  return STATIC_SCHEMES.find((s) => s.order === order);
}

export function getSchemeById(id: string) {
  return STATIC_SCHEMES.find((s) => s.id === id);
}
