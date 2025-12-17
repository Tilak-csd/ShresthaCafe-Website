import React from 'react'
import { Sparkles, ChevronDown, Calendar, Users, MapPin, Coffee } from 'lucide-react';

export default function Reservation_HeroSection() {
    return (
        <div className="flex justify-center items-center lg:items-start px-5 md:px-10 lg:px-20 text-white w-full h-[calc(100vh-60px)] flex-col gap-5">
            <h1 className='section-heading-title text-center lg:text-left'>Good Food Deserves the Right Table</h1>
            <p className="text-lg md:text-xl text-center lg:text-left text-gray-200 max-w-xl italic font-light">
                "Whether it’s a morning brew, a business lunch, or an intimate dinner, we’ll have the perfect spot waiting for you"
            </p>

            {/* Dynamic Tag */}
            <div className=" flex items-center gap-2 bg-white/10 backdrop-blur-[2px] border border-white/30 rounded-full px-4 py-2 w-fit">
                <Sparkles className="text-white" size={16} />
                <span className="text-white text-sm font-medium">
                    Real-time availability. Instant confirmation via email/SMS.
                </span>
            </div>


            {/* Floating Search Bar */}
            <div className="hidden lg:flex w-full max-w-7xl bg-white rounded-[2rem] shadow-2xl p-6 md:p-10 flex-wrap lg:flex-nowrap items-end gap-4 lg:gap-6 border border-gray-100">

                {/* Location Selection */}
                <SelectField
                    label="Location"
                    icon={<MapPin size={18} className="text-black" />}
                >
                    <option value="">Select branch</option>
                    <option value="machapokhari">MachaPokhari, KTM</option>
                    <option value="jhamsikhel">Jhamsikhel, Lalitpur</option>
                </SelectField>

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
                <button className="w-full lg:w-auto bg-black hover:bg-gray-700 text-white font-bold px-12 py-4 rounded-2xl transition-all duration-300 whitespace-nowrap text-lg shadow-lg shadow-black hover:scale-[1.02] active:scale-95">
                    Reserve Now
                </button>
            </div>
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