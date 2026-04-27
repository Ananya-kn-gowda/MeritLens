const points = [
  {
    num: '01',
    title: 'Contextual Scoring',
    desc: "We don't lower standards — we raise context. Every score is evaluated against the environment it was achieved in, giving each student a fair fighting chance.",
  },
  {
    num: '02',
    title: 'Transparent Algorithm',
    desc: 'The Grit Multiplier is not a black box. Every factor is documented, auditable, and calibrated against real socioeconomic data.',
  },
  {
    num: '03',
    title: 'Equitable Outcomes',
    desc: 'By adjusting for context, institutions discover candidates they would have otherwise overlooked — leading to more diverse, resilient cohorts.',
  },
];

export default function Solution() {
  return (
    <section id="solution" className="section">
      <div className="container">
        <div className="tag reveal">
          <i className="fas fa-lightbulb" /> Our Solution
        </div>
        <h2 className="section-title reveal">Introducing the Grit Multiplier.</h2>

        <div className="solution-layout" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px',
          alignItems: 'center', marginTop: '48px',
        }}>
          {/* Formula Box */}
          <div className="reveal" style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', padding: '36px',
            fontFamily: "'Syne', sans-serif",
          }}>
            <p style={{ fontSize: '.85rem', color: 'var(--muted)' }}>How we calculate adjusted merit:</p>
            <div style={{
              fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)',
              border: '1px dashed rgba(74,222,128,.3)',
              padding: '18px 24px', borderRadius: '10px',
              textAlign: 'center', margin: '20px 0',
              background: 'rgba(74,222,128,.05)',
            }}>
              Adjusted Score = Raw Score × Grit Multiplier
            </div>
            <p style={{ fontSize: '.82rem', color: 'var(--muted)', marginBottom: '16px' }}>Grit Multiplier factors:</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Family income bracket (lower = higher multiplier)',
                'School type & funding level',
                'Regional opportunity index',
                'Access to academic resources',
                'Socioeconomic stress indicators',
              ].map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '.9rem', color: 'var(--muted)' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--accent)', width: '16px' }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Points */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {points.map((pt) => (
              <div key={pt.num} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(34,211,238,.12)', color: 'var(--accent2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: '.95rem', flexShrink: 0,
                }}>
                  {pt.num}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>{pt.title}</h4>
                  <p style={{ fontSize: '.88rem', color: 'var(--muted)', lineHeight: 1.6 }}>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
