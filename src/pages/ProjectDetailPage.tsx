import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/content';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <Navigate to="/work" replace />;

  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt="" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/work" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Projects
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-indigo-400 font-mono">Case Study</span>
              <span className="text-xs text-zinc-500">•</span>
              <span className="text-xs text-zinc-500">{project.category}</span>
              {project.type === 'concept' && (
                <>
                  <span className="text-xs text-zinc-500">•</span>
                  <span className="text-xs text-zinc-500">Concept Project</span>
                </>
              )}
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl">
              {project.name}
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
              {project.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden"
          >
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-xl font-bold mb-2"
              >
                Overview
              </motion.h2>
              <div className="w-8 h-px bg-indigo-500/50 mb-4" />
            </div>
            <div className="lg:col-span-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-zinc-300 leading-relaxed text-lg"
              >
                {project.longDescription}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Strategy */}
      <section className="pb-20 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-white/5 bg-[#111]"
            >
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-sm">🎯</span>
                Challenge
              </h3>
              <p className="text-zinc-400 leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-[#111]"
            >
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-sm">💡</span>
                Strategy
              </h3>
              <p className="text-zinc-400 leading-relaxed">{project.strategy}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-xl font-bold mb-2"
              >
                Key Features
              </motion.h2>
              <div className="w-8 h-px bg-indigo-500/50 mb-4" />
              <p className="text-sm text-zinc-400">Core capabilities delivered in this project.</p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-[#111]"
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="pb-20 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-xl font-bold mb-2"
              >
                Technology
              </motion.h2>
              <div className="w-8 h-px bg-indigo-500/50 mb-4" />
              <p className="text-sm text-zinc-400">Tools and frameworks used to build this project.</p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-xl font-bold mb-2"
              >
                Result
              </motion.h2>
              <div className="w-8 h-px bg-indigo-500/50 mb-4" />
            </div>
            <div className="lg:col-span-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-zinc-300 leading-relaxed"
              >
                {project.result}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Interested in a similar project?
            </h2>
            <p className="text-zinc-400 mb-8">
              Let's discuss how we can build something exceptional for your business.
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

      {/* Next Project */}
      {nextProject && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link to={`/work/${nextProject.id}`} className="group block">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={nextProject.image} 
                  alt={nextProject.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs text-zinc-400 mb-2 block">Next Project</span>
                  <h3 className="font-display text-2xl font-semibold group-hover:text-indigo-300 transition-colors">
                    {nextProject.name}
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
