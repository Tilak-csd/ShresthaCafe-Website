import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { motion } from 'motion/react'
import { menu } from '../data/menu'

// ── Sample preview data (replace first 6 items from your real `menu` import) ──
const PREVIEW_ITEMS = [
  {
    category: 'Coffee',
    title: 'Cold Brew',
    description: '18-hour slow-steeped, served over ice with optional oat milk',
    price: 6,
    tag: 'Bestseller',
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80',
  },
  {
    category: 'Mains',
    title: 'Truffle Mushroom Bowl',
    description: 'Wild mushrooms, truffle oil, herb rice, aged parmesan shavings',
    price: 28,
    tag: "Chef's Pick",
    imageUrl: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&q=80',
  },
  {
    category: 'Starters',
    title: 'Burrata & Heirloom',
    description: 'Fresh burrata, heirloom tomatoes, basil oil, fleur de sel',
    price: 18,
    tag: 'Popular',
    imageUrl: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&q=80',
  },
  {
    category: 'Mains',
    title: 'Seared Salmon',
    description: 'Atlantic salmon, lemon beurre blanc, asparagus, dill oil',
    price: 34,
    tag: 'Seasonal',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80',
  },
  {
    category: 'Drinks',
    title: 'Matcha Latte',
    description: 'Ceremonial grade matcha, steamed oat milk, light honey',
    price: 7,
    tag: 'Popular',
    imageUrl: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&q=80',
  },
  {
    category: 'Desserts',
    title: 'Warm Chocolate Fondant',
    description: 'Valrhona dark chocolate, vanilla bean ice cream, caramel drizzle',
    price: 14,
    tag: 'Dessert',
    imageUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80',
  },
]

// Use real menu data if available, fallback to preview
const DISPLAY = (menu && menu.length > 0 ? menu.slice(0, 6) : PREVIEW_ITEMS).map(
  (item, i) => ({ ...PREVIEW_ITEMS[i], ...item })
)

const TAG_CONFIG = {
  "Chef's Pick": { bg: '#FEF3C7', color: '#92400E' },
  Seasonal:      { bg: '#DCFCE7', color: '#166534' },
  Popular:       { bg: '#F1F5F9', color: '#475569' },
  Signature:     { bg: '#FEF9C3', color: '#854D0E' },
  Dessert:       { bg: '#FCE7F3', color: '#9D174D' },
  Bestseller:    { bg: '#E8EDE4', color: '#3D5230' },
  Vegan:         { bg: '#E4F0E8', color: '#2A5C38' },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.68, 0, 1] } },
}

// ── Featured large card (first item) ─────────────────────────────────────────
function FeaturedCard({ item }) {
  const [hovered, setHovered] = useState(false)
  const ts = TAG_CONFIG[item.tag] || { bg: '#F0EDE8', color: '#5C4A32' }

  return (
    <motion.div
      variants={cardVariant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: 'span 2',
        background: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        border: `1px solid ${hovered ? '#b5c4a8' : '#e8e4dc'}`,
        boxShadow: hovered ? '0 24px 60px rgba(80,100,60,0.12)' : '0 2px 12px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(.22,.68,0,1.2)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 320,
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', background: '#f2ede6' }}>
        <img
          src={item.imageUrl} alt={item.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.6s ease',
            minHeight: 280,
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 60%, rgba(255,252,246,0.3))',
          pointerEvents: 'none',
        }} />
        {/* Tag */}
        <span style={{
          position: 'absolute', top: 16, left: 16,
          ...ts, fontFamily: "'DM Sans',sans-serif",
          fontSize: 10, fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '4px 12px', borderRadius: 100,
          background: ts.bg, color: ts.color,
        }}>
          {item.tag}
        </span>
      </div>

      {/* Body */}
      <div style={{
        padding: 'clamp(28px,4vw,44px)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', gap: 16,
        background: '#fff',
      }}>
        <span style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: 10, fontWeight: 500,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#7a9968',
        }}>
          {item.category}
        </span>
        <h3 style={{
          fontFamily: "'Fraunces',serif",
          fontWeight: 400, fontSize: 'clamp(24px,3vw,34px)',
          color: '#2c2416', lineHeight: 1.15,
          letterSpacing: '-0.01em', margin: 0,
        }}>
          {item.title}
        </h3>
        <div style={{ height: 1, background: 'linear-gradient(to right, #e4ddd3, transparent)' }} />
        <p style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300, fontSize: 14,
          color: '#9e8f7a', lineHeight: 1.75, margin: 0,
        }}>
          {item.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
          <span style={{
            fontFamily: "'Fraunces',serif",
            fontWeight: 500, fontSize: 28,
            color: '#3d5230',
          }}>
            ${item.price}
          </span>
          <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 12, fontWeight: 400,
            color: hovered ? '#3d5230' : '#b8a898',
            transition: 'color 0.25s',
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            View item
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: hovered ? 'translateX(3px)' : 'none', transition: 'transform 0.25s' }}>
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ── Regular card ──────────────────────────────────────────────────────────────
function MenuCard({ item, index }) {
  const [hovered, setHovered] = useState(false)
  const ts = TAG_CONFIG[item.tag] || { bg: '#F0EDE8', color: '#5C4A32' }

  return (
    <motion.div
      variants={cardVariant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${hovered ? '#b5c4a8' : '#e8e4dc'}`,
        boxShadow: hovered ? '0 20px 48px rgba(80,100,60,0.12)' : '0 2px 10px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(.22,.68,0,1.2)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 190, overflow: 'hidden', background: '#f2ede6', flexShrink: 0 }}>
        <img
          src={item.imageUrl} alt={item.title}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.55s ease',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,252,246,0.5) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <span style={{
          position: 'absolute', top: 12, left: 12,
          background: ts.bg, color: ts.color,
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 9, fontWeight: 600,
          letterSpacing: '0.09em', textTransform: 'uppercase',
          padding: '3px 10px', borderRadius: 100,
        }}>
          {item.tag}
        </span>
        <span style={{
          position: 'absolute', top: 12, right: 14,
          fontFamily: "'DM Mono',monospace", fontSize: 10,
          color: 'rgba(255,255,255,0.8)',
          textShadow: '0 1px 4px rgba(0,0,0,0.35)',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <span style={{
          fontFamily: "'DM Mono',monospace", fontSize: 9,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: '#7a9968',
        }}>
          {item.category}
        </span>
        <h3 style={{
          fontFamily: "'Fraunces',serif",
          fontWeight: 400, fontSize: 18,
          color: '#2c2416', lineHeight: 1.2,
          letterSpacing: '-0.01em', margin: 0,
        }}>
          {item.title}
        </h3>
        <div style={{ borderTop: `1px dashed ${hovered ? '#b5c4a8' : '#ddd8cf'}`, transition: 'border-color 0.3s' }} />
        <p style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300, fontSize: 12.5,
          color: '#9e8f7a', lineHeight: 1.65,
          margin: 0, flex: 1,
        }}>
          {item.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
          <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 500, fontSize: 22, color: '#3d5230' }}>
            ${item.price}
          </span>
          <span style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 400,
            color: hovered ? '#3d5230' : '#b8a898',
            display: 'flex', alignItems: 'center', gap: 4,
            transition: 'color 0.25s',
          }}>
            View
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: hovered ? 'translateX(2px)' : 'none', transition: 'transform 0.25s' }}>
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function Menucards() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .mc-section { font-family: 'DM Sans', sans-serif; }

        /* Main bento grid */
        .mc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Featured card spans 2 cols */
        .mc-featured { grid-column: span 2; }

        /* CTA button */
        .mc-cta-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em;
          padding: 15px 44px; border-radius: 100px;
          border: 1.5px solid #2c2416;
          background: transparent; color: #2c2416;
          cursor: pointer; text-decoration: none;
          transition: all 0.28s cubic-bezier(.22,.68,0,1.2);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .mc-cta-btn:hover {
          background: #3d5230; border-color: #3d5230;
          color: #faf7f2;
          box-shadow: 0 10px 28px rgba(61,82,48,0.2);
          transform: translateY(-2px);
        }
        .mc-cta-btn:active { background: #3d5230; color: #faf7f2; transform: none; }

        /* Ticker strip */
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .mc-ticker-inner {
          display: flex; gap: 0;
          animation: ticker 22s linear infinite;
          white-space: nowrap;
        }
        .mc-ticker-inner:hover { animation-play-state: paused; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .mc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mc-featured {
            grid-column: span 2;
          }
          /* Featured card: stack vertically on tablet */
          .mc-featured > div {
            grid-template-columns: 1fr !important;
          }
          .mc-featured > div > div:first-child {
            min-height: 220px !important;
          }
        }

        @media (max-width: 580px) {
          .mc-grid {
            grid-template-columns: 1fr;
          }
          .mc-featured { grid-column: span 1; }
          .mc-featured > div {
            grid-template-columns: 1fr !important;
          }
          .mc-featured > div > div:first-child {
            min-height: 200px !important;
          }
        }
      `}</style>

      <section id="menu" className="mc-section" style={{
        width: '100%',
        background: '#faf7f2',
        padding: '80px 0 90px',
      }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            style={{ marginBottom: 48 }}
          >
            {/* Eyebrow row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ height: 1, background: '#e4ddd3', width: 40, flexShrink: 0 }} />
              <span style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 10, fontWeight: 500,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: '#7a9968', whiteSpace: 'nowrap',
              }}>
                🍽️ &nbsp; A Taste of What Awaits
              </span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #e4ddd3, transparent)' }} />
            </div>

            {/* Heading + CTA row */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <h2 style={{
                fontFamily: "'Fraunces',serif",
                fontWeight: 300,
                fontSize: 'clamp(38px,5.5vw,66px)',
                color: '#2c2416',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                margin: 0,
              }}>
                Our <em style={{ fontStyle: 'italic', color: '#5a7a48' }}>Menu</em>
              </h2>
              {/* Desktop "View Full Menu" — hidden on mobile, shown in CTA below */}
              <NavLink to="/menu" className="mc-cta-btn" style={{ display: 'none' }}
                ref={el => { if (el) el.style.display = window.innerWidth > 640 ? 'inline-flex' : 'none' }}>
                View Full Menu
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </NavLink>
            </div>

            <p style={{
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 300, fontSize: 15,
              color: '#9e8f7a',
              margin: '14px 0 0',
              lineHeight: 1.7, maxWidth: 500,
            }}>
              Made fresh every day from locally sourced ingredients. A small preview of what's waiting for you.
            </p>
          </motion.div>

          {/* ── Bento card grid ── */}
          <motion.div
            className="mc-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Featured card: first item spans 2 cols */}
            <div className="mc-featured">
              <FeaturedCard item={DISPLAY[0]} />
            </div>

            {/* 3rd item sits in col 3 row 1 */}
            <MenuCard item={DISPLAY[1]} index={1} />

            {/* Row 2: 3 equal cards */}
            {DISPLAY.slice(2, 5).map((item, i) => (
              <MenuCard key={item.title} item={item} index={i + 2} />
            ))}

            {/* Last item: spans 3 cols as a wide horizontal card */}
            <motion.div
              variants={cardVariant}
              style={{ gridColumn: '1 / -1' }}
            >
              <WideCard item={DISPLAY[5]} />
            </motion.div>
          </motion.div>

          {/* ── Scrolling ticker ── */}
          <div style={{
            margin: '40px 0',
            overflow: 'hidden',
            borderTop: '1px dashed #ddd8cf',
            borderBottom: '1px dashed #ddd8cf',
            padding: '14px 0',
          }}>
            <div className="mc-ticker-inner">
              {[...Array(2)].map((_, ri) => (
                <span key={ri} style={{ display: 'flex', gap: 0 }}>
                  {['Cold Brew', 'Truffle Bowl', 'Seared Salmon', 'Matcha Latte', 'Burrata', 'Wagyu Tenderloin', 'Fondant', 'Garden Soup'].map((t, i) => (
                    <span key={i} style={{
                      fontFamily: "'Fraunces',serif",
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: 15, color: '#c0b5a5',
                      padding: '0 28px',
                      borderRight: '1px solid #e4ddd3',
                    }}>
                      {t}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginTop: 8 }}>
            <hr style={{ width: 40, border: 'none', borderTop: '1.5px solid #2c2416' }} />
            <p style={{
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 300, fontSize: 14,
              color: '#9e8f7a', margin: 0,
            }}>
              There's so much more to discover
            </p>
            <NavLink to="/menu" className="mc-cta-btn">
              View Full Menu
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </NavLink>
          </div>

        </div>
      </section>
    </>
  )
}

// ── Wide bottom card ──────────────────────────────────────────────────────────
function WideCard({ item }) {
  const [hovered, setHovered] = useState(false)
  const ts = TAG_CONFIG[item?.tag] || { bg: '#F0EDE8', color: '#5C4A32' }
  if (!item) return null

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${hovered ? '#b5c4a8' : '#e8e4dc'}`,
        boxShadow: hovered ? '0 20px 48px rgba(80,100,60,0.11)' : '0 2px 10px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(.22,.68,0,1.2)',
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', background: '#f2ede6' }}>
        <img src={item.imageUrl} alt={item.title}
          style={{ width: '100%', height: '100%', minHeight: 160, objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.55s ease' }} />
        <span style={{
          position: 'absolute', top: 12, left: 12,
          background: ts.bg, color: ts.color,
          fontFamily: "'DM Sans',sans-serif", fontSize: 9, fontWeight: 600,
          letterSpacing: '0.09em', textTransform: 'uppercase',
          padding: '3px 10px', borderRadius: 100,
        }}>{item.tag}</span>
      </div>
      <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7a9968' }}>
            {item.category}
          </span>
          <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 22, color: '#2c2416', margin: '6px 0 8px', letterSpacing: '-0.01em' }}>
            {item.title}
          </h3>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 13, color: '#9e8f7a', lineHeight: 1.65, margin: 0 }}>
            {item.description}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
          <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 500, fontSize: 28, color: '#3d5230' }}>
            ${item.price}
          </span>
          <span style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 400,
            color: hovered ? '#3d5230' : '#b8a898', transition: 'color 0.25s',
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            View item
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: hovered ? 'translateX(3px)' : 'none', transition: 'transform 0.25s' }}>
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}