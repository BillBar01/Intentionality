import React from "react";

function ProfileView({ profile, onChangeProfile, posts }) {
  function handleFieldChange(field) {
    return (e) => {
      onChangeProfile({
        ...profile,
        [field]: e.target.value,
      });
    };
  }

  const totalPosts = posts.length;
  const challengePosts = posts.filter(
    (p) => p.type === "challenge_post" || p.type === "assignment_submission"
  ).length;
  const eventPosts = posts.filter(
    (p) => p.type === "event_attendance"
  ).length;

  // simple points estimate for prototype
  const estimatedPoints = challengePosts * 20 + eventPosts * 10;

  return (
    <div>
      <h2 className="section-title">Your profile</h2>
      <p className="section-subtitle">
        Basic information that shows up in the header, Home feed, and member
        views plus a dashboard of your activity.
      </p>

      <section
        className="feed-card"
        style={{ maxWidth: "720px", marginTop: "0.6rem" }}
      >
        <div style={{ display: "flex", gap: "0.8rem", marginBottom: "0.8rem" }}>
          <div className="member-avatar">
            {profile.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div>
            <div className="member-name" style={{ marginBottom: "0.15rem" }}>
              {profile.name || "Your name"}
            </div>
            <div className="member-role">
              This is how other members will see you in the app.
            </div>
          </div>
        </div>

        {/* dashboard row */}
        <div className="profile-dashboard">
          <div className="profile-stat">
            <div className="profile-stat-label">Total posts</div>
            <div className="profile-stat-value">{totalPosts}</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-label">Challenges</div>
            <div className="profile-stat-value">{challengePosts}</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-label">Events</div>
            <div className="profile-stat-value">{eventPosts}</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-label">Estimated points</div>
            <div className="profile-stat-value">{estimatedPoints}</div>
          </div>
        </div>

        {/* editable fields */}
        <div className="profile-grid" style={{ marginTop: "0.8rem" }}>
          <div className="profile-field">
            <label>Full name</label>
            <input
              type="text"
              value={profile.name}
              onChange={handleFieldChange("name")}
            />
          </div>
          <div className="profile-field">
            <label>Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={handleFieldChange("email")}
            />
          </div>
          <div className="profile-field">
            <label>Phone number</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={handleFieldChange("phone")}
            />
          </div>
          <div className="profile-field">
            <label>Major</label>
            <input
              type="text"
              value={profile.major}
              onChange={handleFieldChange("major")}
            />
          </div>
          <div className="profile-field">
            <label>Minor</label>
            <input
              type="text"
              value={profile.minor}
              onChange={handleFieldChange("minor")}
            />
          </div>
          <div className="profile-field">
            <label>Class status</label>
            <select
              value={profile.classStatus}
              onChange={handleFieldChange("classStatus")}
            >
              <option value="current_student">Current student in class</option>
              <option value="past_student">Took the class in the past</option>
              <option value="alumni">Alumni of the class</option>
              <option value="none">Not in the class</option>
            </select>
          </div>
          <div className="profile-field">
            <label>Club status</label>
            <select
              value={profile.clubStatus}
              onChange={handleFieldChange("clubStatus")}
            >
              <option value="club_member">Current club member</option>
              <option value="club_alumni">Club alumni</option>
              <option value="none">Not in the club</option>
            </select>
          </div>
        </div>

        <p className="side-footer" style={{ marginTop: "0.8rem" }}>
          In the full app, this profile would connect to attendance, challenge
          submissions, and a public member directory. For now it powers the
          header, your name on posts, and this dashboard.
        </p>
      </section>

      {/* post grid */}
      <section style={{ marginTop: "0.9rem" }}>
        <h3 className="side-title">Your posts</h3>
        <p className="side-text">
          Grid view of posts you have created. In a full app these tiles would
          open the full post with comments and media.
        </p>

        {posts.length === 0 ? (
          <p className="side-text" style={{ marginTop: "0.4rem" }}>
            You do not have any posts yet. Create something from the Home or
            Create tabs to see it here.
          </p>
        ) : (
          <div className="profile-post-grid">
            {posts.map((p) => (
              <div key={p.id} className="profile-post-tile">
                <div className="profile-post-type">
                  {p.type === "challenge_post" && "Challenge"}
                  {p.type === "assignment_submission" && "Assignment"}
                  {p.type === "event_attendance" && "Event"}
                  {p.type === "milestone" && "Milestone"}
                  {!p.type && "Post"}
                </div>
                {p.challengeTitle && (
                  <div className="profile-post-title">{p.challengeTitle}</div>
                )}
                {p.eventTitle && (
                  <div className="profile-post-title">{p.eventTitle}</div>
                )}
                {!p.challengeTitle && !p.eventTitle && p.milestone && (
                  <div className="profile-post-title">{p.milestone}</div>
                )}
                <div className="profile-post-snippet">{p.text}</div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default ProfileView;
