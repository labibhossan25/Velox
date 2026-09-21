import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const capabilities = [
  'Strategy', 'Design', 'Build', 'Integrate', 'Launch', 'Improve',
  'Websites', 'Web Apps', 'Mobile Apps', 'AI Products', 'Automation', 'MVPs'
];

export default function Marquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative py-12 overflow-hidden border-y border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...capabilities, ...capabilities].map((item, i) => (
            <span key={i} className="mx-8 text-sm sm:text-base text-zinc-500 font-medium flex items-center gap-8">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/40" />
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
