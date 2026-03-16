"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WeightLossHighlight() {
  const benefits = [
    "Clinically proven GLP-1 medications (Semaglutide/Tirzepatide)",
    "Personalized dosing entirely supervised by Nurse Practitioners",
    "Comprehensive metabolic and baseline bloodwork testing",
    "Sustainable, long-term physiological appetite suppression",
  ];

  return (
    <section id="weight-loss" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2670&auto=format&fit=crop"
                alt="Healthy active lifestyle resulting from medical weight loss"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">Rx</span>
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Prescription Grade</p>
                  <p className="text-white/80 text-sm font-medium">Safe, effective GLP-1 weight loss</p>
                </div>
              </div>
            </div>
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-400/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-3">
              Advanced Programs
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-dark tracking-tight mb-6 leading-tight">
              Shed Weight. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Regain Your Life.
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              Struggling to lose stubborn weight despite diet and exercise? Our medically supervised weight loss clinic offers breakthrough weekly injectables that optimize your metabolic pathways, turning your body into an efficient fat-burning machine.
            </p>

            <ul className="mb-10 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-dark hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:-translate-y-1 active:scale-95 group"
              >
                Schedule Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
