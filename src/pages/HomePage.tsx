import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services, projects } from '../data/content';

const capabilities = [
  'Strategy', 'Design', 'Build', 'Integrate', 'Launch', 'Improve',
  'Websites', 'Web Apps', 'Mobile Apps', 'AI Products', 'Automation', 'MVPs'
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://image.qwenlm.ai/generated-images/59d48375-cff5-46db-b93a-36d2bca3456b/_result.png" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-indigo-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -300],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360, y: [-10, 10, -10] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity } }}
          className="absolute top-1/3 right-1/4 hidden lg:block"
        >
          <div className="w-20 h-20 border border-white/5 rounded-2xl" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360, y: [10, -10, 10] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, y: { duration: 8, repeat: Infinity } }}
          className="absolute bottom-1/3 left-1/5 hidden lg:block"
        >
          <div className="w-16 h-16 border border-indigo-500/10 rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs text-zinc-400 font-medium tracking-wide uppercase">AI Digital Product Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
          >
            <span className="block">Build Digital Products</span>
            <span className="block mt-2 text-gradient-accent">at the Speed of Ideas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed mb-10"
          >
            We design and build modern websites, web applications, mobile apps, and business automations 
            using AI-assisted development and Vibe Coding — helping businesses turn ideas into powerful 
            digital products faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all duration-200"
            >
              Start a Project
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-200"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="relative py-8 overflow-hidden border-y border-white/5">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...capabilities, ...capabilities].map((item, i) => (
            <span key={i} className="mx-8 text-sm sm:text-base text-zinc-500 font-medium flex items-center gap-8">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-\\[marquee_30s_linear_infinite\\] { animation: none; }
          }
        `}</style>
      </div>

      {/* Services Preview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              What We Build
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              From websites to AI-powered products, we create digital solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/services/${service.id}`} className="group block">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs font-mono text-indigo-400 mb-2 block">{service.number}</span>
                      <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-zinc-400 line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all"
            >
              View All Services
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '6+', label: 'Service Areas' },
              { number: '16+', label: 'Technologies' },
              { number: '7', label: 'Process Steps' },
              { number: '24h', label: 'Response Time' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Selected Work
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Concept projects showcasing our capabilities across different industries and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/work/${project.id}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs text-indigo-400 font-mono mb-2 block">{project.category}</span>
                      <h3 className="font-display text-xl font-semibold mb-2">{project.name}</h3>
                      <p className="text-sm text-zinc-400 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all"
            >
              View All Projects
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vibe Coding Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">Our Approach</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Built Differently<span className="text-indigo-400">.</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                We use Vibe Coding and AI-assisted development to move from concept to working product 
                with exceptional speed — without compromising product thinking, usability, or engineering quality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#111]">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Human Direction</h3>
                    <p className="text-xs text-zinc-400">Strategy, design, and quality driven by expertise</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#111]">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">AI-Assisted Development</h3>
                    <p className="text-xs text-zinc-400">AI accelerates execution, humans drive decisions</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Workflow visualization */}
              <div className="relative p-8 rounded-2xl border border-white/5 bg-[#111]">
                <div className="space-y-4">
                  {[
                    { label: 'Client Idea', icon: '💡' },
                    { label: 'Product Strategy', icon: '🎯' },
                    { label: 'UX/UI Design', icon: '🎨' },
                    { label: 'AI-Assisted Development', icon: '⚡' },
                    { label: 'Testing & Refinement', icon: '🔍' },
                    { label: 'Deployment', icon: '🚀' },
                    { label: 'Continuous Improvement', icon: '📈' },
                  ].map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-sm flex-shrink-0">
                        {step.icon}
                      </div>
                      <span className="text-sm text-zinc-300">{step.label}</span>
                      {i < 6 && (
                        <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/20 to-transparent ml-2" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Quote */}
              <div className="mt-6 pl-6 border-l-2 border-indigo-500/30">
                <p className="text-sm text-zinc-300 italic">
                  "AI accelerates the development process. Human judgment drives the product."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              We combine speed, quality, and transparency to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Speed Without Sacrificing Thinking', desc: 'AI-assisted development accelerates execution while product decisions remain human-driven.' },
              { title: 'Custom, Not Cookie-Cutter', desc: 'Every project is designed and built around your actual requirements — not a template.' },
              { title: 'One Partner, Multiple Capabilities', desc: 'Website, application, automation and AI capabilities under one unified workflow.' },
              { title: 'Built for Real Businesses', desc: 'Focus on usability, performance, maintainability and scalability from day one.' },
              { title: 'Transparent Process', desc: 'You always understand what is being designed, built and delivered — no black boxes.' },
              { title: 'Modern Technology', desc: 'Built with cutting-edge tools and frameworks for long-term maintainability.' },
            ].map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-[#111] hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
                  <span className="text-indigo-400 font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display text-base font-semibold mb-3">{point.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to build something exceptional?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
              Let's turn your idea into a working digital product. Fast, thoughtful, and built with modern technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all duration-200"
              >
                Start a Project
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                See Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
