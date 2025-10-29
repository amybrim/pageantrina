import Link from "next/link";
import Arena from "@/components/Arena";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
  return (
    <div className="stack-xl">
      <section className="hero card halo">
        <div className="hero-copy">
          <h1 className="display">
            Pageant<span className="sparkle">Rina</span>
          </h1>
          <p className="lead">
            Poised guidance. Clear structure. Real practice. Step into your interview with calm confidence and a crown-ready voice.
          </p>
          <div className="row gap">
            <Link className="btn btn-accent" href="/interview">Start Interview Coaching</Link>
            <Link className="btn btn-ghost" href="/confidence">Build Confidence</Link>
          </div>
        </div>
        <div className="hero-card">
          <ul className="ticks">
            <li>✨ 30–60s intro polishing</li>
            <li>🎤 On-brand talking points</li>
            <li>💫 Warm, polished delivery</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Practice Right Now</h2>
        <Arena compact placeholder="Ask for a 30-second intro or a mock question…" />
        <div className="row gap">
          <Link className="chip" href="/stage">Stage Walk Drills</Link>
          <Link className="chip" href="/video">Video Prompts</Link>
        </div>
      </section>

      <section className="card">
        <h2 className="section-title">Quick Inspiration</h2>
        <VideoGrid />
      </section>
    </div>
  );
}
