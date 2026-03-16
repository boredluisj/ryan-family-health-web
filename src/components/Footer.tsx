import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6 bg-white/95 p-3 rounded-xl">
              <div className="relative w-52 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Ryan Family Health"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Founded in 1987, providing comprehensive primary care, advanced medical weight loss, and dedicated family medicine for over three decades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-6 text-white/80">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#services" className="text-gray-400 hover:text-white text-sm transition-colors">Primary Care Services</Link></li>
              <li><Link href="#weight-loss" className="text-gray-400 hover:text-white text-sm transition-colors">Medical Weight Loss</Link></li>
              <li><Link href="#providers" className="text-gray-400 hover:text-white text-sm transition-colors">Our Providers</Link></li>
              <li><a href="https://www.medentmobile.com/portal/index.php?practice_id=QM65v37Z" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 text-sm font-semibold transition-colors">Patient Portal Login</a></li>
              <li><a href="https://www.medent.com/tutorials_mp4/Patient_Portal_Patient_Promo.mp4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Patient Portal Tutorial</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-6 text-white/80">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>
                <span className="text-xs text-gray-500 uppercase tracking-wide block mb-0.5">Address</span>
                2554 Route 9, Ballston Spa, NY 12020
              </li>
              <li>
                <span className="text-xs text-gray-500 uppercase tracking-wide block mb-0.5">Phone</span>
                <a href="tel:5188995002" className="hover:text-white transition-colors">(518) 899-5002</a>
              </li>
              <li>
                <span className="text-xs text-gray-500 uppercase tracking-wide block mb-0.5">Email</span>
                <a href="mailto:michelle@ryanfamilyhealth.com" className="hover:text-white transition-colors">michelle@ryanfamilyhealth.com</a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-6 text-white/80">Hours</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li className="flex justify-between"><span>Mon — Thu</span> <span className="text-white">8:00 AM — 5:00 PM</span></li>
              <li className="flex justify-between"><span>Friday</span> <span className="text-white">8:00 AM — 1:00 PM</span></li>
              <li className="flex justify-between"><span>Sat — Sun</span> <span className="text-primary-400 font-medium">Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Ryan Family Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="https://drive.google.com/file/d/1PCK3PgXc8c7Co_m19rC35IZGvw8uJXn5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://drive.google.com/file/d/1PCK3PgXc8c7Co_m19rC35IZGvw8uJXn5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://drive.google.com/file/d/1WU6HGrwDrtx04RIhaGL39ks2txM0sqLY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">HIPAA Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
