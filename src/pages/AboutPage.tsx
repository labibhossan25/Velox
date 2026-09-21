import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { technologies, whyUsPoints, philosophyPoints, adminFeatures } from '../data/content';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://image.qwenlm.ai/generated-images/d0c27e93-abfa-4c20-ab44-a135819596f0/_result.png" 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">About</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              A Modern Digital Product Studio
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              We are a modern digital product studio focused on turning ambitious ideas into useful, 
              beautiful and scalable digital experiences. We combine product thinking, design expertise, 
              AI-assisted development and Vibe Coding with business automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we combine */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl font-bold mb-12"
          >
            What We Combine
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/5 bg-[#111] text-center hover:border-indigo-500/20 transition-colors duration-300"
              >
                <span className="text-3xl mb-3 block">{cap.icon}</span>
                <span className="text-xs text-zinc-400 font-medium">{cap.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="pb-32 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl font-bold mb-12"
          >
            Why Work With Us
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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

      {/* Technology */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Technology Ecosystem</h2>
            <p className="text-zinc-400">Flexible building blocks chosen for each project's specific needs.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="p-5 rounded-xl border border-white/5 bg-[#111] hover:border-indigo-500/20 transition-all duration-300 text-center"
              >
                <span className="text-sm font-medium text-zinc-200">{tech.name}</span>
                <span className="block text-xs text-zinc-500 mt-1">{tech.category}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-indigo-500/20 bg-indigo-500/5">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-sm text-indigo-300">AI-assisted coding & Vibe Coding integrated throughout</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complete Business Solution */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              More Than Just Development
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Every project includes a complete business management system with admin dashboards, 
              client portals, order tracking, and automated workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-[#111] hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                  {feature.metrics && (
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                      {feature.metrics}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Let's build something extraordinary together. Complete digital solutions with admin dashboards, 
              client portals, and everything you need to scale.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-all"
            >
              Start Your Project
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
