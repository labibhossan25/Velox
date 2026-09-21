import { motion } from 'framer-motion';

const codeSnippets = [
  'const product = await build(idea);',
  'deploy(product, { quality: "premium" });',
  'import { AI, VibeCoding } from "@velox";',
  'const result = automate(workflow);',
  'export default DigitalProduct;',
  'const stack = [React, TypeScript, AI];',
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-3xl" />
      
      {/* Floating code snippets */}
      <div className="absolute inset-0 hidden xl:block pointer-events-none">
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 4, delay: i * 1.5, repeat: Infinity, repeatDelay: 8 }}
            className="absolute text-[10px] font-mono text-indigo-400/30 whitespace-nowrap"
            style={{
              top: `${15 + i * 14}%`,
              left: i % 2 === 0 ? `${5 + i * 3}%` : 'auto',
              right: i % 2 === 1 ? `${5 + (i - 1) * 3}%` : 'auto',
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/3 right-1/4 hidden lg:block">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [12, 15, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 border border-white/5 rounded-2xl rotate-12"
        />
      </div>
      <div className="absolute bottom-1/3 left-1/5 hidden lg:block">
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 border border-indigo-500/10 rounded-full"
        />
      </div>
      <div className="absolute top-2/3 right-1/3 hidden lg:block">
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 border border-purple-500/10 rounded-lg rotate-45"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center lg:pt-0 pt-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs text-zinc-400 font-medium tracking-wide uppercase">AI Digital Product Studio</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
        >
          <span className="block">Build Digital Products</span>
          <span className="block mt-2 text-gradient-accent">at the Speed of Ideas</span>
        </motion.h1>

        {/* Subheading */}
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

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-all duration-200"
          >
            Start a Project
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-200"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Workflow indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 hidden md:flex lg:hidden items-center justify-center gap-3 text-xs text-zinc-500"
        >
          {['Idea', 'Architecture', 'Interface', 'Code', 'Product', 'Launch'].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="text-zinc-400">{step}</span>
              {i < 5 && (
                <svg className="w-3 h-3 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating workspace card - visible on larger screens */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="relative">
          {/* Terminal window */}
          <div className="w-[480px] rounded-xl border border-white/10 bg-[#0d0d0d]/90 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/50">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              <span className="ml-3 text-[10px] text-zinc-500 font-mono">velox-studio — project.ts</span>
            </div>
            {/* Code content */}
            <div className="p-4 font-mono text-[11px] leading-5">
              <div className="text-zinc-500">
                <span className="text-indigo-400">const</span> <span className="text-zinc-300">project</span> = <span className="text-indigo-400">await</span> <span className="text-yellow-300/70">velox</span>.<span className="text-blue-300/70">build</span>({'{'}
              </div>
              <div className="text-zinc-500 pl-4">
                <span className="text-emerald-400/70">idea</span>: <span className="text-amber-300/70">"your vision"</span>,
              </div>
              <div className="text-zinc-500 pl-4">
                <span className="text-emerald-400/70">approach</span>: <span className="text-amber-300/70">"vibe-coding"</span>,
              </div>
              <div className="text-zinc-500 pl-4">
                <span className="text-emerald-400/70">quality</span>: <span className="text-amber-300/70">"premium"</span>,
              </div>
              <div className="text-zinc-500 pl-4">
                <span className="text-emerald-400/70">ai</span>: <span className="text-purple-400/70">true</span>,
              </div>
              <div className="text-zinc-500">{'}'});</div>
              <div className="mt-2 text-zinc-500">
                <span className="text-zinc-600">// → Product ready for launch 🚀</span>
              </div>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-1.5 h-3.5 bg-indigo-400/70 mt-1"
              />
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-indigo-500/5 rounded-2xl blur-xl -z-10" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
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
  );
}
