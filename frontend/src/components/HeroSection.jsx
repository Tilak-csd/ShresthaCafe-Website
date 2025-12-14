import React from 'react'

export default function HeroSection() {
    return (
        <div className="flex justify-center items-center text-white w-full h-[calc(100vh-60px)] flex-col gap-5">
            <h1 className="font-bold text-5xl text-center w-[90%] md:text-6xl leading-13 md:leading-15 lg:text-7xl lg:w-[70%] lg:leading-20">

                Where Every Cup Feels Like Home
            </h1>
            <p className='text-center text-[16px]'>
                A cozy place where every sip is crafted with care, warmth, and the comfort of home.
            </p>
            <button className="
                        cursor-pointer rounded-md border border-white/80 px-6 py-3 text-white
        font-semibold tracking-wide bg-white/10 hover:bg-white hover:text-black hover:shadow-xl hover:scale-105 transition-all duration-300 ">
                Grab a Cup
            </button>
        </div>
    )
}
