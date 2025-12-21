import React from 'react'
import { NavLink } from 'react-router'
// animation libary
import {motion} from 'motion/react'


export default function HeroSection({ showbutton = true, heading, text }) {
    return (
        <motion.div 
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:false, amount:0.6}}
        transition={{duration:.6, ease:"easeOut"}}

        className="flex justify-center items-center text-white w-full h-[calc(100vh-60px)] flex-col gap-5">
            {/* heading */}
            <h1 className='section-heading-title'>
                {heading}
            </h1>
            {/* short notes */}
            <p className='text-center text-[16px]'>
                {text}
            </p>
            {/* button if required */}
            {showbutton && <Button to={'/reservation'} />}
        </motion.div>
    )
}
function Button({ to }) {
    return <NavLink to={to} className="cursor-pointer rounded-md border border-white/80 px-6 py-3 text-white
        font-semibold tracking-wide bg-white/10 active:bg-white active:text-black hover:bg-white hover:text-black hover:shadow-xl hover:scale-105 transition-all duration-300 ">
        Grab a Cup
    </NavLink>
}
