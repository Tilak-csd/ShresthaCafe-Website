import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router'

export default function Shrestha_Cafe_Grand_Opening() {
  const [scrollY, setScrollY] = useState(0)
  const [readProgress, setReadProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
      const doc = document.documentElement
      const scrollTop = window.scrollY
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      setReadProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,200;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .blog-root {
          font-family: 'DM Sans', sans-serif;
          background: #faf7f2;
          min-height: 100vh;
          color: #2c2416;
        }

        /* Reading progress bar */
        .read-bar {
          position: fixed; top: 0; left: 0; height: 3px;
          background: linear-gradient(to right, #3d5230, #7a9968);
          z-index: 100;
          transition: width 0.1s linear;
        }

        /* Hero */
        .blog-hero {
          position: relative;
          width: 100%;
          height: clamp(420px, 60vh, 620px);
          overflow: hidden;
        }
        .blog-hero img {
          width: 100%; height: 100%; object-fit: cover;
          transform: translateY(calc(var(--parallax) * 0.3px));
          will-change: transform;
          filter: brightness(0.62) saturate(0.9);
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(20,16,10,0.1) 0%,
            rgba(20,16,10,0.55) 60%,
            rgba(20,16,10,0.82) 100%
          );
        }
        .hero-content {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: clamp(28px, 5vw, 56px);
          max-width: 860px;
          margin: 0 auto;
        }

        /* Category pill */
        .cat-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(61,82,48,0.85);
          color: #d4e8c8;
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 5px 13px; border-radius: 100px;
          margin-bottom: 18px;
          backdrop-filter: blur(6px);
        }

        .hero-title {
          font-family: 'Fraunces', serif;
          font-weight: 300;
          font-size: clamp(32px, 5.5vw, 62px);
          color: #faf7f2;
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .hero-title em { font-style: italic; color: #a8c894; }

        .hero-meta {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
        }
        .hero-meta-item {
          display: flex; align-items: center; gap: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 400;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.03em;
        }
        .hero-meta-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.3); }

        /* Article body */
        .article-wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Floating share strip */
        .share-strip {
          position: sticky; top: 24px;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          padding: 14px 10px;
          background: #fff;
          border: 1px solid #e4ddd3;
          border-radius: 100px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .share-btn {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid #e4ddd3;
          background: transparent;
          cursor: pointer;
          transition: all 0.22s ease;
          color: #9e8f7a;
        }
        .share-btn:hover { background: #3d5230; border-color: #3d5230; color: #fff; transform: scale(1.08); }
        .share-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase;
          color: #b8a898; writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        /* Body prose */
        .prose-section {
          padding: 56px 0 80px;
        }
        .prose-lead {
          font-family: 'Fraunces', serif;
          font-weight: 300; font-style: italic;
          font-size: clamp(18px, 2.5vw, 22px);
          color: '#4a3c2e';
          line-height: 1.65;
          border-left: 3px solid #3d5230;
          padding-left: 22px;
          margin-bottom: 36px;
          color: #4a3c2e;
        }
        .prose-h2 {
          font-family: 'Fraunces', serif;
          font-weight: 400;
          font-size: clamp(22px, 3vw, 28px);
          color: #2c2416;
          margin: 44px 0 16px;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .prose-h2 em { font-style: italic; color: #5a7a48; }
        .prose-p {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 16px;
          color: '#6b5c45';
          line-height: 1.85;
          margin-bottom: 22px;
          color: #6b5c45;
        }
        .prose-p strong { font-weight: 600; color: #2c2416; }

        /* Pull quote */
        .pull-quote {
          margin: 44px 0;
          padding: 32px 36px;
          background: #f0ece4;
          border-radius: 16px;
          border: 1px solid #ddd8cf;
          position: relative;
        }
        .pull-quote::before {
          content: '"';
          font-family: 'Fraunces', serif;
          font-size: 80px; line-height: 0.7;
          color: #b5c4a8;
          position: absolute; top: 28px; left: 28px;
        }
        .pull-quote p {
          font-family: 'Fraunces', serif;
          font-weight: 300; font-style: italic;
          font-size: clamp(17px, 2.5vw, 21px);
          color: '#3a2e1e';
          line-height: 1.55;
          padding-left: 28px;
          color: #3a2e1e;
        }
        .pull-quote cite {
          display: block; margin-top: 12px; padding-left: 28px;
          font-family: 'DM Mono', monospace;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: #9e8f7a; font-style: normal;
        }

        /* Highlight box */
        .highlight-box {
          background: #edf0e8;
          border: 1px solid #c8d8bc;
          border-radius: 14px;
          padding: 24px 28px;
          margin: 36px 0;
          display: flex; gap: 16px; align-items: flex-start;
        }
        .highlight-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: #3d5230;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 18px;
        }
        .highlight-box h4 {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600; font-size: 14px;
          color: '#2c2416'; margin-bottom: 6px;
          color: #2c2416;
        }
        .highlight-box p {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: 13.5px;
          color: '#5a7a48'; line-height: 1.65; margin: 0;
          color: #4a6338;
        }

        /* Details grid */
        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 14px;
          margin: 36px 0;
        }
        .detail-card {
          background: #fff;
          border: 1px solid #e4ddd3;
          border-radius: 12px;
          padding: 18px 20px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .detail-card:hover {
          border-color: #b5c4a8;
          box-shadow: 0 4px 16px rgba(61,82,48,0.08);
        }
        .detail-card .dc-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase;
          color: #9e8f7a; margin-bottom: 6px;
        }
        .detail-card .dc-value {
          font-family: 'Fraunces', serif;
          font-weight: 400; font-size: 16px;
          color: '#2c2416';
          color: #2c2416;
          line-height: 1.3;
        }

        /* Thin rule */
        .thin-rule { border: none; border-top: 1px dashed #ddd8cf; margin: 40px 0; }

        /* Author card */
        .author-card {
          display: flex; gap: 18px; align-items: center;
          background: #fff;
          border: 1px solid #e4ddd3;
          border-radius: 16px;
          padding: 22px 24px;
          margin: 48px 0 0;
        }
        .author-avatar {
          width: 52px; height: 52px; border-radius: 50%;
          background: linear-gradient(135deg, #3d5230, #7a9968);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Fraunces', serif; font-size: 22px; color: #faf7f2;
          flex-shrink: 0;
        }
        .author-name {
          font-family: 'Fraunces', serif; font-weight: 400; font-size: 17px;
          color: '#2c2416'; color: #2c2416;
        }
        .author-role {
          font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 13px;
          color: '#9e8f7a'; color: #9e8f7a; margin-top: 2px;
        }

        /* Tags */
        .tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 36px; }
        .tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
          padding: 5px 13px; border-radius: 100px;
          border: 1.5px solid #d0dac8;
          color: '#5a7a48'; color: #5a7a48;
          background: transparent;
          transition: all 0.2s;
          cursor: pointer;
        }
        .tag:hover { background: #3d5230; border-color: #3d5230; color: #fff; }

        /* Back link */
        .back-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          color: '#3d5230'; color: #3d5230;
          text-decoration: none;
          padding: 10px 20px;
          border: 1.5px solid #c8d8bc;
          border-radius: 100px;
          background: #edf0e8;
          transition: all 0.22s;
          margin-top: 48px;
          cursor: pointer;
        }
        .back-link:hover { background: #3d5230; color: #fff; border-color: #3d5230; }

        /* Layout */
        .content-columns {
          display: grid;
          grid-template-columns: 1fr 56px;
          gap: 40px;
          max-width: 820px;
          margin: 0 auto;
          padding: 0 24px;
        }
        @media (max-width: 680px) {
          .content-columns { grid-template-columns: 1fr; }
          .share-strip { display: none; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-1 { animation: fadeUp 0.55s ease 0.1s both; }
        .fade-2 { animation: fadeUp 0.55s ease 0.22s both; }
        .fade-3 { animation: fadeUp 0.55s ease 0.34s both; }
      `}</style>

      <div className="blog-root">

        {/* Reading progress */}
        <div className="read-bar" style={{ width: `${readProgress}%` }} />

        {/* ── HERO ── */}
        <div className="blog-hero">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=80"
            alt="Shrestha Café new branch"
            style={{ '--parallax': scrollY }}
          />
          <div className="hero-overlay" />
          <div className="hero-content fade-1">
            <div className="cat-pill">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>
              Grand Opening · News
            </div>
            <h1 className="hero-title">
              Grand Opening of Our<br />
              <em>New Café Branch</em>
            </h1>
            <div className="hero-meta">
              <span className="hero-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                March 4, 2026
              </span>
              <span className="hero-meta-dot" />
              <span className="hero-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Shrestha Café Team
              </span>
              <span className="hero-meta-dot" />
              <span className="hero-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                5 min read
              </span>
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="content-columns" style={{ marginTop: 56 }}>

          {/* Main prose */}
          <div className="prose-section fade-2">

            <p className="prose-lead">
              We're excited to announce the grand opening of our new branch, bringing your favourite coffee and cozy vibes to a brand new location.
            </p>

            <h2 className="prose-h2">A New Chapter for <em>Shrestha Café</em></h2>
            <p className="prose-p">
              After months of careful planning, heartfelt conversations with our community, and more than a few late nights over espresso, we are thrilled to open the doors of our newest location. This branch carries everything you love about Shrestha Café — the warmth, the aromas, the honest food — and brings it closer to even more of you.
            </p>
            <p className="prose-p">
              From the moment you walk in, you'll recognise the familiar touch: <strong>handcrafted wooden shelves</strong>, soft lighting that feels like late afternoon, locally sourced plants lining the windows, and of course, the smell of freshly ground beans drifting through every corner.
            </p>

            <div className="pull-quote">
              <p>Every cup we serve is a small act of care. This new branch is our way of extending that care to a whole new neighbourhood.</p>
              <cite>— Shrestha Café Founder</cite>
            </div>

            <h2 className="prose-h2">What to <em>Expect</em></h2>
            <p className="prose-p">
              The new branch brings everything our regulars love, with a few exciting additions exclusive to this location. Our full espresso bar, single-origin pour-overs, and seasonal specials will all be on the menu from day one. The kitchen will serve our beloved all-day brunch menu, including fresh-baked pastries made in-house each morning.
            </p>
            <p className="prose-p">
              We've also introduced a <strong>community corner</strong> — a dedicated space for local artists, small events, book swaps, and weekend workshops. Because we believe a great café is more than just a great cup.
            </p>

            <div className="highlight-box">
              <div className="highlight-icon">🎉</div>
              <div>
                <h4>Opening Week Specials</h4>
                <p>Enjoy 20% off all drinks during opening week. Follow us on Instagram for daily giveaways, live music announcements, and exclusive early-bird offers throughout the celebrations.</p>
              </div>
            </div>

            <h2 className="prose-h2">Opening Day <em>Details</em></h2>
            <p className="prose-p">
              Mark your calendars and bring your people. We'd love to see familiar faces and welcome new ones. There will be complimentary tastings, a special opening-day menu, and a warm seat waiting for you.
            </p>

            <div className="details-grid">
              <div className="detail-card">
                <div className="dc-label">Date</div>
                <div className="dc-value">Saturday, March 15, 2026</div>
              </div>
              <div className="detail-card">
                <div className="dc-label">Opening Time</div>
                <div className="dc-value">7:00 AM onwards</div>
              </div>
              <div className="detail-card">
                <div className="dc-label">Location</div>
                <div className="dc-value">Lakeside, Pokhara</div>
              </div>
              <div className="detail-card">
                <div className="dc-label">Daily Hours</div>
                <div className="dc-value">7 AM – 9 PM</div>
              </div>
            </div>

            <hr className="thin-rule" />

            <h2 className="prose-h2">Thank You for Being <em>Part of This</em></h2>
            <p className="prose-p">
              None of this would be possible without the incredible community that has supported us from the very beginning. Every visit, every shared post, every kind word — it all adds up to something real. This new branch is as much yours as it is ours.
            </p>
            <p className="prose-p">
              We can't wait to welcome you through our new doors. Come as you are. Stay as long as you like. The coffee's always on.
            </p>

            {/* Tags */}
            <div className="tag-row">
              {['Grand Opening', 'New Branch', 'Café News', 'Pokhara', 'Community'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {/* Author */}
            <div className="author-card">
              <div className="author-avatar">S</div>
              <div>
                <div className="author-name">Shrestha Café Team</div>
                <div className="author-role">Behind every cup, there's a story. This is ours.</div>
              </div>
            </div>

            {/* Back to news */}
            <NavLink to="/news" className="back-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to all stories
            </NavLink>

          </div>

          {/* Floating share column */}
          <div>
            <div className="share-strip" style={{ marginTop: 8 }}>
              <span className="share-label">Share</span>
              {/* Twitter/X */}
              <button className="share-btn" title="Share on X" onClick={() => window.open(`https://twitter.com/intent/tweet?text=Grand Opening of Shrestha Café's New Branch!&url=${window.location.href}`)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </button>
              {/* Facebook */}
              <button className="share-btn" title="Share on Facebook" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </button>
              {/* Copy link */}
              <button className="share-btn" title="Copy link" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </button>
            </div>
          </div>

        </div>

        {/* ── Bottom spacer ── */}
        <div style={{ height: 80 }} />
      </div>
    </>
  )
}