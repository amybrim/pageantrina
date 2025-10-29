import { useState } from "react";

export default function ConfidencePage() {
  const [level, setLevel] = useState(70);

  return (
    <>
      <h1>🌸 Confidence Studio</h1>
      <p>Adjust your confidence meter and write a quick reflection below.</p>

      <div className="card">
        <label>Confidence Level: {level}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <textarea placeholder="Write your reflection or affirmation here..."></textarea>
        <button onClick={() => alert("Saved!")}>Save</button>
      </div>
    </>
  );
}
