import React from 'react'
import { menu } from '../data/menu';

export default function Menu() {

    return (
        <section id='menu' className="w-full pt-20 pb-10 bg-white flex flex-col items-center justify-center gap-10">
            <div className="max-w-6xl mx-auto grid gap-8 px-4 md:grid-cols-3">

                {/* Card 1 */}
                {menu.map((items, idx) => {
                    return <div key={idx} className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                        <img
                            src={items.imageUrl}
                            alt={items.title}
                            loading='lazy'
                            className="h-56 w-full object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">{items.title}</h3>
                            <p className="text-gray-600 text-sm">
                               {items.description}
                            </p>
                        </div>
                    </div>
                })}

            </div>

            <button className="
                        cursor-pointer rounded-full border border-black/80 px-6 py-3 text-black
        font-semibold tracking-wide bg-white/10 active:bg-black active:text-white hover:bg-black hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 ">
                View Menu
            </button>
        </section>
    );
}

