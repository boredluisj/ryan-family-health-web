import Link from "next/link";
import { HeartPulse, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-md">
                <HeartPulse size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl text-white leading-none tracking-tight">Ryan Family Health</span>
                <span className="text-primary-400 text-xs font-semibold tracking-widest uppercase mt-1">Medical Clinic</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Founded in 1987, providing comprehensive primary care, advanced medical weight loss, and dedicated family medicine to the community for over three decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#services" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Primary Care Services</Link></li>
              <li><Link href="#weight-loss" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Medical Weight Loss</Link></li>
              <li><Link href="#providers" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Our Providers</Link></li>
              <li><Link href="https://auth.athenahealth.com/login" className="text-primary-400 hover:text-primary-300 text-sm font-semibold transition-colors">Patient Portal Login</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Patient Forms & Policies</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span>123 Medical Plaza Drive<br />Suite 100<br />City, ST 12345</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <a href="tel:5551234567" className="hover:text-primary-400 transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <a href="mailto:info@ryanfamilyhealth.com" className="hover:text-primary-400 transition-colors">info@ryanfamilyhealth.com</a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">Office Hours</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Mon - Thu</span> <span className="text-white">8:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Friday</span> <span className="text-white">8:00 AM - 1:00 PM</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span className="text-primary-400 font-semibold">Closed</span></li>
              <li className="flex justify-between pt-1"><span>Sunday</span> <span className="text-primary-400 font-semibold">Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Ryan Family Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">HIPAA Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
