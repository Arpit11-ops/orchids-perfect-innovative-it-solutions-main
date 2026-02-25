"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Network, Monitor, ChevronDown } from "lucide-react";
import Image from "next/image";

const floatingBadges = [
  { icon: Shield, label: "ISO 9001 Certified", delay: 0.8, x: "left-8 top-1/3", color: "from-blue-600 to-blue-400" },
  { icon: Network, label: "30+ Years Experience", delay: 1.0, x: "right-8 top-1/4", color: "from-cyan-600 to-cyan-400" },
  { icon: Monitor, label: "30,000+ Users", delay: 1.2, x: "right-12 bottom-1/3", color: "from-indigo-600 to-indigo-400" },
];

const partners = ["DELL", "Cisco", "IBM", "Microsoft", "Fortinet", "HPE", "VMware", "Sophos"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.25 + 0.05,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37,99,235,${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37,99,235,${0.1 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/30">
      {/* Full-screen background image with light overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
          alt="Data center background"
          fill
          className="object-cover opacity-[0.06]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-blue-50/50 to-slate-50" />
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/35 rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200/25 rounded-full opacity-70 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-100/35 rounded-full opacity-70 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating badges */}
      {floatingBadges.map(({ icon: Icon, label, delay, x, color }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
          className={`absolute ${x} hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 border border-blue-100 shadow-lg shadow-blue-100/50 z-10`}
        >
          <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-xs text-slate-600 font-medium whitespace-nowrap">{label}</span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          ISO 9001-2008 Certified &bull; Est. 1995
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 leading-tight tracking-tight mb-6"
        >
          Perfect Innovative
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Computers Pvt. Ltd
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          India&apos;s leading IT systems integrator delivering cutting-edge hardware, software,
          cyber security, and networking solutions for over 30 years.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 text-sm"
          >
            Explore Services <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 px-7 py-3.5 border border-blue-200 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-sm shadow-sm"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Partner logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="relative overflow-hidden"
        >
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Authorized Partner of</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {partners.map((p, i) => (
              <motion.span
                key={p}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.07 }}
                className="text-slate-500 hover:text-blue-600 text-xs sm:text-sm font-bold tracking-widest transition-colors duration-200"
              >
                {p}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Preview image cards — visible on large screens */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-24 left-6 hidden xl:block z-10"
      >
        <div className="relative w-52 h-32 rounded-2xl overflow-hidden border border-white shadow-xl shadow-slate-200">
          <Image
            src="https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=400&q=80"
            alt="Network infrastructure"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800/70 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <p className="text-white text-xs font-bold">Networking</p>
            <p className="text-slate-300 text-[10px]">Infrastructure solutions</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-24 right-6 hidden xl:block z-10"
      >
        <div className="relative w-52 h-32 rounded-2xl overflow-hidden border border-white shadow-xl shadow-slate-200">
          <Image
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80"
            alt="Cyber security"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800/70 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <p className="text-white text-xs font-bold">Cyber Security</p>
            <p className="text-slate-300 text-[10px]">Enterprise protection</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-500 hover:text-blue-600 transition-colors"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>
    </section>
  );
}
