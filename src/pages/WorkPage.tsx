import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">Portfolio</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Selected Work
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Concept projects and experimental builds showcasing our capabilities across 
              different industries, technologies, and product types.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
              >
                <Link to={`/work/${project.id}`} className="group block">
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                    {/* Image */}
                    <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white text-black text-sm font-medium rounded-full">
                          View Case Study
                        </span>
                      </div>

                      {/* Label */}
                      {project.type === 'concept' && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
                          <span className="text-xs text-zinc-300">Concept</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="text-xs font-mono text-indigo-400 mb-3 block">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-xs text-zinc-500 mb-2 block">{project.category}</span>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">
                        {project.name}
                      </h2>
                      <p className="text-zinc-400 leading-relaxed mb-6">{project.description}</p>
                      
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map(tech => (
                          <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm text-indigo-400 font-medium group-hover:gap-3 transition-all">
                        View Case Study
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
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
