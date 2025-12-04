import { useState } from "react";
import "./App.css";
import HomeFeed from "./HomeFeed.jsx";

const TABS = [
  { key: "home", label: "Home" },
  { key: "challenges", label: "Challenges" },
  { key: "events", label: "Events" },
  { key: "create", label: "Create" },
  { key: "messages", label: "Messages" },
  { key: "members", label: "Members" },
  { key: "group", label: "Group" },
];

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const activeTabMeta = TABS.find((t) => t.key === activeTab);

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-header-left">
          <div className="app-logo-dot" />
          <div>
            <div className="app-org-name">Intentionality</div>
            <div className="app-org-sub">Class and Club</div>
          </div>
        </div>
        <div className="app-header-right">
          <div className="app-user">
            <div className="app-user-avatar">BB</div>
            <div className="app-user-text">
              <div className="app-user-name">Sample student</div>
              <div className="app-user-role">Current class · Club member</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="app-nav">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={
              "app-nav-item" +
              (tab.key === activeTab ? " app-nav-item-active" : "")
            }
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="app-main">
        {activeTab === "home" && <HomeFeed />}

        {activeTab !== "home" && (
          <div className="coming-soon">
            <h2>{activeTabMeta?.label} view coming soon</h2>
            <p>
              For now the Home feed is the primary prototype. This tab will
              eventually show the {activeTabMeta?.label.toLowerCase()} features
              that map to Heylo and Intentionality.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
