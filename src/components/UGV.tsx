"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Ruler,
  Package,
  Zap,
  TrendingUp,
  Shield,
  Battery,
  ArrowDownUp,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const specs = [
  { label: "Payload Capacity", value: "150–300 kg", icon: Package },
  { label: "Climbing Capability", value: "Up to 25–35°", icon: TrendingUp },
  { label: "Drive System", value: "Dual Independent Electric", icon: Zap },
  { label: "Steering", value: "Skid-Steer Control", icon: Ruler },
  { label: "Sensors", value: "3D LiDAR, GPS/GNSS, IMU", icon: Shield },
  { label: "Cameras", value: "Stereo/AI + Front/Rear", icon: ArrowDownUp },
  { label: "Terrain", value: "Sand, Mud, Snow, Gravel", icon: Battery },
];

const features = [
  "150–300 kg payload capacity on rear cargo deck depending on battery size and terrain slope",
  "Dual independent electric track drive with skid-steer control, sealed gearbox and high-traction rubber tracks",
  "3D LiDAR, stereo/AI camera, front/rear cameras, ultrasonic proximity sensors, GPS/GNSS, IMU and track encoders",
  "Operates on mud, gravel, construction debris, quarry roads and rocky terrain up to 25–35° slopes",
];

export default function UGV() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ugv" ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px z-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] z-0 bg-blue-50 rounded-full opacity-50 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] z-0 bg-cyan-50 rounded-full opacity-40 pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Featured Product
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Unmanned{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Ground Vehicles
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            Purpose-built UGVs for defence, industrial, and enterprise operations in the most demanding environments.
          </p>
        </motion.div>

        {/* Product card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl bg-white border border-slate-100 shadow-lg overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">

            {/* Image */}
            <div className="relative h-72 lg:h-auto min-h-[400px] overflow-hidden">
              <Image
                src="/advancedtrackedrobot.jpeg"
                alt="TZ-01 Advanced Tracked Robot"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1.5 rounded-full bg-blue-600/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest shadow">
                  NEW
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Advanced Tracked Robot</p>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight">
                      TZ-01
                    </h3>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  The TZ-01 is a heavy-duty tracked unmanned ground vehicle built for industrial logistics, inspection,
                  and rough-terrain mobility. Its larger ground contact area effectively distributes weight and reduces
                  ground pressure — enabling smooth travel on sand, mud, snow, and gravel without slipping or getting stuck.
                </p>

                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Key Features</p>
                  <ul className="space-y-2.5">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-slate-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 w-full sm:w-fit"
              >
                Request a Quote
              </a>
            </div>
          </div>

          {/* Specs strip */}
          <div className="border-t border-slate-100 bg-slate-50/70 px-8 lg:px-10 py-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
              Technical Specifications
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {specs.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3 p-3 rounded-xl liquid-glass-subtle"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide leading-tight mb-0.5">
                      {label}
                    </p>
                    <p className="text-slate-700 font-bold text-sm">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
