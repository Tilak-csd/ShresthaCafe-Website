import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { motion } from 'motion/react'
import { menu } from '../data/menu'

const PREVIEW_ITEMS = [
  { category: 'Coffee',   title: 'Cold Brew',               price: 6,  tag: 'Bestseller',  imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80',  description: '18-hour slow-steeped, served over ice with optional oat milk' },
  { category: 'Mains',    title: 'Truffle Mushroom Bowl',    price: 28, tag: "Chef's Pick",  imageUrl: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&q=80',  description: 'Wild mushrooms, truffle oil, herb rice, aged parmesan shavings' },
  { category: 'Starters', title: 'Burrata & Heirloom',       price: 18, tag: 'Popular',      imageUrl: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&q=80',  description: 'Fresh burrata, heirloom tomatoes, basil oil, fleur de sel' },
  { category: 'Mains',    title: 'Seared Salmon',            price: 34, tag: 'Seasonal',     imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80',  description: 'Atlantic salmon, lemon beurre blanc, asparagus, dill oil' },
  { category: 'Drinks',   title: 'Matcha Latte',             price: 7,  tag: 'Popular',      imageUrl: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=500&q=80',  description: 'Ceremonial grade matcha, steamed oat milk, light honey' },
  { category: 'Desserts', title: 'Warm Chocolate Fondant',   price: 14, tag: 'Dessert',      imageUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&q=80',  description: 'Valrhona dark chocolate, vanilla bean ice cream, caramel drizzle' },
]

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

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const cardAnim  = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.68, 0, 1] } } }

// ── Tag badge ─────────────────────────────────────────────────────────────────
function Tag({ tag }) {
  const ts = TAG_CONFIG[tag] || { bg: '#F0EDE8', color: '#5C4A32' }
  return (
    <span style={{
      background: ts.bg, color: ts.color,
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 9, fontWeight: 600,
      letterSpacing: '0.09em', textTransform: 'uppercase',
      padding: '3px 10px', borderRadius: 100,
    }}>{tag}</span>
  )
}

// ── View arrow ────────────────────────────────────────────────────────────────
function ViewArrow({ hovered, label = 'View item', size = 12 }) {
  return (
    <span style={{
      fontFamily: "'DM Sans',sans-serif", fontSize: size, fontWeight: 400,
      color: hovered ? '#3d5230' : '#b8a898',
      display: 'flex', alignItems: 'center', gap: 5,
      transition: 'color 0.25s', whiteSpace: 'nowrap',
    }}>
      {label}
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: hovered ? 'translateX(3px)' : 'none', transition: 'transform 0.25s' }}>
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    </span>
  )
}

// ── Featured card — stacks on mobile ─────────────────────────────────────────
function FeaturedCard({ item }) {
  const [hovered, setHovered] = useState(false)
  if (!item) return null
  return (
    <motion.div
      variants={cardAnim}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mc-featured-card"
      style={{
        background: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        border: `1px solid ${hovered ? '#b5c4a8' : '#e8e4dc'}`,
        boxShadow: hovered ? '0 24px 60px rgba(80,100,60,0.12)' : '0 2px 12px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(.22,.68,0,1.2)',
      }}
    >
      {/* Image */}
      <div className="mc-featured-img">
        <img src={item.imageUrl} alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.6s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(255,252,246,0.25))', pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', top: 16, left: 16 }}><Tag tag={item.tag} /></span>
      </div>
      {/* Body */}
      <div className="mc-featured-body">
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7a9968' }}>
          {item.category}
        </span>
        <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(22px,3vw,32px)', color: '#2c2416', lineHeight: 1.15, letterSpacing: '-0.01em', margin: '10px 0 0' }}>
          {item.title}
        </h3>
        <div style={{ height: 1, background: 'linear-gradient(to right, #e4ddd3, transparent)', margin: '14px 0' }} />
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 14, color: '#9e8f7a', lineHeight: 1.75, margin: 0, flex: 1 }}>
          {item.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
          <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 500, fontSize: 28, color: '#3d5230' }}>${item.price}</span>
          <ViewArrow hovered={hovered} />
        </div>
      </div>
    </motion.div>
  )
}

// ── Regular card ──────────────────────────────────────────────────────────────
function MenuCard({ item, index }) {
  const [hovered, setHovered] = useState(false)
  if (!item) return null
  return (
    <motion.div
      variants={cardAnim}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff', borderRadius: 16, overflow: 'hidden',
        border: `1px solid ${hovered ? '#b5c4a8' : '#e8e4dc'}`,
        boxShadow: hovered ? '0 20px 48px rgba(80,100,60,0.12)' : '0 2px 10px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(.22,.68,0,1.2)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', height: 190, overflow: 'hidden', background: '#f2ede6', flexShrink: 0 }}>
        <img src={item.imageUrl} alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.07)' : 'scale(1)', transition: 'transform 0.55s ease' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,252,246,0.5) 0%, transparent 55%)', pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', top: 12, left: 12 }}><Tag tag={item.tag} /></span>
        <span style={{ position: 'absolute', top: 12, right: 14, fontFamily: "'DM Mono',monospace", fontSize: 10, color: 'rgba(255,255,255,0.8)', textShadow: '0 1px 4px rgba(0,0,0,0.35)' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7a9968' }}>{item.category}</span>
        <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 18, color: '#2c2416', lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0 }}>{item.title}</h3>
        <div style={{ borderTop: `1px dashed ${hovered ? '#b5c4a8' : '#ddd8cf'}`, transition: 'border-color 0.3s' }} />
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 12.5, color: '#9e8f7a', lineHeight: 1.65, margin: 0, flex: 1 }}>{item.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
          <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 500, fontSize: 22, color: '#3d5230' }}>${item.price}</span>
          <ViewArrow hovered={hovered} label="View" size={11} />
        </div>
      </div>
    </motion.div>
  )
}

// ── Wide bottom card — stacks on mobile ───────────────────────────────────────
function WideCard({ item }) {
  const [hovered, setHovered] = useState(false)
  if (!item) return null
  return (
    <motion.div
      variants={cardAnim}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mc-wide-card"
      style={{
        background: '#fff', borderRadius: 16, overflow: 'hidden',
        border: `1px solid ${hovered ? '#b5c4a8' : '#e8e4dc'}`,
        boxShadow: hovered ? '0 20px 48px rgba(80,100,60,0.11)' : '0 2px 10px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(.22,.68,0,1.2)',
        gridColumn: '1 / -1',
      }}
    >
      <div className="mc-wide-img">
        <img src={item.imageUrl} alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 160,
            transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.55s ease' }} />
        <span style={{ position: 'absolute', top: 12, left: 12 }}><Tag tag={item.tag} /></span>
      </div>
      <div style={{ padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7a9968' }}>{item.category}</span>
          <h3 style={{ fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 'clamp(18px,2.5vw,22px)', color: '#2c2416', margin: '5px 0 8px', letterSpacing: '-0.01em' }}>{item.title}</h3>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 13, color: '#9e8f7a', lineHeight: 1.65, margin: 0 }}>{item.description}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexShrink: 0 }}>
          <span style={{ fontFamily: "'Fraunces',serif", fontWeight: 500, fontSize: 26, color: '#3d5230' }}>${item.price}</span>
          <ViewArrow hovered={hovered} />
        </div>
      </div>
    </motion.div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function Menucards() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .mc-section { font-family: 'DM Sans', sans-serif; }

        /* ── Main bento grid ── */
        .mc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ── Featured card: side-by-side on desktop ── */
        .mc-featured-card {
          grid-column: span 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 300px;
        }
        .mc-featured-img {
          position: relative;
          overflow: hidden;
          background: #f2ede6;
          min-height: 260px;
        }
        .mc-featured-body {
          padding: clamp(24px, 4vw, 40px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ── Wide card: horizontal on desktop ── */
        .mc-wide-card {
          display: grid;
          grid-template-columns: 260px 1fr;
        }
        .mc-wide-img {
          position: relative;
          overflow: hidden;
          background: #f2ede6;
        }

        /* ── CTA button ── */
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

        /* ── Ticker ── */
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .mc-ticker-inner {
          display: flex;
          animation: ticker 22s linear infinite;
          white-space: nowrap;
        }
        .mc-ticker-inner:hover { animation-play-state: paused; }

        /* ── Desktop-only header CTA ── */
        .mc-header-cta { display: inline-flex; }

        /* ─────────────────────────────────────────
           TABLET  ≤ 860px
        ───────────────────────────────────────── */
        @media (max-width: 860px) {
          .mc-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          /* Featured card: stack image on top, text below */
          .mc-featured-card {
            grid-column: span 2;
            grid-template-columns: 1fr;
          }
          .mc-featured-img { min-height: 220px; }
          /* Wide card: stack on tablet too */
          .mc-wide-card {
            grid-template-columns: 1fr;
          }
          .mc-wide-img { min-height: 200px; }
          .mc-header-cta { display: none; }
        }

        /* ─────────────────────────────────────────
           MOBILE  ≤ 560px
        ───────────────────────────────────────── */
        @media (max-width: 560px) {
          .mc-section { padding: 56px 0 72px !important; }
          .mc-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .mc-featured-card { grid-column: span 1; }
          .mc-featured-img  { min-height: 200px; }
          .mc-featured-body { padding: 20px 18px 22px; }
          .mc-wide-img      { min-height: 180px; }
          .mc-cta-btn       { padding: 14px 32px; }
        }
      `}</style>

      <section id="menu" className="mc-section" style={{ width: '100%', background: '#faf7f2', padding: '80px 0 90px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }}
            style={{ marginBottom: 48 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ height: 1, background: '#e4ddd3', width: 40, flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a9968', whiteSpace: 'nowrap' }}>
                🍽️ &nbsp; A Taste of What Awaits
              </span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #e4ddd3, transparent)' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <h2 style={{ fontFamily: "'Fraunces',serif", fontWeight: 300, fontSize: 'clamp(38px,5.5vw,66px)', color: '#2c2416', lineHeight: 1.0, letterSpacing: '-0.02em', margin: 0 }}>
                Our <em style={{ fontStyle: 'italic', color: '#5a7a48' }}>Menu</em>
              </h2>
              {/* Shown only on desktop via CSS */}
              <NavLink to="/menu" className="mc-cta-btn mc-header-cta">
                View Full Menu
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </NavLink>
            </div>

            <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 15, color: '#9e8f7a', margin: '14px 0 0', lineHeight: 1.7, maxWidth: 500 }}>
              Made fresh every day from locally sourced ingredients. A small preview of what's waiting for you.
            </p>
          </motion.div>

          {/* ── Bento grid ── */}
          <motion.div className="mc-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>

            {/* Row 1: Featured (2 cols) + 1 regular */}
            <FeaturedCard item={DISPLAY[0]} />
            <MenuCard item={DISPLAY[1]} index={1} />

            {/* Row 2: 3 regular cards */}
            {DISPLAY.slice(2, 5).map((item, i) => (
              <MenuCard key={item.title + i} item={item} index={i + 2} />
            ))}

            {/* Row 3: full-width wide card */}
            <WideCard item={DISPLAY[5]} />

          </motion.div>

          {/* ── Ticker ── */}
          <div style={{ margin: '40px 0', overflow: 'hidden', borderTop: '1px dashed #ddd8cf', borderBottom: '1px dashed #ddd8cf', padding: '14px 0' }}>
            <div className="mc-ticker-inner">
              {[...Array(2)].map((_, ri) => (
                <span key={ri} style={{ display: 'flex' }}>
                  {['Cold Brew', 'Truffle Bowl', 'Seared Salmon', 'Matcha Latte', 'Burrata', 'Wagyu Tenderloin', 'Fondant', 'Garden Soup'].map((t, i) => (
                    <span key={i} style={{ fontFamily: "'Fraunces',serif", fontStyle: 'italic', fontWeight: 300, fontSize: 15, color: '#c0b5a5', padding: '0 28px', borderRight: '1px solid #e4ddd3' }}>
                      {t}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* ── Bottom CTA (always visible) ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, marginTop: 8 }}>
            <hr style={{ width: 40, border: 'none', borderTop: '1.5px solid #2c2416' }} />
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 14, color: '#9e8f7a', margin: 0 }}>
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