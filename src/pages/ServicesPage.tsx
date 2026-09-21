import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/content';

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              What We Build
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              From a first idea to a production-ready digital product. We combine strategy, design, 
              and AI-assisted development to deliver exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/services/${service.id}`} className="group block">
                  <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#111] hover:border-indigo-500/20 transition-all duration-500">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111] hidden lg:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent lg:hidden" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <span className="text-xs font-mono text-indigo-400 mb-4 block">{service.number} — {service.icon}</span>
                        <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-zinc-400 leading-relaxed mb-6">{service.longDescription}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {service.items.slice(0, 4).map(item => (
                            <span key={item} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                              {item}
                            </span>
                          ))}
                          {service.items.length > 4 && (
                            <span className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                              +{service.items.length - 4} more
                            </span>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-2 text-sm text-indigo-400 font-medium group-hover:gap-3 transition-all">
                          Learn more
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
