import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  Code, Smartphone, Palette, Globe,
  ArrowRight, Sparkles
} from 'lucide-react';

const services: Array<{
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}> = [
  { id: 'web-development', icon: Code, title: 'Web Development', description: 'Custom websites and web applications built with modern technologies.', color: 'from-pink to-rose-500' },
  { id: 'app-development', icon: Smartphone, title: 'App Development', description: 'Native and cross-platform mobile applications for all devices.', color: 'from-purple-500 to-violet-500' },
  { id: 'ui-ux-design', icon: Palette, title: 'UI/UX Design', description: 'User-centered design that combines aesthetics with functionality.', color: 'from-cyan-500 to-blue-500' },
  { id: 'digital-marketing', icon: Globe, title: 'Digital Marketing', description: 'Strategic marketing to increase visibility and drive traffic.', color: 'from-emerald-500 to-teal-500' },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

// Animated counter
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

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const videoOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.15]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  useEffect(() => {
    document.body.style.overflow = '';
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* ===== HERO ===== */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Dark background */}
        <div className="absolute inset-0 z-0 bg-black" />
        {/* Video BG */}
        <motion.div className="absolute inset-0 z-0" style={{ opacity: videoOpacity, scale: videoScale }}>
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-black"
            style={{ width: '150vw', height: '84.375vw', maxHeight: '150vh', maxWidth: '266.67vh' }}
          >
            <iframe
              src="https://www.youtube.com/embed/vWjxQLmuUUM?autoplay=1&mute=1&loop=1&playlist=vWjxQLmuUUM&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&enablejsapi=1"
              title="Background Video"
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24">
          {/* Brand Name */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-pink" />
              <Sparkles className="w-4 h-4 text-pink" />
            </div>
            <h2 className="text-lg md:text-xl font-body font-bold tracking-[0.25em] uppercase text-pink">
              D Sky Ventures Pvt Ltd
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-20 h-[1px] bg-white/20" />
              <span className="text-white/40 text-[10px] font-body tracking-[0.2em]">EST. 2018</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-[4rem] font-display font-black text-white leading-[1.1] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span
                className="inline-block mr-3"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                WE
              </motion.span>
              <motion.span
                className="inline-block font-playfair italic mr-3"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                BUILD
              </motion.span>
              <motion.span
                className="inline-block"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                style={{
                  background: 'linear-gradient(135deg, #ff73c3, #a855f7, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                DIGITAL
              </motion.span>
              <br />
              <motion.span
                className="inline-block"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                FUTURE
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-sm md:text-base text-white/60 font-body max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Premium IT solutions that transform your
            business vision into reality.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <Link to="/contact">
              <button className="px-8 py-3 bg-pink text-white font-body font-semibold tracking-wide hover:bg-pink/90 transition-colors">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
          style={{ opacity: indicatorOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <span className="text-white/40 text-[10px] font-body tracking-[0.4em] uppercase">Scroll</span>
          <motion.div
            className="w-[1px] h-10 bg-gradient-to-b from-pink to-transparent relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-3 bg-white"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section className="relative py-24 border-b border-[#ddd2c4]" style={{ background: '#f8f3ec' }}>
        <div className="px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="text-4xl md:text-5xl font-display font-black text-[#2c2420]">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-2 text-xs font-body tracking-[0.15em] uppercase text-[#7a6e64]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="relative py-32 md:py-40 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f2ece4 0%, #f8f3ec 50%, #faf5f7 100%)' }}>
        {/* Section Header */}
        <div className="px-6 md:px-16 lg:px-24 mb-20">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-8 h-[2px] bg-pink" />
              <span className="text-pink text-xs font-body tracking-[0.3em] uppercase">What We Offer</span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#2c2420] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              OUR SERVICES
            </motion.h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-6 md:px-16 lg:px-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <Link to={`/services/${service.id}`}>
                  <div className="group relative cursor-pointer overflow-hidden h-full border border-[#ddd2c4]">
                    <div className="p-8 transition-colors duration-500 h-full flex flex-col" style={{ background: '#fefcfa' }}>
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                        <service.icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-display font-bold text-[#2c2420] group-hover:text-pink transition-colors duration-300 mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#7a6e64] text-sm font-body leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      {/* Bottom CTA */}
                      <div className="mt-6 flex items-center gap-2 text-pink/60 group-hover:text-pink transition-all duration-300">
                        <span className="text-xs font-body font-medium tracking-wide">Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-[#2c2420] font-body font-medium hover:text-pink transition-colors">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="relative py-32 overflow-hidden" style={{ background: '#2c2420' }}>
        <div className="relative px-6 md:px-16 lg:px-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-pink text-xs font-body tracking-[0.3em] uppercase mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-white/50 font-body max-w-lg mx-auto leading-relaxed">
              Let&apos;s build something extraordinary together. Reach out and let&apos;s discuss your vision.
            </p>
            <Link to="/contact">
              <button className="mt-10 px-10 py-4 bg-pink text-white font-body font-semibold tracking-wide hover:bg-pink/90 transition-colors">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
