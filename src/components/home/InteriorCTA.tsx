"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InteriorCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/interior.jpg"
          alt="Ryan Family Health Clinic Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/65" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-12 h-[1px] bg-white/40 block" />
          <span className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
            Visit Us Today
          </span>
          <span className="w-12 h-[1px] bg-white/40 block" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-heading font-normal text-white tracking-[-0.02em] leading-[1.1] mb-8"
        >
          State-of-the-art care in a <br className="hidden md:block" />
          <span className="italic font-light text-primary-300">comfortable environment.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Experience the difference of a practice that truly puts your comfort, health, and well-being first. Serving Malta, Saratoga, and surrounding areas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center bg-white text-dark px-9 py-4 rounded-full text-sm font-semibold uppercase tracking-widest overflow-hidden transition-transform hover:-translate-y-1 active:scale-95"
          >
            <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Become a Patient Today</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
