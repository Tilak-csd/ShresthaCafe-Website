import React, { useState } from 'react'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import Modal from '../utils/Modal'
import { motion } from 'motion/react'


export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [loading, setLoading] = useState(false);
    // Modal State
    const [modal, setModal] = useState({
        isOpen: false,
        type: 'success',
        title: '',
        message: ''
    });
    // close modal function
    const closeModal = () => setModal({ ...modal, isOpen: false });


    const querysumbit = async () => {
        if (!name || !email || !message) {
            return alert("Please Fill the Form!")
        }

        try {
            setLoading(true)
            await axios.post(
                "https://shrestha-cafe-backend.vercel.app/api/v1/contactmail",
                {
                    name: name,
                    email: email,
                    message: message
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            // SUCCESS: Use 'name' instead of 'form.name'
            const firstName = name ? name.split(' ')[0] : 'Guest';
            // Success Visuals
            setModal({
                isOpen: true,
                type: 'success',
                title: `Thank You, ${firstName}! for Contacting Us.`,
                message: "We've received your request. Check your email for confirmation details."
            });
            setEmail("")
            setName("")
            setMessage("")

        } catch (error) {
            setModal({
                isOpen: true,
                type: 'error',
                title: 'Contact Failed',
                message: 'Something went wrong on our end. Please try again or call us directly.'
            });
            console.log("Error while sending the message", error);

        } finally {
            setLoading(false)
        }

    }
    return (
        <section id='contact' className="w-full py-5 sm:py-20 bg-gray-50 flex flex-col items-center justify-center">
            {/* set Modal for teh contact send failed or confirmed */}
            {modal.isOpen && <Modal closeModal={closeModal} modal={modal} />}
            <div className="max-w-6xl mx-auto w-full px-4">

                <div className='flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden'>

                    {/* Left Side: Info & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8, // Increased slightly for more "glide"
                            ease: "easeOut"
                        }}
                        className='w-full md:w-1/2 p-8 lg:p-12 flex flex-col gap-10'>

                        {/* Location details */}
                        <div>
                            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-600">
                                <div>
                                    <p className="font-medium text-gray-900">Address</p>
                                    <p>MachaPokhari, Kathmandu</p>
                                    <p>Nepal</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Contact</p>
                                    <p>+977 9845231690</p>
                                    <p>info@shresthacafe.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Query Form */}
                        <div className='flex flex-col gap-4'>
                            <div className="grid grid-cols-1 gap-4">
                                <Input
                                    onChange={(e) => setName(e.target.value)}
                                    label="Full Name" type="text" placeholder="John Doe" />
                                <Input
                                    onChange={(e) => setEmail(e.target.value)}
                                    label="Email Address" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="4"
                                    placeholder="How can we help you?"
                                    className='border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none transition-all'
                                ></textarea>
                            </div>
                            <button onClick={querysumbit} className='flex justify-center items-center gap-3 bg-black cursor-pointer hover:scale-105 transition-all duration-300 active:scale-105 text-white font-semibold py-3 px-6 rounded-lg shadow-md'>
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Processing...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side: Image */}
                    <motion.div
                    initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8, // Increased slightly for more "glide"
                            ease: "easeOut"
                        }}
                    className='hidden md:block md:w-1/2 relative'>
                        <img
                            src="/contact/side_image.webp"
                            alt="Shrestha Cafe Interior"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay to soften the image if needed */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Input({ label, type, placeholder, onChange }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                className='border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none transition-all'
            />
        </div>
    );
}