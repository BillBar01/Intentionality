import "./App.css";
import { useState } from "react";

const pageStyle = {
  minHeight: "100vh",
  background: "#f9fafb",
  padding: "1.5rem",
  fontFamily:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "1.5rem",
};

const titleStyle = {
  fontSize: "2rem",
  fontWeight: 700,
  marginBottom: "0.5rem",
};

const subtitleStyle = {
  color: "#4b5563",
};

const tabsRow = {
  display: "flex",
  justifyContent: "center",
  gap: "0.5rem",
  marginBottom: "1.25rem",
  flexWrap: "wrap",
};

const tabButton = {
  padding: "0.4rem 1rem",
  borderRadius: "999px",
  border: "1px solid #d1d5db",
  background: "#ffffff",
  fontSize: "0.85rem",
  cursor: "pointer",
};

const activeTab = {
  background: "#1d4ed8",
  color: "#ffffff",
  borderColor: "#1d4ed8",
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: "0.75rem",
  padding: "1.5rem",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  marginBottom: "1rem",
};

const cardTitle = {
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
};

const cardText = {
  fontSize: "0.9rem",
  color: "#4b5563",
  marginBottom: "0.75rem",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  borderRadius: "999px",
  border: "none",
  background: "#2563eb",
  color: "white",
  fontWeight: 500,
  cursor: "pointer",
  marginRight: "0.5rem",
  marginTop: "0.25rem",
};

const secondaryButton = {
  ...buttonStyle,
  background: "#e5e7eb",
  color: "#111827",
};

const inputStyle = {
  padding: "0.5rem 0.75rem",
  borderRadius: "0.5rem",
  border: "1px solid #d1d5db",
  width: "100%",
  marginBottom: "0.75rem",
  fontSize: "0.9rem",
};

const metricCard = {
  flex: 1,
  margin: "0.25rem",
  padding: "1rem",
  background: "#f9fafb",
  borderRadius: "0.75rem",
  textAlign: "center",
};

const pill = {
  padding: "0.25rem 0.6rem",
  borderRadius: "999px",
  fontSize: "0.75rem",
  background: "#eff6ff",
  color: "#1d4ed8",
  marginRight: "0.35rem",
  marginBottom: "0.35rem",
  display: "inline-block",
};

function App() {
  const [view, setView] = useState("student");

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Intentionality Platform</h1>
        <p style={subtitleStyle}>Class and Club in one experience</p>
      </header>

      {/* view switcher */}
      <div style={tabsRow}>
        <button
          style={{ ...tabButton, ...(view === "student" ? activeTab : {}) }}
          onClick={() => setView("student")}
        >
          Student view
        </button>
        <button
          style={{ ...tabButton, ...(view === "instructor" ? activeTab : {}) }}
          onClick={() => setView("instructor")}
        >
          Instructor view
        </button>
        <button
          style={{ ...tabButton, ...(view === "club" ? activeTab : {}) }}
          onClick={() => setView("club")}
        >
          Club officer view
        </button>
      </div>

      {view === "student" && <StudentView />}
      {view === "instructor" && <InstructorView />}
      {view === "club" && <ClubView />}

      <div
        style={{
          textAlign: "center",
          fontSize: "0.75rem",
          color: "#9ca3af",
          marginTop: "1rem",
        }}
      >
        Prototype only. No real data is stored.
      </div>
    </div>
  );
}

/* student experience */
function StudentView() {
  return (
    <div>
      <section style={cardStyle}>
        <h2 style={cardTitle}>Weekly Challenges</h2>
        <p style={cardText}>
          View examples of Do Hard Things challenges. You control how much of
          your own work is visible.
        </p>
        <div>
          <span style={pill}>Cold outreach to a mentor</span>
          <span style={pill}>Early morning workout streak</span>
          <span style={pill}>Public speaking rep</span>
          <span style={{ ...pill, background: "#f3f4f6", color: "#6b7280" }}>
            plus more
          </span>
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <button style={buttonStyle}>View challenge board</button>
        </div>
      </section>

      <section style={cardStyle}>
        <h2 style={cardTitle}>Submit Challenge</h2>
        <p style={cardText}>
          Log this week&apos;s Do Hard Thing and choose who can see it.
        </p>
        <input
          placeholder="Reflection or link to photo"
          style={inputStyle}
        />
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            fontSize: "0.8rem",
            color: "#374151",
            marginBottom: "0.75rem",
          }}
        >
          <input type="checkbox" />
          Private submission to instructor
        </label>
        <button style={buttonStyle}>Submit</button>
        <button style={secondaryButton}>Save as draft</button>
      </section>

      <section style={cardStyle}>
        <h2 style={cardTitle}>Your engagement snapshot</h2>
        <p style={cardText}>
          Simple example of how your involvement might be tracked.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={metricCard}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>3</p>
            <p style={{ fontSize: ".8rem", color: "#4b5563" }}>
              Challenges completed this month
            </p>
          </div>
          <div style={metricCard}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>2</p>
            <p style={{ fontSize: ".8rem", color: "#4b5563" }}>
              Events attended
            </p>
          </div>
          <div style={metricCard}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>5</p>
            <p style={{ fontSize: ".8rem", color: "#4b5563" }}>
              Day streak of intentional actions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* instructor experience */
function InstructorView() {
  const fakeRows = [
    { name: "Alex", challenge: "Cold outreach", status: "On time", late: "No" },
    { name: "Jordan", challenge: "Workout streak", status: "Submitted", late: "Yes" },
    { name: "Taylor", challenge: "Public speaking", status: "Missing", late: "n/a" },
  ];

  return (
    <div>
      <section style={cardStyle}>
        <h2 style={cardTitle}>Section overview</h2>
        <p style={cardText}>
          High level snapshot of this week&apos;s challenge submissions.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <div style={metricCard}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>24</p>
            <p style={{ fontSize: ".8rem", color: "#4b5563" }}>On time</p>
          </div>
          <div style={metricCard}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>3</p>
            <p style={{ fontSize: ".8rem", color: "#4b5563" }}>Late</p>
          </div>
          <div style={metricCard}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>2</p>
            <p style={{ fontSize: ".8rem", color: "#4b5563" }}>Missing</p>
          </div>
        </div>
      </section>

      <section style={cardStyle}>
        <h2 style={cardTitle}>Student submissions</h2>
        <p style={cardText}>
          Example of how Andrea could see all of a student&apos;s work in one place.
        </p>

        <div
          style={{
            overflowX: "auto",
            borderRadius: "0.5rem",
            border: "1px solid #e5e7eb",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.85rem",
            }}
          >
            <thead style={{ background: "#f9fafb" }}>
              <tr>
                <th style={thCell}>Student</th>
                <th style={thCell}>Challenge</th>
                <th style={thCell}>Status</th>
                <th style={thCell}>Late</th>
              </tr>
            </thead>
            <tbody>
              {fakeRows.map((row) => (
                <tr key={row.name}>
                  <td style={tdCell}>{row.name}</td>
                  <td style={tdCell}>{row.challenge}</td>
                  <td style={tdCell}>{row.status}</td>
                  <td style={tdCell}>{row.late}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "0.75rem" }}>
          <button style={buttonStyle}>Open full dashboard</button>
          <button style={secondaryButton}>Export CSV</button>
        </div>
      </section>
    </div>
  );
}

/* club officer experience */
function ClubView() {
  return (
    <div>
      <section style={cardStyle}>
        <h2 style={cardTitle}>Upcoming events</h2>
        <p style={cardText}>
          Central hub for meetings, workshops, and community challenge days.
        </p>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 0,
            margin: "0 0 0.75rem 0",
            fontSize: "0.85rem",
          }}
        >
          <li style={{ marginBottom: "0.35rem" }}>
            <strong>Wed</strong> - Do Hard Things kickoff circle
          </li>
          <li style={{ marginBottom: "0.35rem" }}>
            <strong>Thu</strong> - Intentional habits workshop
          </li>
          <li>
            <strong>Sat</strong> - Community challenge day
          </li>
        </ul>
        <button style={buttonStyle}>View all events</button>
        <button style={secondaryButton}>Download attendance list</button>
      </section>

      <section style={cardStyle}>
        <h2 style={cardTitle}>Engagement scoring</h2>
        <p style={cardText}>
          Simple example of a points model for events, challenges, and streaks.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={metricCard}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>120</p>
            <p style={{ fontSize: ".8rem", color: "#4b5563" }}>Event points</p>
          </div>
          <div style={metricCard}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>80</p>
            <p style={{ fontSize: ".8rem", color: "#4b5563" }}>
              Challenge points
            </p>
          </div>
          <div style={metricCard}>
            <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>45</p>
            <p style={{ fontSize: ".8rem", color: "#4b5563" }}>Streaks</p>
          </div>
        </div>
      </section>

      <section style={cardStyle}>
        <h2 style={cardTitle}>Communication and content</h2>
        <p style={cardText}>
          One place to send announcements, prompts, and educational content to the club.
        </p>
        <div>
          <span style={pill}>Weekly prompt</span>
          <span style={pill}>Short video lesson</span>
          <span style={pill}>Reflection template</span>
        </div>
        <div style={{ marginTop: "0.75rem" }}>
          <button style={buttonStyle}>Open club feed</button>
          <button style={secondaryButton}>See past prompts</button>
        </div>
      </section>
    </div>
  );
}

const thCell = {
  textAlign: "left",
  padding: "0.5rem 0.75rem",
  borderBottom: "1px solid #e5e7eb",
  fontWeight: 600,
};

const tdCell = {
  padding: "0.5rem 0.75rem",
  borderBottom: "1px solid #f3f4f6",
};

export default App;
