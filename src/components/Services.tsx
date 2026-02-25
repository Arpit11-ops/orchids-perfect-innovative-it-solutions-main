// Inside your Services.tsx, replace the motion.div inside the grid mapping with this:

            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={`relative rounded-2xl bg-white border border-slate-100 flex flex-col h-full ${border} ${bg} transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-md`}
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-white/20" />
                {/* Icon overlay - Centered for symmetry */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg border-2 border-white`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <h3 className="text-slate-800 font-bold text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>

                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 ${accent}`}
                initial={{ width: "0%" }}
                animate={{ width: hovered === i ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>