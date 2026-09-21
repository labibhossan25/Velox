import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '../data/content';

const gradients = [
  'from-indigo-900/40 to-purple-900/40',
  'from-blue-900/40 to-cyan-900/40',
  'from-emerald-900/40 to-teal-900/40',
  'from-violet-900/40 to-fuchsia-900/40',
  'from-amber-900/40 to-orange-900/40',
  'from-rose-900/40 to-pink-900/40',
];

function ProjectCard({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* Image placeholder */}
      <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-gradient-to-br ${gradients[index % gradients.length]}`}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        {/* Project mockup placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <span className="text-xs text-white/40">{project.category.split('+')[0].trim()}</span>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full">
            View Project
          </span>
        </div>

        {/* Label */}
        {project.type === 'concept' && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
            <span className="text-xs text-zinc-300">Concept</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-indigo-400 font-mono">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-xs text-zinc-500">{project.category}</span>
        </div>
        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-zinc-400 line-clamp-2">{project.description}</p>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 3).map(tech => (
            <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-500">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="work" className="relative py-32 overflow-hidden">
        <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block"
              >
                Portfolio
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              >
                Selected Work
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm text-zinc-500 max-w-xs"
            >
              Concept projects and experimental builds showcasing our capabilities.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl bg-[#111] rounded-2xl border border-white/10 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Header image */}
            <div className="aspect-[16/9] bg-gradient-to-br from-indigo-900/40 to-purple-900/40 relative">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-2/3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/40">Project Preview</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-indigo-400 font-mono">Case Study</span>
                <span className="text-xs text-zinc-500">•</span>
                <span className="text-xs text-zinc-500">{selectedProject.category}</span>
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-4">{selectedProject.name}</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">{selectedProject.description}</p>

              {/* Sections */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200 mb-3">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map(f => (
                      <span key={f} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-200 mb-3">Technology</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(t => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-200 mb-3">Result</h4>
                  <p className="text-sm text-zinc-400">{selectedProject.result}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors"
                >
                  Start a Similar Project
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
