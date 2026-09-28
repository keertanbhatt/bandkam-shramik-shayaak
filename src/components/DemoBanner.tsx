import { UI } from "../config/uiCopy";

export function DemoBanner() {
  return (
    <div className="demo-banner">
      <strong>
        {UI.botTitleGu} ({UI.botTitleHi})
      </strong>
      <span>{UI.bannerLine}</span>
    </div>
  );
}
