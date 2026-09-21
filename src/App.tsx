import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import WorkPage from './pages/WorkPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/services/:id" element={<PageTransition><ServiceDetailPage /></PageTransition>} />
        <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
        <Route path="/work/:id" element={<PageTransition><ProjectDetailPage /></PageTransition>} />
        <Route path="/process" element={<PageTransition><ProcessPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollProgress />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </HashRouter>
  );
}

export default App;
