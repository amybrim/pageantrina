import { useState } from "react";

export default function VideoPage() {
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState("idle");
  const [videoUrl, setVideoUrl] = useState("");

  async function generate() {
    // Placeholder: wire this to your video API later.
    setStatus("generating");
    try {
      // Simulate an async operation so the UI updates
      await new Promise((r) => setTimeout(r, 1200));
      // No real video yet — leave empty for now (prevents broken video tag)
      setVideoUrl("");
    } catch (e) {
      console.error(e);
    } finally {
      setStatus("idle");
    }
  }

  return (
    <>
      <h1 style={{ marginBottom: 8 }}>🎬 Video Stage</h1>
      <p style={{ opacity: 0.85, marginBottom: 16 }}>
        Describe the clip you want to visualize. (We'll connect this to a real video generator soon.)
      </p>

      <div className="card">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., '30-second confidence pep talk with spotlight and purple stage lights'"
        />
        <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={generate} disabled={!prompt || status === "generating"}>
            {status === "generating" ? "Generating…" : "Generate"}
          </button>
          {status !== "idle" && <span>Status: {status}</span>}
        </div>
      </div>

      {videoUrl && (
        <div className="card" style={{ marginTop: 16 }}>
          <video src={videoUrl} controls style={{ width: "100%", borderRadius: 12 }} />
          <a href={videoUrl} download style={{ display: "inline-block", marginTop: 8 }}>
            Download Video
          </a>
        </div>
      )}
    </>
  );
}
      <p>Record, rehearse, or visualize your on-stage answers here. Coming soon: AI analysis of tone, pacing, and delivery!</p>
      
      <div className="card">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your video concept or answer..."
        />
        <button onClick={generate} disabled={!prompt || status === "generating"}>
          {status === "generating" ? "Generating..." : "Create Video"}
        </button>
      </div>

      {videoUrl && (
        <div className="card">
          <video src={videoUrl} controls style={{ width: "100%", borderRadius: 12 }} />
          <a href={videoUrl} download>Download Video</a>
        </div>
      )}
    </>
  );
}
