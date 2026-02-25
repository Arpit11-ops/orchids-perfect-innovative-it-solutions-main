"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Plane, Train, BookOpen, Vote } from "lucide-react";
import Image from "next/image";

const clients = [
  { icon: Plane, name: "Indian Air Force", detail: "Directorate of IT Air HQ VB, New Delhi", category: "Defence" },
  { icon: Building2, name: "Indian Army", detail: "HQ Sena Bhawan & Head Quarter TG EME Delhi Cantt.", category: "Defence" },
  { icon: Plane, name: "Air Force Stations", detail: "Air Force Station New Delhi, Western Air Command, 3 Wing, 27 ED, 13 BRD", category: "Defence" },
  { icon: Building2, name: "Border Roads Organisation", detail: "Director General, BRO", category: "Govt." },
  { icon: Train, name: "Indian Railways", detail: "National rail network services", category: "PSU" },
  { icon: Building2, name: "Delhi Transport Corporation", detail: "DTC, New Delhi", category: "PSU" },
  { icon: Vote, name: "Election Commission of India", detail: "Statutory body of India", category: "Govt." },
  { icon: BookOpen, name: "Delhi University", detail: "One of India's premier universities", category: "Education" },
  { icon: Building2, name: "ESSL India", detail: "Enterprise security solutions client", category: "Corporate" },
];

const categoryColors: Record<string, string> = {
  Defence: "bg-red-100 text-red-600 border-red-200",
  "Govt.": "bg-blue-100 text-blue-600 border-blue-200",
  PSU: "bg-cyan-100 text-cyan-600 border-cyan-200",
  Education: "bg-violet-100 text-violet-600 border-violet-200",
  Corporate: "bg-emerald-100 text-emerald-600 border-emerald-200",
};

const brands = [
  "DELL", "Cisco", "IBM", "Microsoft", "Fortinet", "Checkpoint",
  "Force-Point", "Sophos", "Adobe", "Red Hat", "HPE", "Epson",
  "Canon", "LIPI", "VMware", "Samsung", "Polycom",
];

export default function Clients() {
  const ref = useRef(null);
  const brandsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const brandsInView = useInView(brandsRef, { once: true, margin: "-60px" });

  return (
    <section id="clients" ref={ref} className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute top-10 right-10 w-72 h-72 z-0 bg-blue-50 rounded-full opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Trusted By
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Major{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Serving India&apos;s defence forces, government bodies, railways and educational institutions.
          </p>
        </motion.div>

        {/* Pan India visual banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-md mb-12"
        >
          <Image
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1400&q=80"
            alt="India landmark"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-900/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-cyan-300 text-xs font-bold uppercase tracking-widest mb-2">Pan India Presence</p>
            <h3 className="text-white text-2xl sm:text-3xl font-extrabold mb-2">
              30,000+ Users Across India
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              Covering 90% of India with doorstep services, regional salesmen and OEM-certified engineers.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {clients.map(({ icon: Icon, name, detail, category }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-blue-500" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-slate-800 font-semibold text-sm">{name}</h3>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${categoryColors[category]}`}>
                    {category}
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand partners */}
        <div ref={brandsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={brandsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
              Authorized Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Our Brand{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
          </motion.div>

          {/* Brand partner logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={brandsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-slate-200 p-8 bg-white shadow-sm"
          >
            <div className="relative z-10 flex flex-wrap justify-center gap-3">
              {brands.map((brand, i) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={brandsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-600 hover:text-blue-600 text-sm font-bold tracking-wide transition-all duration-200 cursor-default"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
