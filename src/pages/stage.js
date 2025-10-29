import { useState } from "react";
import VideoGrid from "@/components/VideoGrid";
import WalkingDrills from "@/components/WalkingDrills";

export default function StagePresencePage() {
  const [tab, setTab] = useState("Walking");

  const videos = [
    { title: "Walk Flow: Entrance → Center → Exit", desc: "Map the stage and keep your pace queen-level calm." },
    { title: "T-Turn Basics", desc: "Stop, quarter pivot, smile—fluid and confident." },
    { title: "Eye Line & Smile Practice", desc: "Warm eyes, soft smile, purposeful pauses." }
  ];

  return (
    <>
      <h1>🌟 Stage Presence</h1>
      <div className="card" style={{display:"flex",gap:8}}>
        <button onClick={()=>setTab("Walking")} aria-pressed={tab==="Walking"}>Walking</button>
        <button onClick={()=>setTab("Wardrobe")} aria-pressed={tab==="Wardrobe"}>Wardrobe & Styling</button>
        <button onClick={()=>setTab("Confidence")} aria-pressed={tab==="Confidence"}>Confidence Cues</button>
      </div>

      {tab==="walking" && (
        <>
          <VideoGrid items={videos}/>
          <WalkingDrills />
        </>
      )}

      {tab==="styling" && (
        <div className="card">
          <strong>Wardrobe & Styling (Coming Soon)</strong>
          <p>Silhouette, color harmony, photo test, and quick-change strategy will live here.</p>
        </div>
      )}

      {tab==="confidence" && (
        <div className="card">
          <strong>Confidence Cues</strong>
          <ul style={{marginTop:8}}>
            <li>Breath set: inhale 4, hold 2, exhale 6 before you step.</li>
            <li>Anchor phrase: “Calm. Clear. Crown-worthy.”</li>
            <li>Micro-goals: Eye contact at 3 marks, one gracious head-nod to judges.</li>
          </ul>
        </div>
      )}
    </>
  );
}
