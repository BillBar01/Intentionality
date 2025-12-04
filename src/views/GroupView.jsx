import React from "react";

function GroupView({ leaderboard, groupStats, onOpenAdmin }) {
  return (
    <div className="group-layout">
      {/* left column: group overview + leaderboard */}
      <div className="group-main-column">
        {/* group overview */}
        <section className="feed-card group-overview-card">
          <div className="feed-header">
            <div>
              <div className="feed-user">Intentionality group overview</div>
              <div className="feed-meta">
                Snapshot of members, activity, and rewards for this space.
              </div>
            </div>
            <span className="feed-badge feed-badge-milestone">
              Rewards overview
            </span>
          </div>

          <div className="group-metrics-row">
            <div className="group-metric">
              <div className="group-metric-label">Total members</div>
              <div className="group-metric-value">
                {groupStats.totalMembers}
              </div>
            </div>
            <div className="group-metric">
              <div className="group-metric-label">Active this week</div>
              <div className="group-metric-value">
                {groupStats.activeThisWeek}
              </div>
            </div>
            <div className="group-metric">
              <div className="group-metric-label">Posts this week</div>
              <div className="group-metric-value">
                {groupStats.postsThisWeek}
              </div>
            </div>
            <div className="group-metric">
              <div className="group-metric-label">Points awarded total</div>
              <div className="group-metric-value">
                {groupStats.totalPointsAwarded}
              </div>
            </div>
          </div>

          <p className="side-footer">
            In the full app, these numbers would be calculated from challenge
            submissions, event check ins, and other engagement signals for this
            group.
          </p>
        </section>

        {/* leaderboard */}
        <section className="feed-card">
          <div className="feed-header">
            <div>
              <div className="feed-user">Leaderboard</div>
              <div className="feed-meta">
                Top members by engagement points from challenges and events.
              </div>
            </div>
            <span className="feed-badge feed-badge-event">Rewards</span>
          </div>

          <div className="leaderboard-table-wrapper">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Member</th>
                  <th>Role</th>
                  <th>Points</th>
                  <th>Challenges</th>
                  <th>Events</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.name}</td>
                    <td>{row.role}</td>
                    <td>{row.points}</td>
                    <td>{row.challenges}</td>
                    <td>{row.events}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="side-footer">
            You could toggle between all time, this semester, or this month.
            Rewards could map to physical items, recognition, or privileges in
            the group.
          </p>
        </section>
      </div>

      {/* right column: admin tools */}
      <aside className="group-side-column">
        <section className="side-card">
          <h3 className="side-title">Admin and settings</h3>
          <p className="side-text">
            Space for instructors and club officers to configure rewards,
            manage members, and export data for grading or reporting.
          </p>

          <ul className="group-admin-list">
            <li>Configure challenge points and event values</li>
            <li>See per member submissions and late work</li>
            <li>Export data for LMS or grading spreadsheets</li>
            <li>Adjust roles (student, alumni, officer, instructor)</li>
          </ul>

          <button type="button" className="primary-btn" onClick={onOpenAdmin}>
            Open admin tools (prototype)
          </button>

          <p className="side-footer">
            In the full version, this button would open a dedicated admin view
            with filters by student, assignment, and week plus CSV exports.
          </p>
        </section>
      </aside>
    </div>
  );
}

export default GroupView;
