// src/views/ChallengesView.jsx

import React from "react";

function ChallengesView({ challenges, onStartPostForChallenge }) {
  const [current, ...others] = challenges;

  return (
    <div>
      <h2 className="section-title">Challenges</h2>
      <p className="section-subtitle">
        Weekly prompts and club challenges that can turn into posts, assignment
        submissions, and rewards.
      </p>

      {/* current or featured challenge */}
      <section className="feed-card" style={{ marginBottom: "0.8rem" }}>
        <div className="feed-header">
          <div>
            <div className="feed-user">This week's challenge</div>
            <div className="feed-meta">
              {current.audience} · worth {current.points} points
            </div>
          </div>
          <span className="feed-badge feed-badge-challenge">Weekly</span>
        </div>
        <div className="feed-tag">{current.title}</div>
        <p className="feed-text">{current.summary}</p>
        <button
          type="button"
          className="primary-btn"
          onClick={() => onStartPostForChallenge(current.id)}
        >
          Create post for this challenge
        </button>
        <p className="side-footer">
          In the full app this would link directly into the Create screen with
          this challenge preselected and the correct assignment options.
        </p>
      </section>

      {/* other challenges */}
      <section className="side-card">
        <h3 className="side-title">Other challenges</h3>
        <p className="side-text">
          Examples of additional prompts that might run through the semester or
          in the club.
        </p>

        {others.map((c) => (
          <div key={c.id} style={{ marginBottom: "0.55rem" }}>
            <div className="feed-tag">{c.title}</div>
            <div className="feed-meta">
              {c.audience} · worth {c.points} points
            </div>
            <p className="side-text" style={{ marginTop: "0.2rem" }}>
              {c.summary}
            </p>
            <button
              type="button"
              className="primary-btn"
              style={{ marginTop: "0.25rem" }}
              onClick={() => onStartPostForChallenge(c.id)}
            >
              Use this challenge
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ChallengesView;
