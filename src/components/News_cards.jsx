import React from 'react'
import { newsData } from '../data/news'
import NewsCard from '../utils/NewsCard'
import { NavLink } from 'react-router'
import FAQ_utils from '../utils/FAQ_utils'
import { motion } from 'motion/react'

export default function News_cards() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .news-section { font-family: 'DM Sans', sans-serif; }

        .news-visit-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em;
          padding: 15px 44px;
          border-radius: 100px;
          border: 1.5px solid #2c2416;
          background: transparent;
          color: #2c2416;
          cursor: pointer;
          transition: all 0.28s cubic-bezier(.22,.68,0,1.2);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .news-visit-btn:hover {
          background: #3d5230;
          border-color: #3d5230;
          color: #faf7f2;
          box-shadow: 0 10px 28px rgba(61,82,48,0.22);
          transform: translateY(-2px);
        }
        .news-visit-btn:active { background: #3d5230; color: #faf7f2; }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 960px) { .news-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px) {
          .news-grid { grid-template-columns: 1fr; }
          .news-big-title { font-size: 46px !important; }
        }
      `}</style>

      <section id="news" className="news-section" style={{
        width: '100%',
        background: '#faf7f2',
        paddingTop: 80,
        paddingBottom: 100,
      }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ marginBottom: 52 }}
          >
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7a9968" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"/><path d="M16 2v4"/><path d="M8 2v4"/>
              </svg>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7a9968' }}>
                Stories &amp; Updates · Shrestha Café
              </span>
              <div style={{ flex: 1, height: 1, background: '#e4ddd3' }} />
            </div>

            {/* Heading */}
            <h1 className="news-big-title" style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 300,
              fontSize: 'clamp(46px, 6vw, 72px)',
              color: '#2c2416',
              margin: '0 0 16px',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
            }}>
              From our <em style={{ fontStyle: 'italic', color: '#5a7a48' }}>kitchen</em><br />& community
            </h1>
            <p style={{
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 300, fontSize: 15,
              color: '#9e8f7a', margin: 0,
              lineHeight: 1.7, maxWidth: 460,
            }}>
              The latest news, seasonal specials, community events, and stories from behind the counter.
            </p>
          </motion.div>

          {/* ── Thin rule ── */}
          <div style={{ height: 1, background: 'linear-gradient(to right, #e4ddd3, transparent)', marginBottom: 36 }} />

          {/* ── News cards grid ── */}
          <div className="news-grid">
            {newsData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
              >
                <NewsCard
                  id={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  author={item.author}
                  date={item.date}
                />
              </motion.div>
            ))}
          </div>

          {/* ── FAQ section ── */}
          <div style={{ marginTop: 80 }}>
            <FAQ_utils />
          </div>

          {/* ── CTA ── */}
          <div style={{ marginTop: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center' }}>
            <hr style={{ width: 40, border: 'none', borderTop: '1.5px solid #2c2416' }} />
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 300, fontSize: 15, color: '#9e8f7a', margin: 0 }}>
              Want to experience it in person?
            </p>
            <NavLink to="/location" className="news-visit-btn">
              Visit Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </NavLink>
          </div>

        </div>
      </section>
    </>
  )
}