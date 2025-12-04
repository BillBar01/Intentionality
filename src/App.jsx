import { useState } from "react";
import "./App.css";
import HomeFeed from "./views/HomeFeed.jsx";
import ChallengesView from "./views/ChallengesView.jsx";
import CreateView from "./views/CreateView.jsx";
import EventsView from "./views/EventsView.jsx";
import MessagesView from "./views/MessagesView.jsx";
import MembersView from "./views/MembersView.jsx";
import GroupView from "./views/GroupView.jsx";
import ProfileView from "./views/ProfileView.jsx";

const TABS = [
  { key: "home", label: "Home" },
  { key: "challenges", label: "Challenges" },
  { key: "events", label: "Events" },
  { key: "create", label: "Create" },
  { key: "messages", label: "Messages" },
  { key: "members", label: "Members" },
  { key: "group", label: "Group" },
];

// sample challenge data for the prototype
const CHALLENGES = [
  {
    id: "week3",
    title: "Week 3 · Do Hard Thing",
    points: 20,
    audience: "Class and club",
    summary:
      "Choose one uncomfortable action that aligns with your values and do it this week.",
    type: "weekly",
  },
  {
    id: "week4",
    title: "Week 4 · Habit streak",
    points: 15,
    audience: "Class students",
    summary:
      "Commit to a small habit and execute it on at least four days this week.",
    type: "weekly",
  },
  {
    id: "club1",
    title: "Club challenge · Social risk",
    points: 15,
    audience: "Club members",
    summary:
      "Start a conversation or ask a question you would normally hold back.",
    type: "club",
  },
];

// sample event data for the prototype
const EVENTS = [
  {
    id: "ev1",
    title: "Kickoff circle",
    dateLabel: "Wed, Jan 15",
    timeLabel: "7:00 pm",
    location: "Education Center 201",
    points: 10,
    category: "Class + club",
    host: "Andrea + officers",
    description:
      "Opening circle for the semester. Set intentions, meet the group, and hear an overview of the first month of challenges.",
  },
  {
    id: "ev2",
    title: "Do Hard Things workshop",
    dateLabel: "Thu, Jan 23",
    timeLabel: "5:30 pm",
    location: "Room 204",
    points: 15,
    category: "Class",
    host: "Teaching team",
    description:
      "Interactive workshop on designing hard-but-healthy challenges. Includes reflection templates and small group practice.",
  },
  {
    id: "ev3",
    title: "Morning workout meetup",
    dateLabel: "Sat, Jan 27",
    timeLabel: "8:00 am",
    location: "Campus green",
    points: 10,
    category: "Club",
    host: "Student leaders",
    description:
      "Community workout loosely modeled after the Outsiders club: bodyweight movements, partner exercises, and high fives.",
  },
];

// initial posts for the Home feed
const SEED_POSTS = [
  {
    id: "p1",
    type: "challenge_post",
    userName: "Alex",
    time: "Today at 3:10 pm",
    challengeId: "week3",
    challengeTitle: "Week 3 · Do Hard Thing",
    visibility: "public",
    text: "Went to office hours for the first time and asked my professor for feedback on my project.",
    attachments: {},
  },
  {
    id: "p2",
    type: "event_attendance",
    userName: "Miles",
    time: "Today at 8:05 am",
    eventTitle: "Morning workout meetup",
    visibility: "public",
    text: "Checked in at the Outsiders style workout. First time showing up before 7 am.",
    attachments: {},
  },
  {
    id: "p3",
    type: "milestone",
    userName: "Kate",
    time: "Yesterday",
    milestone: "Completed 5 challenges",
    visibility: "class_only",
    text: "Earned the 5 challenges badge.",
    attachments: {},
  },
];

// sample leaderboard and group stats for the prototype
const LEADERBOARD = [
  {
    id: "u2",
    name: "Jordan Lee",
    role: "Club member",
    points: 210,
    challenges: 7,
    events: 6,
  },
  {
    id: "u3",
    name: "Taylor Morgan",
    role: "Alumni",
    points: 260,
    challenges: 9,
    events: 5,
  },
  {
    id: "u1",
    name: "Alex Rivera",
    role: "Current class",
    points: 180,
    challenges: 6,
    events: 4,
  },
];

const GROUP_STATS = {
  totalMembers: 48,
  activeThisWeek: 36,
  postsThisWeek: 92,
  totalPointsAwarded: 4200,
};

const INITIAL_PROFILE = {
  name: "Sample student",
  email: "student@example.edu",
  phone: "",
  major: "",
  minor: "",
  classStatus: "current_student", // current_student, past_student, alumni, none
  clubStatus: "club_member", // club_member, club_alumni, none
};

function getRoleLabel(profile) {
  const parts = [];

  switch (profile.classStatus) {
    case "current_student":
      parts.push("Current class");
      break;
    case "past_student":
      parts.push("Past class student");
      break;
    case "alumni":
      parts.push("Alumni of class");
      break;
    default:
      break;
  }

  switch (profile.clubStatus) {
    case "club_member":
      parts.push("Club member");
      break;
    case "club_alumni":
      parts.push("Club alumni");
      break;
    default:
      break;
  }

  if (parts.length === 0) {
    parts.push("Member");
  }

  return parts.join(" · ");
}

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedChallengeId, setSelectedChallengeId] = useState(
    CHALLENGES[0]?.id || ""
  );
  const [posts, setPosts] = useState(SEED_POSTS);
  const [profile, setProfile] = useState(INITIAL_PROFILE);

  const activeTabMeta = TABS.find((t) => t.key === activeTab);
  const roleLabel = getRoleLabel(profile);

  function handleStartPostForChallenge(challengeId) {
    setSelectedChallengeId(challengeId);
    setActiveTab("create");
  }

  function handleCreatePost(formValues) {
    const challenge = CHALLENGES.find(
      (c) => c.id === formValues.challengeId
    );

    const newPost = {
      id: Date.now().toString(),
      type: formValues.isAssignment
        ? "assignment_submission"
        : "challenge_post",
      userName: profile.name || "Sample student",
      time: "Just now",
      challengeId: formValues.challengeId,
      challengeTitle: challenge?.title,
      visibility: formValues.visibility,
      text: formValues.text,
      attachments: formValues.attachments,
    };

    setPosts((prev) => [newPost, ...prev]);
    setActiveTab("home");
  }

  function handleEventCheckIn(eventId) {
    const event = EVENTS.find((e) => e.id === eventId);
    alert(
      `Prototype only: checked in to "${event?.title}".\nIn the full app, this would log attendance and award ${event?.points} points.`
    );
  }

  function handleOpenAdminTools() {
    alert(
      "Prototype only: this would open an instructor / officer admin view.\nThere you could see per-student submissions, late work, and export data."
    );
  }

  const userInitials = (profile.name || "Student")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const postsForProfile = posts.filter(
    (p) => p.userName === profile.name
  );

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
        <div
          className="app-header-right"
          onClick={() => setActiveTab("profile")}
          style={{ cursor: "pointer" }}
          title="View profile"
        >
          <div className="app-user">
            <div className="app-user-avatar">{userInitials}</div>
            <div className="app-user-text">
              <div className="app-user-name">{profile.name}</div>
              <div className="app-user-role">{roleLabel}</div>
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
        {activeTab === "home" && <HomeFeed posts={posts} />}

        {activeTab === "profile" && (
          <ProfileView
            profile={profile}
            onChangeProfile={setProfile}
            posts={postsForProfile}
          />
        )}

        {activeTab === "challenges" && (
          <ChallengesView
            challenges={CHALLENGES}
            onStartPostForChallenge={handleStartPostForChallenge}
          />
        )}

        {activeTab === "create" && (
          <CreateView
            challenges={CHALLENGES}
            selectedChallengeId={selectedChallengeId}
            onChangeSelectedChallenge={setSelectedChallengeId}
            onSubmit={handleCreatePost}
          />
        )}

        {activeTab === "events" && (
          <EventsView events={EVENTS} onCheckIn={handleEventCheckIn} />
        )}

        {activeTab === "messages" && <MessagesView />}

        {activeTab === "members" && <MembersView />}

        {activeTab === "group" && (
          <GroupView
            leaderboard={LEADERBOARD}
            groupStats={GROUP_STATS}
            onOpenAdmin={handleOpenAdminTools}
          />
        )}

        {activeTab !== "home" &&
          activeTab !== "profile" &&
          activeTab !== "challenges" &&
          activeTab !== "create" &&
          activeTab !== "events" &&
          activeTab !== "messages" &&
          activeTab !== "members" &&
          activeTab !== "group" && (
            <div className="coming-soon">
              <h2>{activeTabMeta?.label} view coming soon</h2>
              <p>
                For now the Home, Profile, Challenges, Create, Events, Messages,
                Members, and Group views are the main prototypes. This tab will
                eventually show the{" "}
                {activeTabMeta?.label.toLowerCase()} features that map to Heylo
                and Intentionality.
              </p>
            </div>
          )}
      </main>
    </div>
  );
}

export default App;
