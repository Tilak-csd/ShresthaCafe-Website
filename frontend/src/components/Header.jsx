import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

export default function Header() {
    return (
        <div className='relative min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./header.jpg')" }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <HeroSection />
            </div>

        </div>
    )
}
