import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { processSteps } from '../data/content';

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">Process</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              From Idea to Reality<span className="text-indigo-400">.</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              A structured, transparent approach that turns concepts into working digital products. 
              Every step is designed to deliver quality while moving fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent hidden sm:block" />

            <div className="space-y-12 sm:space-y-16">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex gap-6 sm:gap-10 items-start group"
                >
                  {/* Number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-indigo-500/30 transition-colors duration-300">
                      <span className="text-xs sm:text-sm font-mono text-indigo-400">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 sm:pt-4 flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vibe Coding Section */}
      <section className="pb-32 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Built Differently<span className="text-indigo-400">.</span>
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              We use Vibe Coding and AI-assisted development to move from concept to working product 
              with exceptional speed — without compromising product thinking, usability, or engineering quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-white/5 bg-[#111]"
            >
              <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-sm">🧠</span>
                Human Direction
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Product strategy, design decisions, architecture choices and quality standards are 
                always driven by human expertise and creative judgment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-[#111]"
            >
              <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-sm">⚡</span>
                AI-Assisted Development
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                AI accelerates the development process — generating code, suggesting solutions, 
                and handling repetitive tasks — so we focus on what matters most.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 relative pl-6 border-l-2 border-indigo-500/30"
          >
            <p className="text-base text-zinc-300 italic leading-relaxed max-w-2xl">
              "AI accelerates the development process. Human judgment drives the product."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Have an idea ready to build?
            </h2>
            <p className="text-zinc-400 mb-8">
              Let's start the conversation and turn your vision into a working product.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all"
            >
              Start a Project
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
