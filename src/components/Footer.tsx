"use client";

import { motion } from "framer-motion";
import { Monitor, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const links = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Products", href: "#products" },
      { label: "Clients", href: "#clients" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "Cyber Security", href: "#services" },
      { label: "Networking", href: "#services" },
      { label: "Software", href: "#services" },
      { label: "Hardware", href: "#services" },
    ],
  },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050810] border-t border-white/[0.07] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-1/2 left-0 w-60 h-60 bg-blue-700/5 rounded-full opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">PICL</p>
                <p className="text-blue-400 text-[10px] tracking-widest uppercase">Perfect Innovative</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              India&apos;s trusted IT systems integrator since 1995. Delivering excellence in hardware, software and cyber security.
            </p>
            <div className="space-y-2">
              <a href="tel:+919810299525" className="flex items-center gap-2 text-slate-300 hover:text-blue-300 text-xs transition-colors">
                <Phone className="w-3 h-3" /> +91 9810299525
              </a>
              <a href="mailto:ajay@picl.co.in" className="flex items-center gap-2 text-slate-300 hover:text-blue-300 text-xs transition-colors">
                <Mail className="w-3 h-3" /> ajay@picl.co.in
              </a>
              <p className="flex items-start gap-2 text-slate-300 text-xs">
                <MapPin className="w-3 h-3 flex-shrink-0 mt-0.5" /> AJ-20A, Shalimar Bagh, Delhi-110088
              </p>
            </div>
          </div>

          {/* Nav links */}
          {links.map((col) => (
            <div key={col.title}>
              <p className="text-white font-bold text-sm mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNav(e, item.href)}
                      className="text-slate-300 hover:text-blue-300 text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Certifications */}
          <div>
            <p className="text-white font-bold text-sm mb-4">Certifications</p>
            <div className="space-y-2.5">
              {["ISO 9001-2008 Certified", "Microsoft Partner", "Dell Authorized", "Cisco Reseller", "VMware Partner"].map(
                (cert) => (
                  <div key={cert} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 text-xs">{cert}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            &copy; {new Date().getFullYear()} Perfect Innovative Computers Pvt. Ltd. All rights reserved.
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 text-xs font-medium transition-all duration-200"
          >
            Back to Top <ArrowUp className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
