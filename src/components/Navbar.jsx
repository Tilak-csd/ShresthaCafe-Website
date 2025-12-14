import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [open]);

  return (
    <div className="relative">
      {/* Navbar itself */}
      <div className={`relative flex justify-between items-center h-[60px] w-full md:px-10 px-4 border-b md:border-0 border-gray-500 z-20 ${open ? 'bg-gray-500' : ''}`}>
        <p className="cursor-pointer font-sans text-xl  md:text-2xl text-white font-bold">Shrestha Café</p>
        {open ? (<CloseMenu setOpen={setOpen} />) : (<OpenMenu setOpen={setOpen} />)}
        {/* Desktop Menu Navbar */}
        <div className='hidden relative md:flex justify-center items-center gap-3 h-full px-5 rounded-t-xl'>
          <NavLink />
        </div>
      </div>
      {/* Mobile Menu behind navbar */}
      <div
        className={`absolute md:hidden flex justify-center items-center flex-col gap-5 top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-gray-500 z-10 transition-all duration-500 ease-in-out text-black
          ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} `} >
        <MobileNavLink setOpen={setOpen} />
      </div>
    </div>
  );
}

function NavLink() {
  return (
    <ul className="flex flex-col justify-center items-center gap-6 font-sans text-md md:flex-row md:h-[full]  ">
      <li className=""><a href="#" className="group relative text-white transition duration-300">
        Home
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#menu" className="group relative text-white transition duration-300">
        Menu
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#reservation" className="group relative text-white transition duration-300">
        Reservations
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#" className="group relative text-white transition duration-300">
        News
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#getintouch" className="group relative text-white transition duration-300">
        Locations
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <div className='flex justify-center items-center gap-6'>
        <a href=""   className="inline-flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-90"><Facebook size={20} color='white' /></a>
        <a href=""   className="inline-flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-90"><Instagram size={20} color='white' /></a>
        <a href=""   className="inline-flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-90"><Twitter size={20} color='white' /></a>

      </div>

    </ul>
  );
}

// Navlink for Mobile
function MobileNavLink({setOpen}) {
  return (
    <ul className="flex flex-col justify-center items-center gap-6 font-sans text-md md:flex-row md:h-[full]  ">
      <li className=""><a onClick={()=> setOpen(prev => !prev)} href="#" className="group relative text-white transition duration-300">
        Home
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#menu" onClick={()=> setOpen(prev => !prev)} className="group relative text-white transition duration-300">
        Menu
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#reservation" onClick={()=> setOpen(prev => !prev)} className="group relative text-white transition duration-300">
        Reservations
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#" onClick={()=> setOpen(prev => !prev)} className="group relative text-white transition duration-300">
        News
        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <li className=""><a href="#getintouch" onClick={()=> setOpen(prev => !prev)} className="group relative text-white transition duration-300">
        Locations
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      </a>
      </li>
      <div className='flex justify-center items-center gap-6'>
        <a href=""   className="inline-flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-90"><Facebook size={20} color='white' /></a>
        <a href=""   className="inline-flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-90"><Instagram size={20} color='white' /></a>
        <a href=""   className="inline-flex items-center transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:opacity-90"><Twitter size={20} color='white' /></a>

      </div>

    </ul>
  );
}

function OpenMenu({ setOpen }) {
  return (
    <div className="p-2 cursor-pointer md:hidden text-white" onClick={() => setOpen(prev => !prev)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function CloseMenu({ setOpen }) {
  return (
    <div className="p-2 cursor-pointer md:hidden text-white" onClick={() => setOpen(prev => !prev)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </div>
  );
}