"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Monitor } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Robotics", href: "#ugv" },
  { label: "Clients", href: "#clients" },
  { label: "Get In Touch", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/65 backdrop-blur-2xl backdrop-saturate-[1.8] shadow-lg shadow-slate-200/30 border-b border-white/40"
          : "bg-white/50 backdrop-blur-xl backdrop-saturate-150 border-b border-white/30"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-200">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-slate-800 font-bold text-sm tracking-wide">PICL</span>
                <span className="text-blue-500 text-[10px] tracking-widest uppercase">Perfect Innovative</span>
              </div>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => {
                const isCta = link.href === "#contact";
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    className={
                      isCta
                        ? "ml-2 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200"
                        : "relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200 group"
                    }
                  >
                    {link.label}
                    {isCta ? null : (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-slate-600 hover:text-blue-600 p-2"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/70 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-white/40 md:hidden overflow-hidden shadow-lg shadow-slate-200/20"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isCta = link.href === "#contact";
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={
                      isCta
                        ? "mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-200"
                        : "py-3 px-2 text-slate-600 hover:text-blue-600 border-b border-slate-100 text-sm font-medium transition-colors"
                    }
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
