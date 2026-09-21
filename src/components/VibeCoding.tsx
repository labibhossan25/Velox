import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const workflowSteps = [
  { label: 'Client Idea', icon: '💡' },
  { label: 'Product Strategy', icon: '🎯' },
  { label: 'UX/UI Design', icon: '🎨' },
  { label: 'AI-Assisted Development', icon: '⚡' },
  { label: 'Testing & Refinement', icon: '🔍' },
  { label: 'Deployment', icon: '🚀' },
  { label: 'Continuous Improvement', icon: '📈' },
];

export default function VibeCoding() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block"
          >
            Our Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Built Differently<span className="text-indigo-400">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            We use Vibe Coding and AI-assisted development to move from concept to working product 
            with exceptional speed — without compromising product thinking, usability, or engineering quality.
          </motion.p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-8">
              <div className="p-6 rounded-2xl border border-white/5 bg-[#111]">
                <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-sm">🧠</span>
                  Human Direction
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Product strategy, design decisions, architecture choices and quality standards are 
                  always driven by human expertise and creative judgment.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-[#111]">
                <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-sm">⚡</span>
                  AI-Assisted Development
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  AI accelerates the development process — generating code, suggesting solutions, 
                  and handling repetitive tasks — so we focus on what matters most: building great products.
                </p>
              </div>

              {/* Quote */}
              <div className="relative pl-6 border-l-2 border-indigo-500/30">
                <p className="text-base text-zinc-300 italic leading-relaxed">
                  "AI accelerates the development process. Human judgment drives the product."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Workflow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent" />
              
              <div className="space-y-6">
                {workflowSteps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="relative flex items-center gap-5 pl-2"
                  >
                    {/* Dot */}
                    <div className="relative z-10 w-8 h-8 rounded-full bg-[#111] border border-indigo-500/30 flex items-center justify-center text-sm flex-shrink-0">
                      {step.icon}
                    </div>
                    
                    {/* Label */}
                    <span className="text-sm text-zinc-300 font-medium">{step.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
