"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#faf9f6]">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary-50/50 to-transparent -z-10 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Left */}
          <div className="flex-1 w-full flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-12 h-[1px] bg-primary-600 block" />
              <span className="text-primary-800 text-xs font-bold uppercase tracking-[0.2em]">
                Accepting New Patients
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-normal text-dark leading-[1.05] mb-8 tracking-[-0.02em]"
            >
              Bespoke medicine. <br className="hidden md:block" />
              <span className="font-light italic text-primary-700">Tailored for your</span> <br className="hidden md:block" />
              family.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-xl font-light"
            >
              For over three decades, Ryan Family Health has delivered uncompromised primary care and elite medical weight loss protocols in a private, state-of-the-art facility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a
                href="#contact"
                className="group relative flex items-center justify-center gap-3 bg-dark text-white px-9 py-4 rounded-full text-sm font-semibold uppercase tracking-widest overflow-hidden transition-transform hover:-translate-y-1 active:scale-95"
              >
                <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-3">
                  <Calendar size={18} />
                  Book Consultation
                </span>
              </a>
              
              <a
                href="tel:5188995002"
                className="flex items-center gap-3 text-dark group"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary-600 group-hover:text-primary-600 transition-colors">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Call Us Today</span>
                  <span className="font-heading font-bold text-lg leading-none">(518) 899-5002</span>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Image Right (Editorial Style) */}
          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 rounded-t-full rounded-b-[3rem] overflow-hidden shadow-2xl shadow-primary-900/10 border-[8px] border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop"
                alt="Luxury Medical Clinic Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
                priority
              />
            </motion.div>


          </div>

        </div>
      </div>
    </section>
  );
}
