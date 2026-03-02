"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Mobile",
    value: "+91 9810299525",
    href: "tel:+919810299525",
    color: "bg-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ajay@picl.co.in",
    href: "mailto:ajay@picl.co.in",
    color: "bg-cyan-600",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "AJ-20A, Shalimar Bagh, Delhi-110088",
    href: "https://maps.google.com/?q=Shalimar+Bagh+Delhi",
    color: "bg-indigo-600",
  },
  {
    icon: Clock,
    label: "Same Day Service",
    value: "Preventative maintenance clients get same-day response",
    href: null,
    color: "bg-violet-600",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px z-0 bg-blue-200/70" />
      <div className="absolute top-1/2 left-0 w-80 h-80 z-0 bg-blue-50 blur-3xl rounded-full opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 z-0 bg-cyan-50 blur-3xl rounded-full opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 transform-gpu"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Let&apos;s <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Ready to upgrade your IT infrastructure? Reach out to our team and we&apos;ll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {contactDetails.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-300 group transform-gpu"
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-1 font-medium uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-800 font-semibold text-sm hover:text-blue-600 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-800 font-semibold text-sm">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="p-5 rounded-2xl bg-blue-50 border border-blue-100 transform-gpu"
            >
              <p className="text-blue-700 font-bold text-base mb-1">Ajay Kumar</p>
              <p className="text-slate-600 text-sm">Director Sales</p>
              <p className="text-slate-500 text-xs mt-2">Perfect Innovative Computers Pvt. Ltd</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transform-gpu"
          >
            <h3 className="text-slate-800 font-bold text-xl mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                window.location.href = `mailto:ajay@picl.co.in?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-500 text-xs font-medium mb-2 block uppercase tracking-wider">Name</label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-slate-500 text-xs font-medium mb-2 block uppercase tracking-wider">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-500 text-xs font-medium mb-2 block uppercase tracking-wider">Company</label>
                <input
                  name="company"
                  placeholder="Your company"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                />
              </div>
              <div>
                <label className="text-slate-500 text-xs font-medium mb-2 block uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your IT requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-md shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all duration-200 text-sm transform-gpu"
              >
                Send Message <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
