import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

export default function Kitchen() {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      setScrollY(-rect.top * 0.28)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100;0,9..144,200;0,9..144,300;1,9..144,100;1,9..144,200;1,9..144,300&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

        .kitchen-hero {
          position: relative;
          width: 100%;
          height: clamp(380px, 60vh, 620px);
          overflow: hidden;
        }
        .kitchen-parallax {
          position: absolute;
          top: -15%; left: 0;
          width: 100%; height: 130%;
          background-image: url('./Kitchen.avif');
          background-size: cover;
          background-position: center;
          will-change: transform;
        }
        .kitchen-overlay-1 {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(20,16,10,0.60) 0%, rgba(30,22,12,0.38) 55%, rgba(20,16,10,0.72) 100%);
        }
        .kitchen-overlay-2 {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(20,36,16,0.42) 0%, transparent 55%);
        }
        .kitchen-content {
          position: relative; z-index: 10;
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 18px; padding: 0 24px;
          text-align: center;
        }
        .kitchen-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 16px; border-radius: 100px;
          border: 1px solid rgba(168,200,148,0.4);
          background: rgba(61,82,48,0.3);
          backdrop-filter: blur(6px);
          font-family: 'DM Mono', monospace;
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #a8c894;
        }
        .kitchen-title {
          font-family: 'Fraunces', serif;
          font-weight: 100;
          font-size: clamp(52px, 9vw, 110px);
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #faf7f2;
          margin: 0;
        }
        .kitchen-title em { font-style: italic; color: #a8c894; }
        .kitchen-sub {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300; font-size: clamp(13px, 1.8vw, 16px);
          color: rgba(255,255,255,0.6);
          max-width: 420px; line-height: 1.7; margin: 0;
        }
        /* bottom fade into next section */
        .kitchen-fade {
          position: absolute; bottom: 0; left: 0; right: 0; height: 90px;
          background: linear-gradient(to bottom, transparent, #faf7f2);
          pointer-events: none;
        }
      `}</style>

      <div ref={ref} className="kitchen-hero">
        <div className="kitchen-parallax" style={{ transform: `translateY(${scrollY}px)` }} />
        <div className="kitchen-overlay-1" />
        <div className="kitchen-overlay-2" />

        <div className="kitchen-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut' }}
            className="kitchen-eyebrow"
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a8c894', display: 'inline-block' }} />
            Crafted with passion · Shrestha Café
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 0.68, 0, 1], delay: 0.1 }}
            className="kitchen-title"
          >
            The <em>Kitchen</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.22 }}
            className="kitchen-sub"
          >
            Where every dish begins — with honest ingredients, skilled hands, and a love for flavour.
          </motion.p>
        </div>

        <div className="kitchen-fade" />
      </div>
    </>
  )
}