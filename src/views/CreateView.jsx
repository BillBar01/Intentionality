import React, { useState } from "react";

function CreateView({
  challenges,
  selectedChallengeId,
  onChangeSelectedChallenge,
  onSubmit,
}) {
  const [visibility, setVisibility] = useState("public");
  const [isAssignment, setIsAssignment] = useState(false);
  const [text, setText] = useState("");
  const [imageName, setImageName] = useState("");
  const [videoName, setVideoName] = useState("");
  const [audioName, setAudioName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedChallengeId) {
      alert("Please select a challenge first.");
      return;
    }

    onSubmit({
      challengeId: selectedChallengeId,
      visibility,
      isAssignment,
      text,
      attachments: {
        imageName,
        videoName,
        audioName,
      },
    });

    // reset for next time
    setText("");
    setIsAssignment(false);
    setVisibility("public");
    setImageName("");
    setVideoName("");
    setAudioName("");
  }

  function handleFileChange(e, setName) {
    const file = e.target.files?.[0];
    setName(file ? file.name : "");
  }

  return (
    <div>
      <h2 className="section-title">Create post</h2>
      <p className="section-subtitle">
        Turn a challenge or assignment into a reflection. You can attach a
        photo, video, or audio note as part of the full experience.
      </p>

      <form
        onSubmit={handleSubmit}
        className="feed-card"
        style={{ maxWidth: "640px" }}
      >
        {/* challenge picker */}
        <div style={{ marginBottom: "0.75rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.75rem",
              color: "#9ca3af",
              marginBottom: "0.2rem",
            }}
          >
            Challenge
          </label>
          <select
            value={selectedChallengeId}
            onChange={(e) => onChangeSelectedChallenge(e.target.value)}
            style={{
              width: "100%",
              padding: "0.4rem 0.55rem",
              borderRadius: "0.55rem",
              border: "1px solid rgba(75,85,99,0.9)",
              background: "rgba(15,23,42,0.9)",
              color: "#e5e7eb",
              fontSize: "0.8rem",
            }}
          >
            {challenges.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title} · {c.points} pts
              </option>
            ))}
          </select>
        </div>

        {/* visibility */}
        <div style={{ marginBottom: "0.75rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.75rem",
              color: "#9ca3af",
              marginBottom: "0.2rem",
            }}
          >
            Visibility
          </label>
          <select
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
            style={{
              width: "100%",
              padding: "0.4rem 0.55rem",
              borderRadius: "0.55rem",
              border: "1px solid rgba(75,85,99,0.9)",
              background: "rgba(15,23,42,0.9)",
              color: "#e5e7eb",
              fontSize: "0.8rem",
            }}
          >
            <option value="public">Public on platform</option>
            <option value="class_only">Class only</option>
            <option value="private">Private to admin / instructor</option>
          </select>
        </div>

        {/* assignment checkbox */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "0.75rem",
            fontSize: "0.75rem",
            color: "#9ca3af",
          }}
        >
          <input
            id="assignment-check"
            type="checkbox"
            checked={isAssignment}
            onChange={(e) => setIsAssignment(e.target.checked)}
            style={{ width: "0.85rem", height: "0.85rem" }}
          />
          <label htmlFor="assignment-check">
            This is a class assignment submission
          </label>
        </div>

        {/* reflection text */}
        <div style={{ marginBottom: "0.75rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.75rem",
              color: "#9ca3af",
              marginBottom: "0.2rem",
            }}
          >
            Reflection
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What did you do and what did you learn?"
            style={{
              width: "100%",
              minHeight: "90px",
              padding: "0.45rem 0.55rem",
              borderRadius: "0.6rem",
              border: "1px solid rgba(75,85,99,0.9)",
              background: "rgba(15,23,42,0.9)",
              color: "#e5e7eb",
              fontSize: "0.8rem",
              resize: "vertical",
            }}
          />
        </div>

        {/* attachments */}
        <div style={{ marginBottom: "0.75rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "0.75rem",
              color: "#9ca3af",
              marginBottom: "0.2rem",
            }}
          >
            Attachments
          </label>
          <div style={{ display: "grid", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.75rem", color: "#d1d5db" }}>
              Photo
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setImageName)}
                style={{
                  display: "block",
                  marginTop: "0.15rem",
                  fontSize: "0.7rem",
                }}
              />
              {imageName && (
                <span style={{ fontSize: "0.7rem", color: "#9ca3af" }}>
                  Selected: {imageName}
                </span>
              )}
            </label>
            <label style={{ fontSize: "0.75rem", color: "#d1d5db" }}>
              Video
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange(e, setVideoName)}
                style={{
                  display: "block",
                  marginTop: "0.15rem",
                  fontSize: "0.7rem",
                }}
              />
              {videoName && (
                <span style={{ fontSize: "0.7rem", color: "#9ca3af" }}>
                  Selected: {videoName}
                </span>
              )}
            </label>
            <label style={{ fontSize: "0.75rem", color: "#d1d5db" }}>
              Audio
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => handleFileChange(e, setAudioName)}
                style={{
                  display: "block",
                  marginTop: "0.15rem",
                  fontSize: "0.7rem",
                }}
              />
              {audioName && (
                <span style={{ fontSize: "0.7rem", color: "#9ca3af" }}>
                  Selected: {audioName}
                </span>
              )}
            </label>
          </div>
          <p
            style={{
              fontSize: "0.7rem",
              color: "#6b7280",
              marginTop: "0.4rem",
              marginBottom: 0,
            }}
          >
            In this prototype we only track the selected file names. In a full
            app these files would upload to storage and be viewable in the Home
            feed.
          </p>
        </div>

        {/* actions */}
        <div>
          <button type="submit" className="primary-btn">
            Submit post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateView;
