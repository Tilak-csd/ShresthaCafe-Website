import React, { useState } from 'react'
import { motion } from 'motion/react'
import { staff } from '../data/KitchenStaff'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } }
const cardAnim  = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.68, 0, 1] } } }

// Decorative quote mark
const QuoteMark = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" style={{ flexShrink: 0 }}>
    <path d="M0 22V13.2C0 5.87 4.2 1.47 12.6 0l1.4 2.2C9.8 3.13 7.47 5.6 7 9.6H12.6V22H0ZM15.4 22V13.2C15.4 5.87 19.6 1.47 28 0l1.4 2.2C25.2 3.13 22.87 5.6 22.4 9.6H28V22H15.4Z" fill="#d0dac8"/>
  </svg>
)

function ChefCard({ member, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={cardAnim}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        border: `1px solid ${hovered ? '#b5c4a8' : '#e8e4dc'}`,
        boxShadow: hovered ? '0 24px 56px rgba(80,100,60,0.13)' : '0 2px 12px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.38s cubic-bezier(.22,.68,0,1.2)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image band */}
      <div style={{
        position: 'relative',
        height: 260,
        overflow: 'hidden',
        background: '#f2ede6',
        flexShrink: 0,
      }}>
        <img
          src={member.image}
          alt={member.name}
          fetchPriority={index === 0 ? 'high' : 'auto'}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'top',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
        {/* Bottom fade */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(255,252,246,0.65) 0%, transparent 55%)',
          pointerEvents: 'none',
        }} />
        {/* Index badge */}
        <span style={{
          position: 'absolute', top: 14, right: 16,
          fontFamily: "'DM Mono',monospace", fontSize: 10,
          color: 'rgba(255,255,255,0.8)',
          textShadow: '0 1px 4px rgba(0,0,0,0.4)',
          letterSpacing: '0.06em',
        }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        {/* Role pill — floats on image bottom */}
        <div style={{
          position: 'absolute', bottom: 14, left: 14,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(250,247,242,0.9)',
          border: '1px solid #e4ddd3',
          borderRadius: 100, padding: '5px 12px',
          backdropFilter: 'blur(6px)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3d5230', flexShrink: 0 }} />
          <span style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 9, fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#3d5230',
          }}>
            {member.position}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        <h3 style={{
          fontFamily: "'Fraunces',serif",
          fontWeight: 400, fontSize: 22,
          color: '#2c2416', lineHeight: 1.15,
          letterSpacing: '-0.01em', margin: 0,
        }}>
          {member.name}
        </h3>

        <div style={{ borderTop: `1px dashed ${hovered ? '#b5c4a8' : '#ddd8cf'}`, transition: 'border-color 0.3s' }} />

        {/* Slogan with quote marks */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', flex: 1 }}>
          <QuoteMark />
          <p style={{
            fontFamily: "'DM Sans',sans-serif",
            fontWeight: 300, fontStyle: 'italic',
            fontSize: 13.5, color: '#7a6a5e',
            lineHeight: 1.7, margin: 0,
          }}>
            {member.slogans}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ChefsSection() {
  // Only show first 3 staff members
  const displayStaff = staff.slice(0, 3)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;1,9..144,200;1,9..144,300;1,9..144,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .chefs-section { font-family: 'DM Sans', sans-serif; }

        .chefs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        @media (max-width: 860px) {
          .chefs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .chefs-section { padding: 56px 0 72px !important; }
          .chefs-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }
      `}</style>

      <section className="chefs-section" style={{
        width: '100%',
        background: '#faf7f2',
        padding: '80px 0 96px',
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px' }}>

          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }}
            style={{ marginBottom: 56 }}
          >
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ height: 1, background: '#e4ddd3', width: 40, flexShrink: 0 }} />
              <span style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 10, fontWeight: 500,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: '#7a9968', whiteSpace: 'nowrap',
              }}>
                👨‍🍳 &nbsp; The People Behind Every Plate
              </span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #e4ddd3, transparent)' }} />
            </div>

            {/* Heading + subtitle */}
            <div style={{ maxWidth: 600 }}>
              <h2 style={{
                fontFamily: "'Fraunces',serif",
                fontWeight: 300,
                fontSize: 'clamp(38px, 5.5vw, 64px)',
                color: '#2c2416',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                margin: '0 0 16px',
              }}>
                Meet our <em style={{ fontStyle: 'italic', color: '#5a7a48' }}>chefs</em>
              </h2>
              <p style={{
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 300, fontSize: 15,
                color: '#9e8f7a', margin: 0, lineHeight: 1.75,
              }}>
                Skilled, passionate, and deeply committed to honest cooking — our team brings flavour and care to every dish, every single day.
              </p>
            </div>
          </motion.div>

          {/* ── Chef cards ── */}
          <motion.div
            className="chefs-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {displayStaff.map((member, idx) => (
              <ChefCard key={idx} member={member} index={idx} />
            ))}
          </motion.div>

          {/* ── Bottom decorative note ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              marginTop: 56,
              padding: '18px 22px',
              background: '#edf0e8',
              borderRadius: 14,
              border: '1px solid #d0dac8',
              display: 'flex', alignItems: 'center', gap: 14,
              maxWidth: "100%",
            }}
          >
            <span style={{ fontSize: 22, flexShrink: 0 }}>🌿</span>
            <p style={{
              margin: 0,
              fontFamily: "'DM Sans',sans-serif",
              fontWeight: 300, fontSize: 13.5,
              color: '#4a6338', lineHeight: 1.65,
            }}>
              Our kitchen team works closely with local farmers to source the freshest seasonal ingredients — because great food starts long before it reaches the plate.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  )
}