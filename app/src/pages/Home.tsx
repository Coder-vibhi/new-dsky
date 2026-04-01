import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  Code, Smartphone, Palette, Globe,
  Users, Briefcase, Calculator, Shield,
  ArrowRight, Sparkles, Zap, Star
} from 'lucide-react';

const services: Array<{
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  num: string;
}> = [
  { id: 'web-development', icon: Code, title: 'Web Development', subtitle: 'Build & Scale', description: 'Custom websites and web applications built with modern technologies.', color: 'from-pink to-rose-500', gradient: 'from-pink/50 to-rose-500/50', num: '01' },
  { id: 'app-development', icon: Smartphone, title: 'App Development', subtitle: 'iOS & Android', description: 'Native and cross-platform mobile applications for all devices.', color: 'from-purple-500 to-violet-500', gradient: 'from-purple-500/50 to-violet-500/50', num: '02' },
  { id: 'ui-ux-design', icon: Palette, title: 'UI/UX Design', subtitle: 'Design Systems', description: 'User-centered design that combines aesthetics with functionality.', color: 'from-cyan-500 to-blue-500', gradient: 'from-cyan-500/50 to-blue-500/50', num: '03' },
  { id: 'digital-marketing', icon: Globe, title: 'Digital Marketing', subtitle: 'Growth Engine', description: 'Strategic marketing to increase visibility and drive traffic.', color: 'from-emerald-500 to-teal-500', gradient: 'from-emerald-500/50 to-teal-500/50', num: '04' },
  { id: 'staffing', icon: Users, title: 'IT Staffing', subtitle: 'Top Talent', description: 'Flexible staffing solutions to find the right talent for your projects.', color: 'from-amber-500 to-orange-500', gradient: 'from-amber-500/50 to-orange-500/50', num: '05' },
  { id: 'bpo', icon: Briefcase, title: 'BPO Services', subtitle: 'Operations', description: 'Business process outsourcing to streamline operations.', color: 'from-red-500 to-pink', gradient: 'from-red-500/50 to-pink/50', num: '06' },
  { id: 'insurance', icon: Shield, title: 'Insurance Solutions', subtitle: 'InsurTech', description: 'Technology solutions for the insurance industry.', color: 'from-indigo-500 to-purple-500', gradient: 'from-indigo-500/50 to-purple-500/50', num: '07' },
  { id: 'financial', icon: Calculator, title: 'Financial Services', subtitle: 'FinTech', description: 'Digital transformation for financial institutions.', color: 'from-green-500 to-emerald-500', gradient: 'from-green-500/50 to-emerald-500/50', num: '08' },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

// Marquee text for creative feel
const marqueeWords = ['INNOVATION', 'DESIGN', 'DEVELOPMENT', 'STRATEGY', 'AUTOMATION', 'AI', 'CLOUD', 'SECURITY'];

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

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
  const lineWidth = useTransform(scrollYProgress, [0.05, 0.2], ['0%', '100%']);

  useEffect(() => {
    document.body.style.overflow = '';
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ background: '#050505' }}>
      {/* ===== HERO ===== */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video BG */}
        <motion.div className="absolute inset-0 z-0" style={{ opacity: videoOpacity, scale: videoScale }}>
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ opacity: 0.5 }}>
            <source src="/images/ani/3252858-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          </video>
          {/* Dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20" />
          {/* Pink/gradient side glow */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-pink/5 to-transparent" />
        </motion.div>

        {/* Animated Grid Lines Background */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]">
          {[...Array(8)].map((_, i) => (
            <div key={`v${i}`} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${(i + 1) * 12.5}%` }} />
          ))}
          {[...Array(6)].map((_, i) => (
            <div key={`h${i}`} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${(i + 1) * 16.6}%` }} />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24">

          {/* Brand Name - Large & Glowing */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2px] bg-gradient-to-r from-pink to-purple-500" />
              <Sparkles className="w-4 h-4 text-pink" />
            </div>
            <h2 className="text-lg md:text-xl font-body font-bold tracking-[0.25em] uppercase"
              style={{
                background: 'linear-gradient(90deg, #ff73c3, #c084fc, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none',
                filter: 'drop-shadow(0 0 20px rgba(255,115,195,0.3))'
              }}
            >
              D Sky Ventures Pvt Ltd
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-20 h-[1px] bg-gradient-to-r from-pink/60 to-transparent" />
              <span className="text-white/20 text-[10px] font-body tracking-[0.2em]">EST. 2018</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-display font-black text-white leading-[0.95] tracking-tighter"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            WE{' '}
            <span className="font-playfair italic">
              BUILD{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff73c3, #a855f7, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                DIGITAL
              </span>
            </span>
            <br />
            <span className="flex items-center gap-4">
              <span>FUTURE</span>
              <motion.span
                className="inline-block w-10 md:w-14 h-[3px] bg-gradient-to-r from-pink to-purple-500 mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-sm md:text-base text-white/40 font-body max-w-md leading-relaxed border-l-2 border-pink/30 pl-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Premium IT solutions that transform your
            <br />
            business vision into{' '}
            <span className="text-pink/80 font-semibold">reality</span>.
          </motion.p>

        </div>

        {/* Right Side - Vertical Text */}
        <motion.div
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-pink/40" />
          <p className="text-white/20 text-[10px] font-body tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
            Premium IT Solutions
          </p>
          <div className="w-[1px] h-16 bg-gradient-to-b from-pink/40 to-transparent" />
        </motion.div>

        {/* Scroll Indicator - Animated Line */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
          style={{ opacity: indicatorOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <span className="text-white/30 text-[10px] font-body tracking-[0.4em] uppercase">Scroll</span>
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

      {/* ===== MARQUEE STRIP ===== */}
      <div className="relative py-6 overflow-hidden border-y border-white/5" style={{ background: '#080808' }}>
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-6">
              <span className="text-2xl md:text-3xl font-display font-black text-white/[0.04] tracking-wider">{word}</span>
              <Zap className="w-3 h-3 text-pink/20" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* ===== STATS STRIP ===== */}
      <section className="relative py-16 border-b border-white/5" style={{ background: '#050505' }}>
        <div className="px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <p className="text-4xl md:text-5xl font-display font-black text-white">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-2 text-xs font-body tracking-[0.15em] uppercase text-white/30">{stat.label}</p>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-[1px] h-12 -translate-y-1/2 bg-white/5" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="relative py-24 md:py-32" style={{ background: '#050505' }}>
        {/* Section Header */}
        <div className="px-6 md:px-16 lg:px-24 mb-20">
          <div className="flex items-start justify-between">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-[2px] bg-pink" />
                <span className="text-pink text-xs font-body tracking-[0.3em] uppercase">What We Offer</span>
              </motion.div>
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                OUR{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #ff73c3, #a855f7, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  SERVICES
                </span>
              </motion.h2>
            </div>
            <motion.p
              className="hidden md:block text-white/30 font-body text-sm max-w-xs mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Comprehensive digital solutions tailored to your business needs. From concept to deployment.
            </motion.p>
          </div>

          {/* Animated line */}
          <motion.div
            className="mt-8 h-[1px] bg-gradient-to-r from-pink/50 via-purple-500/30 to-transparent"
            style={{ width: lineWidth }}
          />
        </div>

        {/* Services Grid */}
        <div className="px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 gap-[1px] bg-white/[0.03]">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: index * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/services/${service.id}`}>
                  <TiltCard className="group relative cursor-pointer overflow-hidden bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#0d0d0d] transition-colors duration-500">
                    {/* Top gradient line on hover */}
                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />

                    {/* Corner number */}
                    <span className="absolute top-4 right-6 text-6xl font-display font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none">
                      {service.num}
                    </span>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Subtitle */}
                    <p className="text-[10px] font-body tracking-[0.2em] uppercase text-white/20 mb-2">{service.subtitle}</p>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-pink transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/30 text-sm font-body leading-relaxed max-w-sm">
                      {service.description}
                    </p>

                    {/* Bottom CTA */}
                    <div className="mt-6 flex items-center gap-2 text-pink/60 group-hover:text-pink transition-all duration-300">
                      <span className="text-xs font-body font-medium tracking-wide">Explore</span>
                      <div className="w-0 group-hover:w-8 h-[1px] bg-pink transition-all duration-500" />
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </div>

                    {/* Background glow */}
                    <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
                  </TiltCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#080808' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-pink/[0.03] via-transparent to-purple-500/[0.03]" />
        <div className="relative px-6 md:px-16 lg:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Star className="w-5 h-5 text-pink/40 mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
              READY TO{' '}
              <span className="font-playfair italic" style={{
                background: 'linear-gradient(135deg, #ff73c3, #a855f7, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                START
              </span>
              ?
            </h2>
            <p className="mt-4 text-white/30 font-body max-w-md mx-auto">
              Let&apos;s build something extraordinary together.
            </p>
            <Link to="/contact">
              <motion.button
                className="mt-8 px-8 py-4 bg-gradient-to-r from-pink to-purple-600 rounded-full text-white font-body font-semibold tracking-wide"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,115,195,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
