// FAQ.jsx
import { useState } from "react";
import { faqData } from "../data/faqdata";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto px-6 py-10 sm:py-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                    Everything you need to know about our product and billing.
                </p>
            </div>

            <div className="space-y-3">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="group border cursor-pointer border-gray-200 rounded-2xl transition-all duration-300 hover:border-black hover:shadow-md overflow-hidden"
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex justify-between items-center px-6 py-5 text-left transition-colors bg-white group-hover:bg-blue-50/30 cursor-pointer">
                            <span className={`text-lg font-semibold transition-colors duration-300 ${activeIndex === index ? "text-black" : "text-gray-800"
                                }`}>
                                {item.question}
                            </span>

                            {/* Animated Icon */}
                            <div className={`relative flex items-center justify-center w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                                <div className="absolute w-0.5 h-4 bg-black rounded-full"></div>
                                <div className={`absolute w-4 h-0.5 bg-black rounded-full transition-transform duration-300 ${activeIndex === index ? "rotate-90 opacity-0" : ""}`}></div>
                            </div>
                        </button>

                        {/* Smooth Height Transition */}
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${activeIndex === index
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100/50">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}