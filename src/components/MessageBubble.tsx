import type { ChatMessage } from "../App";
import type { DemoReply } from "../lib/demoBot";
import { formatText } from "../lib/formatMessageText";

type Props = {
  message: ChatMessage;
  onOpenList: (list: Extract<DemoReply, { kind: "interactive_list" }>) => void;
};

export function MessageBubble({ message, onOpenList }: Props) {
  const { reply, direction, time } = message;
  const isOut = direction === "out";

  return (
    <div className={`bubble-row ${isOut ? "bubble-row--out" : "bubble-row--in"}`}>
      <div className={`bubble ${isOut ? "bubble--out" : "bubble--in"}`}>
        {reply.kind === "text" && (
          <div className="bubble__text">{formatText(reply.text)}</div>
        )}

        {reply.kind === "interactive_list" && (
          <div className="bubble__interactive">
            {reply.header && (
              <div className="bubble__list-header">{formatText(reply.header)}</div>
            )}
            <div className="bubble__text">{formatText(reply.body)}</div>
            <button
              type="button"
              className="list-trigger"
              onClick={() => onOpenList(reply)}
            >
              <span className="list-trigger__icon">☰</span>
              {reply.buttonLabel}
            </button>
          </div>
        )}

        {reply.kind === "documents" && (
          <div className="bubble__docs">
            <div className="bubble__list-header">{formatText(reply.title)}</div>
            {reply.items.map((item) => (
              <a
                key={item.label}
                className="doc-link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => item.url === "#" && e.preventDefault()}
              >
                <span className="doc-link__icon">📄</span>
                <span>
                  {formatText(item.label)}
                  {item.note && <small className="text-muted">{item.note}</small>}
                </span>
              </a>
            ))}
          </div>
        )}

        <div className="bubble__meta">
          <span>{time}</span>
          {isOut && <span className="bubble__ticks">✓✓</span>}
        </div>
      </div>
    </div>
  );
}
