import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Header_sub from '../components/Header_sub'
import News_cards from '../components/News_cards'
import Footer from '../components/Footer'

export default function News() {
    return (
        <>
            <Header_sub>
                <Navbar />
                <HeroSection heading={"NEWS"} showbutton={false} />
            </Header_sub>
            <News_cards />
            <Footer />

        </>
    )
}
