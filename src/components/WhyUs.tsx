import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { whyUsPoints } from '../data/content';

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block"
          >
            Why Work With Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            What Makes Us Different
          </motion.h2>
        </div>

        {/* Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-[#111] hover:border-white/10 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
                <span className="text-indigo-400 font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-display text-base font-semibold mb-3">{point.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block"
            >
              About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            >
              A Modern Digital Product Studio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 leading-relaxed mb-6"
            >
              We are a modern digital product studio focused on turning ambitious ideas into useful, 
              beautiful and scalable digital experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 leading-relaxed"
            >
              We combine product thinking, design expertise, AI-assisted development and Vibe Coding 
              with business automation — delivering digital products that are built for real-world use.
            </motion.p>
          </div>

          {/* Right - Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Product Thinking', icon: '🎯' },
              { label: 'UX/UI Design', icon: '🎨' },
              { label: 'AI Development', icon: '⚡' },
              { label: 'Vibe Coding', icon: '🚀' },
              { label: 'Automation', icon: '🔄' },
              { label: 'Scalability', icon: '📐' },
            ].map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-5 rounded-xl border border-white/5 bg-[#111] text-center hover:border-indigo-500/20 transition-colors duration-300"
              >
                <span className="text-2xl mb-2 block">{cap.icon}</span>
                <span className="text-xs text-zinc-400 font-medium">{cap.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
