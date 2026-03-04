import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Menu_cards from '../components/Menu_cards'
import Footer from '../components/Footer'
import Header_sub from '../components/Header_sub'
import Chatbot from '../components/ChatBot/ChatBot'


export default function Menu() {
    return (
        <>
            
                <Navbar />
                
            <Menu_cards />
            <Footer />
            <Chatbot />
            
        </>
    )
}
