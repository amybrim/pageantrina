import WalkingDrills from "../components/WalkingDrills";

export default function Stage() {
  return (
    <div className="stack-lg">
      <header className="page-header">
        <h1>Stage Walk Drills</h1>
        <p className="muted">Graceful lines. Controlled turns. Magnetic eye line. Practice cues that translate to any stage.</p>
      </header>

      <div className="card">
        <WalkingDrills />
      </div>
    </div>
  );
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
