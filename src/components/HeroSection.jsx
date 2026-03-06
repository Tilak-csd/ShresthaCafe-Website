import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router'
import { motion } from 'motion/react'

// Floating ambient particle
function Particle({ style }) {
  return <div className="hero-particle" style={style} />
}

export default function HeroSection({ showbutton = true, heading, text }) {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      setScrollY(window.scrollY * 0.35)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Split heading into two parts for styled display
  // e.g. "Where Every Cup Feels Like Home" → first 3 words + rest
  const words = heading ? heading.split(' ') : []
  const breakAt = Math.ceil(words.length / 2)
  const line1 = words.slice(0, breakAt).join(' ')
  const line2 = words.slice(breakAt).join(' ')

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100;0,9..144,200;0,9..144,300;1,9..144,100;1,9..144,200;1,9..144,300&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .hero-root {
          position: relative;
          width: 100%;
          height: calc(100vh - 60px);
          min-height: 560px;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }

        /* ── Parallax text layer ── */
        .hero-content {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center;
          padding: 0 clamp(20px, 5vw, 80px);
          gap: 28px;
          width: 100%;
          max-width: 1000px;
        }

        /* ── Eyebrow ── */
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 7px 18px; border-radius: 100px;
          border: 1px solid rgba(168,200,148,0.35);
          background: rgba(61,82,48,0.3);
          backdrop-filter: blur(8px);
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #a8c894;
        }
        .hero-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #a8c894;
          animation: heroGlow 2.4s ease-in-out infinite;
        }
        @keyframes heroGlow {
          0%,100% { box-shadow: 0 0 0 2px rgba(168,200,148,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(168,200,148,0.05); }
        }

        /* ── Heading ── */
        .hero-heading {
          font-family: 'Fraunces', serif;
          font-weight: 100;
          font-size: clamp(44px, 8vw, 96px);
          color: #faf7f2;
          line-height: 1.0;
          letter-spacing: -0.025em;
          margin: 0;
        }
        .hero-heading em {
          font-style: italic;
          color: #a8c894;
        }

        /* ── Divider ── */
        .hero-divider {
          display: flex; align-items: center; gap: 14px;
          width: 100%; max-width: 360px;
        }
        .hero-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, transparent, rgba(250,247,242,0.2), transparent);
        }
        .hero-divider-leaf { font-size: 14px; opacity: 0.6; }

        /* ── Subtext ── */
        .hero-sub {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: clamp(14px, 2vw, 17px);
          color: rgba(250,247,242,0.6);
          max-width: 480px; line-height: 1.75; margin: 0;
        }

        /* ── CTA row ── */
        .hero-cta-row {
          display: flex; align-items: center; gap: 14px;
          flex-wrap: wrap; justify-content: center;
          margin-top: 4px;
        }
        .hero-btn-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em;
          padding: 16px 44px; border-radius: 100px;
          background: #a8c894; color: #1a2614;
          border: none; text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(.22,.68,0,1.2);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .hero-btn-primary:hover {
          background: #faf7f2; color: #2c2416;
          box-shadow: 0 14px 40px rgba(168,200,148,0.3);
          transform: translateY(-3px);
        }
        .hero-btn-primary:active { transform: translateY(0); }

        .hero-btn-ghost {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 400;
          letter-spacing: 0.06em;
          padding: 16px 36px; border-radius: 100px;
          border: 1px solid rgba(250,247,242,0.22);
          background: rgba(250,247,242,0.05);
          color: rgba(250,247,242,0.65);
          text-decoration: none;
          backdrop-filter: blur(4px);
          transition: all 0.25s ease;
          display: inline-flex; align-items: center; gap: 7px;
        }
        .hero-btn-ghost:hover {
          border-color: rgba(250,247,242,0.5);
          color: #faf7f2;
          background: rgba(250,247,242,0.1);
        }

        /* ── Scroll indicator ── */
        .hero-scroll {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .hero-scroll-text {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(250,247,242,0.3);
        }
        .hero-scroll-track {
          width: 1px; height: 44px;
          background: rgba(250,247,242,0.12);
          position: relative; overflow: hidden;
          border-radius: 1px;
        }
        .hero-scroll-bar {
          position: absolute; top: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(168,200,148,0.7));
          animation: scrollDrop 2s ease-in-out infinite;
        }
        @keyframes scrollDrop {
          0%   { top: -100%; }
          50%  { top: 0%; }
          100% { top: 100%; }
        }

        /* ── Ambient particles ── */
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(168,200,148,0.12);
          pointer-events: none;
          animation: heroFloat linear infinite;
        }
        @keyframes heroFloat {
          from { transform: translateY(0) rotate(0deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          to   { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }

        /* ── Info strip ── */
        .hero-strip {
          position: absolute; bottom: 0; left: 0; right: 0;
          z-index: 10;
          display: flex;
          border-top: 1px solid rgba(250,247,242,0.07);
          backdrop-filter: blur(4px);
          background: rgba(16,14,9,0.3);
        }
        .hero-strip-item {
          flex: 1;
          padding: 14px 20px;
          border-right: 1px solid rgba(250,247,242,0.07);
          display: flex; flex-direction: column; gap: 2px;
        }
        .hero-strip-item:last-child { border-right: none; }
        .hero-strip-label {
          font-family: 'DM Mono', monospace;
          font-size: 8px; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(250,247,242,0.3);
        }
        .hero-strip-value {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 12px;
          color: rgba(250,247,242,0.65);
        }

        @media (max-width: 540px) {
          .hero-strip { display: none; }
          .hero-scroll { bottom: 20px; }
          .hero-cta-row { flex-direction: column; }
          .hero-btn-primary, .hero-btn-ghost { width: 100%; justify-content: center; }
        }
      `}</style>

      <div ref={ref} className="hero-root">

        {/* ── Ambient floating particles ── */}
        {[
          { width: 6,  height: 6,  left: '12%', bottom: '20%', animationDuration: '14s', animationDelay: '0s'  },
          { width: 4,  height: 4,  left: '28%', bottom: '10%', animationDuration: '18s', animationDelay: '3s'  },
          { width: 8,  height: 8,  left: '55%', bottom: '15%', animationDuration: '12s', animationDelay: '1.5s'},
          { width: 5,  height: 5,  left: '72%', bottom: '25%', animationDuration: '20s', animationDelay: '5s'  },
          { width: 3,  height: 3,  left: '88%', bottom: '8%',  animationDuration: '16s', animationDelay: '2s'  },
          { width: 10, height: 10, left: '40%', bottom: '5%',  animationDuration: '22s', animationDelay: '7s'  },
        ].map((p, i) => <Particle key={i} style={p} />)}

        {/* ── Main content ── */}
        <div className="hero-content">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="hero-eyebrow"
          >
            <span className="hero-eyebrow-dot" />
            Est. 2019 · Kathmandu, Nepal
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.68, 0, 1], delay: 0.2 }}
            className="hero-heading"
          >
            {line1}<br />
            <em>{line2}</em>
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hero-divider"
          >
            <div className="hero-divider-line" />
            <span className="hero-divider-leaf">🌿</span>
            <div className="hero-divider-line" />
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-sub"
          >
            {text}
          </motion.p>

          {/* CTAs */}
          {showbutton && (
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.52 }}
              className="hero-cta-row"
            >
              <NavLink to="/reservation" className="hero-btn-primary">
                Grab a Cup
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </NavLink>
              <NavLink to="/menu" className="hero-btn-ghost">
                Explore Menu
              </NavLink>
            </motion.div>
          )}

        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="hero-scroll"
        >
          <span className="hero-scroll-text">Scroll</span>
          <div className="hero-scroll-track">
            <div className="hero-scroll-bar" />
          </div>
        </motion.div>

       
      </div>
    </>
  )
}