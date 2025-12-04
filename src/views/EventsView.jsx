import React from "react";

function EventsView({ events, onCheckIn }) {
  return (
    <div>
      <h2 className="section-title">Events</h2>
      <p className="section-subtitle">
        Upcoming sessions, meetups, and workshops. Checking in at an event can
        earn engagement points in the full app.
      </p>

      <div style={{ display: "grid", gap: "0.7rem", maxWidth: "720px" }}>
        {events.map((event) => (
          <section key={event.id} className="feed-card">
            <div className="feed-header">
              <div>
                <div className="feed-user">{event.title}</div>
                <div className="feed-meta">
                  {event.dateLabel} · {event.timeLabel} · {event.location}
                </div>
              </div>
              <span className="feed-badge feed-badge-event">
                {event.points} pts
              </span>
            </div>

            <p className="feed-text" style={{ marginBottom: "0.4rem" }}>
              {event.description}
            </p>

            <div className="feed-meta" style={{ marginBottom: "0.4rem" }}>
              Type: {event.category} · Host: {event.host}
            </div>

            <button
              type="button"
              className="primary-btn"
              onClick={() => onCheckIn(event.id)}
            >
              Check in to this event
            </button>
            <p className="side-footer">
              Prototype only: this button just simulates a check in. In the full
              app, it would log attendance, award points, and show up on your
              profile.
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default EventsView;
