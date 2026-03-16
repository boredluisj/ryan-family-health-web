"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const providers = [
  {
    name: "Michelle Ryan, FNP-C",
    role: "Founder & Lead Nurse Practitioner",
    image: "/images/michelle.webp",
    bio: "Michelle established Ryan Family Health with a vision of comprehensive, compassionate care. With over two decades of clinical experience, she specializes in advanced primary care and medical weight loss optimization.",
    credentials: ["Board Certified Family NP", "20+ Years Experience"],
  },
  {
    name: "Brooke McBride, FNP-C",
    role: "Family Nurse Practitioner",
    image: "/images/professional.jpg",
    bio: "Brooke brings extensive expertise in preventive medicine, women's health, and acute illness management. She works closely with individuals to develop sustainable health strategies.",
    credentials: ["Board Certified Family NP", "Preventive Care Specialist"],
  },
  {
    name: "Cleo",
    role: "Chief Morale Officer",
    image: "/images/dog.jpg",
    bio: "Cleo works hard every single day to ensure the clinic stays stress-free, welcoming, and full of tail-wagging positivity for every patient who visits.",
    credentials: ["Expert Cuddler", "Treat Connoisseur"],
  },
];

export default function Providers() {
  return (
    <section id="providers" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-12 h-[1px] bg-primary-600 block" />
            <span className="text-primary-700 text-xs font-bold uppercase tracking-[0.2em]">
              Meet Our Team
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-normal text-dark tracking-[-0.02em] leading-[1.1]"
          >
            Dedicated experts <br className="hidden md:block" />
            <span className="italic font-light text-primary-700">who genuinely care.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 border border-gray-100">
                <Image
                  src={provider.image}
                  alt={provider.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-dark mb-1">
                {provider.name}
              </h3>
              <p className="text-primary-600 text-sm font-medium mb-4">
                {provider.role}
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
                {provider.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {provider.credentials.map((cred, i) => (
                  <span
                    key={i}
                    className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
