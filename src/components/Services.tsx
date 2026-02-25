"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Wifi, Monitor, Package, Layers, HardDrive } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Shield,
    title: "Cyber Security",
    color: "from-red-500 to-rose-400",
    border: "hover:border-red-200",
    bg: "hover:bg-red-50/50",
    accent: "bg-gradient-to-r from-red-500 to-rose-400",
    desc: "Complete IT Cyber Security solutions including hardware firewalls and software from Fortinet, Checkpoint, Force-Point and Sophos.",
    tags: ["Fortinet", "Checkpoint", "Force-Point", "Sophos"],
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    imageAlt: "Cyber security",
  },
  {
    icon: Wifi,
    title: "Networking & Communication",
    color: "from-blue-600 to-blue-400",
    border: "hover:border-blue-200",
    bg: "hover:bg-blue-50/50",
    accent: "bg-gradient-to-r from-blue-600 to-blue-400",
    desc: "Structured wired & Wi-Fi networking solutions and communication products in single and multi-user environments.",
    tags: ["Cisco", "Structured Cabling", "Wi-Fi", "VoIP"],
    image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600&q=80",
    imageAlt: "Networking infrastructure",
  },
  {
    icon: Monitor,
    title: "Desktops & Laptops",
    color: "from-cyan-600 to-cyan-400",
    border: "hover:border-cyan-200",
    bg: "hover:bg-cyan-50/50",
    accent: "bg-gradient-to-r from-cyan-600 to-cyan-400",
    desc: "Customized & branded Desktop Computers and Laptops tailored to enterprise needs with full warranty support.",
    tags: ["Dell", "HP", "IBM", "Custom Builds"],
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    imageAlt: "Laptops and desktops",
  },
  {
    icon: Package,
    title: "Software Solutions",
    color: "from-violet-600 to-purple-400",
    border: "hover:border-violet-200",
    bg: "hover:bg-violet-50/50",
    accent: "bg-gradient-to-r from-violet-600 to-purple-400",
    desc: "Authorized software reseller for Microsoft, IBM, Red Hat and VMware. Licensing, deployment and support included.",
    tags: ["Microsoft", "IBM", "Red Hat", "VMware"],
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=600&q=80",
    imageAlt: "Software solutions",
  },
  {
    icon: Layers,
    title: "Display & Video Conferencing",
    color: "from-emerald-600 to-green-400",
    border: "hover:border-emerald-200",
    bg: "hover:bg-emerald-50/50",
    accent: "bg-gradient-to-r from-emerald-600 to-green-400",
    desc: "Full range of display panels and video conferencing equipment from Samsung, LG, Cisco, Polycom and People Link.",
    tags: ["Samsung", "LG", "Cisco", "Polycom"],
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
    imageAlt: "Video conferencing",
  },
  {
    icon: HardDrive,
    title: "Peripherals & Consumables",
    color: "from-amber-500 to-yellow-400",
    border: "hover:border-amber-200",
    bg: "hover:bg-amber-50/50",
    accent: "bg-gradient-to-r from-amber-500 to-yellow-400",
    desc: "All IT peripherals including SSD drives, printers (Inkjet, Laser, Ink Tank), scanners, keyboards, monitors and more.",
    tags: ["HP", "Canon", "Epson", "Kingston"],
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
    imageAlt: "IT peripherals",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0 bg-blue-50 rounded-full opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            End-to-end IT solutions from procurement to maintenance — all under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, color, border, bg, accent, desc, tags, image, imageAlt }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={`relative rounded-2xl bg-white border border-slate-100 ${border} ${bg} transition-all duration-300 overflow-hidden group cursor-default shadow-sm hover:shadow-md`}
            >
              {/* Image header */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-white/20" />
                {/* Icon overlay */}
                <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-slate-800 font-bold text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{desc}</p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-0.5 ${accent}`}
                initial={{ width: "0%" }}
                animate={{ width: hovered === i ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
