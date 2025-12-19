import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Destination() {
    return (
        <section id="reservation" className="min-h-screen w-full grid grid-rows-[auto_auto_1fr]">

            {/* Heading */}
            <h1
                className="text-center font-bold text-3xl md:text-4xl xl:text-5xl mt-16"
            >
                A DESTINATION
            </h1>

            {/* Description */}
            <p

                className="max-w-3xl mx-auto text-center leading-relaxed text-gray-600 px-4 mt-6"
            >
                We serve as a premier destination offering a refined environment for discerning patrons.
                Our space is thoughtfully curated to support productivity, meaningful conversations,
                and the enjoyment of high-quality artisan beverages.
            </p>

            {/* Image Section */}
            <div

                className="relative w-full h-full bg-cover bg-center mt-10"
                style={{ backgroundImage: "url('./destination.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Content */}
                <div

                    className="relative z-20 h-full flex flex-col items-center justify-center gap-7 px-4"
                >
                    <h1
                        className="section-heading-title text-white"
                    >
                        EAT TOGETHER
                    </h1>

                    <p

                        className="text-center text-white/90 max-w-2xl text-lg"
                    >
                        Every plate achieves that exclusive, cuisine-defining balance of sweet,
                        salty, and sour delight.
                    </p>

                    <NavLink
                        to='/reservation'
                        className="curved-button">
                        Make a Reservation
                    </NavLink>
                </div>
            </div>

        </section>
    );
}
