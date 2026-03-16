"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Established 1987",
    description: "Decades of trusted medical excellence and dedicated service to your community's health.",
  },
  {
    number: "02",
    title: "Care for All Ages",
    description: "Comprehensive family medicine tailored for pediatric, adult, and geriatric patients.",
  },
  {
    number: "03",
    title: "Top-Rated Facility",
    description: "State-of-the-art medical technology combined with compassionate, personalized care.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-20 bg-surface relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-200">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`py-12 px-8 ${index < 2 ? "md:border-r border-gray-200" : ""}`}
            >
              <span className="text-primary-500 font-heading text-sm font-bold tracking-widest mb-4 block">
                {feature.number}
              </span>
              <h3 className="text-xl font-heading font-semibold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
