"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Printer, Clock, AlertCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-3"
          >
            Call Us Today For An Appointment
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-black text-dark tracking-tight mb-6"
          >
            We Are Here For You.
          </motion.h3>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-gray-600 font-light"
          >
             Please contact us directly with any questions, comments, or scheduling inquiries you may have.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-primary-900/5 border border-primary-50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10" />
            
            <h4 className="text-2xl font-bold font-heading text-dark mb-8">Primary Contact</h4>
            
            <div className="space-y-8">
              <a href="tel:5188995002" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-1">Main Phone</p>
                  <p className="text-2xl font-bold text-dark group-hover:text-primary-600 transition-colors">(518) 899-5002</p>
                </div>
              </a>

              <a href="mailto:michelle@ryanfamilyhealth.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-1">Email Us</p>
                  <p className="text-xl font-bold text-dark group-hover:text-primary-600 transition-colors">michelle@ryanfamilyhealth.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-600 flex items-center justify-center shrink-0">
                  <Printer size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-1">Fax Documents</p>
                  <p className="text-xl font-bold text-dark">(518) 899-5840</p>
                  <p className="text-sm text-gray-500 mt-1">Feel free to fax any documents</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* After Hours & Office Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* After Hours Card */}
            <div className="bg-dark rounded-3xl p-8 lg:p-10 shadow-xl text-white relative overflow-hidden">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl border-white/10" />
               <h4 className="flex items-center gap-2 text-xl font-bold font-heading mb-6">
                 <AlertCircle className="text-red-400" />
                 After Hours On-Call Services
               </h4>
               <p className="text-white/80 mb-6 font-light leading-relaxed">
                 On Call Services are available. A provider will return your call, usually within an hour. Your insurance will be billed for this service.
               </p>
               <a href="tel:5185050934" className="inline-flex items-center gap-3 bg-white text-dark px-6 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-transform">
                 <Phone size={18} className="text-red-500" />
                 (518) 505-0934
               </a>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex-grow">
              <h4 className="flex items-center gap-2 text-xl font-bold font-heading text-dark mb-6">
                <Clock className="text-primary-500" />
                Office Hours
              </h4>
              <ul className="flex flex-col gap-4 text-gray-600">
                <li className="flex justify-between items-center border-b border-gray-50 pb-3">
                  <span className="font-medium">Monday - Thursday</span>
                  <span className="font-bold text-dark">8:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-50 pb-3">
                  <span className="font-medium">Friday</span>
                  <span className="font-bold text-dark">8:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span className="font-medium">Saturday - Sunday</span>
                  <span className="font-bold text-red-500">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
