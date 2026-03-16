"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WeightLossHighlight() {
  const benefits = [
    "Clinically proven GLP-1 medications (Semaglutide & Tirzepatide)",
    "Personalized dosing entirely supervised by Nurse Practitioners",
    "Comprehensive metabolic and baseline bloodwork testing",
    "Sustainable, long-term physiological appetite suppression",
  ];

  return (
    <section id="weight-loss" className="py-28 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2670&auto=format&fit=crop"
                alt="Healthy active lifestyle resulting from medical weight loss"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-primary-600 block" />
              <span className="text-primary-700 text-xs font-bold uppercase tracking-[0.2em]">
                Advanced Programs
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-normal text-dark tracking-[-0.02em] leading-[1.1] mb-6">
              Shed weight. <br />
              <span className="italic font-light text-primary-700">Regain your life.</span>
            </h2>
            
            <p className="text-lg text-gray-500 mb-10 leading-relaxed font-light max-w-lg">
              Struggling to lose stubborn weight despite diet and exercise? Our medically supervised weight loss clinic offers breakthrough weekly injectables that optimize your metabolic pathways.
            </p>

            <ul className="mb-10 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" />
                  <span className="text-gray-600 text-[15px]">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-3 bg-dark text-white px-9 py-4 rounded-full text-sm font-semibold uppercase tracking-widest overflow-hidden transition-transform hover:-translate-y-1 active:scale-95 w-fit"
            >
              <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Schedule Consultation</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
