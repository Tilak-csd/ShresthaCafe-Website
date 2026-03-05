import React from 'react'
import { motion } from 'motion/react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.68, 0, 1] } },
}

const stats = [
  { value: '5+',   label: 'Years Open'    },
  { value: '40+',  label: 'Menu Items'    },
  { value: '12K+', label: 'Happy Guests'  },
  { value: '100%', label: 'Local Produce' },
]

const features = [
  { icon: '☕', text: 'Artisan Coffee'   },
  { icon: '🌿', text: 'Local Produce'    },
  { icon: '🍳', text: 'All-Day Kitchen'  },
  { icon: '🪴', text: 'Cozy Atmosphere'  },
]

export default function Destination() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;1,9..144,200;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .dest-section {
          font-family: 'DM Sans', sans-serif;
          width: 100%;
          background: #faf7f2;
          padding: 80px 0 90px;
        }
        .dest-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ── Top split row ── */
        .dest-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
          margin-bottom: 72px;
        }

        /* ── Image side ── */
        .dest-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          box-shadow: 0 20px 60px rgba(44,36,22,0.14);
          flex-shrink: 0;
        }
        .dest-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.7s ease;
        }
        .dest-img-wrap:hover img { transform: scale(1.04); }
        .dest-img-badge {
          position: absolute; bottom: 22px; left: 22px;
          display: flex; align-items: center; gap: 10px;
          background: rgba(250,247,242,0.92);
          border: 1px solid #e4ddd3;
          border-radius: 100px;
          padding: 10px 18px;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }

        /* ── Text side ── */
        .dest-text-col {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .dest-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 16px; border-radius: 100px;
          border: 1.5px solid #d0dac8;
          background: #edf0e8;
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #3d5230;
          width: fit-content;
        }
        .dest-heading {
          font-family: 'Fraunces', serif;
          font-weight: 200;
          font-size: clamp(36px, 4.5vw, 58px);
          color: #2c2416;
          line-height: 1.02;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .dest-heading em { font-style: italic; color: #5a7a48; }
        .dest-body {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 15px;
          color: #9e8f7a; line-height: 1.8; margin: 0;
        }

        /* Feature pills */
        .dest-features {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-top: 4px;
        }
        .dest-feat-pill {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 8px 15px; border-radius: 100px;
          border: 1.5px solid #ddd8cf;
          background: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 400;
          color: #6b5c45;
          transition: all 0.22s ease;
        }
        .dest-feat-pill:hover {
          border-color: #3d5230;
          background: #edf0e8;
          color: #3d5230;
          transform: translateY(-2px);
        }

        /* Thin divider */
        .dest-rule {
          border: none;
          border-top: 1px dashed #ddd8cf;
          margin: 0;
        }

        /* ── Stats row ── */
        .dest-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .dest-stat-card {
          background: #fff;
          border: 1px solid #e4ddd3;
          border-radius: 16px;
          padding: 24px 20px;
          display: flex; flex-direction: column;
          align-items: center; gap: 6px;
          text-align: center;
          transition: all 0.25s ease;
        }
        .dest-stat-card:hover {
          border-color: #b5c4a8;
          box-shadow: 0 8px 28px rgba(61,82,48,0.1);
          transform: translateY(-4px);
        }
        .dest-stat-value {
          font-family: 'Fraunces', serif;
          font-weight: 400;
          font-size: clamp(28px, 3.5vw, 40px);
          color: #3d5230; line-height: 1;
        }
        .dest-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 11px;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #b8a898;
        }
        .dest-stat-icon {
          font-size: 18px; margin-bottom: 2px;
        }

        /* ── Stats section header ── */
        .dest-ach-header {
          text-align: center;
          margin-bottom: 36px;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .dest-split {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 56px;
          }
          .dest-img-wrap {
            aspect-ratio: 16 / 9;
            border-radius: 16px;
          }
          .dest-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .dest-section { padding: 56px 0 72px; }
          .dest-inner { padding: 0 16px; }
          .dest-split { gap: 32px; margin-bottom: 48px; }
          .dest-img-wrap { aspect-ratio: 4 / 3; }
          .dest-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .dest-stat-card { padding: 18px 14px; }
          .dest-heading { font-size: clamp(32px, 8vw, 46px); }
        }
      `}</style>

      <section id="destination" className="dest-section">
        <div className="dest-inner">

          {/* ── Split: Image left + Text right ── */}
          <div className="dest-split">

            {/* LEFT: Image */}
            <motion.div
              className="dest-img-wrap"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: [0.22, 0.68, 0, 1] }}
            >
              <img
                src="/destination.jpg"
                alt="Shrestha Café interior — a destination worth visiting"
              />
              {/* Warm overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(44,36,22,0.28) 0%, transparent 50%)',
                pointerEvents: 'none',
              }} />
              {/* Badge */}
              <div className="dest-img-badge">
                <span style={{ fontSize: 18 }}>☕</span>
                <div>
                  <p style={{ margin: 0, fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a9968' }}>Est. 2019</p>
                  <p style={{ margin: 0, fontFamily: "'Fraunces',serif", fontWeight: 400, fontSize: 13, color: '#2c2416' }}>Shrestha Café</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Text */}
            <motion.div
              className="dest-text-col"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Eyebrow */}
              <motion.div variants={item}>
                <div className="dest-eyebrow">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="#3d5230"><circle cx="12" cy="12" r="10"/></svg>
                  A Destination Worth Visiting
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={item} className="dest-heading">
                Where every visit<br />
                <em>feels like home</em>
              </motion.h1>

              {/* Divider */}
              <motion.hr variants={item} className="dest-rule" />

              {/* Body copy */}
              <motion.p variants={item} className="dest-body">
                We serve as a premier destination offering a refined environment for discerning patrons —
                thoughtfully curated for productivity, meaningful conversations, and exceptional artisan
                beverages made from locally sourced ingredients.
              </motion.p>
              <motion.p variants={item} className="dest-body" style={{ marginTop: -8 }}>
                Whether you're catching up with a friend, working through a quiet morning, or celebrating
                a special occasion — there's always a warm seat waiting for you here.
              </motion.p>

              {/* Feature pills */}
              <motion.div variants={item} className="dest-features">
                {features.map(f => (
                  <span key={f.text} className="dest-feat-pill">
                    <span>{f.icon}</span>{f.text}
                  </span>
                ))}
              </motion.div>

            </motion.div>
          </div>

          {/* ── Achievements section ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 0.68, 0, 1] }}
          >
            {/* Header */}
            {/* <div className="dest-ach-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #e4ddd3)' }} />
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a9968', whiteSpace: 'nowrap' }}>
                  🌿 Our Achievements
                </span>
                <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #e4ddd3)' }} />
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 14, color: '#b8a898', margin: 0 }}>
                Numbers that tell our story
              </p>
            </div> */}

            {/* Stat cards */}
            <motion.div
              className="dest-stats"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { value: '5+',   label: 'Years Open',    icon: '📅' },
                { value: '40+',  label: 'Menu Items',    icon: '🍽️' },
                { value: '12K+', label: 'Happy Guests',  icon: '🤝' },
                { value: '100%', label: 'Local Produce',  icon: '🌱' },
              ].map(s => (
                <motion.div key={s.label} variants={item} className="dest-stat-card">
                  <span className="dest-stat-icon">{s.icon}</span>
                  <span className="dest-stat-value">{s.value}</span>
                  <span className="dest-stat-label">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  )
}