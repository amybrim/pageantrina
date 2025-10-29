import VideoGrid from "../components/VideoGrid";
import Arena from "../components/Arena";

export default function Video() {
  return (
    <div className="stack-lg">
      <header className="page-header">
        <h1>Video Practice</h1>
        <p className="muted">
          Use short prompts to rehearse on camera. Keep it warm, concise, and true to your platform.
        </p>
      </header>

      <div className="card">
        <Arena
          compact
          starterPrompt={`Give me 5 TikTok-length interview prompts (15–30s answers) and a posture cue for each.`}
          placeholder={'Ask for: "A 20-sec answer on my platform story."'}
        />
      </div>

      <div className="card">
        <h2 className="section-title">Inspiration Reels</h2>
        <VideoGrid />
      </div>
    </div>
  );
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
