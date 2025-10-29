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
}