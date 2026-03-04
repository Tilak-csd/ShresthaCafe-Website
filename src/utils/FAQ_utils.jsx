import React, { useState } from 'react'
import FAQData from '../data/FAQData'
import { motion } from 'motion/react'

export default function FAQ_utils() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section style={{
      width: '100%',
      background: '#f0ece4',
      borderRadius: 24,
      padding: 'clamp(36px, 6vw, 64px) clamp(24px, 5vw, 72px)',
      border: '1px solid #e4ddd3',
    }}>

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ marginBottom: 44, maxWidth: 520 }}
      >
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ fontSize: 18 }}>🌿</span>
          <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: '#7a9968',
          }}>
            Got Questions?
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 300,
          fontSize: 'clamp(32px, 4.5vw, 52px)',
          color: '#2c2416',
          margin: '0 0 14px',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
        }}>
          Frequently asked <em style={{ fontStyle: 'italic', color: '#5a7a48' }}>questions</em>
        </h2>
        <p style={{
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300, fontSize: 15,
          color: '#9e8f7a', margin: 0, lineHeight: 1.7,
        }}>
          Everything you need to know about visiting, reserving, and dining at Shrestha Café.
        </p>
      </motion.div>

      {/* ── Accordion list ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {FAQData.map((item, index) => {
          const isOpen = activeIndex === index
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.07 }}
              style={{
                background: isOpen ? '#fff' : '#faf7f2',
                border: `1.5px solid ${isOpen ? '#b5c4a8' : '#e4ddd3'}`,
                borderRadius: 14,
                overflow: 'hidden',
                transition: 'border-color 0.25s, background 0.25s, box-shadow 0.25s',
                boxShadow: isOpen ? '0 8px 28px rgba(61,82,48,0.09)' : 'none',
              }}
            >
              {/* Question row */}
              <button
                onClick={() => toggleAccordion(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 22px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                {/* Number + Question */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
                  <span style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 11, fontWeight: 600,
                    color: isOpen ? '#3d5230' : '#b8a898',
                    letterSpacing: '0.08em',
                    minWidth: 24,
                    transition: 'color 0.25s',
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontFamily: "'Fraunces',serif",
                    fontWeight: 400,
                    fontSize: 'clamp(15px, 2vw, 17px)',
                    color: isOpen ? '#2c2416' : '#4a3c2e',
                    lineHeight: 1.3,
                    transition: 'color 0.25s',
                  }}>
                    {item.question}
                  </span>
                </div>

                {/* Toggle icon */}
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  background: isOpen ? '#3d5230' : '#edf0e8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke={isOpen ? '#fff' : '#5a7a48'} strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"/>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              </button>

              {/* Answer — smooth height reveal */}
              <div style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.32s ease',
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{
                    padding: '0 22px 20px 60px',
                    fontFamily: "'DM Sans',sans-serif",
                    fontWeight: 300,
                    fontSize: 14,
                    color: '#7a6a5e',
                    lineHeight: 1.75,
                    borderTop: '1px dashed #ddd8cf',
                    paddingTop: 16,
                    marginTop: 0,
                  }}>
                    {item.answer}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* ── Bottom note ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          marginTop: 36,
          padding: '18px 22px',
          background: '#fff',
          borderRadius: 12,
          border: '1px solid #e4ddd3',
          display: 'flex', alignItems: 'center', gap: 12,
        }}
      >
        <span style={{ fontSize: 20 }}>☕</span>
        <p style={{
          margin: 0,
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300, fontSize: 13,
          color: '#9e8f7a', lineHeight: 1.65,
        }}>
          Still have questions?{' '}
          <a href="/location" style={{ color: '#3d5230', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid #3d5230' }}>
            Drop us a message
          </a>{' '}
          and we'll get back to you within 24 hours.
        </p>
      </motion.div>

    </section>
  )
}