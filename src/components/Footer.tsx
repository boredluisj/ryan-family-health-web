import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 group bg-white/95 p-3 rounded-xl inline-block w-fit">
              <div className="relative w-56 h-10 transition-transform group-hover:scale-105">
                 <Image 
                    src="/images/logo.png" 
                    alt="Ryan Family Health" 
                    fill 
                    className="object-contain object-left"
                 />
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
              <li><a href="https://www.medentmobile.com/portal/index.php?practice_id=QM65v37Z" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 text-sm font-semibold transition-colors">Patient Portal Login</a></li>
              <li><a href="https://www.medent.com/tutorials_mp4/Patient_Portal_Patient_Promo.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Patient Portal Tutorial</a></li>
              <li><Link href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Patient Forms & Policies</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span>2554 Route 9<br />Ballston Spa, NY 12020</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <a href="tel:5188995002" className="hover:text-primary-400 transition-colors">(518) 899-5002</a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <a href="mailto:michelle@ryanfamilyhealth.com" className="hover:text-primary-400 transition-colors">michelle@ryanfamilyhealth.com</a>
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
