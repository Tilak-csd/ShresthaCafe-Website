import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Reservation_HeroSection from '../components/Reservation_HeroSection'
import Reservation_form_mobile from '../components/Reservation_form_mobile'
import Footer from '../components/Footer'

export default function Reservation() {
    return (
        <>
            <Header bg='/reservation/bg-image.avif'>
                <Navbar />
                <Reservation_HeroSection />
            </Header>
            <Reservation_form_mobile />
            <Footer />
        </>
    )
}
