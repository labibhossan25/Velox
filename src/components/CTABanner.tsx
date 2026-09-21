import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-indigo-600/20" />
          <div className="absolute inset-0 bg-grid opacity-10" />
          
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Ready to build something exceptional?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto mb-8">
              Let's turn your idea into a working digital product. Fast, thoughtful, and built with modern technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all duration-200"
              >
                Start a Project
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                See Our Process
              </a>
            </div>
          </div>

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
