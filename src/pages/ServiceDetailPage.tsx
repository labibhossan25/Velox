import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { services } from '../data/content';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = services.findIndex(s => s.id === id);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />
        </div>
        <div className="absolute inset-0 bg-grid opacity-10" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{service.icon}</span>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">{service.number}</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
              {service.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-2xl font-bold mb-4"
              >
                What's Included
              </motion.h2>
              <p className="text-zinc-400">
                Everything you need to bring your {service.title.toLowerCase()} project to life.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {service.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-[#111] hover:border-indigo-500/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold mb-12 text-center"
          >
            How We Approach {service.title}
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals, audience, and requirements' },
              { step: '02', title: 'Design', desc: 'Creating the UX/UI and interaction design' },
              { step: '03', title: 'Development', desc: 'Building with modern tech and AI-assisted coding' },
              { step: '04', title: 'Launch', desc: 'Testing, deploying, and continuous improvement' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-[#111] text-center"
              >
                <span className="text-xs font-mono text-indigo-400 mb-3 block">{item.step}</span>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Ready to start your {service.title.toLowerCase()} project?
            </h2>
            <p className="text-zinc-400 mb-8">
              Let's discuss your requirements and create a plan to bring your vision to life.
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

      {/* Next Service */}
      {nextService && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link to={`/services/${nextService.id}`} className="group block">
              <div className="p-8 rounded-2xl border border-white/5 bg-[#111] hover:border-indigo-500/20 transition-all">
                <span className="text-xs text-zinc-500 mb-2 block">Next Service</span>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold group-hover:text-indigo-300 transition-colors">
                      {nextService.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">{nextService.description}</p>
                  </div>
                  <svg className="w-6 h-6 text-zinc-400 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
