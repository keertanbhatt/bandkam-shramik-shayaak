import type { ReactNode } from "react";

const TOKEN =
  /(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|https?:\/\/[^\s]+|\n)/g;

function formatText(text: string): ReactNode[] {
  const parts = text.split(TOKEN);
  return parts.map((part, i) => {
    if (part.startsWith("***") && part.endsWith("***")) {
      return (
        <strong key={i} className="text-title-lg">
          {part.slice(3, -3)}
        </strong>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-accent">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={i} className="text-strong">
          {part.slice(1, -1)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <span key={i} className="text-cmd">
          {part.slice(1, -1)}
        </span>
      );
    }
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={i}
          className="bubble__link"
          href={part}
          target="_blank"
          rel="noreferrer"
        >
          {part}
        </a>
      );
    }
    if (part === "\n") return <br key={i} />;
    if (part.startsWith("•")) {
      return (
        <span key={i} className="bubble__bullet-line">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export { formatText };
