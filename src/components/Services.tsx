import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '../data/content';

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl border border-white/5 bg-[#111] hover:border-indigo-500/20 transition-all duration-500 card-hover"
    >
      {/* Number */}
      <span className="text-xs font-mono text-indigo-400/60 mb-4 block">{service.number}</span>
      
      {/* Title */}
      <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-zinc-400 leading-relaxed mb-6">
        {service.description}
      </p>
      
      {/* Items */}
      <div className="flex flex-wrap gap-2">
        {service.items.slice(0, 5).map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 border border-white/5"
          >
            {item}
          </span>
        ))}
        {service.items.length > 5 && (
          <span className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            +{service.items.length - 5} more
          </span>
        )}
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            What We Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400"
          >
            From a first idea to a production-ready digital product.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
