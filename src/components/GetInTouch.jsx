import { NavLink } from "react-router"
import { motion } from 'motion/react'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp  = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.68, 0, 1] } } }

// ── Info card ─────────────────────────────────────────────────────────────────
function InfoCard({ icon, label, lines, href }) {
  return (
    <motion.a
      variants={fadeUp}
      href={href || '#'}
      style={{ textDecoration: 'none' }}
    >
      <div className="git-info-card">
        <div className="git-icon-wrap">{icon}</div>
        <div>
          <p className="git-card-label">{label}</p>
          {lines.map((l, i) => (
            <p key={i} className="git-card-line" style={{ fontWeight: i === 0 ? 400 : 300 }}>{l}</p>
          ))}
        </div>
        {/* Hover arrow */}
        <svg className="git-card-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </div>
    </motion.a>
  )
}

export default function GetInTouch() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;1,9..144,200;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .git-section {
          font-family: 'DM Sans', sans-serif;
          width: 100%;
          background: #2c2416;
          position: relative;
          overflow: hidden;
          padding: 88px 0 96px;
        }

        /* ── Decorative background elements ── */
        .git-blob-1 {
          position: absolute; top: -80px; right: -80px;
          width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, rgba(61,82,48,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .git-blob-2 {
          position: absolute; bottom: -100px; left: -60px;
          width: 320px; height: 320px; border-radius: 50%;
          background: radial-gradient(circle, rgba(122,153,104,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .git-grain {
          position: absolute; inset: 0; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        /* ── Inner container ── */
        .git-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative; z-index: 2;
        }

        /* ── Layout: heading left, cards right ── */
        .git-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* ── Left: heading block ── */
        .git-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px; border-radius: 100px;
          border: 1px solid rgba(168,200,148,0.3);
          background: rgba(61,82,48,0.35);
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #a8c894; margin-bottom: 20px;
        }
        .git-heading {
          font-family: 'Fraunces', serif;
          font-weight: 200;
          font-size: clamp(40px, 5.5vw, 64px);
          color: #faf7f2;
          line-height: 1.0;
          letter-spacing: -0.02em;
          margin: 0 0 18px;
        }
        .git-heading em { font-style: italic; color: #a8c894; }
        .git-subtext {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 15px;
          color: rgba(250,247,242,0.55);
          line-height: 1.75; margin: 0 0 36px;
          max-width: 380px;
        }

        /* ── CTA button ── */
        .git-cta {
          display: inline-flex; align-items: center; gap: 9px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.08em;
          padding: 15px 36px; border-radius: 100px;
          background: #a8c894; color: #1a2614;
          border: none; text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(.22,.68,0,1.2);
        }
        .git-cta:hover {
          background: #faf7f2; color: #2c2416;
          box-shadow: 0 12px 36px rgba(168,200,148,0.3);
          transform: translateY(-3px);
        }
        .git-cta:active { transform: translateY(0); }

        /* ── Ghost secondary button ── */
        .git-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 400;
          letter-spacing: 0.06em;
          padding: 15px 32px; border-radius: 100px;
          border: 1px solid rgba(250,247,242,0.2);
          background: transparent; color: rgba(250,247,242,0.65);
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .git-ghost:hover {
          border-color: rgba(250,247,242,0.5);
          color: #faf7f2;
          background: rgba(250,247,242,0.07);
        }

        /* ── Info cards ── */
        .git-cards {
          display: flex; flex-direction: column; gap: 12px;
        }
        .git-info-card {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 20px;
          background: rgba(250,247,242,0.05);
          border: 1px solid rgba(250,247,242,0.1);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.28s ease;
          position: relative;
        }
        .git-info-card:hover {
          background: rgba(250,247,242,0.09);
          border-color: rgba(168,200,148,0.35);
          transform: translateX(4px);
        }
        .git-info-card:hover .git-card-arrow {
          opacity: 1; transform: translateX(0);
          color: #a8c894;
        }
        .git-icon-wrap {
          width: 42px; height: 42px; border-radius: 12px;
          background: rgba(61,82,48,0.5);
          border: 1px solid rgba(168,200,148,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; flex-shrink: 0;
        }
        .git-card-label {
          margin: 0 0 3px;
          font-family: 'DM Mono', monospace;
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #a8c894;
        }
        .git-card-line {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; color: rgba(250,247,242,0.8);
          line-height: 1.5;
        }
        .git-card-arrow {
          margin-left: auto; flex-shrink: 0;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.25s ease;
          color: #a8c894;
        }

        /* ── Bottom strip ── */
        .git-bottom-strip {
          margin-top: 64px;
          padding-top: 28px;
          border-top: 1px solid rgba(250,247,242,0.08);
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 16px;
        }
        .git-hours-pill {
          display: flex; align-items: center; gap: 8px;
        }
        .git-hours-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #a8c894;
          box-shadow: 0 0 0 3px rgba(168,200,148,0.2);
          animation: pulse 2.4s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(168,200,148,0.2); }
          50%       { box-shadow: 0 0 0 7px rgba(168,200,148,0.05); }
        }
        .git-hours-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 300;
          color: rgba(250,247,242,0.5);
        }
        .git-hours-text strong {
          color: rgba(250,247,242,0.75);
          font-weight: 400;
        }
        .git-social-row { display: flex; gap: 10px; }
        .git-social-btn {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(250,247,242,0.12);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.22s ease;
          color: rgba(250,247,242,0.45);
          text-decoration: none;
        }
        .git-social-btn:hover {
          border-color: #a8c894;
          color: #a8c894;
          background: rgba(168,200,148,0.1);
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 800px) {
          .git-layout { grid-template-columns: 1fr; gap: 44px; }
          .git-subtext { max-width: 100%; }
        }
        @media (max-width: 480px) {
          .git-section { padding: 64px 0 72px; }
          .git-bottom-strip { flex-direction: column; align-items: flex-start; gap: 14px; }
        }
      `}</style>

      <section className="git-section">
        <div className="git-blob-1" />
        <div className="git-blob-2" />
        <div className="git-grain" />

        <div className="git-inner">
          <div className="git-layout">

            {/* ── LEFT: Heading ── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: [0.22, 0.68, 0, 1] }}
            >
              <div className="git-eyebrow">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a8c894', display: 'inline-block' }} />
                Let's Connect
              </div>

              <h2 className="git-heading">
                Get in<br />
                <em>touch</em> with us
              </h2>

              <p className="git-subtext">
                Whether you have a question, want to make a reservation, or simply say hello — we'd love to hear from you. Our team will get back to you shortly.
              </p>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <NavLink to="/location" className="git-cta">
                  Contact Us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </NavLink>
                <NavLink to="/reservation" className="git-ghost">
                  Make a Reservation
                </NavLink>
              </div>
            </motion.div>

            {/* ── RIGHT: Info cards ── */}
            <motion.div
              className="git-cards"
              variants={stagger} initial="hidden"
              whileInView="show" viewport={{ once: true, amount: 0.25 }}
            >
              <InfoCard
                icon="📍"
                label="Visit Us"
                lines={["MachaPokhari, Kathmandu", "Nepal"]}
                href="https://maps.google.com"
              />
              <InfoCard
                icon="📞"
                label="Call Us"
                lines={["+977 9700004569"]}
                href="tel:+9779700004569"
              />
              <InfoCard
                icon="✉️"
                label="Email"
                lines={["info@shresthacafe.com"]}
                href="mailto:info@shresthacafe.com"
              />
              <InfoCard
                icon="🕐"
                label="Opening Hours"
                lines={["Mon – Sat: 8:00 AM – 9:00 PM", "Sunday: 9:00 AM – 8:00 PM"]}
              />
            </motion.div>

          </div>

          {/* ── Bottom strip ── */}
          <motion.div
            className="git-bottom-strip"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Live hours indicator */}
            <div className="git-hours-pill">
              <span className="git-hours-dot" />
              <span className="git-hours-text">
                Open today &nbsp;·&nbsp; <strong>8:00 AM – 9:00 PM</strong> &nbsp;·&nbsp; MachaPokhari, Kathmandu
              </span>
            </div>

            {/* Social links */}
            <div className="git-social-row">
              {/* Facebook */}
              <a href="#" className="git-social-btn" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/solveatlas.agency" target="_blank" rel="noreferrer" className="git-social-btn" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="git-social-btn" aria-label="X / Twitter">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}