import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  Code, Smartphone, Palette, Globe, ArrowRight, Brain
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion, useScroll, useTransform } from 'framer-motion';

const services: Array<{
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
    { id: 'ai-training', icon: Brain, title: 'AI Training & Development', description: 'Industry-leading AI training program with professional certification, internship opportunities, and real-world project experience.' },
    { id: 'web-development', icon: Code, title: 'Web Development', description: 'Custom websites and web applications built with modern technologies for optimal performance.' },
    { id: 'app-development', icon: Smartphone, title: 'App Development', description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.' },
    { id: 'ui-ux-design', icon: Palette, title: 'UI/UX Design', description: 'User-centered design that combines aesthetics with functionality to create engaging digital experiences.' },
    { id: 'digital-marketing', icon: Globe, title: 'Digital Marketing', description: 'Strategic marketing solutions that increase visibility, drive traffic, and convert visitors into customers.' },
  ];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '24/7', label: 'Premium Support' },
];

const AnimatedCounter = ({ value }: { value: string }) => {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const num = parseInt(value);
          if (isNaN(num)) {
            setDisplay(value);
            return;
          }

          const suffix = value.replace(/[0-9]/g, '');
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * num);

            setDisplay(current + suffix);

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{display}</span>;
};

const FadeInUpSection = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number, className?: string }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const textY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const bentoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: bentoScroll } = useScroll({
    target: bentoRef,
    offset: ["start end", "end start"]
  });
  const bentoY1 = useTransform(bentoScroll, [0, 1], [0, 0]); // Base
  const bentoY2 = useTransform(bentoScroll, [0, 1], [40, -40]); // Faster
  const bentoY3 = useTransform(bentoScroll, [0, 1], [20, -20]); // Medium
  const bentoY4 = useTransform(bentoScroll, [0, 1], [60, -60]); // Fastest

  return (
    <div className="relative bg-[#ffffff] text-[#4a4a4a] selection:bg-[#023e8a] selection:text-white">

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-[100vh] min-h-[800px] w-full flex items-center overflow-hidden bg-black border-b border-[#111]">
        {/* Underlay: The Background Image */}
        <motion.div style={{ y: videoY }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/logohome.png"
            alt="Hero Background"
            className="w-full h-full object-contain object-right lg:object-center"
          />
        </motion.div>

        {/* Dark Gradient Overlay restricted to left side */}
        <div className="absolute top-0 left-0 w-full lg:w-[60%] h-full z-[5] bg-gradient-to-r from-[#050b14]/90 via-[#050b14]/60 to-transparent pointer-events-none"></div>

        {/* Hero Content */}
        <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Text Content */}
          <div className="flex-1 max-w-2xl pt-20 lg:pt-0">
            <div className="overflow-hidden mb-6">
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-cyan-400"
              >
                D Sky Ventures Pvt Ltd
              </motion.p>
            </div>

            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1]"
              >
                Digital
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 leading-[1.1] tracking-tighter"
              >
                Future.
              </motion.h1>
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md text-lg text-white/70 font-light leading-relaxed mb-10"
            >
              We engineer enterprise-grade technical solutions and immersive digital experiences that elevate your brand to the next standard of excellence.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/services">
                <button className="px-8 py-4 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto uppercase text-xs tracking-[0.2em] rounded-sm">
                  Our Services
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto uppercase text-xs tracking-[0.2em] group flex items-center justify-center gap-3 rounded-sm">
                  Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </section>



      {/* --- BENTO GRID SERVICES --- */}
      <section className="py-24 md:py-32 px-4 sm:px-8 md:px-16 lg:px-24 max-w-[1600px] mx-auto">
        <FadeInUpSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-[#023e8a]">
              OUR EXPERTISE
            </h2>
            <p className="text-lg text-[#6b7280] max-w-md font-light leading-relaxed">
              We specialize in creating powerful digital ecosystems that drive engagement and business growth.
            </p>
          </div>
        </FadeInUpSection>

        {/* Bento Grid */}
        <div ref={bentoRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Featured Service - Span 2 */}
          <motion.div style={{ y: bentoY1 }} className="md:col-span-2 h-[400px] md:h-[450px]">
            <FadeInUpSection delay={0.1} className="h-full">
              <Link to={`/services/${services[0].id}`} className="block h-full group relative overflow-hidden bg-[#fefcfa] border border-[#ddd2c4] p-8 md:p-12 flex flex-col justify-end transition-all hover:border-[#023e8a] hover:shadow-2xl hover:shadow-[#023e8a]/5 hover:-translate-y-1">
                <div className="absolute top-8 right-8 w-14 h-14 rounded-full border border-[#ddd2c4] flex items-center justify-center group-hover:bg-[#023e8a] group-hover:border-[#023e8a] group-hover:text-white transition-all duration-500 text-[#023e8a]">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                {(() => { const Icon = services[0].icon; return <Icon className="w-12 h-12 mb-8 text-[#023e8a]" strokeWidth={1.5} />; })()}
                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-[#4a4a4a]">{services[0].title}</h3>
                <p className="text-[#6b7280] max-w-md text-lg leading-relaxed">{services[0].description}</p>
              </Link>
            </FadeInUpSection>
          </motion.div>

          {/* Regular Service (Inverted color style) */}
          <motion.div style={{ y: bentoY2 }} className="h-[400px] md:h-[450px]">
            <FadeInUpSection delay={0.2} className="h-full">
              <Link to={`/services/${services[1].id}`} className="block h-full group relative overflow-hidden bg-[#023e8a] text-white border border-[#023e8a] p-8 md:p-12 flex flex-col justify-end transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#023e8a]/20">
                <div className="absolute top-8 right-8 w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-500">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                {(() => { const Icon = services[1].icon; return <Icon className="w-12 h-12 mb-8 text-white/90" strokeWidth={1} />; })()}
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{services[1].title}</h3>
                <p className="text-white/80 leading-relaxed text-lg">{services[1].description}</p>
              </Link>
            </FadeInUpSection>
          </motion.div>

          {/* Remaining Services mapped */}
          {services.slice(2).map((service, index) => (
            <motion.div key={service.id} style={{ y: [bentoY3, bentoY4, bentoY1][index % 3] }} className="h-[350px]">
              <FadeInUpSection delay={0.3 + (index * 0.1)} className="h-full">
                <Link to={`/services/${service.id}`} className="block h-full group relative overflow-hidden bg-white border border-[#ddd2c4] p-8 flex flex-col justify-end transition-all hover:border-[#023e8a] hover:bg-[#fefcfa] hover:-translate-y-1">
                  <div className="absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-[#023e8a]" />
                  </div>
                  {(() => { const Icon = service.icon; return <Icon className="w-10 h-10 mb-6 text-[#023e8a]" strokeWidth={1.5} />; })()}
                  <h3 className="text-2xl font-bold mb-3 tracking-tight text-[#4a4a4a]">{service.title}</h3>
                  <p className="text-[#6b7280] text-sm md:text-base leading-relaxed hidden sm:block">{service.description}</p>
                </Link>
              </FadeInUpSection>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MINIMALIST STATS --- */}
      <section className="py-32 border-y border-gray-200 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 divide-x-0 md:divide-x divide-[#ddd2c4]">
          {stats.map((item, index) => (
            <FadeInUpSection key={index} delay={index * 0.1} className="md:px-12 text-center md:text-left flex flex-col justify-center">
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-[#023e8a] mb-4">
                <AnimatedCounter value={item.value} />
              </h3>
              <p className="text-[#6b7280] uppercase tracking-[0.2em] text-xs font-bold">{item.label}</p>
            </FadeInUpSection>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-40 px-4 md:px-8 text-center bg-[#f8f3ec]">
        <FadeInUpSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-10 max-w-4xl mx-auto leading-tight text-[#023e8a]">
            READY TO BUILD <br /><span className="text-[#023e8a]/30">SOMETHING EXTRAORDINARY?</span>
          </h2>
        </FadeInUpSection>

        <FadeInUpSection delay={0.2}>
          <Link to="/contact">
            <button className="px-12 py-6 bg-[#023e8a] text-white font-bold hover:bg-[#012a60] transition-colors uppercase tracking-[0.2em] text-xs shadow-2xl shadow-[#023e8a]/20">
              Start Your Project
            </button>
          </Link>
        </FadeInUpSection>
      </section>

    </div>
  );
};

export default Home;
