"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Star } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Established in 1987",
    description: "Decades of trusted medical excellence and dedicated service to our community's health.",
    color: "text-primary-600",
    bg: "bg-primary-50"
  },
  {
    icon: Users,
    title: "Care for All Ages",
    description: "Comprehensive family medicine tailored for pediatric, adult, and geriatric patients.",
    color: "text-accent-600",
    bg: "bg-accent-50"
  },
  {
    icon: Star,
    title: "Top-Rated facility",
    description: "State-of-the-art medical technology combined with compassionate, personalized care.",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }
];

export default function ValueProps() {
  return (
    <section className="py-20 bg-surface relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
