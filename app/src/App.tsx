import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components

import Navigation from './components/Navigation';
import PageTransition from './components/PageTransition';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import ServiceDetail from './pages/ServiceDetail';
import ProjectDetail from './pages/ProjectDetail';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Main content with page transitions */}
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<><About /><Footer /></>} />
            <Route path="/services" element={<><Services /><Footer /></>} />
            <Route path="/services/:serviceId" element={<><ServiceDetail /><Footer /></>} />
            <Route path="/portfolio" element={<><Portfolio /><Footer /></>} />
            <Route path="/portfolio/:projectId" element={<><ProjectDetail /><Footer /></>} />
            <Route path="/testimonials" element={<><Testimonials /><Footer /></>} />
            <Route path="/contact" element={<><Contact /><Footer /></>} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </div>
  );
}

export default App;
