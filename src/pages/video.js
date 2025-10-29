import { useState } from "react";

export default function VideoPage() {
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState("idle");
  const [videoUrl, setVideoUrl] = useState(null);

  const generate = async () => {
    if (!prompt) return;
    setStatus("generating");
    // Placeholder for your future Gemini or Appy video generation
    setTimeout(() => {
      setVideoUrl("https://placehold.co/600x400?text=Your+AI+Video+Here");
      setStatus("done");
    }, 2500);
  };

  return (
    <>
      <h1>🎥 Video Stage</h1>
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
