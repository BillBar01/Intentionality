import React from "react";

const SAMPLE_MEMBERS = [
  {
    id: "u1",
    name: "Alex Rivera",
    role: "Current class",
    extra: "Business major · Psychology minor",
    points: 180,
    tags: ["Challenges 7", "Events 4"],
  },
  {
    id: "u2",
    name: "Jordan Lee",
    role: "Club member",
    extra: "Computer Science · Alumni of class",
    points: 210,
    tags: ["Officer", "Events 6"],
  },
  {
    id: "u3",
    name: "Taylor Morgan",
    role: "Alumni",
    extra: "Graduated 2024 · Mentor",
    points: 260,
    tags: ["Mentor", "Challenges 9"],
  },
  {
    id: "u4",
    name: "Andrea (instructor)",
    role: "Instructor",
    extra: "Faculty lead for Intentionality",
    points: null,
    tags: ["Instructor"],
  },
];

function MembersView() {
  return (
    <div>
      <h2 className="section-title">Members</h2>
      <p className="section-subtitle">
        Students, alumni, club members, and instructors in this Intentionality
        space.
      </p>

      <div className="members-grid">
        {SAMPLE_MEMBERS.map((member) => (
          <section key={member.id} className="feed-card member-card">
            <div className="member-header">
              <div className="member-avatar">
                {member.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <div>
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
                <div className="member-extra">{member.extra}</div>
              </div>
            </div>

            <div className="member-tags">
              {member.tags.map((tag) => (
                <span key={tag} className="member-tag">
                  {tag}
                </span>
              ))}
            </div>

            {member.points != null && (
              <div className="member-points">
                <span className="member-points-label">Engagement points</span>
                <span className="member-points-value">{member.points}</span>
              </div>
            )}

            <p className="side-footer">
              In the full app, this directory would support filters by role,
              class section, and engagement plus profile pages for each member.
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default MembersView;
