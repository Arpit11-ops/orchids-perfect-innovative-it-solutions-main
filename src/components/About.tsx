"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Award, Users, MapPin } from "lucide-react";
import Image from "next/image";

const strengths = [
  "Active Services & Immediate Response",
  "30 Years of Experienced Team",
  "State of the Art Technology",
  "Expert Consultation",
  "Qualified & Certified Services",
  "ISO 9001-2008 Certified Company",
];

const highlights = [
  { icon: Award, title: "ISO Certified", desc: "ISO 9001-2008 certified with stringent quality checks" },
  { icon: Users, title: "Expert Team", desc: "52+ highly trained & certified technicians" },
  { icon: MapPin, title: "Pan India", desc: "Covering 90% of India with doorstep services" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
    alt: "Server room",
    label: "Data Centre",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    alt: "Networking setup",
    label: "Networking",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute top-20 right-0 w-80 h-80 z-0 bg-blue-50/80 blur-3xl rounded-full opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-60 h-60 z-0 bg-cyan-50/80 blur-3xl rounded-full opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 transform-gpu"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              PICL
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            A trusted IT systems integrator shaping India&apos;s technology landscape since 1995.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:items-start mb-16">
          {/* Left — text */}
          <div className="self-start mt-0 pt-0">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base transform-gpu"
            >
              Perfect Innovative Computer Pvt. Ltd incorporates the latest microprocessor-based
              technology delivering the highest quality in design, performance and reliability. We
              oversee the full scope of supply, installation, testing, commissioning and maintenance
              of IT hardware and software systems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 leading-relaxed mb-8 text-sm sm:text-base transform-gpu"
            >
              As a standard re-seller for DELL, Cisco, IBM, Microsoft, Fortinet, Checkpoint,
              Sophos, Adobe, Red Hat, HPE, EPSON, CANON, LIPI and VMware, we are a leading force on
              the networking &amp; communication horizon. Our company is managed by highly dynamic
              professionals committed to a benchmark of excellence.
            </motion.p>

            {/* Strengths grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {strengths.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                  className="flex items-start gap-2.5 transform-gpu"
                >
                  <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — image collage + cards */}
          <div className="self-start mt-0 pt-0">
            {/* Image grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-3 mb-5 transform-gpu"
            >
              {/* Large image */}
              <div className="col-span-2 relative h-52 rounded-2xl overflow-hidden border border-slate-100 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                  alt="PICL team at work"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-semibold">
                    30+ Years of Excellence
                  </span>
                </div>
              </div>

              {/* Two smaller images */}
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img.alt}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="relative h-36 rounded-xl overflow-hidden border border-slate-100 shadow-sm group transform-gpu"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3">
                    <p className="text-white text-xs font-semibold">{img.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlight cards */}
            <div className="space-y-3">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 * i + 0.4 }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 group transform-gpu"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-100">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-bold text-sm mb-0.5">{title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office info card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-3 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 transform-gpu"
            >
              <p className="text-blue-600 font-semibold text-sm mb-1">Head Office</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                AJ-20A, Shalimar Bagh, Delhi-110088
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Regd: G-8/31, Indiradeep Building, Commercial Complex, Wazir Pur, New Delhi-110052
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
