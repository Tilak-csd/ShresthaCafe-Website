import React from 'react'
import { Sparkles, ChevronDown, Calendar, Users, User, Coffee } from 'lucide-react';

export default function Reservation_form_mobile() {
    const reservation = () => {
        alert("Thank you for visiting us. However, it is still under Development phase.")
    }
    return (
        <div className="flex lg:hidden w-full max-w-7xl bg-white rounded-[2rem] shadow-2xl p-6 md:p-10 flex-wrap lg:flex-nowrap items-end gap-4 lg:gap-6 border border-gray-100">

            {/* Name of Person the Table is done reservation.. */}
            <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                    <User size={18} className="text-black" /> Name
                </label>
                <div className="relative group">
                    <input type="text" className="w-full bg-gray-50 rounded-2xl px-4 py-4 outline-none border border-transparent focus:border-black focus:bg-white transition-all text-gray-600 appearance-none"
                        placeholder='Name under Reserv...'
                    />
                </div>
            </div>

            {/* Date & Time Selection */}
            <div className="flex flex-col gap-2 w-full lg:w-1/4">
                <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                    <Calendar size={16} /> Date & Time
                </label>
                <input
                    type="datetime-local"
                    className="w-full bg-gray-50 rounded-2xl px-4 py-4 outline-none border border-transparent focus:border-black focus:bg-white transition-all text-gray-600 appearance-none"
                />
            </div>

            {/* Guest/Party Size Selection */}
            <SelectField
                label="Guest"
                icon={<Users size={18} className="text-black" />}
            >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="4">4 People</option>
                <option value="6">6 People</option>
                <option value="10">10+ (Large Group)</option>
            </SelectField>

            {/* Dining Area Preference */}
            <SelectField
                label="Dining Type"
                icon={<Coffee size={18} className="text-black" />}
            >
                <option value="indoor">Indoor (Main Hall)</option>
                <option value="outdoor">Outdoor (Patio)</option>
                <option value="quiet">Quiet Zone (Work)</option>
            </SelectField>

            {/* Action Button */}
            <button onClick={reservation} className="w-full lg:w-auto bg-black hover:bg-gray-700 text-white font-bold px-12 py-4 rounded-2xl transition-all duration-300 whitespace-nowrap text-lg shadow-lg shadow-black hover:scale-[1.02] active:scale-95">
                Reserve Now
            </button>
        </div>

    )
}

function SelectField({ label, icon, children }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                {icon} {label}
            </label>
            <div className="relative group">
                <select className="w-full bg-gray-50 rounded-2xl px-5 py-4 outline-none border border-transparent group-hover:border-gray-200 focus:border-black focus:bg-white transition-all text-gray-600 appearance-none cursor-pointer">
                    {children}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" size={20} />
            </div>
        </div>
    );
}
