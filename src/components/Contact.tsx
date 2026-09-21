import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projectTypes = [
  'Website', 'Web Application', 'Mobile Application', 'AI Product',
  'Automation', 'E-commerce', 'MVP', 'Other'
];

const budgetRanges = [
  'Under $5,000', '$5,000 - $15,000', '$15,000 - $30,000', '$30,000+', 'Not sure yet'
];

const timelines = [
  'ASAP', '1-2 months', '2-3 months', '3-6 months', 'Flexible'
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Have an Idea<span className="text-indigo-400">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400"
          >
            Tell us what you're building. We'll turn the idea into a clear digital product plan.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-indigo-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Thank you!</h3>
              <p className="text-zinc-400">We'll review your project details and get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                {/* Email */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Company */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Company / Business</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
                {/* Project Type */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Project Type *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white focus:border-indigo-500/50 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#111]">Select type...</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="bg-[#111]">{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Project Description *</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals and requirements..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Timeline */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Desired Timeline</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white focus:border-indigo-500/50 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#111]">Select timeline...</option>
                    {timelines.map(t => (
                      <option key={t} value={t} className="bg-[#111]">{t}</option>
                    ))}
                  </select>
                </div>
                {/* Budget */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Budget Range</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white focus:border-indigo-500/50 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#111]">Select budget...</option>
                    {budgetRanges.map(b => (
                      <option key={b} value={b} className="bg-[#111]">{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Current website */}
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Current Website / App (optional)</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none transition-colors"
                  placeholder="https://your-current-site.com"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all duration-200"
                >
                  Start the Conversation
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
