import "./App.css";

function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", padding: "1.5rem" }}>
      <header style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Intentionality Platform
        </h1>
        <p style={{ color: "#4b5563" }}>Class and Club in one experience</p>
      </header>

      {/* Weekly Challenges */}
      <section style={cardStyle}>
        <h2 style={cardTitle}>Weekly Challenges</h2>
        <p style={cardText}>
          View examples of Do Hard Things challenges. Students can keep submissions private.
        </p>
        <button style={buttonStyle}>View Challenges</button>
      </section>

      {/* Submit Challenge */}
      <section style={cardStyle}>
        <h2 style={cardTitle}>Submit Challenge</h2>
        <input placeholder="Reflection or link to photo" style={inputStyle} />
        <label style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <input type="checkbox" />
          Private submission
        </label>
        <button style={buttonStyle}>Submit</button>
      </section>

      {/* Instructor Dashboard */}
      <section style={cardStyle}>
        <h2 style={cardTitle}>Instructor Dashboard</h2>
        <p style={cardText}>View all submissions by student and see late work automatically flagged.</p>
        <button style={buttonStyle}>Open Dashboard</button>
      </section>

      {/* Club Events */}
      <section style={cardStyle}>
        <h2 style={cardTitle}>Club Events</h2>
        <p style={cardText}>Central hub for events, attendance, and communication.</p>
        <button style={buttonStyle}>View Events</button>
      </section>

      {/* Engagement Points */}
      <section style={cardStyle}>
        <h2 style={cardTitle}>Engagement Points</h2>
        <div style={{ display: "flex", justifyContent: "space-between", textAlign: "center" }}>
          {[
            { label: "Challenges", value: 8 },
            { label: "Events", value: 5 },
            { label: "Rewards", value: 2 },
          ].map((item) => (
            <div key={item.label} style={metricCard}>
              <p style={{ fontSize: "1.5rem", fontWeight: 700 }}>{item.value}</p>
              <p style={{ fontSize: ".8rem", color: "#4b5563" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

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
  marginBottom: ".5rem",
};

const cardText = {
  fontSize: ".9rem",
  color: "#4b5563",
  marginBottom: ".75rem",
};

const buttonStyle = {
  padding: ".5rem 1rem",
  borderRadius: "9999px",
  border: "none",
  background: "#2563eb",
  color: "white",
  fontWeight: 500,
  cursor: "pointer",
};

const inputStyle = {
  padding: ".5rem .75rem",
  borderRadius: ".5rem",
  border: "1px solid #d1d5db",
  width: "100%",
  marginBottom: ".75rem",
};

const metricCard = {
  flex: 1,
  margin: ".25rem",
  padding: "1rem",
  background: "#f9fafb",
  borderRadius: ".75rem",
};

export default App;
