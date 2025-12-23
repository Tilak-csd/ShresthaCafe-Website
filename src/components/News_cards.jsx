import React from 'react'
import { newsData } from '../data/news'
import NewsCard from '../utils/NewsCard'
import { NavLink } from 'react-router'
import FAQ_utils from '../utils/FAQ_utils'
import { motion } from 'motion/react'


export default function News_cards() {
    return (
        <section id='news' className="w-full pt-20 pb-10 bg-white flex flex-col items-center justify-center gap-9">
            <div className='max-w-6xl mx-auto grid gap-8 px-4 md:grid-cols-3 my-10'>
                {newsData.map((item) => {
                    return <motion.div key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: item.id* .15 }}
                    >
                        <NewsCard id={item.id} title={item.title} imageUrl={item.imageUrl} description={item.description} author={item.author} date={item.date} />
                    </motion.div>
                })}
            </div>
            <FAQ_utils />
            <NavLink to='/location' className='curved-button border-black text-black hover:bg-black hover:text-white'>
                Visit Us
            </NavLink>

        </section>
    )
}
