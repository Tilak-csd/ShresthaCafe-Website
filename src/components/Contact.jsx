import React from 'react'


export default function Contact() {
    const querysumbit = ()=>{
        alert("Thanks for visiting us. However, the website is still under the developmnet phase.")
        return;
    }
    return (
        <section id='contact' className="w-full py-5 sm:py-20 bg-gray-50 flex flex-col items-center justify-center">
            <div className="max-w-6xl mx-auto w-full px-4">

                <div className='flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden'>
                    
                    {/* Left Side: Info & Form */}
                    <div className='w-full md:w-1/2 p-8 lg:p-12 flex flex-col gap-10'>
                        
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
                        <form className='flex flex-col gap-4'>
                            <div className="grid grid-cols-1 gap-4">
                                <Input label="Full Name" type="text" placeholder="John Doe" />
                                <Input label="Email Address" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea 
                                    rows="4" 
                                    placeholder="How can we help you?"
                                    className='border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none transition-all'
                                ></textarea>
                            </div>
                            <button onClick={querysumbit} className='bg-black cursor-pointer active:bg-gray-800 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md'>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Image */}
                    <div className='hidden md:block md:w-1/2 relative'>
                        <img 
                            src="/contact/side_image.webp" 
                            alt="Shrestha Cafe Interior" 
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay to soften the image if needed */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Input({ label, type, placeholder }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input 
                type={type} 
                placeholder={placeholder}
                className='border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-black focus:outline-none transition-all'
            />
        </div>
    );
}