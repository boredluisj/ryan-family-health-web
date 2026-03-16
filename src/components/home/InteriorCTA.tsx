"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InteriorCTA() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/interior.jpg"
          alt="Ryan Family Health Clinic Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-black text-white tracking-tight mb-8 leading-tight"
        >
          State-of-the-Art Care in a <br className="hidden md:block" /> Comfortable Environment
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/90 mb-10 font-light"
        >
          Experience the difference of a practice that truly puts your comfort, health, and well-being first. We serve all ages in Malta, Saratoga, and the surrounding areas.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95 text-lg"
          >
            Become a Patient Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
