"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Printer, Server, Camera, Database, Monitor, Plane, Bot, PersonStanding } from "lucide-react";
import Image from "next/image";

const productCategories = [
  {
    icon: Cpu,
    title: "Software Products",
    color: "from-blue-600 to-blue-400",
    items: ["Microsoft (all editions)", "IBM Software Suite", "Red Hat Linux", "VMware Virtualization"],
  },
  {
    icon: Server,
    title: "Security Hardware & Software",
    color: "from-red-500 to-rose-400",
    items: ["Fortinet Firewalls", "Checkpoint Solutions", "Force-Point Security", "Sophos Endpoint"],
  },
  {
    icon: Monitor,
    title: "Display Panels",
    color: "from-cyan-600 to-cyan-400",
    items: ["Samsung Display Panels", "LG Screens", "Aaztech / People Link", "Barco & Delta"],
  },
  {
    icon: Camera,
    title: "Video Conferencing",
    color: "from-indigo-600 to-indigo-400",
    items: ["People Link Systems", "Cisco Telepresence", "Polycom Solutions", "HD Video Endpoints"],
  },
  {
    icon: Printer,
    title: "Printers & Consumables",
    color: "from-emerald-600 to-green-400",
    items: ["HP Inkjet & Laser", "Canon Printers", "Epson Ink Tank", "Xerox & Samsung"],
  },
  {
    icon: Database,
    title: "IT Peripherals",
    color: "from-amber-500 to-yellow-400",
    items: ["SSD & Storage Drives", "Keyboards & Mice", "Scanners & Monitors", "Speakers & Headsets"],
  },
  {
    icon: Plane,
    title: "Drones & Components",
    color: "from-amber-600 to-amber-400",
    items: ["In-House Manufactured Drones", "Drone Sales & Supply", "Camera Gimbal Systems", "High-Capacity Batteries"],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    color: "from-fuchsia-600 to-pink-400",
    items: ["AI Agent Frameworks", "NLP & Chatbot Platforms", "ML Model Deployment", "Enterprise AI Integration"],
  },
  {
    icon: PersonStanding,
    title: "Humanoid & Robotics",
    color: "from-teal-600 to-emerald-400",
    items: ["Humanoid Research Kits", "Motion Control Systems", "Sensor & Actuator Modules", "Autonomous Navigation"],
  },
];

const showcaseImages = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",
    alt: "Electronics components",
    label: "Quality Hardware",
  },
  {
    src: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=700&q=80",
    alt: "Server rack",
    label: "Enterprise Servers",
  },
  {
    src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&q=80",
    alt: "Laptop",
    label: "Laptops & Desktops",
  },
];

export default function Products() {
  const ref = useRef(null);
  const showcaseRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const showcaseInView = useInView(showcaseRef, { once: true, margin: "-60px" });

  return (
    <section id="products" ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="absolute top-10 left-10 w-80 h-80 z-0 bg-blue-50 rounded-full opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 z-0 bg-cyan-50 rounded-full opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Product Range
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 text-center">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl text-center text-sm sm:text-base">
            World-class products from reputed manufacturers — all available through PICL.
          </p>
        </motion.div>

        <div ref={showcaseRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {showcaseImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-md group h-56"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="px-4 py-1.5 rounded-full bg-blue-600/70 backdrop-blur-lg border border-white/20 text-white text-xs font-semibold shadow-md">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map(({ icon: Icon, title, color, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl bg-white border border-slate-100 hover:border-white/50 hover:shadow-md transition-all duration-300 flex flex-col h-full group glass-shimmer-hover ${i === 8 ? "sm:col-span-2 lg:col-span-1 w-full sm:max-w-sm lg:max-w-none mx-auto" : ""
                }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md mx-auto`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-slate-800 font-bold text-base mb-4 text-center">{title}</h3>
              <ul className="space-y-3 flex-grow flex flex-col justify-center">
                {items.map((item) => (
                  <li key={item} className="flex items-center justify-center gap-2.5 text-slate-500 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
