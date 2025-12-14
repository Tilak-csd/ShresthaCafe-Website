export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Your Café</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            A place where every cup feels like home. Thoughtfully crafted coffee,
            refined flavors, and warm hospitality—served every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Reservations</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>123 Coffee Street</li>
            <li>City Center</li>
            <li>+977 98XXXXXXXX</li>
            <li>hello@yourcafe.com</li>
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
        © {new Date().getFullYear()} Your Café. All rights reserved.
      </div>
    </footer>
  );
}
