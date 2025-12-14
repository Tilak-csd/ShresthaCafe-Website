import React from 'react'

export default function Kitchen() {
    return (
        <div className='relative h-[50vh] bg-cover bg-center bg-no-repeat w-full' style={{ backgroundImage: "url('./Kitchen.jpg')" }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 flex justify-center items-center flex-col w-full h-full">
                <h1 className="font-bold text-center text-5xl text-white w-[90%] md:text-6xl leading-13 md:leading-15 lg:text-7xl lg:w-[70%] lg:leading-20">
                THE KITCHEN
            </h1>
            </div>
        </div>
    )
}
