import { useMemo } from "react";

export default function Arena({ arena, onSwitch, children }) {
  const theme = useMemo(() => {
    if (arena === "Panel") {
      return {
        bg: "linear-gradient(135deg,#2c2a28 0%,#3e3733 60%,#6b5b4d 100%)",
        overlay: "rgba(0,0,0,0.35)",
        title: "Judges’ Panel Room",
        subtitle: "Focused, polished, professional."
      };
    }
    return {
      bg: "radial-gradient(60% 70% at 50% 30%, #6b2bb3 0%, #2a0b46 60%, #0a0416 100%)",
      overlay: "rgba(0,0,0,0.25)",
      title: "On-Stage Spotlight",
      subtitle: "Concise, confident, captivating."
    };
  }, [arena]);

  return (
    <div style={{ position:"relative", borderRadius:16, overflow:"hidden", marginBottom: 16 }}>
      <div style={{ background: theme.bg, height: 200, position: "relative" }}>
        <div style={{ position:"absolute", inset:0, background: theme.overlay }} />
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"flex-end", padding:"16px 20px", gap:12 }}>
          <div style={{ color:"#fff" }}>
            <div style={{ fontWeight:700, fontSize:22 }}>{theme.title}</div>
            <div style={{ opacity:0.9, marginTop:2 }}>{theme.subtitle}</div>
          </div>
          <div style={{ marginLeft:"auto", display:"flex", gap:8 }}>
            {onSwitch && (
              <>
                <button onClick={() => onSwitch("Panel")} aria-pressed={arena==="Panel"}>Panel</button>
                <button onClick={() => onSwitch("OnStage")} aria-pressed={arena==="OnStage"}>On-Stage</button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="card">{children}</div>
    </div>
  );
}
