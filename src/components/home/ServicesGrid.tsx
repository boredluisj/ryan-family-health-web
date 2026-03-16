"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Scale, Stethoscope, Leaf } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Activity,
    title: "Primary Care",
    description: "Comprehensive health management, preventive care, and chronic disease treatment for your entire family.",
    href: "#primary-care",
    color: "from-blue-500 to-primary-600",
  },
  {
    icon: Scale,
    title: "Medical Weight Loss",
    description: "Cutting-edge Semaglutide and Tirzepatide programs clinically proven to safely accelerate your weight loss journey.",
    href: "#weight-loss",
    color: "from-teal-400 to-primary-500",
  },
  {
    icon: Stethoscope,
    title: "DOT Physicals",
    description: "Certified medical examinations required for commercial motor vehicle drivers. Walk-ins typically welcome.",
    href: "#dot-physicals",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Leaf,
    title: "Medical Marijuana",
    description: "Compassionate evaluation and certification for therapeutic cannabis use under state guidelines.",
    href: "#medical-marijuana",
    color: "from-emerald-400 to-green-600",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-dark tracking-tight mb-6"
          >
            Comprehensive Healthcare For Your Needs.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* Decorative background gradient that reveals on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-md mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} strokeWidth={2.5} />
                </div>
                
                <h4 className="text-xl font-heading font-bold text-dark mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-dark group-hover:text-primary-600 transition-colors mt-auto"
                >
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
