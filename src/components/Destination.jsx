import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'

// Stagger children helper
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.68, 0, 1] } },
}

// Stat chip
function Stat({ value, label }) {
  return (
    <motion.div variants={item} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: 4, padding: '18px 28px',
      background: 'rgba(255,252,246,0.07)',
      border: '1px solid rgba(255,252,246,0.14)',
      borderRadius: 14,
      backdropFilter: 'blur(6px)',
      minWidth: 110,
    }}>
      <span style={{
        fontFamily: "'Fraunces', serif",
        fontWeight: 400, fontSize: 'clamp(26px,3.5vw,36px)',
        color: '#a8c894', lineHeight: 1,
      }}>{value}</span>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300, fontSize: 11,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.5)',
      }}>{label}</span>
    </motion.div>
  )
}

// Feature pill
function Feature({ icon, text }) {
  return (
    <motion.div variants={item} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '8px 16px',
      background: 'rgba(255,252,246,0.08)',
      border: '1px solid rgba(255,252,246,0.16)',
      borderRadius: 100,
      backdropFilter: 'blur(6px)',
    }}>
      <span style={{ fontSize: 14 }}>{icon}</span>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 400, fontSize: 12,
        color: 'rgba(255,255,255,0.75)',
        letterSpacing: '0.04em',
      }}>{text}</span>
    </motion.div>
  )
}

export default function Destination() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      setScrollY(-rect.top * 0.25)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;1,9..144,200;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .dest-reserve-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em;
          padding: 16px 44px;
          border-radius: 100px;
          border: 1.5px solid rgba(255,255,255,0.55);
          background: transparent;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(.22,.68,0,1.2);
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 9px;
          backdrop-filter: blur(4px);
        }
        .dest-reserve-btn:hover {
          background: #3d5230;
          border-color: #3d5230;
          box-shadow: 0 12px 36px rgba(61,82,48,0.45);
          transform: translateY(-3px);
        }
        .dest-reserve-btn:active { transform: translateY(0); }

        /* Top section pills */
        .top-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 16px; border-radius: 100px;
          border: 1.5px solid #d0dac8;
          background: #edf0e8;
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #3d5230;
        }

        .dest-section { font-family: 'DM Sans', sans-serif; }

        /* Stats row responsive */
        .stats-row {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 12px;
        }

        /* Feature pills row */
        .features-row {
          display: flex; flex-wrap: wrap;
          justify-content: center; gap: 8px;
        }

        /* Split layout */
        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          min-height: 580px;
        }
        @media (max-width: 768px) {
          .split-layout { grid-template-columns: 1fr; }
          .split-text-col { padding: 48px 28px !important; }
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.18s; }
        .d3 { animation-delay: 0.3s; }
      `}</style>

      <section id="destination" className="dest-section" style={{
        width: '100%',
        background: '#faf7f2',
        paddingTop: 80,
      }}>

        {/* ── TOP: Heading block ── */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 72px' }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
          >
            <div className="top-pill">
              <svg width="7" height="7" viewBox="0 0 24 24" fill="#3d5230"><circle cx="12" cy="12" r="10"/></svg>
              A Destination Worth Visiting
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22,0.68,0,1] }}
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 200,
              fontSize: 'clamp(42px, 7vw, 88px)',
              color: '#2c2416',
              textAlign: 'center',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              margin: '0 0 24px',
            }}
          >
            Where every visit<br />
            <em style={{ fontStyle: 'italic', color: '#5a7a48' }}>feels like home</em>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300, fontSize: 16,
              color: '#9e8f7a',
              textAlign: 'center',
              maxWidth: 520, margin: '0 auto 48px',
              lineHeight: 1.75,
            }}
          >
            We serve as a premier destination offering a refined environment for discerning patrons —
            thoughtfully curated for productivity, meaningful conversations, and exceptional artisan beverages.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={container} initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.4 }}
            className="stats-row"
            style={{ marginBottom: 0 }}
          >
            {[
              { value: '5+', label: 'Years Open' },
              { value: '40+', label: 'Menu Items' },
              { value: '12K+', label: 'Happy Guests' },
              { value: '100%', label: 'Local Produce' },
            ].map(s => (
              <motion.div key={s.label} variants={item} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 4, padding: '18px 28px',
                background: '#fff',
                border: '1px solid #e4ddd3',
                borderRadius: 14,
                minWidth: 110,
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(61,82,48,0.1)', borderColor: '#b5c4a8' }}
              >
                <span style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 400, fontSize: 'clamp(26px,3.5vw,36px)',
                  color: '#3d5230', lineHeight: 1,
                }}>{s.value}</span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300, fontSize: 11,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#b8a898',
                }}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM: Full-bleed image hero ── */}
        <div
          ref={sectionRef}
          style={{
            position: 'relative',
            width: '100%',
            minHeight: 'clamp(520px, 75vh, 820px)',
            overflow: 'hidden',
          }}
        >
          {/* Parallax image */}
          <div style={{
            position: 'absolute',
            top: '-15%', left: 0,
            width: '100%', height: '130%',
            backgroundImage: "url('./destination.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: `translateY(${scrollY}px)`,
            willChange: 'transform',
          }} />

          {/* Multi-layer overlay: warm dark tint, balanced */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(160deg, rgba(20,16,10,0.55) 0%, rgba(30,22,12,0.38) 50%, rgba(20,16,10,0.65) 100%)',
          }} />
          {/* Green tint at bottom */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(20,36,16,0.38) 0%, transparent 55%)',
          }} />

          {/* Decorative grain */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            pointerEvents: 'none',
          }} />

          {/* Content */}
          <motion.div
            variants={container} initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.25 }}
            style={{
              position: 'relative', zIndex: 10,
              height: '100%', minHeight: 'clamp(520px, 75vh, 820px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 24, padding: 'clamp(60px, 8vw, 100px) 24px',
              textAlign: 'center',
            }}
          >
            {/* Label */}
            <motion.div variants={item} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100,
              border: '1px solid rgba(168,200,148,0.4)',
              background: 'rgba(61,82,48,0.3)',
              backdropFilter: 'blur(6px)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a8c894', display: 'inline-block' }} />
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: '#a8c894',
              }}>Eat Together · Gather Here</span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={item} style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 200,
              fontSize: 'clamp(38px, 7vw, 84px)',
              color: '#faf7f2',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              margin: 0,
              maxWidth: 760,
            }}>
              Every plate tells a<br />
              <em style={{ fontStyle: 'italic', color: '#a8c894' }}>story of flavour</em>
            </motion.h2>

            {/* Sub copy */}
            <motion.p variants={item} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300, fontSize: 'clamp(14px,1.8vw,17px)',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: 480, margin: 0,
              lineHeight: 1.75,
            }}>
              Every plate achieves that exclusive, cuisine-defining balance of sweet,
              salty, and sour delight — crafted with local ingredients and honest intention.
            </motion.p>

            {/* Feature pills */}
            <motion.div variants={container} className="features-row" style={{ maxWidth: 560 }}>
              {[
                { icon: '☕', text: 'Artisan Coffee' },
                { icon: '🌿', text: 'Local Produce' },
                { icon: '🍳', text: 'All-Day Kitchen' },
                { icon: '🪴', text: 'Cozy Atmosphere' },
              ].map(f => <Feature key={f.text} {...f} />)}
            </motion.div>

            {/* CTA */}
            <motion.div variants={item} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
              <NavLink to="/reservation" className="dest-reserve-btn">
                Make a Reservation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </NavLink>
              <NavLink to="/menu" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, fontWeight: 400,
                letterSpacing: '0.06em',
                padding: '16px 36px', borderRadius: 100,
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.7)',
                cursor: 'pointer', textDecoration: 'none',
                transition: 'all 0.25s',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.15)'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.color='rgba(255,255,255,0.7)'; }}
              >
                View Menu
              </NavLink>
            </motion.div>

          </motion.div>

          {/* Bottom fade into next section */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
            background: 'linear-gradient(to bottom, transparent, #faf7f2)',
          }} />
        </div>

      </section>
    </>
  )
}