import React from 'react'
import { menu_page } from '../data/menu'
import PriceCard from '../utils/PriceCard'
import { NavLink } from 'react-router'

export default function Menu_cards() {
    return (
        <section id='menu' className="w-full pt-20 pb-10 bg-white flex flex-col items-center justify-center gap-9">
            <div className='max-w-6xl mx-auto grid gap-8 px-4 md:grid-cols-3 my-10'>
                {menu_page.map((item) => {
                    return <PriceCard key={item.id} id={item.id} title={item.title} imageUrl={item.imageUrl} description={item.description} price={item.price} />
                })}
            </div>
            <NavLink to='/reservation' className="cursor-pointer rounded-full border border-black/80 px-6 py-3 text-black
        font-semibold tracking-wide bg-white/10 active:bg-black active:text-white hover:bg-black hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 ">
                Make a Reservation
            </NavLink>
        </section>
    )
}
