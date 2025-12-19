import { NavLink } from "react-router";
import { Navbarlink } from "../data/NavLink";
export default function Footer() {
  
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Shrestha Café</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            A place where every cup feels like home. Thoughtfully crafted coffee,
            refined flavors, and warm hospitality—served every day.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {Navbarlink.map((link, idx)=>{
              return <li key={idx} className="hover:text-white cursor-pointer"><NavLink to={link.to}>{link.title}</NavLink></li>
            })}
  
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>MachaPokhari</li>
            <li>Kathmandu, Nepal</li>
            <li>+977 9845231690</li>
            <li>info@shresthacafe.com</li>
          </ul>
        </div>
        {/* Hours */}
        <div>
          <h4 className="font-semibold mb-4">Opening Hours</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Mon – Fri: 8:00 AM – 9:00 PM</li>
            <li>Sat: 9:00 AM – 10:00 PM</li>
            <li>Sun: 9:00 AM – 8:00 PM</li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Shrestha Café. All rights reserved.
      </div>
    </footer>
  );
}
