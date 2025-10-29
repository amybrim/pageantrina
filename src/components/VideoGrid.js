export default function VideoGrid({ items = [] }) {
  if (!items.length) {
    return (
      <div className="card" style={{opacity:.9}}>
        <strong>Video Library</strong>
        <p style={{marginTop:8}}>
          Walking lessons will appear here. For now, these are placeholders you can swap
          for YouTube links later.
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <strong>Video Library</strong>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",
        gap:12,
        marginTop:12
      }}>
        {items.map((v, i) => (
          <div key={i} style={{border:"1px solid var(--line)", borderRadius:12, overflow:"hidden"}}>
            {/* If you have YouTube links later, swap this block for an iframe */}
            <div style={{
              background:"linear-gradient(135deg,#5b4db0,#b06bcf)",
              aspectRatio:"16/9",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              color:"#fff",
              fontWeight:700
            }}>
              {v.title || "Lesson"}
            </div>
            <div style={{padding:12}}>
              <div style={{fontWeight:600}}>{v.title}</div>
              <div style={{opacity:.8, marginTop:4}}>{v.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// To embed YouTube later: replace the gradient <div> with
// <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
