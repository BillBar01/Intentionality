import React from "react";

function HomeFeed({ posts }) {
  return (
    <div className="feed-layout">
      {/* main feed column */}
      <div className="feed-column">
        <h2 className="section-title">Home feed</h2>
        <p className="section-subtitle">
          Mix of challenge posts, event check ins, milestones, and instructor
          updates. New posts you create will appear at the top.
        </p>

        <div className="feed-list">
          {posts.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* right side summary column */}
      <aside className="side-column">
        <div className="side-card">
          <h3 className="side-title">This week&apos;s challenge</h3>
          <p className="side-text">
            Do one thing that feels uncomfortable but aligned with your values.
            Share a short reflection and optionally a photo, video, or audio
            note.
          </p>
          <button className="primary-btn">Create post for this challenge</button>
        </div>

        <div className="side-card">
          <h3 className="side-title">Your engagement snapshot</h3>
          <p className="side-metric">
            <span className="side-metric-value">120</span>
            <span className="side-metric-label">Total points</span>
          </p>
          <div className="side-metric-row">
            <div className="side-metric-box">
              <span className="side-metric-value small">80</span>
              <span className="side-metric-label small">Challenges</span>
            </div>
            <div className="side-metric-box">
              <span className="side-metric-value small">40</span>
              <span className="side-metric-label small">Events</span>
            </div>
          </div>
          <p className="side-footer">
            In the full app this would be live data pulled from your challenge
            posts and event check ins.
          </p>
        </div>
      </aside>
    </div>
  );
}

function FeedItem({ item }) {
  const badge = getBadgeForType(item.type);

  return (
    <article className="feed-item">
      <div className="feed-timeline">
        <div className="feed-dot" />
        <div className="feed-line" />
      </div>
      <div className="feed-card">
        <div className="feed-header">
          <div>
            <div className="feed-user">{item.userName}</div>
            <div className="feed-meta">{item.time}</div>
          </div>
          <span className={`feed-badge feed-badge-${badge.variant}`}>
            {badge.label}
          </span>
        </div>

        {item.challengeTitle && (
          <div className="feed-tag">{item.challengeTitle}</div>
        )}
        {item.eventTitle && (
          <div className="feed-tag">Event · {item.eventTitle}</div>
        )}
        {item.milestone && (
          <div className="feed-tag">Milestone · {item.milestone}</div>
        )}
        {item.type === "assignment_submission" && (
          <div className="feed-tag">Assignment submission</div>
        )}

        <p className="feed-text">{item.text}</p>

        {item.attachments && (
          <div className="feed-attachments">
            {item.attachments.imageName && (
              <span className="attachment-pill">
                📷 Photo: {item.attachments.imageName}
              </span>
            )}
            {item.attachments.videoName && (
              <span className="attachment-pill">
                🎥 Video: {item.attachments.videoName}
              </span>
            )}
            {item.attachments.audioName && (
              <span className="attachment-pill">
                🎙️ Audio: {item.attachments.audioName}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function getBadgeForType(type) {
  switch (type) {
    case "challenge_post":
      return { label: "Challenge post", variant: "challenge" };
    case "event_attendance":
      return { label: "Event check in", variant: "event" };
    case "milestone":
      return { label: "Milestone", variant: "milestone" };
    case "assignment_submission":
      return { label: "Assignment", variant: "announcement" };
    case "announcement":
    default:
      return { label: "Announcement", variant: "announcement" };
  }
}

export default HomeFeed;
