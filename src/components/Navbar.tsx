"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    { name: "Patient Portal", href: "https://www.medentmobile.com/portal/index.php?practice_id=QM65v37Z", external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
        isScrolled ? "py-3 shadow-sm" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-56 h-10 transition-transform group-hover:scale-[1.02] duration-300">
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
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[13px] font-semibold text-gray-600 hover:text-primary-700 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-5 border-l border-gray-200 pl-8 ml-2">
            <a href="tel:5188995002" className="text-[13px] font-bold text-dark hover:text-primary-700 transition-colors tracking-wide">
              (518) 899-5002
            </a>
            <Link
              href="#contact"
              className="group relative bg-dark text-white px-6 py-2.5 rounded-full text-[13px] font-semibold uppercase tracking-wider overflow-hidden transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book Now</span>
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-dark p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
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
                  className="p-2 text-gray-500 hover:text-dark transition-colors"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-6 px-8 py-4 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-2xl font-heading font-semibold text-dark hover:text-primary-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="p-8 border-t border-gray-100 bg-[#faf9f6] flex flex-col gap-4">
                <a href="tel:5188995002" className="flex items-center gap-3 text-dark font-semibold text-lg">
                  (518) 899-5002
                </a>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-dark text-white py-4 rounded-full text-center font-semibold uppercase tracking-wider text-sm active:scale-95 transition-transform"
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
