export default function WalkingDrills() {
  const drills = [
    {
      title: "Posture & Alignment (2 min)",
      steps: [
        "Feet hip-width, core gently engaged, shoulders down/back.",
        "Chin level, neutral gaze. Imagine a string lifting your crown.",
        "Walk 20 steps slow: quiet feet, soft knees, long spine."
      ]
    },
    {
      title: "Turns: T-Turn Foundations (3 min)",
      steps: [
        "Walk to invisible T intersection, stop softly on center.",
        "Quarter pivot (lead foot stays), eyes first, then shoulders, then hips.",
        "Pause, smile, continue. Repeat 6x with smooth breath."
      ]
    },
    {
      title: "Pace & Presence (2 min)",
      steps: [
        "Count 1-2-3 per step to slow down.",
        "Inhale for 3 steps, exhale for 3 steps to manage nerves.",
        "Practice greeting: 3 steps → pose → warm eye contact → exit."
      ]
    }
  ];

  return (
    <div className="card">
      <strong>Walking Drills (No Video Needed)</strong>
      <ul style={{marginTop:10}}>
        {drills.map((d,i)=>(
          <li key={i} style={{marginBottom:12}}>
            <div style={{fontWeight:600}}>{d.title}</div>
            <ol style={{margin: "6px 0 0 18px"}}>
              {d.steps.map((s,idx)=>(<li key={idx} style={{marginBottom:4}}>{s}</li>))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
}
