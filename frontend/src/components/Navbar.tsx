'use client';

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(11,15,26,.82)',
      backdropFilter: 'blur(18px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container nav-inner" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '62px',
      }}>
        <div className="nav-logo" style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '1.25rem', fontWeight: 800,
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--accent)', display: 'inline-block',
          }} />
          MeritLens
        </div>

        <div className="nav-links" style={{ display: 'flex', gap: '32px' }}>
          {[['#problem', 'Problem'], ['#solution', 'Solution'], ['#dashboard', 'Dashboard'], ['#stars', 'Hidden Stars']].map(([href, label]) => (
            <a key={href} href={href}
              onClick={(e) => handleScroll(e, href)}
              style={{ fontSize: '.9rem', color: 'var(--muted)', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {label}
            </a>
          ))}
        </div>

        <a href="#dashboard"
          onClick={(e) => handleScroll(e, '#dashboard')}
          style={{
            background: 'var(--accent)', color: '#0b0f1a',
            fontWeight: 600, fontSize: '.85rem',
            padding: '9px 20px', borderRadius: '8px',
            transition: 'opacity .2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Try Dashboard
        </a>
      </div>
    </nav>
  );
}
