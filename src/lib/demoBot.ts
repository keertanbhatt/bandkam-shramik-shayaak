import {
  STATIC_SCHEMES,
  getSchemeByOrder,
  type StaticScheme,
} from "../data/static-schemes";
import { parseGlobalCommand, parseIntent } from "./intentParser";
import {
  formatSchemeDetailsBody,
} from "./formatSchemeDetails";
import { MSG, SCHEME_NAMES_HI } from "./messages";
import {
  type DemoChatResult,
  type DemoReply,
  type DemoSession,
  newSessionId,
  type DemoListRow,
} from "./demoTypes";

const sessions = new Map<string, DemoSession>();

function textReply(text: string): DemoReply {
  return { kind: "text", text };
}

function wrap(session: DemoSession, replies: DemoReply[]): DemoChatResult {
  return {
    sessionId: session.id,
    replies,
    state: session.state,
    schemeId: session.schemeId,
  };
}

function schemeListLine(s: StaticScheme): string {
  const hi = SCHEME_NAMES_HI[s.order];
  const name = hi
    ? `**${s.nameGu}** (${hi})`
    : `**${s.nameGu}**`;
  return `${s.order}. ${name}`;
}

function schemeListRows(): DemoListRow[] {
  return STATIC_SCHEMES.map((s) => ({
    id: `scheme_${s.order}`,
    title: `${s.order}. ${s.nameGu}`.slice(0, 24),
    description: `${s.order}/14`,
  }));
}

function interactiveSchemeListReply(
  body: string,
  options?: { header?: string },
): Extract<DemoReply, { kind: "interactive_list" }> {
  return {
    kind: "interactive_list",
    header: options?.header,
    body,
    buttonLabel: MSG.listButton,
    rows: schemeListRows(),
  };
}

function toSchemeSelection(
  session: DemoSession,
  withWelcome: boolean,
): DemoChatResult {
  session.state = "SCHEME_SELECTION";
  session.schemeId = undefined;

  const lines = STATIC_SCHEMES.map(schemeListLine).join("\n");
  const body = withWelcome ? `${MSG.welcome}\n\n\n${lines}` : lines;

  return wrap(session, [
    interactiveSchemeListReply(body, { header: MSG.listHeader }),
  ]);
}

function showSchemeDetails(
  session: DemoSession,
  scheme: StaticScheme,
): DemoChatResult {
  session.schemeId = scheme.id;
  session.state = "SCHEME_DETAIL";
  return wrap(session, [
    interactiveSchemeListReply(formatSchemeDetailsBody(scheme)),
  ]);
}

function goBack(session: DemoSession): DemoChatResult {
  session.schemeId = undefined;
  return toSchemeSelection(session, false);
}

function handleSchemeDetailIdle(session: DemoSession, text: string): DemoChatResult {
  const listMatch = /^scheme_(\d+)$/.exec(text);
  if (listMatch) {
    const order = parseInt(listMatch[1], 10);
    const scheme = getSchemeByOrder(order);
    if (scheme) return showSchemeDetails(session, scheme);
  }
  const intent = parseIntent(text);
  if (intent.type === "NUMBER") {
    if (intent.value === 0) {
      session.schemeId = undefined;
      return toSchemeSelection(session, false);
    }
    if (intent.value >= 1 && intent.value <= STATIC_SCHEMES.length) {
      const scheme = getSchemeByOrder(intent.value);
      if (scheme) return showSchemeDetails(session, scheme);
    }
  }
  return wrap(session, [textReply(MSG.backToList)]);
}

function handleSchemeSelection(session: DemoSession, text: string): DemoChatResult {
  let order: number | null = null;
  const listMatch = /^scheme_(\d+)$/.exec(text);
  if (listMatch) {
    order = parseInt(listMatch[1], 10);
  } else {
    const intent = parseIntent(text);
    if (intent.type === "NUMBER") order = intent.value;
  }

  if (order === null || order < 1 || order > STATIC_SCHEMES.length) {
    return wrap(session, [textReply(MSG.invalidScheme)]);
  }

  const scheme = getSchemeByOrder(order);
  if (!scheme) return wrap(session, [textReply(MSG.schemeNotFound)]);

  return showSchemeDetails(session, scheme);
}

/** Text shown in the user's chat bubble (not the internal list row id). */
export function displayTextForOutgoingMessage(raw: string): string {
  const text = raw.trim();
  const listMatch = /^scheme_(\d+)$/.exec(text);
  if (listMatch) {
    const scheme = getSchemeByOrder(parseInt(listMatch[1], 10));
    if (scheme) return formatUserSchemeLabel(scheme);
  }
  const intent = parseIntent(text);
  if (intent.type === "NUMBER") {
    const scheme = getSchemeByOrder(intent.value);
    if (scheme) return formatUserSchemeLabel(scheme);
  }
  return text;
}

function formatUserSchemeLabel(scheme: StaticScheme): string {
  const hi = SCHEME_NAMES_HI[scheme.order];
  if (hi) {
    return `${scheme.order}. ${scheme.nameGu} (${hi})`;
  }
  return `${scheme.order}. ${scheme.nameGu}`;
}

export function startDemoSession(): DemoChatResult {
  const session: DemoSession = {
    id: newSessionId(),
    state: "WELCOME",
    updatedAt: Date.now(),
  };
  sessions.set(session.id, session);
  return toSchemeSelection(session, true);
}

export function resetDemoSession(sessionId: string): DemoChatResult | null {
  const session = sessions.get(sessionId);
  if (!session) return null;
  session.state = "WELCOME";
  session.schemeId = undefined;
  session.updatedAt = Date.now();
  return toSchemeSelection(session, true);
}

export function sendDemoMessage(
  sessionId: string,
  rawText: string,
): DemoChatResult {
  const session = sessions.get(sessionId);
  if (!session) throw new Error("Session not found");

  const text = rawText.trim();
  session.updatedAt = Date.now();

  const global = parseGlobalCommand(text);
  if (global?.type === "GLOBAL") {
    if (global.command === "HELP") {
      return wrap(session, [textReply(MSG.help)]);
    }
    if (global.command === "MENU" || global.command === "START") {
      session.schemeId = undefined;
      return toSchemeSelection(session, false);
    }
    if (global.command === "BACK") {
      return goBack(session);
    }
  }

  if (session.state === "WELCOME") {
    return toSchemeSelection(session, true);
  }
  if (session.state === "SCHEME_SELECTION") {
    return handleSchemeSelection(session, text);
  }
  if (session.state === "SCHEME_DETAIL") {
    return handleSchemeDetailIdle(session, text);
  }

  return toSchemeSelection(session, true);
}

export type { DemoChatResult, DemoReply };
