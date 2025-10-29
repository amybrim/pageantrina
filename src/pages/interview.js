import Arena from "@/components/Arena";

export default function Interview() {
  return (
    <div className="stack-lg">
      <header className="page-header">
        <h1>Interview Coaching</h1>
        <p className="muted">
          We'll craft your sparkling introduction, refine your stories, and build crisp answers that feel like you—under pressure and under lights.
        </p>
      </header>

      <div className="card">
        <Arena
          starterPrompt={`You are PageantRina. Greet me warmly and ask 3 quick questions:
1) Which title and division am I competing in?
2) What's one value I want judges to remember?
3) Name a cause or achievement I'm proud of.`}
          placeholder={'Try: "Help me write a 45-sec introduction that feels authentic."'}
        />
      </div>
    </div>
  );
}
          question,
          wpmTarget: 155
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to provide feedback");
      setFeedback(data.coachNotes || JSON.stringify(data, null, 2));
    } catch (e) {
      setFeedback("Coaching unavailable: " + e.message);
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
                  <button onClick={getCoaching} disabled={loading}>{loading?"PageantRina is coaching...":"Get PageantRina's Feedback"}</button>
                </div>
              </div>
            </div>
            {feedback && (
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
                  <button onClick={analyze} disabled={loading}>{loading?"Coaching...":"Get PageantRina's Feedback"}</button>
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
