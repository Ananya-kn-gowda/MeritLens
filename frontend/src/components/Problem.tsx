const problems = [
  {
    icon: 'fa-balance-scale-right',
    title: 'Raw Scores Lie',
    desc: 'Raw academic scores reflect access to resources as much as raw ability. Students with expensive tutors and prep courses have a structural advantage.',
  },
  {
    icon: 'fa-school',
    title: 'Underfunded Schools',
    desc: 'Government and rural schools often lack labs, libraries, and experienced teachers — making achievement significantly harder to attain.',
  },
  {
    icon: 'fa-hand-holding-usd',
    title: 'Income Barriers',
    desc: 'Students from low-income families juggle part-time work, caregiving duties, and financial stress — factors invisible to any standard scoring rubric.',
  },
  {
    icon: 'fa-user-times',
    title: 'Hidden Talent Lost',
    desc: 'Countless brilliant minds are filtered out early — not because they lack potential, but because the system never had a lens wide enough to see them.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="tag reveal">
          <i className="fas fa-exclamation-triangle" /> The Problem
        </div>
        <h2 className="section-title reveal">Traditional systems ignore context.</h2>
        <p className="section-sub reveal">
          A 3.2 GPA from a student in a low-income household with no tutors, attending an
          underfunded rural school — is not the same as a 3.2 from a student with every
          advantage. Yet most systems treat them identically.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px', marginTop: '48px',
        }}>
          {problems.map((p) => (
            <div key={p.title} className="reveal" style={{
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: 'var(--radius)', padding: '32px',
              transition: 'transform .25s, border-color .25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--card-border)'; }}
            >
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem', marginBottom: '18px',
                background: 'rgba(245,158,11,.12)', color: 'var(--accent3)',
              }}>
                <i className={`fas ${p.icon}`} />
              </div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontSize: '1.05rem',
                fontWeight: 700, marginBottom: '10px',
              }}>{p.title}</h3>
              <p style={{ fontSize: '.9rem', color: 'var(--muted)', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
