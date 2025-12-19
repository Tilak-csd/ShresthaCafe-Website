import React, { useState } from 'react'
import { ChevronDown, Calendar, Users, User, Coffee, Phone, Mail } from 'lucide-react';

export default function Reservation_form_mobile() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        datetime: "",
        guests: "1",
        diningType: "indoor",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const reservation = () => {
        if (!form.name || !form.phone || !form.datetime) {
            alert("Please fill all required fields.");
            return;
        }

        if (new Date(form.datetime) < new Date()) {
            alert("Please select a future date & time.");
            return;
        }

        alert("Thank you! Reservation feature is under development.");
        console.log(form);
    };

    return (
        <div className="flex lg:hidden w-full max-w-7xl bg-white shadow-2xl p-6 flex-col gap-4 border border-gray-100">

            {/* Name */}
            <InputField
                label="Name *"
                icon={<User size={18} />}
                name="name"
                placeholder="Name under reservation"
                value={form.name}
                onChange={handleChange}
            />

            {/* Phone */}
            <InputField
                label="Phone *"
                icon={<Phone size={18} />}
                name="phone"
                placeholder="98XXXXXXXX"
                value={form.phone}
                onChange={handleChange}
            />

            {/* Email */}
            <InputField
                label="Email (optional)"
                icon={<Mail size={18} />}
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
            />

            {/* Date & Time */}
            <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                    <Calendar size={16} /> Date & Time *
                </label>
                <input
                    type="datetime-local"
                    name="datetime"
                    value={form.datetime}
                    onChange={handleChange}
                    className="w-full bg-gray-50 rounded-md px-4 py-4 outline-none border border-transparent focus:border-black focus:bg-white transition-all text-gray-600"
                />
            </div>

            {/* Guests */}
            <SelectField
                label="Guest"
                icon={<Users size={18} />}
                name="guests"
                value={form.guests}
                onChange={handleChange}
            >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="4">4 People</option>
                <option value="6">6 People</option>
                <option value="10">10+ (Large Group)</option>
            </SelectField>

            {/* Dining Type */}
            <SelectField
                label="Dining Type"
                icon={<Coffee size={18} />}
                name="diningType"
                value={form.diningType}
                onChange={handleChange}
            >
                <option value="indoor">Indoor (Main Hall)</option>
                <option value="outdoor">Outdoor (Patio)</option>
                <option value="quiet">Quiet Zone (Work)</option>
            </SelectField>

            {/* Button */}
            <button
                onClick={reservation}
                className="cursor-pointer rounded-md border border-black/80 px-6 w-full py-3 text-white
        font-semibold tracking-wide bg-black active:bg-white active:text-black hover:bg-white hover:text-black hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
                Book Now
            </button>
        </div>
    );
}

function InputField({ label, icon, ...props }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                {icon} {label}
            </label>
            <input
                {...props}
                className="w-full bg-gray-50 rounded-md px-4 py-3 outline-none border border-transparent focus:border-black focus:bg-white transition-all text-gray-600"
            />
        </div>
    );
}

function SelectField({ label, icon, children, ...props }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                {icon} {label}
            </label>
            <div className="relative">
                <select
                    {...props}
                    className="w-full cursor-pointer bg-gray-50 rounded-md px-5 py-3 outline-none border border-transparent focus:border-black focus:bg-white transition-all text-gray-600 appearance-none"
                >
                    {children}
                </select>
                <ChevronDown
                    className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={20}
                />
            </div>
        </div>
    );
}
