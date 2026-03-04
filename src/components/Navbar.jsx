
import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { NavLink, useLocation } from "react-router-dom"
import { Navbarlink } from '../data/NavLink';

// Pages that have a full-viewport hero image — keep white text
const HERO_PAGES = ['/', '/reservation'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // TRUE = this page has a dark hero bg → use white text
  // FALSE = light page (e.g. /menu) → use dark text
  const isHeroPage = HERO_PAGES.includes(pathname);

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto';
    return () => { document.body.style.overflowY = 'auto'; };
  }, [open]);

  // ── colour tokens derived from page type ─────────────────────────────────
  const textColor      = isHeroPage ? 'text-white'      : 'text-[#2c2416]';
  const iconColor      = isHeroPage ? '#ffffff'          : '#2c2416';
  const borderColor    = isHeroPage ? 'border-gray-500'  : 'border-[#e4ddd3]';
  const logoHover      = isHeroPage ? 'hover:text-white/80' : 'hover:text-[#3d5230]';

  // bg when mobile menu is open
  const mobileOpenBg   = isHeroPage ? 'bg-gray-600'     : 'bg-[#f0ece4]';
  const mobilePanelBg  = isHeroPage ? 'bg-gray-600'     : 'bg-[#f0ece4]';

  // underline accent colour on hover
  const underlineColor = isHeroPage ? 'bg-white'        : 'bg-[#3d5230]';

  return (
    <div className="relative">
      {/* ── Navbar bar ─────────────────────────────────────────────────────── */}
      <div className={`
        relative flex justify-between items-center h-[60px] w-full
        md:px-10 px-4 border-b md:border-0 ${borderColor} z-20
        ${open ? mobileOpenBg : ''}
      `}>
        {/* Logo */}
        <NavLink
          to='/'
          className={`cursor-pointer font-sans text-xl md:text-2xl font-bold transition-colors duration-200 ${textColor} ${logoHover}`}
        >
          Shrestha Café
        </NavLink>

        {/* Hamburger */}
        {open
          ? <CloseMenu setOpen={setOpen} textColor={textColor} />
          : <OpenMenu  setOpen={setOpen} textColor={textColor} />
        }

        {/* Desktop links */}
        <div className='hidden relative md:flex justify-center items-center gap-3 h-full px-5 rounded-t-xl'>
          <DesktopNavlink
            textColor={textColor}
            iconColor={iconColor}
            underlineColor={underlineColor}
          />
        </div>
      </div>

      {/* ── Mobile slide-down panel ────────────────────────────────────────── */}
      <div className={`
        absolute md:hidden flex justify-center items-center flex-col gap-5
        top-[60px] left-0 w-full h-[calc(100vh-60px)] z-10
        transition-all duration-500 ease-in-out
        ${mobilePanelBg}
        ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        <MobileNavlink
          setOpen={setOpen}
          textColor={textColor}
          iconColor={iconColor}
          underlineColor={underlineColor}
        />
      </div>
    </div>
  );
}

// ── Desktop nav links ─────────────────────────────────────────────────────────
function DesktopNavlink({ textColor, iconColor, underlineColor }) {
  return (
    <ul className="flex flex-col justify-center items-center gap-6 font-sans text-md md:flex-row">
      {Navbarlink.map((links, idx) => (
        <li key={idx}>
          <NavLink
            to={links.to}
            className={`group relative transition duration-300 ${textColor}`}
          >
            {links.title}
            <span className={`absolute bottom-0 left-0 h-0.5 w-0 ${underlineColor} transition-all duration-300 group-hover:w-full`} />
          </NavLink>
        </li>
      ))}
      <SocialIcons iconColor={iconColor} />
    </ul>
  );
}

// ── Mobile nav links ──────────────────────────────────────────────────────────
function MobileNavlink({ setOpen, textColor, iconColor, underlineColor }) {
  return (
    <ul className="flex flex-col justify-center items-center gap-6 font-sans text-md">
      {Navbarlink.map((links, idx) => (
        <li key={idx}>
          <NavLink
            to={links.to}
            onClick={() => setOpen(prev => !prev)}
            className={`group relative transition duration-300 ${textColor}`}
          >
            {links.title}
            <span className={`absolute bottom-0 left-0 h-0.5 w-0 ${underlineColor} transition-all duration-300 group-hover:w-full`} />
          </NavLink>
        </li>
      ))}
      <SocialIcons iconColor={iconColor} />
    </ul>
  );
}

// ── Social icons ──────────────────────────────────────────────────────────────
function SocialIcons({ iconColor }) {
  return (
    <div className='flex justify-center items-center gap-6'>
      <a href="" className="inline-flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-90">
        <Facebook size={20} color={iconColor} />
      </a>
      <a href="https://www.instagram.com/solveatlas.agency?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="inline-flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-90">
        <Instagram size={20} color={iconColor} />
      </a>
      <a href="" className="inline-flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-90">
        <Twitter size={20} color={iconColor} />
      </a>
    </div>
  );
}

// ── Hamburger icons ───────────────────────────────────────────────────────────
function OpenMenu({ setOpen, textColor }) {
  return (
    <div className={`p-2 cursor-pointer md:hidden ${textColor}`} onClick={() => setOpen(prev => !prev)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function CloseMenu({ setOpen, textColor }) {
  return (
    <div className={`p-2 cursor-pointer md:hidden ${textColor}`} onClick={() => setOpen(prev => !prev)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
  );
}