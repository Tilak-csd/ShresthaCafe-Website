import { NavLink } from "react-router"
import { Navbarlink } from "../data/NavLink"

const SOCIAL = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

const HOURS = [
  { day: 'Mon – Fri', time: '8:00 AM – 9:00 PM' },
  { day: 'Saturday',  time: '9:00 AM – 10:00 PM' },
  { day: 'Sunday',    time: '9:00 AM – 8:00 PM' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;1,9..144,200;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .ft {
          font-family: 'DM Sans', sans-serif;
          width: 100%;
          background: #100e09;
          color: #faf7f2;
          position: relative;
          overflow: hidden;
        }

        /* Decorative blobs */
        .ft-blob-1 {
          position: absolute; top: -120px; right: -100px;
          width: 420px; height: 420px; border-radius: 50%;
          background: radial-gradient(circle, rgba(61,82,48,0.22) 0%, transparent 70%);
          pointer-events: none;
        }
        .ft-blob-2 {
          position: absolute; bottom: 80px; left: -80px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(122,153,104,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Top brand strip ── */
        .ft-brand-strip {
          border-bottom: 1px solid rgba(250,247,242,0.07);
          padding: 52px 0 40px;
        }
        .ft-brand-inner {
          max-width: 1140px; margin: 0 auto; padding: 0 28px;
          display: flex; align-items: flex-end;
          justify-content: space-between; gap: 24px; flex-wrap: wrap;
        }
        .ft-brand-name {
          font-family: 'Fraunces', serif;
          font-weight: 300;
          font-size: clamp(42px, 6vw, 72px);
          color: #faf7f2;
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .ft-brand-name em { font-style: normal; color: #faf7f2; }
        .ft-tagline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 14px;
          color: rgba(250,247,242,0.45);
          max-width: 280px; line-height: 1.7; margin: 0;
          text-align: right;
        }

        /* ── Main grid ── */
        .ft-grid {
          max-width: 1140px; margin: 0 auto;
          padding: 44px 28px 52px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 40px;
          position: relative; z-index: 1;
        }

        /* ── Column headings ── */
        .ft-col-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #7a9968; margin: 0 0 18px;
        }

        /* ── Brand col ── */
        .ft-brand-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 13.5px;
          color: rgba(250,247,242,0.45);
          line-height: 1.75; margin: 0 0 24px;
        }
        .ft-social-row { display: flex; gap: 8px; }
        .ft-social-btn {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(250,247,242,0.1);
          background: transparent; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: rgba(250,247,242,0.4);
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .ft-social-btn:hover {
          border-color: #a8c894;
          color: #a8c894;
          background: rgba(168,200,148,0.08);
          transform: translateY(-2px);
        }

        /* ── Nav links ── */
        .ft-nav-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .ft-nav-list a {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 13.5px;
          color: rgba(250,247,242,0.5);
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
          display: flex; align-items: center; gap: 6px;
        }
        .ft-nav-list a::before {
          content: '';
          width: 0; height: 1px;
          background: #a8c894;
          transition: width 0.22s ease;
          flex-shrink: 0;
        }
        .ft-nav-list a:hover { color: #faf7f2; }
        .ft-nav-list a:hover::before { width: 12px; }

        /* ── Contact lines ── */
        .ft-contact-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .ft-contact-item {
          display: flex; align-items: flex-start; gap: 9px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 13px;
          color: rgba(250,247,242,0.5);
          line-height: 1.55;
        }
        .ft-contact-item a {
          color: rgba(250,247,242,0.5); text-decoration: none;
          transition: color 0.2s;
        }
        .ft-contact-item a:hover { color: #a8c894; }
        .ft-contact-icon {
          font-size: 14px; flex-shrink: 0; margin-top: 1px; opacity: 0.7;
        }

        /* ── Hours ── */
        .ft-hours-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .ft-hours-row {
          display: flex; flex-direction: column; gap: 1px;
        }
        .ft-hours-day {
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 0.08em;
          color: rgba(250,247,242,0.35); text-transform: uppercase;
        }
        .ft-hours-time {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 13px;
          color: rgba(250,247,242,0.6);
        }

        /* ── Status pill ── */
        .ft-status {
          display: inline-flex; align-items: center; gap: 7px;
          margin-top: 18px;
          padding: 6px 13px; border-radius: 100px;
          border: 1px solid rgba(168,200,148,0.2);
          background: rgba(61,82,48,0.25);
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase;
          color: #a8c894;
        }
        .ft-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #a8c894;
          animation: ftpulse 2.4s ease-in-out infinite;
        }
        @keyframes ftpulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(168,200,148,0.2); }
          50%       { box-shadow: 0 0 0 5px rgba(168,200,148,0.04); }
        }

        /* ── Bottom bar ── */
        .ft-bottom {
          border-top: 1px solid rgba(250,247,242,0.07);
          padding: 20px 28px;
          max-width: 1140px; margin: 0 auto;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 10px;
        }
        .ft-copy {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 12px;
          color: rgba(250,247,242,0.25);
        }
        .ft-copy span { color: rgba(250,247,242,0.4); }
        .ft-made {
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em;
          color: rgba(250,247,242,0.2);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ft-grid { grid-template-columns: 1fr 1fr; gap: 36px 32px; }
          .ft-tagline { text-align: left; }
        }
        @media (max-width: 560px) {
          .ft-brand-strip { padding: 40px 0 32px; }
          .ft-brand-inner { flex-direction: column; align-items: flex-start; }
          .ft-tagline { text-align: left; max-width: 100%; }
          .ft-grid { grid-template-columns: 1fr; gap: 28px; padding: 36px 28px 44px; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 6px; }
        }
      `}</style>

      <footer className="ft">
        <div className="ft-blob-1" />
        <div className="ft-blob-2" />

        {/* ── Brand headline strip ── */}
        <div className="ft-brand-strip">
          <div className="ft-brand-inner">
            <h2 className="ft-brand-name">
              Shrestha Café
            </h2>
            <p className="ft-tagline">
              A place where every cup feels like home. Thoughtfully crafted coffee, refined flavours, warm hospitality.
            </p>
          </div>
        </div>

        {/* ── 4-column grid ── */}
        <div className="ft-grid">

          {/* Col 1: Brand + social */}
          <div>
            <p className="ft-col-label">About</p>
            <p className="ft-brand-desc">
              Founded in Kathmandu, Shrestha Café is more than a coffee shop — it's a neighbourhood gathering place, built around honest food and genuine care.
            </p>
            <div className="ft-social-row">
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} className="ft-social-btn" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div>
            <p className="ft-col-label">Navigate</p>
            <ul className="ft-nav-list">
              {Navbarlink.map((link, idx) => (
                <li key={idx}>
                  <NavLink to={link.to}>{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="ft-col-label">Contact</p>
            <ul className="ft-contact-list">
              <li className="ft-contact-item">
                <span className="ft-contact-icon">📍</span>
                <span>MachaPokhari, Kathmandu<br />Nepal</span>
              </li>
              <li className="ft-contact-item">
                <span className="ft-contact-icon">📞</span>
                <a href="tel:+9779700004569">+977 9700004569</a>
              </li>
              <li className="ft-contact-item">
                <span className="ft-contact-icon">✉️</span>
                <a href="mailto:info@shresthacafe.com">info@shresthacafe.com</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Hours */}
          <div>
            <p className="ft-col-label">Hours</p>
            <ul className="ft-hours-list">
              {HOURS.map((h, i) => (
                <li key={i} className="ft-hours-row">
                  <span className="ft-hours-day">{h.day}</span>
                  <span className="ft-hours-time">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="ft-status">
              <span className="ft-status-dot" />
              Open Now
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(250,247,242,0.07)', padding: '0 28px' }}>
          <div className="ft-bottom" style={{ maxWidth: 1140, margin: '0 auto', padding: '20px 0' }}>
            <p className="ft-copy">
              © {year} <span>Shrestha Café</span>. All rights reserved.
            </p>
            {/* <p className="ft-made">Made with ☕ in Kathmandu</p> */}
          </div>
        </div>

      </footer>
    </>
  )
}