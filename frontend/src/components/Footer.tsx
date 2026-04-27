export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 0 32px' }}>
      <div className="container">
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          gap: '32px', alignItems: 'flex-start',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Syne', sans-serif", fontSize: '1.3rem',
              fontWeight: 800, marginBottom: '10px',
            }}>
              <span style={{ color: 'var(--accent)' }}>Merit</span>Lens
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--muted)', maxWidth: '260px', lineHeight: 1.6 }}>
              Seeing the talent behind the score. An AI-powered platform for equitable candidate evaluation.
            </p>
            <p style={{ marginTop: '10px', fontSize: '.78rem', color: 'var(--muted)' }}>
              Also known as <strong>EquiPulse</strong>
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h5 style={{
              fontSize: '.78rem', fontWeight: 600, color: 'var(--muted)',
              textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '14px',
            }}>Product</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['#dashboard', 'Dashboard'], ['#solution', 'How It Works'], ['#stars', 'Hidden Stars']].map(([href, label]) => (
                <li key={href}>
                  <a href={href} onClick={e => handleScroll(e, href)}
                    style={{ fontSize: '.85rem', color: 'var(--muted)', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission Links */}
          <div>
            <h5 style={{
              fontSize: '.78rem', fontWeight: 600, color: 'var(--muted)',
              textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '14px',
            }}>Mission</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[['#problem', 'The Problem'], ['#sdg', 'SDG Alignment'], ['#', 'Research']].map(([href, label]) => (
                <li key={label}>
                  <a href={href} onClick={e => handleScroll(e, href)}
                    style={{ fontSize: '.85rem', color: 'var(--muted)', transition: 'color .2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h5 style={{
              fontSize: '.78rem', fontWeight: 600, color: 'var(--muted)',
              textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '14px',
            }}>Connect</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '#', icon: 'fab fa-github', label: 'GitHub' },
                { href: '#', icon: 'fab fa-linkedin', label: 'LinkedIn' },
                { href: '#', icon: 'fas fa-envelope', label: 'Contact' },
              ].map(({ href, icon, label }) => (
                <li key={label}>
                  <a href={href}
                    style={{ fontSize: '.85rem', color: 'var(--muted)', transition: 'color .2s', display: 'flex', alignItems: 'center', gap: '8px' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >
                    <i className={icon} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          marginTop: '40px', paddingTop: '20px',
          borderTop: '1px solid var(--border)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px',
        }}>
          <p style={{ fontSize: '.8rem', color: 'var(--muted)' }}>© 2025 MeritLens / EquiPulse. Built for equity.</p>
          <p style={{ fontSize: '.8rem', color: 'var(--muted)' }}>SDG Goal 10 — Reduced Inequalities</p>
        </div>
      </div>
    </footer>
  );
}
