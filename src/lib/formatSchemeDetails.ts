import type { SchemeSectionKey, StaticScheme } from "../data/static-schemes";
import { isContractor } from "../config/persona";
import {
  APPLY_URL,
  REGISTER_URL,
  SCHEME_NAMES_HI,
  SECTION_LABELS,
  guHi,
  sectionHeading,
} from "./messages";

export function formatSchemeDetailsBody(scheme: StaticScheme): string {
  const nameHi = SCHEME_NAMES_HI[scheme.order];

  const titleLine = nameHi
    ? `📌 ***${scheme.nameGu}*** (${nameHi})`
    : `📌 ***${scheme.nameGu}***`;

  const lines: string[] = [titleLine];

  for (const { key, hi, gu } of SECTION_LABELS) {
    const content = scheme.sections[key as SchemeSectionKey]?.trim();
    if (content) {
      lines.push(sectionHeading(key, hi, gu), content);
    }
  }

  if (isContractor) {
    lines.push(
      "---",
      guHi("👷 શ્રમિકની નોંધણી", "👷 श्रमिक पंजीकरण"),
      `🔗 ${REGISTER_URL}`,
      guHi("📝 શ્રમિક માટે યોજના અરજી", "📝 श्रमिक के लिए योजना आवेदन"),
      `🔗 ${APPLY_URL}`,
    );
  } else {
    lines.push(
      "---",
      guHi("📝 યોજના માટે અરજી કરવા", "📝 योजना के लिए आवेदन"),
      `🔗 ${APPLY_URL}`,
      guHi(
        "👷 જો તમે નોંધાયેલ બાંધકામ શ્રમિક નથી, તો પહેલા નોંધણી કરો",
        "👷 यदि आप पंजीकृत श्रमिक नहीं हैं, तो पहले पंजीकरण करें",
      ),
      `🔗 ${REGISTER_URL}`,
    );
  }
  return lines.join("\n\n");
}
