"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Weight Loss", href: "#weight-loss" },
    { name: "Providers", href: "#providers" },
    { name: "Patient Portal", href: "https://auth.athenahealth.com/login" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-primary-100 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-64 h-12 transition-transform group-hover:scale-105">
             <Image 
                src="/images/logo.png" 
                alt="Ryan Family Health" 
                fill 
                className="object-contain object-left"
                priority
             />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-gray-200 pl-8 ml-4">
            <a href="tel:1234567890" className="flex items-center gap-2 text-sm font-semibold text-dark hover:text-primary-600 transition-colors">
              <Phone size={16} className="text-primary-500" />
              <span>(555) 123-4567</span>
            </a>
            <Link
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-primary-500/20 hover:bg-primary-500 hover:scale-105 transition-all active:scale-95"
            >
              Book Now
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-dark p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl flex flex-col lg:hidden"
            >
              <div className="p-6 flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-dark bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-6 px-8 py-4 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-heading font-bold text-dark hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="p-8 border-t border-gray-100 bg-gray-50 flex flex-col gap-4">
                <a href="tel:1234567890" className="flex items-center gap-3 text-dark font-semibold">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Phone size={20} className="text-primary-600" />
                  </div>
                  (555) 123-4567
                </a>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-primary-600/20 active:scale-95 transition-transform"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
