import { UI } from "../config/uiCopy";

type Props = {
  lastPreview?: string;
  onReset: () => void;
};

export function WebSidebar({ lastPreview, onReset }: Props) {
  const preview =
    lastPreview?.replace(/\*\*/g, "").replace(/\n/g, " ").trim().slice(0, 72) ||
    UI.sidebarPreviewDefault;

  return (
    <aside className="web-sidebar" aria-label="Chats">
      <div className="web-sidebar__toolbar">
        <div className="web-sidebar__profile">યો</div>
        <div className="web-sidebar__toolbar-actions">
          <button type="button" title="ગ્રૂપ (समूह)" aria-label="Groups">
            👥
          </button>
          <button type="button" title="સ્થિતિ (स्थिति)" aria-label="Status">
            ◔
          </button>
          <button
            type="button"
            title="ચેટ રીસેટ (चैट रीसेट)"
            aria-label="Reset chat"
            onClick={onReset}
          >
            ↺
          </button>
          <button type="button" title="મેનુ (मेनू)" aria-label="Menu">
            ⋮
          </button>
        </div>
      </div>

      <div className="web-sidebar__search">
        <span className="web-sidebar__search-icon" aria-hidden>
          🔍
        </span>
        <input
          type="search"
          readOnly
          placeholder="શોધો અથવા નવી ચેટ (खोजें या नया चैट)"
          aria-label="Search"
        />
      </div>

      <div className="web-sidebar__filters">
        <span className="web-sidebar__filter web-sidebar__filter--active">બધા (सभी)</span>
        <span className="web-sidebar__filter">ન વાંચેલ (अपठित)</span>
      </div>

      <button type="button" className="web-sidebar__chat web-sidebar__chat--active">
        <div className="web-sidebar__chat-avatar">યો</div>
        <div className="web-sidebar__chat-body">
          <div className="web-sidebar__chat-top">
            <span className="web-sidebar__chat-name">{UI.sidebarChatName}</span>
            <span className="web-sidebar__chat-time">હમણાં</span>
          </div>
          <div className="web-sidebar__chat-preview">{preview}</div>
        </div>
      </button>

      <p className="web-sidebar__demo-note">
        બ્રાઉઝર ડેમો · ब्राउज़र डेमो — ગુજરાતી · हिंदी
      </p>
    </aside>
  );
}
