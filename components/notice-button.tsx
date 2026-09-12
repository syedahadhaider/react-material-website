"use client";

import { useState } from "react";
import { EditorialAction } from "./editorial-button";

export function NoticeButton() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="notice-wrap">
      <EditorialAction onClick={() => setVisible(true)}>Open the journal</EditorialAction>
      {visible && (
        <p className="notice" role="status">
          This archive entry is being prepared. <button onClick={() => setVisible(false)}>Dismiss</button>
        </p>
      )}
    </div>
  );
}
