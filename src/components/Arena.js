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
    <div className="arena" style={{ position:"relative", borderRadius:"var(--radius-lg)", overflow:"hidden", marginBottom: "var(--space-4)" }}>
      <div style={{ background: theme.bg, height: 200, position: "relative" }}>
        <div style={{ position:"absolute", inset:0, background: theme.overlay }} />
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"flex-end", padding:"var(--space-4) var(--space-5)", gap:"var(--space-3)" }}>
          <div style={{ color:"var(--color-white)" }}>
            <div style={{ fontWeight:"var(--font-bold)", fontSize:"var(--text-xl)" }}>{theme.title}</div>
            <div style={{ opacity:0.9, marginTop:"var(--space-1)" }}>{theme.subtitle}</div>
          </div>
          <div style={{ marginLeft:"auto", display:"flex", gap:"var(--space-2)" }}>
            {onSwitch && (
              <>
                <button 
                  className="arena-button" 
                  onClick={() => onSwitch("Panel")} 
                  aria-pressed={arena==="Panel"}
                  style={{ 
                    background: arena==="Panel" ? "var(--color-accent)" : "var(--color-surface-overlay)",
                    color: "var(--color-white)",
                    border: "1px solid " + (arena==="Panel" ? "var(--color-accent-border)" : "var(--color-border)"),
                    padding: "var(--space-2) var(--space-3)",
                    borderRadius: "var(--radius-sm)",
                    fontWeight: "var(--font-medium)",
                    transition: "all 0.2s"
                  }}
                >
                  Panel
                </button>
                <button 
                  className="arena-button"
                  onClick={() => onSwitch("OnStage")} 
                  aria-pressed={arena==="OnStage"}
                  style={{ 
                    background: arena==="OnStage" ? "var(--color-accent)" : "var(--color-surface-overlay)",
                    color: "var(--color-white)",
                    border: "1px solid " + (arena==="OnStage" ? "var(--color-accent-border)" : "var(--color-border)"),
                    padding: "var(--space-2) var(--space-3)",
                    borderRadius: "var(--radius-sm)",
                    fontWeight: "var(--font-medium)",
                    transition: "all 0.2s"
                  }}
                >
                  On-Stage
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="card" style={{ 
        background: "var(--color-surface)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-lg)",
        padding: "var(--space-4)"
      }}>
        {children}
      </div>
    </div>
  );
}
