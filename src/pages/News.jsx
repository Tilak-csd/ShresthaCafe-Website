import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Header_sub from '../components/Header_sub'
import News_cards from '../components/News_cards'
import Footer from '../components/Footer'
import Chatbot from '../components/ChatBot/ChatBot'


export default function News() {
    return (
        <>
            <Navbar />
            <News_cards />
            <Footer />
            <Chatbot />

        </>
    )
}
