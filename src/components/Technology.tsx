import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { technologies } from '../data/content';

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [...new Set(technologies.map(t => t.category))];

  return (
    <section className="relative py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block"
          >
            Technology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Modern Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-zinc-400"
          >
            Flexible building blocks chosen for each project's specific needs.
          </motion.p>
        </div>

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
              className="group p-5 rounded-xl border border-white/5 bg-[#111] hover:border-indigo-500/20 transition-all duration-300 text-center"
            >
              <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="block text-xs text-zinc-500 mt-1">{tech.category}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* AI note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-indigo-500/20 bg-indigo-500/5">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm text-indigo-300">AI-assisted coding & Vibe Coding integrated throughout</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
