"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop"
          alt="Luxury Medical Clinic Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Lighter, elegant gradient overlay designed to let the spectacular photography pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Accepting New Patients
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] mb-6 tracking-tight"
          >
            Modern Care For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100">
              Your Entire Family.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl"
          >
            Since 1987, Ryan Family Health has provided unparalleled primary care, advanced medical weight loss, and dedicated holistic wellness in a state-of-the-art facility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-500/50 hover:-translate-y-1 active:scale-95 group"
            >
              <Calendar size={20} />
              Book Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="tel:5551234567"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 active:scale-95"
            >
              <Phone size={20} />
              (555) 123-4567
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
