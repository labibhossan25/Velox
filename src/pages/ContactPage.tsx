import { motion } from 'framer-motion';
import { useState } from 'react';

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">Contact</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Have an Idea<span className="text-indigo-400">?</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Tell us what you're building. We'll turn the idea into a clear digital product plan 
              and show you how we can bring it to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-32"
              >
                <h2 className="font-display text-xl font-bold mb-6">What to expect</h2>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Submit your project', desc: 'Fill out the form with your project details' },
                    { step: '02', title: 'We review & respond', desc: 'We\'ll get back to you within 24 hours' },
                    { step: '03', title: 'Discovery call', desc: 'We discuss your goals and requirements in detail' },
                    { step: '04', title: 'Proposal & plan', desc: 'Receive a clear proposal with scope and timeline' },
                  ].map((item, i) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-mono text-indigo-400">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-200 mb-1">{item.title}</h3>
                        <p className="text-xs text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-2xl border border-white/5 bg-[#111]">
                  <h3 className="text-sm font-semibold text-zinc-200 mb-3">Prefer email?</h3>
                  <p className="text-sm text-zinc-400">
                    You can also reach us directly at{' '}
                    <a href="mailto:hello@velox.studio" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                      hello@velox.studio
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
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
                      <div>
                        <label className="block text-sm text-zinc-400 mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
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
                      <div>
                        <label className="block text-sm text-zinc-400 mb-2">Company / Business</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none transition-colors"
                          placeholder="Your company"
                        />
                      </div>
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

                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Project Description *</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project, goals and requirements..."
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">Current Website / App (optional)</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-zinc-600 focus:border-indigo-500/50 focus:outline-none transition-colors"
                        placeholder="https://your-current-site.com"
                      />
                    </div>

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
          </div>
        </div>
      </section>
    </>
  );
}
