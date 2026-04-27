const stars = [
  {
    initials: 'AS',
    name: 'Anjali Singh',
    context: 'Rural Govt. School · Family income < ₹1L/yr',
    raw: 6.8,
    adj: 9.2,
    mult: '1.35×',
    story: 'Walked 4km daily to reach school. No electricity at home after 9pm. Still ranked top 3 in district science fair.',
    avatarGrad: 'linear-gradient(135deg, #4ade80, #22d3ee)',
  },
  {
    initials: 'RK',
    name: 'Rajan Kumar',
    context: 'Semi-urban Govt. School · Family income ₹1–3L/yr',
    raw: 7.1,
    adj: 9.0,
    mult: '1.27×',
    story: 'Worked part-time to support younger siblings. Self-taught Python using a shared smartphone. Built a local weather app at 16.',
    avatarGrad: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    initials: 'FM',
    name: 'Fatima Mirza',
    context: 'Urban Govt. School · Family income ₹3–6L/yr',
    raw: 7.8,
    adj: 9.4,
    mult: '1.21×',
    story: 'First-generation college aspirant. No coaching classes. Used YouTube and public library to self-prepare for competitive exams.',
    avatarGrad: 'linear-gradient(135deg, #a78bfa, #ec4899)',
  },
];

export default function HiddenStars() {
  return (
    <section id="stars" className="section">
      <div className="container">
        <div className="tag reveal"><i className="fas fa-star" /> Hidden Stars</div>
        <h2 className="section-title reveal">Candidates the system almost missed.</h2>
        <p className="section-sub reveal">
          These are real-world archetypes. When context is applied, overlooked candidates rise to their true potential ranking.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px', marginTop: '48px',
        }}>
          {stars.map((s) => (
            <div key={s.initials} className="reveal" style={{
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: 'var(--radius)', padding: '28px',
              transition: 'transform .25s, border-color .25s',
              position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--card-border)'; }}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
              }} />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{
                  width: '46px', height: '46px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '1.1rem', color: '#0b0f1a',
                  background: s.avatarGrad,
                }}>
                  {s.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.05rem' }}>{s.name}</div>
                  <div style={{ fontSize: '.78rem', color: 'var(--muted)', marginTop: '2px' }}>{s.context}</div>
                </div>
              </div>

              {/* Score Compare */}
              <div className="score-compare" style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', marginBottom: '18px' }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,.04)', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.6rem', fontWeight: 800, lineHeight: 1, color: 'var(--muted)' }}>{s.raw}</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '4px' }}>Raw Score</div>
                </div>
                <div style={{ flex: 1, background: 'rgba(255,255,255,.04)', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.6rem', fontWeight: 800, lineHeight: 1, color: 'var(--accent)' }}>{s.adj}</div>
                  <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '4px' }}>Adjusted Score</div>
                </div>
              </div>

              {/* Multiplier Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'rgba(34,211,238,.1)', color: 'var(--accent2)',
                border: '1px solid rgba(34,211,238,.2)',
                padding: '5px 12px', borderRadius: '99px', fontSize: '.78rem', fontWeight: 600,
              }}>
                <i className="fas fa-bolt" /> Grit Multiplier: {s.mult}
              </div>

              <p style={{ fontSize: '.8rem', color: 'var(--muted)', marginTop: '14px', lineHeight: 1.6 }}>{s.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
