"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";

const providers = [
  {
    name: "Michelle Ryan, FNP-C",
    role: "Founder & Lead Nurse Practitioner",
    image: "https://static.wixstatic.com/media/f43aa2_051bfe8eba3342ceb7f0cafe1417e62b~mv2.jpg/v1/fill/w_452,h_602,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f43aa2_051bfe8eba3342ceb7f0cafe1417e62b~mv2.jpg",
    bio: "Michelle established Ryan Family Health with a vision of comprehensive, compassionate care. With over two decades of clinical experience, she specializes in advanced primary care, medical weight loss optimization, and holistically treating the entire patient. Her approach blends cutting-edge evidence-based medicine with genuine bedside warmth.",
    credentials: ["Board Certified Family Nurse Practitioner", "20+ Years Clinical Experience"]
  },
  {
    name: "Brooke McBride, FNP-C",
    role: "Family Nurse Practitioner",
    image: "https://static.wixstatic.com/media/f43aa2_d61c288cefa44ce2ba31973c0f0c9b5a~mv2.jpg/v1/fill/w_460,h_340,al_c,lg_1,q_80,enc_avif,quality_auto/f43aa2_d61c288cefa44ce2ba31973c0f0c9b5a~mv2.jpg", // Adjusted to original Brooke image from brief
    bio: "Brooke brings extensive expertise in preventive medicine, women's health, and acute illness management. Dedicated to patient education and empowerment, she works closely with individuals to develop sustainable health strategies that fit their lifestyle and long-term wellness goals.",
    credentials: ["Board Certified Family Nurse Practitioner", "Specialist in Preventive Care"]
  }
];

export default function Providers() {
  return (
    <section id="providers" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Meet Our Team
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-dark tracking-tight mb-6"
          >
            Dedicated Experts Who Care.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {providers.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row group"
            >
              <div className="w-full sm:w-2/5 aspect-[4/5] sm:aspect-auto relative overflow-hidden">
                <Image
                  src={provider.image}
                  alt={provider.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full sm:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                <h4 className="text-2xl font-heading font-bold text-dark mb-1">{provider.name}</h4>
                <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase mb-6">{provider.role}</p>
                
                <p className="text-gray-600 leading-relaxed font-light mb-8">
                  "{provider.bio}"
                </p>
                
                <div className="space-y-3 mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <Award size={16} className="text-primary-500" />
                    {provider.credentials[0]}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <GraduationCap size={16} className="text-primary-500" />
                    {provider.credentials[1]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
