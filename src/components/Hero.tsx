"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Network, Shield } from "lucide-react";
import Image from "next/image";

const floatingBadges = [
  { icon: Shield, label: "ISO 9001 Certified", delay: 0.8, x: "left-10 top-1/3", color: "from-blue-600 to-blue-400" },
  { icon: Monitor, label: "30,000+ Users", delay: 1.0, x: "left-1/2 -translate-x-1/2 top-24", color: "from-indigo-600 to-indigo-400" },
  { icon: Network, label: "30+ Years Experience", delay: 1.2, x: "right-10 top-1/3", color: "from-cyan-600 to-cyan-400" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#050810] pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#12345a_0%,_#050810_55%)]" />

      <div className="absolute inset-0 z-[1] pointer-events-none flex justify-between items-center px-20">
        <div className="w-80 h-80 bg-blue-200/20 rounded-full opacity-70 animate-pulse" />
        <div className="w-80 h-80 bg-cyan-200/15 rounded-full opacity-70 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {floatingBadges.map(({ icon: Icon, label, delay, x, color }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay }}
          className={`absolute ${x} hidden lg:flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-md z-20`}
        >
          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
            <Icon className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-xs text-blue-100 font-medium">{label}</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-full border border-blue-300/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-200"
        >
          Perfect Innovative Computers
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white"
        >
          Enterprise IT Solutions
          <br />
          Built For Reliability
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-slate-300"
        >
          End-to-end infrastructure, cyber security, software licensing, and support services trusted by businesses across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get a Consultation <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-300/30 bg-white/5 px-5 py-3 text-sm font-semibold text-blue-100 hover:bg-white/10 transition-colors"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-16 left-12 hidden xl:block z-10"
      >
        <div className="relative w-56 h-36 rounded-2xl overflow-hidden border-2 border-white/70 shadow-xl shadow-slate-900/40">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&q=80"
            alt="IT deployment"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-16 right-12 hidden xl:block z-10"
      >
        <div className="relative w-56 h-36 rounded-2xl overflow-hidden border-2 border-white/70 shadow-xl shadow-slate-900/40">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80"
            alt="Network monitoring"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
