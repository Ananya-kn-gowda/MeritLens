'use client';
import { useState, useRef } from 'react';

const incomeMultipliers = [1.40, 1.28, 1.14, 1.05, 1.00];
const incomeLabels = ['< ₹1L/yr', '₹1–3L/yr', '₹3–6L/yr', '₹6–12L/yr', '₹12L+/yr'];
const schoolBonus: Record<string, number> = { rural: 0.12, government: 0.07, private: 0.00, elite: -0.05 };
const schoolLabels: Record<string, string> = {
  rural: 'Rural / Underfunded School',
  government: 'Government / Public School',
  private: 'Standard Private School',
  elite: 'Elite Private School',
};

interface Result {
  name: string;
  initials: string;
  school: string;
  rawScore: number;
  adjScore: number;
  gritMult: number;
  multDesc: string;
  insight: string;
}

export default function Dashboard() {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [school, setSchool] = useState('');
  const [income, setIncome] = useState(2);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');
  const [barRaw, setBarRaw] = useState(0);
  const [barAdj, setBarAdj] = useState(0);

  const handleCalculate = () => {
    setError('');
    const parsedScore = parseFloat(score);
    if (!name.trim()) { setError("Please enter the candidate's name."); return; }
    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 10) { setError('Please enter a valid score between 0 and 10.'); return; }
    if (!school) { setError('Please select a school type.'); return; }

    const baseMult = incomeMultipliers[income];
    const bonus = schoolBonus[school] ?? 0;
    const gritMult = Math.round((baseMult + bonus) * 100) / 100;
    const rawScore = Math.round(parsedScore * 10) / 10;
    const adjScore = Math.min(Math.round(rawScore * gritMult * 10) / 10, 10);

    let insight = '';
    if (gritMult >= 1.35) {
      insight = `🌟 Exceptional circumstance detected. ${name.trim()} achieved a ${rawScore} under severe resource constraints — this adjusted score places them in a high-potential tier.`;
    } else if (gritMult >= 1.15) {
      insight = `💡 Significant context gap identified. ${name.trim()}'s raw score underrepresents their ability. The Grit Multiplier corrects for limited access and financial barriers.`;
    } else if (gritMult >= 1.05) {
      insight = `📈 Modest contextual adjustment applied. ${name.trim()} had some structural disadvantages. The adjusted score reflects a more equitable evaluation.`;
    } else {
      insight = `✅ Minimal adjustment needed. ${name.trim()} had access to premium resources. Raw and adjusted scores are close, reflecting a level playing field.`;
    }

    const multDesc =
      gritMult >= 1.30 ? 'High — strong socioeconomic disadvantage'
      : gritMult >= 1.15 ? 'Moderate — notable resource gap'
      : gritMult >= 1.05 ? 'Low — minor contextual adjustment'
      : 'Minimal — privileged access detected';

    const initials = name.trim().split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();

    setResult({ name: name.trim(), initials, school: schoolLabels[school] + ' · ' + incomeLabels[income], rawScore, adjScore, gritMult, multDesc, insight });
    setBarRaw(0); setBarAdj(0);
    setTimeout(() => {
      setBarRaw(rawScore / 10 * 100);
      setBarAdj(adjScore / 10 * 100);
    }, 80);
  };

  return (
    <section id="dashboard" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="tag reveal"><i className="fas fa-tachometer-alt" /> Interactive Dashboard</div>
        <h2 className="section-title reveal">Calculate Merit Score.</h2>
        <p className="section-sub reveal">Enter a candidate&apos;s details to see how their raw score adjusts when context is applied.</p>

        <div className="reveal" style={{
          background: 'var(--surface2)', border: '1px solid var(--border)',
          borderRadius: '20px', overflow: 'hidden', marginTop: '48px',
          boxShadow: 'var(--shadow)',
        }}>
          {/* Window Chrome */}
          <div style={{
            background: 'rgba(255,255,255,.03)', borderBottom: '1px solid var(--border)',
            padding: '16px 28px', display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <div style={{ display: 'flex', gap: '7px' }}>
              {['#ff5f57','#febc2e','#28c840'].map((c) => (
                <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{
              marginLeft: '16px', fontSize: '.82rem', color: 'var(--muted)',
              background: 'rgba(255,255,255,.06)', padding: '5px 14px', borderRadius: '6px',
            }}>
              MeritLens — Candidate Analyzer
            </div>
          </div>

          {/* Body */}
          <div className="dash-body" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {/* Form */}
            <div className="dash-form" style={{ padding: '36px', borderRight: '1px solid var(--border)' }}>
              {/* Name */}
              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 500, color: 'var(--muted)', marginBottom: '8px', letterSpacing: '.04em' }}>CANDIDATE NAME</label>
                <input
                  type="text" placeholder="e.g. Priya Sharma" value={name}
                  onChange={e => setName(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,.05)', border: '1px solid var(--border)', color: 'var(--text)', padding: '11px 14px', borderRadius: '8px', fontSize: '.9rem', fontFamily: "'DM Sans', sans-serif", outline: 'none' }}
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
                />
              </div>
              {/* Score */}
              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 500, color: 'var(--muted)', marginBottom: '8px', letterSpacing: '.04em' }}>GPA / SCORE (out of 10)</label>
                <input
                  type="number" placeholder="e.g. 7.4" min={0} max={10} step={0.1} value={score}
                  onChange={e => setScore(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,.05)', border: '1px solid var(--border)', color: 'var(--text)', padding: '11px 14px', borderRadius: '8px', fontSize: '.9rem', fontFamily: "'DM Sans', sans-serif", outline: 'none' }}
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
                />
              </div>
              {/* School */}
              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 500, color: 'var(--muted)', marginBottom: '8px', letterSpacing: '.04em' }}>SCHOOL TYPE</label>
                <select
                  value={school} onChange={e => setSchool(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,.05)', border: '1px solid var(--border)', color: school ? 'var(--text)' : 'var(--muted)', padding: '11px 14px', borderRadius: '8px', fontSize: '.9rem', fontFamily: "'DM Sans', sans-serif", outline: 'none' }}
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <option value="">Select school type…</option>
                  <option value="elite">Elite Private School</option>
                  <option value="private">Standard Private School</option>
                  <option value="government">Government / Public School</option>
                  <option value="rural">Rural / Underfunded School</option>
                </select>
              </div>
              {/* Income Slider */}
              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '.8rem', fontWeight: 500, color: 'var(--muted)', marginBottom: '8px', letterSpacing: '.04em' }}>FAMILY ANNUAL INCOME</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <input
                    type="range" min={0} max={4} step={1} value={income}
                    onChange={e => setIncome(parseInt(e.target.value))}
                    style={{ width: '100%', WebkitAppearance: 'none', appearance: 'none', height: '6px', borderRadius: '4px', background: 'rgba(255,255,255,.1)', outline: 'none', border: 'none', padding: 0, accentColor: 'var(--accent)' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.75rem', color: 'var(--muted)' }}>
                    <span>&lt; ₹1L</span><span>₹1–3L</span><span>₹3–6L</span><span>₹6–12L</span><span>₹12L+</span>
                  </div>
                </div>
              </div>

              {error && <p style={{ color: '#f87171', fontSize: '.82rem', marginBottom: '10px' }}>{error}</p>}

              <button
                onClick={handleCalculate}
                style={{
                  width: '100%', padding: '13px', fontSize: '.95rem',
                  background: 'var(--accent)', color: '#0b0f1a',
                  fontWeight: 700, border: 'none', borderRadius: '10px',
                  cursor: 'pointer', fontFamily: "'Syne', sans-serif",
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  marginTop: '4px', transition: 'opacity .2s, transform .2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
              >
                <i className="fas fa-calculator" /> Calculate Merit Score
              </button>
            </div>

            {/* Results */}
            <div style={{ padding: '36px' }}>
              {!result ? (
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', height: '100%', textAlign: 'center',
                  color: 'var(--muted)', gap: '12px', fontSize: '.9rem',
                }}>
                  <i className="fas fa-chart-pie" style={{ fontSize: '2.5rem', opacity: .3 }} />
                  <p>Fill in the candidate details and hit <strong>Calculate</strong> to see the adjusted score and Grit Multiplier.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', animation: 'fadeUp .5s ease' }}>
                  {/* Candidate Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)', padding: '10px 14px', borderRadius: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), var(--accent2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.9rem', color: '#0b0f1a' }}>
                      {result.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '.9rem' }}>{result.name}</div>
                      <div style={{ fontSize: '.75rem', color: 'var(--muted)' }}>{result.school}</div>
                    </div>
                  </div>

                  {/* Score Bars */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {[
                      { label: 'Raw Score', value: result.rawScore, bar: barRaw, fillClass: 'fill-raw', fillBg: 'var(--muted)' },
                      { label: 'Adjusted Score', value: result.adjScore, bar: barAdj, fillBg: 'linear-gradient(90deg, var(--accent2), var(--accent))' },
                    ].map(({ label, value, bar, fillBg }) => (
                      <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.8rem', color: 'var(--muted)' }}>
                          <span>{label}</span>
                          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{value.toFixed(1)} / 10</strong>
                        </div>
                        <div style={{ height: '8px', background: 'rgba(255,255,255,.08)', borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', borderRadius: '4px', background: fillBg, width: `${bar}%`, transition: 'width .8s cubic-bezier(.23,1,.32,1)' }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Multiplier */}
                  <div style={{ background: 'rgba(74,222,128,.07)', border: '1px solid rgba(74,222,128,.2)', borderRadius: '12px', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>Grit Multiplier</div>
                      <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: '2px' }}>{result.multDesc}</div>
                    </div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>
                      {result.gritMult.toFixed(2)}×
                    </div>
                  </div>

                  {/* Insight */}
                  <div style={{ background: 'rgba(245,158,11,.06)', border: '1px solid rgba(245,158,11,.18)', borderRadius: '10px', padding: '14px 16px', fontSize: '.82rem', color: 'rgba(245,158,11,.9)', lineHeight: 1.55 }}>
                    {result.insight}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
