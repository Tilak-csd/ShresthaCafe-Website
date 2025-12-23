import { useEffect, useState } from "react";
import { User, Calendar, Users, Coffee, Sparkles, ChevronDown, Phone, Mail, Loader2 } from "lucide-react";
import axios from 'axios'
import Modal from "../utils/Modal";
import { motion } from 'motion/react'

export default function Reservation_HeroSection() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        datetime: "",
        guests: "1",
        diningType: "indoor",
    });

    // Modal State
    const [modal, setModal] = useState({
        isOpen: false,
        type: 'success',
        title: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const closeModal = () => setModal({ ...modal, isOpen: false });

    const reservation = async () => {
        if (!form.name || !form.phone || !form.datetime) {
            alert("Please fill all required fields.");
            return;
        }

        const selectedDate = new Date(form.datetime);
        if (selectedDate < new Date()) {
            alert("Please select a future date & time.");
            return;
        }
        setLoading(true)

        // Sending the email to the customer for booking the table
        try {
            const res = await axios.post(
                "https://shrestha-cafe-backend.vercel.app/api/v1/reservationmail",
                {
                    name: form.name,
                    email: form.email,
                    datetime: form.datetime,
                    phone: form.phone,
                    numberofguests: form.guests,
                    dinnertabletype: form.diningType
                },
                {
                    header: {
                        "Content-Type": "application/json"
                    }
                }

            );

            // Success Visuals
            setModal({
                isOpen: true,
                type: 'success',
                title: `Confirmed, ${form.name.split(' ')[0]}!`,
                message: "We've received your request. Check your email for confirmation details."
            });

            setForm({
                name: "",
                phone: "",
                email: "",
                datetime: "",
                guests: "1",
                diningType: "indoor",
            })

        } catch (err) {
            setModal({
                isOpen: true,
                type: 'error',
                title: 'Reservation Failed',
                message: 'Something went wrong on our end. Please try again or call us directly.'
            });
            console.log(err)
        } finally {
            setLoading(false)
        }
    };


    return (
        <div className="flex justify-center items-center lg:items-start px-5 md:px-10 lg:px-20 text-white w-full h-[calc(100vh-60px)] flex-col gap-5">

            {modal.isOpen && <Modal closeModal={closeModal} modal={modal} />}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8, // Increased slightly for more "glide"
                    ease: "easeOut"
                }}
                className="section-heading-title text-center lg:text-left">
                Good Food Deserves the Right Table
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8, // Increased slightly for more "glide"
                    ease: "easeOut",
                    delay: .2
                }}
                className="text-lg md:text-xl text-center lg:text-left text-gray-200 max-w-xl italic font-light">
                "Whether it’s a morning brew, a business lunch, or an intimate dinner, we’ll have the perfect spot waiting for you"
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8, // Increased slightly for more "glide"
                    ease: "easeOut",
                    delay : .3
                }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-[2px] border border-white/30 rounded-full px-4 py-2 w-fit">
                <Sparkles size={16} />
                <span className="text-sm font-medium">
                    Real-time availability. Instant confirmation via email/SMS.
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8, // Increased slightly for more "glide"
                    ease: "easeOut",
                    delay : .4
                }}
                className="hidden lg:flex w-full max-w-7xl bg-white rounded-3xl shadow-2xl p-4 md:p-10 flex-wrap lg:flex-nowrap items-end gap-4 border border-gray-100">

                {/* Name */}
                <InputField
                    label="Name"
                    icon={<User size={18} />}
                    name="name"
                    placeholder="Name under reservation"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                {/* Phone */}
                <InputField
                    label="Phone"
                    icon={<Phone size={18} />}
                    name="phone"
                    placeholder="98XXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />

                {/* Email */}
                <InputField
                    label="Email"
                    icon={<Mail size={18} />}
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                />

                {/* Date & Time */}
                <div className="flex flex-col gap-2 w-full lg:w-1/4">
                    <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                        <Calendar size={16} /> Date & Time *
                    </label>
                    <input
                        type="datetime-local"
                        name="datetime"
                        value={form.datetime}
                        onChange={handleChange}
                        className="w-full cursor-pointer bg-gray-50 rounded-md px-4 py-4 outline-none border border-transparent focus:border-black focus:bg-white transition-all text-gray-600"
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
                    <option value="1" className="cursor-pointer">1 Person</option>
                    <option value="2" className="cursor-pointer">2 People</option>
                    <option value="4" className="cursor-pointer">4 People</option>
                    <option value="6" className="cursor-pointer">6 People</option>
                    <option value="10+" className="cursor-pointer">10+ (Large Group)</option>
                </SelectField>

                {/* Dining Type */}
                <SelectField
                    label="Dining Type"
                    icon={<Coffee size={18} />}
                    name="diningType"
                    value={form.diningType}
                    onChange={handleChange}
                >
                    <option value="indoor" className="cursor-pointer">Indoor (Main Hall)</option>
                    <option value="outdoor" className="cursor-pointer">Outdoor (Patio)</option>
                    <option value="quiet" className="cursor-pointer">Quiet Zone (Work)</option>
                </SelectField>

                {/* --- SUBMIT BUTTON --- */}
                <button
                    onClick={reservation}
                    disabled={loading}
                    className={`mt-4 flex items-center justify-center gap-2 cursor-pointer rounded-xl border border-black px-6 w-full py-4 text-white
                font-bold tracking-wide transition-all duration-300 ${loading
                            ? "bg-gray-800 cursor-not-allowed"
                            : "bg-black hover:bg-white hover:text-black active:scale-95"
                        }`}
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Processing...
                        </>
                    ) : (
                        "Book Now"
                    )}
                </button>
            </motion.div>
        </div>
    );
};


function InputField({ label, icon, ...props }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                {icon} {label}
            </label>
            <input
                {...props}
                className="w-full cursor-text bg-gray-50 rounded-md px-4 py-3 outline-none border border-transparent focus:border-black focus:bg-white transition-all text-gray-600"
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
            <div className="relative group">
                <select
                    {...props}
                    className="cursor-pointer w-full bg-gray-50 rounded-md px-5 py-3 outline-none border border-transparent focus:border-black focus:bg-white transition-all text-gray-600 appearance-none"
                >
                    {children}
                </select>
                <ChevronDown
                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={20}
                />
            </div>
        </div>
    );
}
