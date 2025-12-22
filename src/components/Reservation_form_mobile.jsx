import React, { useState } from 'react';
import axios from 'axios';
import { 
    ChevronDown, Calendar, Users, User, Coffee, 
    Phone, Mail, CheckCircle2, XCircle, X, Loader2 
} from 'lucide-react';
import Modal from '../utils/Modal';

export default function Reservation_form_mobile() {
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
        // Validation
        if (!form.name || !form.phone || !form.datetime) {
            alert("Please fill all required fields.");
            return;
        }

        if (new Date(form.datetime) < new Date()) {
            alert("Please select a future date & time.");
            return;
        }

        setLoading(true);
 
        try {
            await axios.post(
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
                    headers: { "Content-Type": "application/json" }
                }
            );

            // Success Visuals
            setModal({ 
                isOpen: true, 
                type: 'success', 
                title: `Confirmed, ${form.name.split(' ')[0]}!`,
                message: "We've received your request. Check your email for confirmation details."
            });

            // Reset Form
            setForm({
                name: "", phone: "", email: "", datetime: "", guests: "1", diningType: "indoor",
            });

        } catch (err) {
            setModal({ 
                isOpen: true, 
                type: 'error', 
                title: 'Reservation Failed',
                message: 'Something went wrong on our end. Please try again or call us directly.'
            });
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex lg:hidden w-full max-w-7xl bg-white shadow-2xl p-6 flex-col gap-4 border border-gray-100 min-h-screen">
            
            {/* --- MODERN MODAL --- */}
            {modal.isOpen && <Modal closeModal={closeModal} modal={modal} />}

            {/* --- FORM FIELDS --- */}
            <InputField
                label="Full Name *"
                icon={<User size={18} className="text-gray-400" />}
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
            />

            <InputField
                label="Phone Number *"
                icon={<Phone size={18} className="text-gray-400" />}
                name="phone"
                placeholder="98XXXXXXXX"
                value={form.phone}
                onChange={handleChange}
            />

            <InputField
                label="Email Address"
                icon={<Mail size={18} className="text-gray-400" />}
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
            />

            <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                    <Calendar size={16} className="text-gray-400" /> Date & Time *
                </label>
                <input
                    type="datetime-local"
                    name="datetime"
                    value={form.datetime}
                    onChange={handleChange}
                    className="w-full bg-gray-50 rounded-xl px-4 py-4 outline-none border border-gray-100 focus:border-black focus:bg-white transition-all text-gray-600 font-medium"
                />
            </div>

            <SelectField
                label="Number of Guests"
                icon={<Users size={18} className="text-gray-400" />}
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

            <SelectField
                label="Dining Preference"
                icon={<Coffee size={18} className="text-gray-400" />}
                name="diningType"
                value={form.diningType}
                onChange={handleChange}
            >
                <option value="indoor">Indoor (Main Hall)</option>
                <option value="outdoor">Outdoor (Patio)</option>
                <option value="quiet">Quiet Zone (Work)</option>
            </SelectField>

            {/* --- SUBMIT BUTTON --- */}
            <button
                onClick={reservation}
                disabled={loading}
                className={`mt-4 flex items-center justify-center gap-2 cursor-pointer rounded-xl border border-black px-6 w-full py-4 text-white
                font-bold tracking-wide transition-all duration-300 ${
                    loading 
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
        </div>
    );
}

/**
 * Reusable Input Component
 */
function InputField({ label, icon, ...props }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                {icon} {label}
            </label>
            <input
                {...props}
                className="w-full bg-gray-50 rounded-xl px-4 py-3.5 outline-none border border-gray-100 focus:border-black focus:bg-white transition-all text-gray-600 font-medium placeholder:text-gray-300"
            />
        </div>
    );
}

/**
 * Reusable Select Component
 */
function SelectField({ label, icon, children, ...props }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-bold text-gray-800 ml-1 flex items-center gap-2">
                {icon} {label}
            </label>
            <div className="relative">
                <select
                    {...props}
                    className="w-full cursor-pointer bg-gray-50 rounded-xl px-5 py-3.5 outline-none border border-gray-100 focus:border-black focus:bg-white transition-all text-gray-600 font-medium appearance-none"
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