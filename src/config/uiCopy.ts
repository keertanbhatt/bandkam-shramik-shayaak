import { isContractor } from "./persona";

const WORKER = {
  botTitleGu: "બાંધકામ શ્રમિક યોજના સહાયક",
  botTitleHi: "बांध काम श्रमिक योजना सहायक",
  headerSubtitleGu: "બાંધકામ શ્રમિક યોજના",
  headerSubtitleHi: "बांध काम श्रमिक योजना",
  bannerLine:
    "💬 ગુજરાતી · हिंदी — 🌐 બ્રાઉઝરમાં ડેમો · ब्राउज़र में डेमो",
  sidebarChatName: "બાંધકામ શ્રમિક યોજના સહાયક",
  sidebarPreviewDefault: "નમસ્તે — યોજના સૂચિ (नमस्ते — योजना सूची)",
  pageTitle: "બાંધકામ શ્રમિક યોજના સહાયક · WhatsApp ડેમો",
} as const;

const CONTRACTOR = {
  botTitleGu: "ઠેકેદાર — બાંધકામ શ્રમિક યોજના સહાયક",
  botTitleHi: "ठेकेदार — बांध काम श्रमिक योजना सहायक",
  headerSubtitleGu: "શ્રમિક નોંધણી અને યોજના જાણકારી",
  headerSubtitleHi: "श्रमिक पंजीकरण और योजना जानकारी",
  bannerLine:
    "👷 ઠેકેદાર ડેમો — શ્રમિક માટે નોંધણી/યોજના · ठेकेदार डेमो — श्रमिक हेतु",
  sidebarChatName: "ઠેકેદાર યોજના સહાયક",
  sidebarPreviewDefault: "શ્રમિક નોંધણી — યોજના જાણકારી",
  pageTitle: "ઠેકેદાર — બાંધકામ શ્રમિક યોજના સહાયક · WhatsApp ડેમો",
} as const;

export const UI = isContractor ? CONTRACTOR : WORKER;
