"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Primary Care",
    description: "Comprehensive health management, preventive care, and chronic disease treatment for your entire family.",
    href: "#contact",
  },
  {
    title: "Medical Weight Loss",
    description: "Cutting-edge Semaglutide and Tirzepatide programs clinically proven to safely accelerate your weight loss journey.",
    href: "#weight-loss",
  },
  {
    title: "DOT Physicals",
    description: "Certified medical examinations required for commercial motor vehicle drivers. Walk-ins typically welcome.",
    href: "#contact",
  },
  {
    title: "Medical Marijuana",
    description: "Compassionate evaluation and certification for therapeutic cannabis use under state guidelines.",
    href: "#contact",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[1px] bg-primary-600 block" />
              <span className="text-primary-700 text-xs font-bold uppercase tracking-[0.2em]">
                Our Expertise
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-normal text-dark tracking-[-0.02em] leading-[1.1]"
            >
              Elite protocols, <br className="hidden md:block" />
              <span className="italic font-light text-primary-700">proven outcomes.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-sm text-[15px] leading-relaxed lg:text-right"
          >
            We deploy advanced longevity medicine alongside comprehensive family care to maximize your healthspan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-10 lg:p-12 flex flex-col h-full transition-colors duration-300 hover:bg-primary-50/50 ${
                index < 2 ? "border-b border-gray-200" : ""
              } ${index % 2 === 0 ? "md:border-r border-gray-200" : ""}`}
            >
              <span className="text-primary-500/60 text-xs font-bold tracking-widest font-heading mb-6 block">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-heading font-semibold text-dark mb-4 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px] mb-8 flex-grow">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-dark group-hover:text-primary-700 transition-colors"
              >
                Learn more
                <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
