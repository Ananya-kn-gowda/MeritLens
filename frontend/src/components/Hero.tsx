export default function Hero() {
  return (
    <section id="hero" className="section" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '62px',
    }}>
      {/* Orbs */}
      <div style={{
        position: 'absolute', borderRadius: '50%',
        filter: 'blur(90px)', opacity: .18, pointerEvents: 'none',
        width: '560px', height: '560px', background: '#4ade80', top: '-120px', left: '-160px',
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%',
        filter: 'blur(90px)', opacity: .18, pointerEvents: 'none',
        width: '460px', height: '460px', background: '#22d3ee', bottom: '-80px', right: '-120px',
      }} />
      <div style={{
        position: 'absolute', borderRadius: '50%',
        filter: 'blur(90px)', opacity: .18, pointerEvents: 'none',
        width: '300px', height: '300px', background: '#f59e0b', top: '40%', left: '50%',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Content */}
        <div style={{ maxWidth: '720px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(74,222,128,.08)', border: '1px solid rgba(74,222,128,.2)',
            padding: '6px 14px', borderRadius: '99px',
            fontSize: '.8rem', color: 'var(--accent)', fontWeight: 500,
            marginBottom: '28px',
            animation: 'fadeUp .6s ease both',
          }}>
            <i className="fas fa-seedling" /> SDG Goal 10 — Reduced Inequalities
          </div>

          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-.02em',
            animation: 'fadeUp .7s .1s ease both',
          }}>
            Merit<span style={{ color: 'var(--accent)' }}>Lens</span>
          </h1>

          <p style={{
            fontSize: '1.3rem', color: 'var(--muted)', fontStyle: 'italic',
            margin: '16px 0 24px',
            animation: 'fadeUp .7s .2s ease both',
          }}>
            &quot;Seeing the Talent, Not Just the Score.&quot;
          </p>

          <p style={{
            fontSize: '1.05rem', color: 'rgba(232,234,240,.7)',
            maxWidth: '560px', lineHeight: 1.75,
            animation: 'fadeUp .7s .3s ease both',
          }}>
            An AI-powered evaluation platform that calculates a{' '}
            <strong>Grit Multiplier</strong> — adjusting raw scores by a
            candidate&apos;s socioeconomic environment, school funding, and family
            income. Because potential doesn&apos;t always look the same on paper.
          </p>

          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '36px',
            animation: 'fadeUp .7s .4s ease both',
          }}>
            <a href="#dashboard"
              onClick={e => { e.preventDefault(); document.querySelector('#dashboard')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                background: 'var(--accent)', color: '#0b0f1a',
                fontWeight: 700, fontSize: '.95rem',
                padding: '14px 30px', borderRadius: '10px', border: 'none',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'transform .2s, opacity .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.opacity = '.9'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.opacity = '1'; }}
            >
              <i className="fas fa-chart-line" /> Analyze Candidate
            </a>
            <a href="#solution"
              onClick={e => { e.preventDefault(); document.querySelector('#solution')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                background: 'transparent', color: 'var(--text)',
                fontWeight: 500, fontSize: '.95rem',
                padding: '14px 28px', borderRadius: '10px',
                border: '1px solid var(--border)', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                transition: 'border-color .2s, background .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.2)'; e.currentTarget.style.background = 'rgba(255,255,255,.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <i className="fas fa-book-open" /> How It Works
            </a>
          </div>
        </div>

        {/* Stat Bar */}
        <div className="reveal" style={{
          display: 'flex', flexWrap: 'wrap', gap: 0,
          border: '1px solid var(--border)', borderRadius: 'var(--radius)',
          overflow: 'hidden', marginTop: '60px',
        }}>
          {[
            { num: '68%', label: 'of top talent goes unrecognized due to biased scoring' },
            { num: '3.2×', label: 'average Grit Multiplier for underfunded-school candidates' },
            { num: '190+', label: 'countries where income gaps skew academic evaluation' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1, minWidth: '180px', padding: '28px 32px',
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
              background: 'var(--card-bg)',
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent)',
              }}>{stat.num}</div>
              <div style={{ fontSize: '.85rem', color: 'var(--muted)', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
