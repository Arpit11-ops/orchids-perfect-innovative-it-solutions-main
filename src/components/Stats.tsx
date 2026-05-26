"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, MapPin, Calendar, Building2, Star } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Calendar, value: "30+", label: "Years in Business", sub: "Since 1995" },
  { icon: Users, value: "30,000+", label: "Users Across India", sub: "And growing" },
  { icon: Building2, value: "52+", label: "Strong Workforce", sub: "Trained professionals" },
  { icon: MapPin, value: "90%", label: "India Coverage", sub: "Doorstep service" },
  { icon: Star, value: "ISO", label: "9001-2008 Certified", sub: "Quality assured" },
  { icon: TrendingUp, value: "14+", label: "Major Gov. Clients", sub: "Including Armed Forces" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-blue-600 to-cyan-500 overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=70"
          alt="Team background"
          fill
          className="object-cover opacity-10"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/80 to-cyan-600/80" />
      </div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/25 text-white text-xs font-semibold tracking-widest uppercase mb-4">
            Our Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Numbers That{" "}
            <span className="text-cyan-200">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="relative p-5 rounded-2xl liquid-glass-dark glass-shimmer-hover glass-refraction hover:bg-white/[0.18] transition-all duration-300 text-center group overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-4 h-4 text-white" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white mb-1">
                {value}
              </p>
              <p className="text-blue-100 text-xs font-semibold leading-tight mb-1">{label}</p>
              <p className="text-white/80 text-xs">{sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
