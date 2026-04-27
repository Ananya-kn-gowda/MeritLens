const sdgGoals = [
  'Reduce outcome disparities caused by unequal access to quality education',
  'Empower individuals from marginalized groups to achieve fair representation',
  'Promote inclusive evaluation practices in universities and institutions',
  'Build transparent, data-driven tools that scale equitable access globally',
];

export default function SDG() {
  return (
    <section id="sdg" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="tag reveal"><i className="fas fa-globe" /> United Nations SDG</div>
        <h2 className="section-title reveal">Aligned with Global Goals.</h2>

        <div className="sdg-inner reveal" style={{
          display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '60px',
          alignItems: 'center', marginTop: '48px',
        }}>
          {/* SDG Badge */}
          <div className="sdg-badge-big" style={{
            width: '160px', height: '160px', borderRadius: '20px',
            background: 'linear-gradient(135deg, #e11d48, #f59e0b)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '4px',
            flexShrink: 0,
          }}>
            <div className="num" style={{
              fontFamily: "'Syne', sans-serif", fontSize: '3.5rem',
              fontWeight: 800, color: 'white', lineHeight: 1,
            }}>10</div>
            <div className="word" style={{
              fontSize: '.65rem', fontWeight: 600, color: 'rgba(255,255,255,.8)',
              textTransform: 'uppercase', letterSpacing: '.1em', textAlign: 'center',
            }}>
              Reduced<br />Inequalities
            </div>
          </div>

          {/* Content */}
          <div>
            <p style={{ color: 'var(--muted)', fontSize: '.95rem', lineHeight: 1.7, maxWidth: '560px' }}>
              MeritLens directly advances{' '}
              <strong style={{ color: 'var(--text)' }}>SDG Goal 10</strong> by reducing inequality in
              educational and professional opportunities. By surfacing overlooked talent, we help build
              systems where your zip code, income bracket, or school type doesn&apos;t determine your future.
            </p>

            <div className="sdg-goals" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '28px',
            }}>
              {sdgGoals.map((goal) => (
                <div key={goal} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  background: 'var(--card-bg)', border: '1px solid var(--card-border)',
                  padding: '16px', borderRadius: '10px',
                }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--accent)', marginTop: '2px' }} />
                  <p style={{ fontSize: '.85rem', color: 'var(--muted)', lineHeight: 1.5 }}>{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
