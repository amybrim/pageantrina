import Image from "next/image";
import Arena from "@/components/Arena";

export default function Interview() {
  return (
    <div className="stack-lg">
      <header className="page-header">
        <h1>Interview Coaching</h1>
        <p className="muted">
          We'll craft a sparkling intro, sharpen stories, and practice crisp,
          authentic answers—under pressure and under lights.
        </p>
      </header>

      <section className="hero card halo">
        <div className="hero-copy">
          <h2 className="section-title">Start your session</h2>
          <p className="muted">
            PageantRina will warm you up, ask smart follow-ups, and coach your pacing.
          </p>
        </div>
        <div className="hero-art">
          <Image
            src="/pageantrina/interview-scene.webp"
            alt="PageantRina coaching a contestant backstage"
            width={640}
            height={640}
            priority
          />
        </div>
      </section>

      <div className="card">
        <Arena
          starterPrompt={`You are PageantRina, a poised, encouraging pageant interview coach.
Greet me warmly and ask 3 quick questions:
1) Which title & division am I competing in?
2) What's one value I want judges to remember?
3) Name a cause or achievement I'm proud of.`}
          placeholder="Try this: Help me write a confident 45-sec introduction that sounds like me."
        />
      </div>
    </div>
  );
}