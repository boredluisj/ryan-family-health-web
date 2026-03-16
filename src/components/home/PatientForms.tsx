"use client";

import { motion } from "framer-motion";

export default function PatientForms() {
  const forms = [
    { name: "New Patient Questionnaire", href: "https://drive.google.com/file/d/1_4j1lG2LwWqCbGbNJtQmQ3BFHYjdiEJ9/view?usp=sharing" },
    { name: "New Patient Reg & HIPAA", href: "https://drive.google.com/file/d/1WU6HGrwDrtx04RIhaGL39ks2txM0sqLY/view?usp=sharing" },
    { name: "Hixny Consent Form", href: "https://drive.google.com/file/d/1swxNfUBtSUtyRFMJV2-JoJvnmXqSNOHW/view?usp=sharing" },
    { name: "Specialists Record Release", href: "https://drive.google.com/file/d/1UKcAjiVzIatTEy7qs_ZuR91U5Ou2Io4s/view?usp=sharing" },
    { name: "Office Policies & Procedures", href: "https://drive.google.com/file/d/1PCK3PgXc8c7Co_m19rC35IZGvw8uJXn5/view?usp=sharing" },
    { name: "DOT FMCSA Exam Form", href: "https://drive.google.com/file/d/1hYiXHwxfs7NcuqZLBd6dTAngdZJMm0G6/view?usp=sharing" },
    { name: "Patient Portal Tutorial (Video)", href: "https://www.medent.com/tutorials_mp4/Patient_Portal_Patient_Promo.mp4" },
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Subtle aesthetic backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,139,34,0.02),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Header Left */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-primary-600 block" />
              <span className="text-primary-800 text-xs font-bold uppercase tracking-[0.2em]">
                Patient Resources
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-heading font-normal text-dark tracking-[-0.02em] leading-[1.1] mb-6"
            >
              Required forms <br />
              <span className="italic font-light text-primary-700">for new patients.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 font-light leading-relaxed max-w-sm"
            >
              To expedite your visit, please download, print, and complete these forms prior to your first appointment.
            </motion.p>
          </div>

          {/* Forms List Right */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {forms.map((form, index) => (
                <motion.a
                  key={index}
                  href={form.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                  className="group flex items-center justify-between p-6 rounded-2xl bg-[#faf9f6] hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <span className="font-medium text-dark group-hover:text-primary-700 transition-colors">
                    {form.name}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 group-hover:border-primary-200 group-hover:bg-primary-50 transition-all shadow-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400 group-hover:text-primary-600 transition-colors"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
