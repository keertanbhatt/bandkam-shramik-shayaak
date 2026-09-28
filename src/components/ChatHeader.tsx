import { UI } from "../config/uiCopy";

type Props = {
  onReset: () => void;
};

export function ChatHeader({ onReset }: Props) {
  return (
    <header className="chat-header">
      <div className="chat-header__avatar">યો</div>
      <div className="chat-header__info">
        <div className="chat-header__title">
          <strong>{UI.botTitleGu}</strong>
          <span className="chat-header__title-sub"> ({UI.botTitleHi})</span>
        </div>
        <div className="chat-header__subtitle">
          🏗️ {UI.headerSubtitleGu} · 🏗️ {UI.headerSubtitleHi}
        </div>
      </div>
      <div className="chat-header__actions">
        <button type="button" className="chat-header__action chat-header__action--ghost" title="વિડિઓ (वीडियो)" aria-hidden>
          📹
        </button>
        <button type="button" className="chat-header__action chat-header__action--ghost" title="કૉલ (कॉल)" aria-hidden>
          📞
        </button>
        <button
          type="button"
          className="chat-header__action"
          onClick={onReset}
          title="ચેટ રીસેટ (चैट रीसेट)"
        >
          ↺
        </button>
      </div>
    </header>
  );
}
