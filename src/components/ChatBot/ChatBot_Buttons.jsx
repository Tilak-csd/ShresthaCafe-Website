import React from 'react'

export default function ChatBot_Buttons({ setIsOpen, isOpen }) {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
                isOpen 
                ? "bg-[#1c1a16] border border-[#2d2a24]" // Dark Espresso when open
                : "bg-amber-600 hover: hover:bg-amber-700 shadow-[0_10px_25px_rgba(217,119,6,0.3)]" // Warm Amber when closed
            } text-white p-3 cursor-pointer rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90`}
        >
            {isOpen ? (
                /* Sleek Close (X) Icon */
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                /* Coffee/Chat Icon */
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )}
        </button>
    )
}