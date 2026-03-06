import React, { useState } from 'react'
import { motion } from 'motion/react'

const TESTIMONIALS = [
  {
    id: 1, name: 'Priya Shrestha', location: 'Kathmandu', rating: 5,
    text: 'The truffle mushroom bowl was absolutely divine. Every bite felt intentional — rich, earthy, and perfectly balanced. Shrestha Café has become my weekly ritual.',
    tag: 'Regular Guest', date: 'March 2026', avatar: 'P',
    color: '#edf0e8', accentColor: '#3d5230',
  },
  {
    id: 2, name: 'Arjun Maharjan', location: 'Pokhara', rating: 5,
    text: 'I brought my whole family here for a Sunday brunch and everyone left happy. The staff were warm, the space was beautiful, and the cold brew is honestly the best in the city.',
    tag: 'Family Dining', date: 'February 2026', avatar: 'A',
    color: '#fef3e2', accentColor: '#7a4f1a',
  },
  {
    id: 3, name: 'Sita Gurung', location: 'Lakeside', rating: 5,
    text: 'As a food blogger, I have tried hundreds of cafés. Shrestha stands out — not just for the flavours but for the care. You can taste the intention in every dish.',
    tag: 'Food Blogger', date: 'January 2026', avatar: 'S',
    color: '#fce7f3', accentColor: '#9d174d',
  },
  {
    id: 4, name: 'Rohan Thapa', location: 'Kathmandu', rating: 5,
    text: 'Perfect place to work from. Great wifi, even better matcha latte, and the staff never rush you. The ambience is exactly what a modern café should feel like.',
    tag: 'Remote Worker', date: 'March 2026', avatar: 'R',
    color: '#f1f5f9', accentColor: '#475569',
  },
  {
    id: 5, name: 'Meena Tamang', location: 'Bhaktapur', rating: 5,
    text: 'We hosted a small celebration dinner here and it was flawless. The warm chocolate fondant dessert had everyone speechless. Definitely coming back for every special occasion.',
    tag: 'Special Occasion', date: 'February 2026', avatar: 'M',
    color: '#dcfce7', accentColor: '#166534',
  },
]

const STATS = [
  { value: '4.9★', label: 'Average Rating',  icon: '⭐', bg: '#fef9c3', accent: '#854d0e' },
  { value: '1.2K+', label: 'Happy Guests',   icon: '🤝', bg: '#edf0e8', accent: '#3d5230' },
  { value: '98%',   label: 'Return Visitors', icon: '🔁', bg: '#fce7f3', accent: '#9d174d' },
  { value: '5yr',   label: 'Serving Pokhara', icon: '📍', bg: '#f1f5f9', accent: '#475569' },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function Stars({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#d4a843">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

function Avatar({ letter, bg, accent }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: '50%',
      background: bg, border: `2px solid ${accent}33`,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 17, color: accent, lineHeight: 1 }}>
        {letter}
      </span>
    </div>
  )
}

function TagPill({ tag, bg, accent }) {
  return (
    <span style={{
      fontFamily: "'DM Mono',monospace", fontSize: 9,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      background: bg, color: accent,
      padding: '3px 10px', borderRadius: 100,
      whiteSpace: 'nowrap',
    }}>{tag}</span>
  )
}

// ── Featured card (left, tall) ────────────────────────────────────────────────
function FeaturedCard({ t }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff', borderRadius: 20,
        border: `1px solid ${hov ? '#b5c4a8' : '#e8e4dc'}`,
        boxShadow: hov ? '0 24px 60px rgba(80,100,60,0.13)' : '0 2px 14px rgba(0,0,0,0.05)',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.38s cubic-bezier(.22,.68,0,1.2)',
        padding: 'clamp(24px,3.5vw,40px)',
        display: 'flex', flexDirection: 'column', gap: 18,
        position: 'relative', overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* bg blob */}
      <div style={{
        position: 'absolute', top: -50, right: -50,
        width: 220, height: 220, borderRadius: '50%',
        background: t.color, opacity: hov ? 0.65 : 0.35,
        transition: 'opacity 0.4s', pointerEvents: 'none',
      }} />

      {/* Quote mark */}
      <svg width="44" height="34" viewBox="0 0 48 38" fill="none" style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
        <path d="M0 38V22.4C0 10.13 7.2 2.53 21.6 0l2.4 3.8C16.8 5.4 12.8 9.67 12 17.2H21.6V38H0ZM26.4 38V22.4C26.4 10.13 33.6 2.53 48 0l2.4 3.8C43.2 5.4 39.2 9.67 38.4 17.2H48V38H26.4Z" fill={t.color}/>
      </svg>

      {/* Quote text */}
      <p style={{
        fontFamily: "'Fraunces',serif", fontStyle: 'italic', fontWeight: 300,
        fontSize: 'clamp(16px,2vw,19px)', color: '#2c2416',
        lineHeight: 1.7, margin: 0, flex: 1,
        position: 'relative', zIndex: 1,
      }}>
        {t.text}
      </p>

      {/* Divider + author */}
      <div style={{ borderTop: '1px dashed #ddd8cf', paddingTop: 16, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <Avatar letter={t.avatar} bg={t.color} accent={t.accentColor} />
            <div>
              <p style={{ margin: 0, fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 15, color: '#2c2416' }}>{t.name}</p>
              <p style={{ margin: 0, fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 11, color: '#9e8f7a' }}>{t.location} · {t.date}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
            <Stars count={t.rating} />
            <TagPill tag={t.tag} bg={t.color} accent={t.accentColor} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Compact card ──────────────────────────────────────────────────────────────
function CompactCard({ t }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: '#fff', borderRadius: 16,
        border: `1px solid ${hov ? '#b5c4a8' : '#e8e4dc'}`,
        boxShadow: hov ? '0 16px 44px rgba(80,100,60,0.11)' : '0 2px 10px rgba(0,0,0,0.04)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(.22,.68,0,1.2)',
        padding: '20px 20px 18px',
        display: 'flex', flexDirection: 'column', gap: 11,
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', bottom: -18, right: -18,
        width: 90, height: 90, borderRadius: '50%',
        background: t.color, opacity: hov ? 0.55 : 0.28,
        transition: 'opacity 0.4s', pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <Stars count={t.rating} />
        <TagPill tag={t.tag} bg={t.color} accent={t.accentColor} />
      </div>

      <p style={{
        fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 13,
        color: '#6b5c45', lineHeight: 1.7, margin: 0,
        position: 'relative', zIndex: 1,
      }}>
        "{t.text}"
      </p>

      <div style={{ borderTop: '1px dashed #ddd8cf', paddingTop: 11, display: 'flex', alignItems: 'center', gap: 9, position: 'relative', zIndex: 1 }}>
        <Avatar letter={t.avatar} bg={t.color} accent={t.accentColor} />
        <div>
          <p style={{ margin: 0, fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 13.5, color: '#2c2416' }}>{t.name}</p>
          <p style={{ margin: 0, fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 11, color: '#9e8f7a' }}>{t.location}</p>
        </div>
      </div>
    </div>
  )
}

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({ value, label, icon, bg, accent }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: bg, borderRadius: 16,
        border: `1px solid ${hov ? accent + '44' : accent + '20'}`,
        boxShadow: hov ? `0 10px 28px ${accent}18` : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(.22,.68,0,1.2)',
        padding: '20px 16px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 5, textAlign: 'center',
      }}
    >
      <span style={{ fontSize: 22 }}>{icon}</span>
      <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(24px,2.8vw,32px)', color: accent, lineHeight: 1 }}>{value}</span>
      <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: accent + 'bb' }}>{label}</span>
    </div>
  )
}

// ── Motion variants ───────────────────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.68, 0, 1] } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

export default function Testimonials() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;1,9..144,200;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        .ts { font-family: 'DM Sans', sans-serif; }

        /* ── Main bento: left col (featured) + right col (2 compact stacked) ── */
        .ts-bento {
          display: grid;
          grid-template-columns: 1fr 340px;
          grid-template-rows: auto;
          gap: 16px;
          align-items: stretch;
        }
        .ts-left  { display: flex; flex-direction: column; gap: 16px; }
        .ts-right { display: flex; flex-direction: column; gap: 16px; }

        /* Bottom row: 2 compact cards side-by-side */
        .ts-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 0;
        }

        /* Stats */
        .ts-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 16px;
        }

        /* Ticker */
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ts-ticker { display: flex; animation: ticker 28s linear infinite; white-space: nowrap; }
        .ts-ticker:hover { animation-play-state: paused; }

        /* ── Tablet ── */
        @media (max-width: 860px) {
          .ts-bento { grid-template-columns: 1fr; }
          .ts-right { flex-direction: row; }
          .ts-right > * { flex: 1; }
          .ts-stats { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Mobile ── */
        @media (max-width: 560px) {
          .ts { padding: 56px 0 72px !important; }
          .ts-bento { grid-template-columns: 1fr; }
          .ts-right { flex-direction: column; }
          .ts-bottom { grid-template-columns: 1fr; }
          .ts-stats { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }
      `}</style>

      <section className="ts" style={{ width: '100%', background: '#faf7f2', padding: '80px 0 90px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }}
            style={{ marginBottom: 44 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ height: 1, background: '#e4ddd3', width: 40, flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a9968', whiteSpace: 'nowrap' }}>
                ☕ &nbsp; Voices from our Community
              </span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #e4ddd3, transparent)' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 300, fontSize: 'clamp(36px,5.5vw,64px)', color: '#2c2416', lineHeight: 1.0, letterSpacing: '-0.02em', margin: 0 }}>
                What our guests<br />
                <em style={{ fontStyle: 'italic', color: '#5a7a48' }}>are saying</em>
              </h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 14, color: '#9e8f7a', maxWidth: 300, lineHeight: 1.7, margin: 0 }}>
                Real words from the people who make Shrestha Café what it is — our community.
              </p>
            </div>
          </motion.div>

          {/* ── Bento grid ── */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>

            {/* Top row: featured left + 2 compact right */}
            <div className="ts-bento">

              {/* Left: featured + bottom two stacked */}
              <div className="ts-left">
                <motion.div variants={fadeUp} style={{ flex: '0 0 auto' }}>
                  <FeaturedCard t={TESTIMONIALS[0]} />
                </motion.div>
                <div className="ts-bottom">
                  <motion.div variants={fadeUp}><CompactCard t={TESTIMONIALS[3]} /></motion.div>
                  <motion.div variants={fadeUp}><CompactCard t={TESTIMONIALS[4]} /></motion.div>
                </div>
              </div>

              {/* Right column: 2 compact stacked */}
              <div className="ts-right">
                <motion.div variants={fadeUp}><CompactCard t={TESTIMONIALS[1]} /></motion.div>
                <motion.div variants={fadeUp}><CompactCard t={TESTIMONIALS[2]} /></motion.div>
              </div>

            </div>

          </motion.div>

          {/* ── Ticker ── */}
          <div style={{ margin: '28px 0 16px', overflow: 'hidden', borderTop: '1px dashed #ddd8cf', borderBottom: '1px dashed #ddd8cf', padding: '12px 0' }}>
            <div className="ts-ticker">
              {[...Array(2)].map((_, ri) => (
                <span key={ri} style={{ display: 'flex' }}>
                  {['Loved by locals', 'Warm every time', 'Best cold brew', 'Family favourite', 'Cozy atmosphere', 'Honest flavours', 'Back every week', 'Pure comfort food'].map((t, i) => (
                    <span key={i} style={{ fontFamily: "'Fraunces',serif", fontStyle: 'italic', fontWeight: 300, fontSize: 14, color: '#c0b5a5', padding: '0 24px', borderRight: '1px solid #e4ddd3' }}>
                      {t}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* ── Stats ── */}
          <motion.div
            className="ts-stats"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          >
            {STATS.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <StatCard {...s} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  )
}