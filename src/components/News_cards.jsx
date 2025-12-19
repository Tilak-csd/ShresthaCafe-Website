import React from 'react'
import { newsData } from '../data/news'
import NewsCard from '../utlis/NewsCard'
import FAQ from '../utlis/FAQCompnents'
import { NavLink } from 'react-router'


export default function News_cards() {
    return (
        <section id='news' className="w-full pt-20 pb-10 bg-white flex flex-col items-center justify-center gap-9">
            <div className='max-w-6xl mx-auto grid gap-8 px-4 md:grid-cols-3 my-10'>
                {newsData.map((item) => {
                    return <NewsCard id={item.id} title={item.title} imageUrl={item.imageUrl} description={item.description} author={item.author} date={item.date} />
                })}
            </div>
            <FAQ />
            <NavLink to='/location' className='curved-button border-black text-black hover:bg-black hover:text-white'>
                 Visit Us   
            </NavLink>

        </section>
    )
}
