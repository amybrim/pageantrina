import Arena from "../components/Arena";

export default function Confidence() {
  return (
    <div className="stack-lg">
      <header className="page-header">
        <h1>Confidence Lab</h1>
        <p className="muted">
          Calm body. Clear breath. Confident voice. Let's build rituals that steady your nerves and center your presence.
        </p>
      </header>

      <div className="card">
        <Arena
          starterPrompt={`Coach a centering routine I can use backstage in 90 seconds. Include breath rhythm, posture cues, and a short mantra.`}
          placeholder={'Ask for: "A 3-step nerves reset before I walk in."'}
        />
      </div>
    </div>
  );
        <button onClick={() => alert("Saved!")}>Save</button>
      </div>
    </>
  );
}
