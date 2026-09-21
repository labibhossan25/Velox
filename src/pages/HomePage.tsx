import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { services, projects, adminFeatures, clientPortalFeatures, philosophyPoints } from '../data/content';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <>
      {/* Hero Section - Microsoft Surface Style */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <img 
            src="https://image.qwenlm.ai/generated-images/59d48375-cff5-46db-b93a-36d2bca3456b/_result.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </motion.div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        {/* Floating 3D Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            scale: [1.3, 1, 1.3], 
            rotate: [360, 180, 0],
            opacity: [0.15, 0.3, 0.15] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -400],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs text-zinc-300 font-medium tracking-wide uppercase">YAF Development • AI Digital Product Studio</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.85] mb-8"
          >
            <span className="block">Build Digital</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Products at the
            </span>
            <span className="block mt-2">Speed of Ideas</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-zinc-400 leading-relaxed mb-12"
          >
            We design and build modern websites, web applications, mobile apps, and business automations 
            using AI-assisted development and Vibe Coding — helping businesses turn ideas into powerful 
            digital products faster than ever before.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-10 py-5 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-500"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>AI-Powered Development</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Full-Stack Capabilities</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Enterprise-Grade Quality</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-zinc-500 uppercase tracking-wider">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-indigo-400 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="relative py-8 overflow-hidden border-y border-white/5 bg-[#0a0a0a]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex">
              {['Strategy', 'Design', 'Build', 'Integrate', 'Launch', 'Improve', 'Websites', 'Web Apps', 'Mobile Apps', 'AI Products', 'Automation', 'MVPs'].map((item, i) => (
                <span key={`${setIndex}-${i}`} className="mx-8 text-sm sm:text-base text-zinc-500 font-medium flex items-center gap-8">
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">Our Philosophy</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Why Clients Choose Us
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              We don't just build products. We create digital experiences that transform businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophyPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-white/5 bg-[#111] hover:border-indigo-500/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-indigo-400 font-mono text-lg font-bold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-4 group-hover:text-indigo-300 transition-colors">
                  {point.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">What We Build</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Complete Digital Solutions
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              From concept to launch, we deliver every aspect of your digital product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/services/${service.id}`} className="group block">
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs font-mono text-indigo-400 mb-2 block">{service.number}</span>
                      <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                        {service.title}
                      </h3>
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
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/10 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/30 transition-all"
            >
              Explore All Services
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Admin Dashboard Preview */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">Admin & Management</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Complete Business Control
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Every project includes a powerful admin dashboard with order tracking, client management, 
                automated workflows, and real-time analytics. Everything you need to run your business efficiently.
              </p>

              <div className="space-y-4">
                {adminFeatures.slice(0, 4).map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-[#111] hover:border-indigo-500/20 transition-all"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm">{feature.title}</h3>
                        {feature.metrics && (
                          <span className="text-xs text-indigo-400 font-mono">{feature.metrics}</span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10">
                <img 
                  src="https://image.qwenlm.ai/generated-images/b6bb9042-91b2-456d-a118-7b05b5bfe4cb/_result.png" 
                  alt="Admin Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 p-4 rounded-xl bg-[#111] border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Order Status</div>
                    <div className="text-sm font-semibold">Completed</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-[#111] border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400">Revenue</div>
                    <div className="text-sm font-semibold text-green-400">+24.5%</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Portal Preview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
                <img 
                  src="https://image.qwenlm.ai/generated-images/6eca2c28-9dd9-4d54-9ab6-c0606bd95d98/_result.png" 
                  alt="Client Portal"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-4 block">Client Experience</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Your Clients Will Love It
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Every project includes a beautiful client portal where your customers can track progress, 
                view deliverables, communicate with your team, and manage their account—all in one place.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {clientPortalFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 rounded-xl border border-white/5 bg-[#111] hover:border-purple-500/20 transition-all"
                  >
                    <span className="text-2xl mb-2 block">{feature.icon}</span>
                    <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-zinc-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-4 block">Portfolio</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Selected Work
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Concept projects showcasing our capabilities across different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={`/work/${project.id}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs text-indigo-400 font-mono mb-2 block">{project.category}</span>
                      <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                        {project.name}
                      </h3>
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
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/10 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/30 transition-all"
            >
              View All Projects
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px]"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ready to Build Something
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
              Let's turn your idea into a working digital product. Fast, thoughtful, and built with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 px-10 py-5 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
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
