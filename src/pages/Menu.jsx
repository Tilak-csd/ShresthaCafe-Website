import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Menu_cards from '../components/Menu_cards'
import Footer from '../components/Footer'

export default function Menu() {
    return (
        <>
            <Header>
                <Navbar />
                <HeroSection showbutton={false} heading={'Discover Our Café Menu'} text={'Explore our carefully curated selection of coffees, snacks, and sweet treats'} />
            </Header>
            <Menu_cards />
            <Footer />
            
        </>
    )
}
