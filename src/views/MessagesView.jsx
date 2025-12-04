import React from "react";

const SAMPLE_THREADS = [
  {
    id: "t1",
    name: "Class cohort chat",
    lastMessage: "What are people doing for the Week 3 challenge?",
    lastTime: "Today · 3:20 pm",
  },
  {
    id: "t2",
    name: "Club announcements",
    lastMessage: "Reminder - morning workout meetup this Saturday.",
    lastTime: "Today · 9:05 am",
  },
  {
    id: "t3",
    name: "DM with Andrea",
    lastMessage: "Happy to chat more during office hours.",
    lastTime: "Yesterday",
  },
];

const SAMPLE_MESSAGES = [
  {
    id: "m1",
    from: "You",
    text: "Anyone want to partner up for the social risk challenge this week?",
    time: "3:12 pm",
  },
  {
    id: "m2",
    from: "Alex",
    text: "I am in. Thinking about going to office hours for the first time.",
    time: "3:15 pm",
  },
  {
    id: "m3",
    from: "Jordan",
    text: "Same. Also might try starting a conversation at the workshop event.",
    time: "3:18 pm",
  },
];

function MessagesView() {
  return (
    <div className="messages-layout">
      {/* left column - thread list */}
      <section className="messages-threads">
        <h2 className="section-title">Messages</h2>
        <p className="section-subtitle">
          Group chats for the class and club plus direct messages with
          instructors and members.
        </p>

        <div className="thread-list">
          {SAMPLE_THREADS.map((thread) => (
            <button key={thread.id} type="button" className="thread-item">
              <div className="thread-avatar">
                {thread.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <div className="thread-text">
                <div className="thread-name">{thread.name}</div>
                <div className="thread-preview">{thread.lastMessage}</div>
              </div>
              <div className="thread-time">{thread.lastTime}</div>
            </button>
          ))}
        </div>
      </section>

      {/* right column - active chat */}
      <section className="messages-chat">
        <div className="feed-card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <div className="feed-header" style={{ marginBottom: "0.6rem" }}>
            <div>
              <div className="feed-user">Class cohort chat</div>
              <div className="feed-meta">
                24 members · example of what a group chat could look like
              </div>
            </div>
          </div>

          <div className="chat-messages">
            {SAMPLE_MESSAGES.map((msg) => (
              <div
                key={msg.id}
                className={
                  "chat-bubble " + (msg.from === "You" ? "chat-bubble-self" : "")
                }
              >
                <div className="chat-meta">
                  <span className="chat-from">{msg.from}</span>
                  <span className="chat-time">{msg.time}</span>
                </div>
                <div className="chat-text">{msg.text}</div>
              </div>
            ))}
          </div>

          <div className="chat-input-row">
            <input
              type="text"
              placeholder="Prototype only - message input is static"
              className="chat-input"
              disabled
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MessagesView;
