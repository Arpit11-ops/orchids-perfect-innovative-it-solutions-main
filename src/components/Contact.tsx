// In Contact.tsx, update the grid container and columns:
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Contact info - Add h-full and flex column */}
          <div className="space-y-4 flex flex-col h-full justify-between">
             {/* Contact details mapping... */}
          </div>

          {/* Contact form - Add h-full */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm h-full flex flex-col"
          >
             {/* Form code... ensure the submit button has mt-auto to push it to the bottom if needed */}
             <motion.button ... className="w-full flex items-center justify-center mt-auto ...">
          </motion.div>
        </div>