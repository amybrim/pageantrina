import { useState } from "react";
import Arena from "@/components/Arena";

export default function InterviewPage() {
  const [arena, setArena] = useState("Panel");
  const [question, setQuestion] = useState("Tell us about yourself.");
  const [answer, setAnswer] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyze() {
    try {
      setLoading(true);
      setAnalysis("");
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
          mode: arena === "Panel" ? "script" : "live",
          text: answer || "(no answer yet)",
          question,
          wpmTarget: 155
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Analysis failed");
      setAnalysis(data.coachNotes || JSON.stringify(data, null, 2));
    } catch (e) {
      setAnalysis("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="h1">Interview Studio</h1>
      <Arena arena={arena} onSwitch={setArena}>
        {arena === "Panel" ? (
          <>
            <div className="kicker">Crown-Ready Response</div>
            <p style={{marginTop:6,opacity:.9}}>Opening Sparkle → Core Message → Memorable Close.</p>
            <div className="grid">
              <div className="card">
                <div className="kicker">Practice Question</div>
                <input value={question} onChange={e=>setQuestion(e.target.value)} />
              </div>
              <div className="card">
                <div className="kicker">Your Script</div>
                <textarea
                  rows={8}
                  placeholder="Write your Opening • Core • Close…"
                  value={answer}
                  onChange={e=>setAnswer(e.target.value)}
                />
                <div style={{marginTop:8, display:"flex", gap:8}}>
                  <button onClick={analyze} disabled={loading}>{loading?"Analyzing…":"Analyze with Gemini"}</button>
                </div>
              </div>
            </div>
            {analysis && (
              <div className="card" style={{marginTop:12, whiteSpace:"pre-wrap"}}>{analysis}</div>
            )}
          </>
        ) : (
          <>
            <div className="kicker">On-Stage Simulation</div>
            <p style={{marginTop:6,opacity:.9}}>Aim for 30–45 seconds. Keep it concise and confident.</p>
            <div className="card" style={{display:"flex", gap:8}}>
              <button onClick={()=>setQuestion("What quality makes you a strong titleholder?")}>Get on-stage question</button>
              <div className="pill mono">⏱ 00:45</div>
            </div>
            <div className="card">
              <div className="kicker">Live Answer (quick draft or transcript)</div>
              <textarea rows={6} placeholder="Paste or jot your spoken answer…" value={answer} onChange={e=>setAnswer(e.target.value)} />
              <div style={{marginTop:8, display:"flex", gap:8}}>
                <button onClick={analyze} disabled={loading}>{loading?"Scoring…":"Scorecard"}</button>
              </div>
            </div>
            {analysis && (
              <div className="card" style={{marginTop:12, whiteSpace:"pre-wrap"}}>{analysis}</div>
            )}
          </>
        )}
      </Arena>
    </>
  );
}
