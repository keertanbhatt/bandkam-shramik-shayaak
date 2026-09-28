export type DemoConversationState =
  | "WELCOME"
  | "SCHEME_SELECTION"
  | "SCHEME_MENU"
  | "SCHEME_DETAIL";

export type DemoListRow = {
  id: string;
  title: string;
  description?: string;
};

export type DemoReply =
  | { kind: "text"; text: string }
  | {
      kind: "interactive_list";
      header?: string;
      body: string;
      buttonLabel: string;
      rows: DemoListRow[];
    }
  | {
      kind: "documents";
      title: string;
      items: { label: string; url: string; note?: string }[];
    };

export type DemoSession = {
  id: string;
  state: DemoConversationState;
  schemeId?: string;
  updatedAt: number;
};

export type DemoChatResult = {
  sessionId: string;
  replies: DemoReply[];
  state: DemoConversationState;
  schemeId?: string;
};

import { UI } from "../config/uiCopy";

export const BOT_DISPLAY_NAME = `${UI.botTitleGu} (${UI.botTitleHi})`;

export function newSessionId(): string {
  return crypto.randomUUID();
}
