import React, { useState } from 'react'
import { NavLink } from 'react-router'

export default function NewsCard({ id, author, date, imageUrl, title, description }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${hovered ? '#b5c4a8' : '#e8e4dc'}`,
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 48px rgba(80,100,60,0.12)'
          : '0 2px 12px rgba(0,0,0,0.05)',
        transition: 'all 0.35s cubic-bezier(.22,.68,0,1.2)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 210, overflow: 'hidden', background: '#f2ede6', flexShrink: 0 }}>
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'transform 0.55s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        {/* Warm gradient at bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(255,252,246,0.5) 0%, transparent 50%)',
        }} />
        {/* Issue number badge */}
        <span style={{
          position: 'absolute', top: 13, right: 14,
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 10, fontWeight: 500,
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.85)',
          textShadow: '0 1px 4px rgba(0,0,0,0.35)',
        }}>
          {String(id).padStart(2, '0')}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>

        {/* Meta row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Date chip */}
          <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.07em',
            color: '#7a9968',
            background: '#edf0e8',
            padding: '3px 10px',
            borderRadius: 100,
          }}>
            {date}
          </span>
          <span style={{ color: '#d4cdc4', fontSize: 11 }}>·</span>
          <span style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: 12, fontWeight: 400,
            color: '#9e8f7a',
            fontStyle: 'italic',
          }}>
            {author}
          </span>
        </div>

        {/* Dashed divider */}
        <div style={{
          borderTop: `1px dashed ${hovered ? '#b5c4a8' : '#ddd8cf'}`,
          transition: 'border-color 0.3s',
        }} />

        {/* Title */}
        <h3 style={{
          margin: 0,
          fontFamily: "'Fraunces', serif",
          fontWeight: 400,
          fontSize: 19,
          color: '#2c2416',
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          margin: 0,
          fontFamily: "'DM Sans',sans-serif",
          fontWeight: 300,
          fontSize: 13,
          color: '#9e8f7a',
          lineHeight: 1.65,
          flex: 1,
        }}>
          {description}
        </p>

        {/* Read more indicator */}
        <NavLink style={{
          display: 'flex', alignItems: 'center', gap: 6,
          marginTop: 4,
          fontFamily: "'DM Sans',sans-serif",
          fontSize: 12, fontWeight: 500,
          color: hovered ? '#3d5230' : '#b8a898',
          transition: 'color 0.25s',
          letterSpacing: '0.04em',
        }}
        to='/news/shrestha-cafe-grand-opening'
        >
          Read more
          <svg
            width="12" height="12"
            viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: hovered ? 'translateX(3px)' : 'translateX(0)', transition: 'transform 0.25s' }}
          >
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </NavLink>
      </div>
    </article>
  )
}