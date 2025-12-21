import { NavLink } from "react-router";
import { ArrowUpRight } from 'lucide-react'
import {motion} from 'motion/react'

export default function GetInTouch() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="getintouch" className="w-full py-15 bg-gray-50 flex justify-center items-center flex-col gap-10">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Whether you have a question, want to make a reservation, or simply say
          hello, we’d love to hear from you. Reach out and our team will get back
          to you shortly.
        </p>

        {/* Contact Info */}
        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h4 className="font-semibold text-lg mb-2">Visit Us</h4>
            <p className="text-gray-600 text-sm">
              MachaPokhari<br />
              Kathmanud, Nepal
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Call Us</h4>
            <p className="text-gray-600 text-sm">
              +977 9845231690
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Email</h4>
            <p className="text-gray-600 text-sm">
              info@shresthacafe.com
            </p>
          </div>

        </div>

      </div>
      <NavLink to='/location' className='curved-button border-black text-black hover:bg-black hover:text-white flex'>Contact Us <ArrowUpRight /></NavLink>
    </motion.section>
  );
}
