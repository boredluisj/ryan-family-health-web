"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-[#faf9f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left — Intro */}
          <div className="w-full lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[1px] bg-primary-600 block" />
              <span className="text-primary-700 text-xs font-bold uppercase tracking-[0.2em]">
                Get In Touch
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-normal text-dark tracking-[-0.02em] leading-[1.1] mb-6"
            >
              We are here <br />
              <span className="italic font-light text-primary-700">for you.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-[15px] leading-relaxed max-w-sm"
            >
              Please contact us directly with any questions, comments, or scheduling inquiries you may have.
            </motion.p>
          </div>

          {/* Right — Contact Details */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
              {/* Main Phone */}
              <a href="tel:5188995002" className="group p-8 border-b border-r border-gray-200 hover:bg-primary-50/50 transition-colors">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-3">Main Phone</span>
                <span className="text-2xl font-heading font-semibold text-dark group-hover:text-primary-700 transition-colors block">(518) 899-5002</span>
              </a>

              {/* After Hours */}
              <a href="tel:5185050934" className="group p-8 border-b border-gray-200 hover:bg-primary-50/50 transition-colors">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-3">After Hours On-Call</span>
                <span className="text-2xl font-heading font-semibold text-dark group-hover:text-primary-700 transition-colors block">(518) 505-0934</span>
                <span className="text-xs text-gray-400 mt-2 block">A provider will return your call within an hour. Insurance billed.</span>
              </a>

              {/* Email */}
              <a href="mailto:michelle@ryanfamilyhealth.com" className="group p-8 border-b md:border-b-0 border-r border-gray-200 hover:bg-primary-50/50 transition-colors">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-3">Email</span>
                <span className="text-lg font-heading font-semibold text-dark group-hover:text-primary-700 transition-colors block break-all">michelle@ryanfamilyhealth.com</span>
              </a>

              {/* Fax */}
              <div className="p-8 hover:bg-primary-50/50 transition-colors">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-3">Fax</span>
                <span className="text-2xl font-heading font-semibold text-dark block">(518) 899-5840</span>
                <span className="text-xs text-gray-400 mt-2 block">Feel free to fax any documents</span>
              </div>
            </div>

            {/* Hours row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm text-gray-500"
            >
              <div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Mon — Thu</span>
                <span className="font-semibold text-dark">8:00 AM — 5:00 PM</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Friday</span>
                <span className="font-semibold text-dark">8:00 AM — 1:00 PM</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Sat — Sun</span>
                <span className="font-semibold text-primary-700">Closed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
