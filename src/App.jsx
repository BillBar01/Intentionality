import { useState } from "react";
import "./App.css";

const rootStyle = {
  minHeight: "100vh",
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "radial-gradient(circle at top, #1d4ed8 0, #020617 55%)",
  padding: "1.5rem",
  fontFamily:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const appShell = {
  width: "100%",
  maxWidth: "420px",
  height: "720px",
  background: "#020617",
  borderRadius: "2rem",
  boxShadow: "0 24px 60px rgba(15,23,42,0.8)",
  border: "1px solid rgba(148,163,184,0.4)",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const headerStyle = {
  padding: "0.9rem 1.2rem 0.6rem",
  background:
    "linear-gradient(135deg, rgba(59,130,246,1), rgba(129,140,248,1))",
  color: "white",
};

const topLine = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "0.4rem",
};

const appTitle = {
  fontSize: "1.1rem",
  fontWeight: 700,
};

const smallLabel = {
  fontSize: "0.7rem",
  opacity: 0.9,
};

const pointsRow = {
  display: "flex",
  gap: "0.5rem",
  marginTop: "0.4rem",
};

const pointsPill = {
  flex: 1,
  padding: "0.35rem 0.55rem",
  borderRadius: "999px",
  background: "rgba(15,23,42,0.25)",
  border: "1px solid rgba(15,23,42,0.35)",
  fontSize: "0.7rem",
  display: "flex",
  flexDirection: "column",
};

const pointsValue = {
  fontWeight: 600,
  fontSize: "0.8rem",
};

const pointsCaption = {
  fontSize: "0.65rem",
  opacity: 0.85,
};

const subHeader = {
  padding: "0.5rem 0.9rem 0.45rem",
  background: "rgba(15,23,42,0.96)",
  borderTop: "1px solid rgba(15,23,42,0.6)",
  borderBottom: "1px solid rgba(31,41,55,0.9)",
};

const subHeaderText = {
  fontSize: "0.7rem",
  color: "#9ca3af",
};

const contentArea = {
  flex: 1,
  background: "radial-gradient(circle at top, #111827 0, #020617 65%)",
  padding: "0.7rem 0.7rem 0.4rem",
  overflowY: "auto",
};

const bottomNav = {
  display: "flex",
  padding: "0.45rem 0.8rem 0.6rem",
  background: "rgba(15,23,42,0.98)",
  borderTop: "1px solid rgba(31,41,55,0.9)",
};

const navButtonBase = {
  flex: 1,
  borderRadius: "999px",
  border: "none",
  padding: "0.4rem 0.3rem",
  fontSize: "0.7rem",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.1rem",
  background: "transparent",
  color: "#9ca3af",
};

const navActive = {
  background: "#1d4ed8",
  color: "white",
};

const navIconCircle = (filled) => ({
  width: "0.55rem",
  height: "0.55rem",
  borderRadius: "999px",
  border: filled ? "none" : "1px solid currentColor",
  background: filled ? "currentColor" : "transparent",
});

const card = {
  background: "rgba(15,23,42,0.96)",
  borderRadius: "1rem",
  padding: "0.85rem 0.9rem",
  marginBottom: "0.7rem",
  border: "1px solid rgba(55,65,81,0.7)",
};

const cardTitle = {
  fontSize: "0.9rem",
  fontWeight: 600,
  marginBottom: "0.15rem",
  color: "#e5e7eb",
};

const cardMeta = {
  fontSize: "0.7rem",
  color: "#9ca3af",
  marginBottom: "0.4rem",
};

const cardText = {
  fontSize: "0.78rem",
  color: "#d1d5db",
  marginBottom: "0.4rem",
};

const badge = {
  fontSize: "0.7rem",
  padding: "0.15rem 0.5rem",
  borderRadius: "999px",
  background: "rgba(37,99,235,0.18)",
  color: "#bfdbfe",
  marginRight: "0.3rem",
};

const privateBadge = {
  ...badge,
  background: "rgba(148,163,184,0.2)",
  color: "#e5e7eb",
};

const buttonPrimary = {
  padding: "0.38rem 0.7rem",
  borderRadius: "999px",
  border: "none",
  background: "#2563eb",
  color: "white",
  fontSize: "0.75rem",
  fontWeight: 500,
  cursor: "pointer",
  marginRight: "0.35rem",
  marginTop: "0.15rem",
};

const buttonGhost = {
  ...buttonPrimary,
  background: "rgba(31,41,55,1)",
  border: "1px solid rgba(55,65,81,0.9)",
};

const input = {
  width: "100%",
  padding: "0.4rem 0.55rem",
  borderRadius: "0.6rem",
  border: "1px solid rgba(75,85,99,0.9)",
  background: "rgba(15,23,42,0.7)",
  color: "#e5e7eb",
  fontSize: "0.78rem",
  marginBottom: "0.45rem",
};

const textareaStyle = {
  ...input,
  minHeight: "70px",
  resize: "vertical",
};

const label = {
  fontSize: "0.7rem",
  color: "#9ca3af",
  marginBottom: "0.1rem",
  display: "block",
};

const select = {
  ...input,
  appearance: "none",
};

const checkboxRow = {
  display: "flex",
  alignItems: "center",
  gap: "0.35rem",
  fontSize: "0.7rem",
  color: "#9ca3af",
  marginBottom: "0.4rem",
};

const pill = {
  display: "inline-flex",
  alignItems: "center",
  padding: "0.2rem 0.55rem",
  borderRadius: "999px",
  fontSize: "0.7rem",
  background: "rgba(15,23,42,0.8)",
  border: "1px solid rgba(55,65,81,0.9)",
  color: "#e5e7eb",
  marginRight: "0.3rem",
  marginBottom: "0.25rem",
};

const smallHint = {
  fontSize: "0.65rem",
  color: "#6b7280",
  marginTop: "0.25rem",
};

const challengesSeed = [
  {
    id: "week3",
    title: "Week 3 Do Hard Thing",
    description: "Choose something uncomfortable that aligns with your values and do it once this week.",
    points: 20,
  },
  {
    id: "week4",
    title: "Week 4 Habit Streak",
    description: "Commit to a small habit and do it 4 days in a row.",
    points: 15,
  },
  {
    id: "club1",
    title: "Club challenge - Social risk",
    description: "Start a conversation or ask a question you would normally hold back.",
    points: 15,
  },
];

const eventsSeed = [
  {
    id: "ev1",
    title: "Kickoff circle",
    time: "Wed 7:00 pm",
    location: "Education Center",
    points: 10,
  },
  {
    id: "ev2",
    title: "Intentional habits workshop",
    time: "Thu 5:30 pm",
    location: "Room 204",
    points: 10,
  },
  {
    id: "ev3",
    title: "Community challenge day",
    time: "Sat 10:00 am",
    location: "Campus green",
    points: 20,
  },
];

const initialPosts = [
  {
    id: "p1",
    authorName: "Sample student",
    challengeId: "week3",
    visibility: "public",
    kind: "challenge_share",
    text: "Went to office hours for the first time and asked for feedback on my project.",
    createdAt: "Today",
  },
  {
    id: "p2",
    authorName: "Sample student",
    challengeId: "club1",
    visibility: "public",
    kind: "event_reflection",
    text: "Talked to two new people at the meetup instead of staying with my friends.",
    createdAt: "Yesterday",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [challenges] = useState(challengesSeed);
  const [events] = useState(eventsSeed);
  const [posts, setPosts] = useState(initialPosts);
  const [selectedChallengeId, setSelectedChallengeId] = useState(
    challengesSeed[0].id
  );
  const [engagement, setEngagement] = useState({
    total: 80,
    challengePoints: 50,
    eventPoints: 30,
    challengesCompleted: 3,
    eventsAttended: 2,
  });

  function getChallengeById(id) {
    return challenges.find((c) => c.id === id);
  }

  function handleCreatePost(formValues) {
    if (!formValues.challengeId) {
      alert("Please select a challenge first.");
      return;
    }

    const challenge = getChallengeById(formValues.challengeId);
    const pointsToAdd = challenge ? challenge.points : 0;

    const newPost = {
      id: "post-" + Date.now(),
      authorName: "You",
      challengeId: formValues.challengeId,
      visibility: formValues.visibility,
      kind: formValues.isAssignment ? "assignment_submission" : "challenge_share",
      text: formValues.text.trim() || "(No reflection text added)",
      createdAt: "Just now",
    };

    setPosts((prev) => [newPost, ...prev]);

    setEngagement((prev) => ({
      ...prev,
      total: prev.total + pointsToAdd,
      challengePoints: prev.challengePoints + pointsToAdd,
      challengesCompleted: prev.challengesCompleted + 1,
    }));

    setActiveTab("home");
  }

  function handleAttendEvent(eventId) {
    const event = events.find((e) => e.id === eventId);
    if (!event) return;

    const pointsToAdd = event.points || 0;

    setEngagement((prev) => ({
      ...prev,
      total: prev.total + pointsToAdd,
      eventPoints: prev.eventPoints + pointsToAdd,
      eventsAttended: prev.eventsAttended + 1,
    }));
  }

  function handleStartPostForChallenge(challengeId) {
    setSelectedChallengeId(challengeId);
    setActiveTab("create");
  }

  return (
    <div style={rootStyle}>
      <div style={appShell}>
        <header style={headerStyle}>
          <div style={topLine}>
            <div>
              <div style={smallLabel}>Intentionality</div>
              <div style={appTitle}>Student app</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={smallLabel}>Total points</div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>
                {engagement.total}
              </div>
            </div>
          </div>
          <div style={pointsRow}>
            <div style={pointsPill}>
              <span style={pointsValue}>{engagement.challengePoints}</span>
              <span style={pointsCaption}>From challenges</span>
            </div>
            <div style={pointsPill}>
              <span style={pointsValue}>{engagement.eventPoints}</span>
              <span style={pointsCaption}>From events</span>
            </div>
          </div>
        </header>

        <div style={subHeader}>
          <div style={subHeaderText}>
            Challenges completed: {engagement.challengesCompleted} · Events
            attended: {engagement.eventsAttended}
          </div>
        </div>

        <main style={contentArea}>
          {activeTab === "home" && (
            <HomeFeed posts={posts} getChallengeById={getChallengeById} />
          )}
          {activeTab === "events" && (
            <EventsView events={events} onAttend={handleAttendEvent} />
          )}
          {activeTab === "create" && (
            <CreateView
              challenges={challenges}
              selectedChallengeId={selectedChallengeId}
              onChangeChallenge={setSelectedChallengeId}
              onSubmit={handleCreatePost}
            />
          )}
          {activeTab === "messages" && <MessagesView />}
          {activeTab === "learn" && (
            <LearnView
              challenges={challenges}
              onStartPostForChallenge={handleStartPostForChallenge}
            />
          )}
        </main>

        <nav style={bottomNav}>
          <NavButton
            label="Home"
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          />
          <NavButton
            label="Events"
            active={activeTab === "events"}
            onClick={() => setActiveTab("events")}
          />
          <NavButton
            label="Create"
            active={activeTab === "create"}
            onClick={() => setActiveTab("create")}
          />
          <NavButton
            label="Messages"
            active={activeTab === "messages"}
            onClick={() => setActiveTab("messages")}
          />
          <NavButton
            label="Learn"
            active={activeTab === "learn"}
            onClick={() => setActiveTab("learn")}
          />
        </nav>
      </div>
    </div>
  );
}

function NavButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      style={{ ...navButtonBase, ...(active ? navActive : {}) }}
      onClick={onClick}
    >
      <span style={navIconCircle(active)}></span>
      <span>{label}</span>
    </button>
  );
}

function HomeFeed({ posts, getChallengeById }) {
  if (posts.length === 0) {
    return (
      <div style={card}>
        <div style={cardTitle}>No posts yet</div>
        <p style={cardText}>
          Create a post for this week&apos;s challenge and it will show up here
          in your feed.
        </p>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => {
        const challenge = getChallengeById(post.challengeId);
        return (
          <article key={post.id} style={card}>
            <div style={cardMeta}>
              <strong>{post.authorName}</strong>{" "}
              <span style={{ opacity: 0.8 }}>· {post.createdAt}</span>
            </div>
            {challenge && (
              <div style={{ marginBottom: "0.25rem" }}>
                <span style={badge}>{challenge.title}</span>
                {post.kind === "assignment_submission" && (
                  <span style={badge}>Assignment</span>
                )}
                {post.visibility === "private" && (
                  <span style={privateBadge}>Private to admin</span>
                )}
              </div>
            )}
            <p style={cardText}>{post.text}</p>
          </article>
        );
      })}
    </>
  );
}

function EventsView({ events, onAttend }) {
  return (
    <>
      {events.map((event) => (
        <div key={event.id} style={card}>
          <div style={cardTitle}>{event.title}</div>
          <div style={cardMeta}>
            {event.time} · {event.location}
          </div>
          <p style={cardText}>
            Attending this event earns{" "}
            <strong>{event.points} engagement points.</strong>
          </p>
          <button
            type="button"
            style={buttonPrimary}
            onClick={() => onAttend(event.id)}
          >
            Check in
          </button>
          <span style={smallHint}>Prototype only - no real data stored.</span>
        </div>
      ))}
    </>
  );
}

function CreateView({
  challenges,
  selectedChallengeId,
  onChangeChallenge,
  onSubmit,
}) {
  const [visibility, setVisibility] = useState("public");
  const [isAssignment, setIsAssignment] = useState(false);
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      challengeId: selectedChallengeId,
      visibility,
      isAssignment,
      text,
    });
    setText("");
    setIsAssignment(false);
  }

  return (
    <form onSubmit={handleSubmit} style={card}>
      <div style={cardTitle}>Create post</div>
      <p style={cardText}>
        Pick a challenge, write your reflection, and choose who can see it.
      </p>

      <label style={label}>Challenge</label>
      <select
        value={selectedChallengeId}
        onChange={(e) => onChangeChallenge(e.target.value)}
        style={select}
      >
        {challenges.map((c) => (
          <option key={c.id} value={c.id}>
            {c.title}
          </option>
        ))}
      </select>

      <label style={label}>Visibility</label>
      <select
        value={visibility}
        onChange={(e) => setVisibility(e.target.value)}
        style={select}
      >
        <option value="public">Public on platform</option>
        <option value="class_only">Class only</option>
        <option value="private">Private to admin / instructor</option>
      </select>

      <div style={checkboxRow}>
        <input
          id="assignment-check"
          type="checkbox"
          checked={isAssignment}
          onChange={(e) => setIsAssignment(e.target.checked)}
          style={{ width: "0.8rem", height: "0.8rem" }}
        />
        <label htmlFor="assignment-check">
          This is a class assignment submission
        </label>
      </div>

      <label style={label}>Reflection</label>
      <textarea
        style={textareaStyle}
        placeholder="What did you do and what did you learn?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p style={smallHint}>
        Media uploads and real file storage would be handled in the full
        version. This prototype focuses on the flow.
      </p>

      <div style={{ marginTop: "0.4rem" }}>
        <button type="submit" style={buttonPrimary}>
          Submit
        </button>
        <button
          type="button"
          style={buttonGhost}
          onClick={() => setText("")}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

function MessagesView() {
  return (
    <>
      <div style={card}>
        <div style={cardTitle}>Group chat (prototype)</div>
        <p style={cardText}>
          In the full app, this tab would include group chats for your cohort
          and direct messages with instructors and club members.
        </p>
        <p style={cardText}>
          For now, imagine a channel like <strong>#do-hard-things</strong> where
          people share quick wins and ask for support.
        </p>
      </div>
      <div style={card}>
        <div style={cardMeta}>Sample messages</div>
        <p style={cardText}>
          <strong>Alex:</strong> Just finished my cold outreach challenge. Sent
          an email to a guest speaker from last semester.
        </p>
        <p style={cardText}>
          <strong>Jordan:</strong> Went to the workshop event - learned a new
          way to track habits that does not feel overwhelming.
        </p>
      </div>
    </>
  );
}

function LearnView({ challenges, onStartPostForChallenge }) {
  return (
    <>
      <div style={card}>
        <div style={cardTitle}>This week&apos;s challenge</div>
        <p style={cardText}>{challenges[0].description}</p>
        <button
          type="button"
          style={buttonPrimary}
          onClick={() => onStartPostForChallenge(challenges[0].id)}
        >
          Create post for this challenge
        </button>
      </div>

      <div style={card}>
        <div style={cardTitle}>Other challenges</div>
        <p style={cardText}>
          These are examples of additional prompts that might run through the
          semester or through the club.
        </p>
        {challenges.slice(1).map((c) => (
          <div key={c.id} style={{ marginBottom: "0.45rem" }}>
            <div style={cardMeta}>{c.title}</div>
            <div style={smallHint}>{c.description}</div>
            <button
              type="button"
              style={{ ...buttonGhost, marginTop: "0.3rem" }}
              onClick={() => onStartPostForChallenge(c.id)}
            >
              Use this challenge
            </button>
          </div>
        ))}
      </div>

      <div style={card}>
        <div style={cardTitle}>Education content</div>
        <p style={cardText}>
          In a later version, this section would list reading links, short
          videos, and class recordings.
        </p>
        <div>
          <span style={pill}>Reading list</span>
          <span style={pill}>Short video lesson</span>
          <span style={pill}>Reflection template</span>
        </div>
      </div>
    </>
  );
}

export default App;
