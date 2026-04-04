import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  Code, Smartphone, Palette, Globe
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services: Array<{
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}> = [
  { id: 'web-development', icon: Code, title: 'Web Development', description: 'Custom websites and web applications built with modern technologies.', color: 'from-[#023e8a] to-rose-500' },
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

const FadeInUpSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
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

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const delay = index * 0.15;

  return (
    <Link key={service.id} to={`/services/${service.id}`}>
      <div
        ref={ref}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
        }}
        className="p-6 border border-[#ddd2c4] rounded-lg hover:shadow-lg transition-all duration-300 hover:border-[#023e8a] h-full flex flex-col"
      >
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
          <service.icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-bold text-[#4a4a4a] mb-2">{service.title}</h3>
        <p className="text-sm text-gray-500 flex-grow">{service.description}</p>
      </div>
    </Link>
  );
};

const Home = () => {
  return (
    <div className="relative">

      {/* Background Video */}
      <div
        className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/UolciECwp7Y?autoplay=1&mute=1&loop=1&playlist=UolciECwp7Y&controls=0"
            className="w-[150vw] h-[84.375vw] max-h-[150vh] max-w-[266.67vh]"
            allow="autoplay"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10">

        {/* HERO */}
        <section className="h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24">
          <div>
            <h2 className="text-white tracking-widest mb-2">
              The Sky Venture
            </h2>

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              WE BUILD <span className="text-[#023e8a]">DIGITAL</span> FUTURE
            </h1>

            <p className="text-white/60 mt-4 max-w-md">
              Premium IT solutions that transform your business vision into reality.
            </p>
          </div>
        </section>

        {/* STATS with Scroll Animation */}
        <section className="py-20 text-center" style={{ background: 'linear-gradient(180deg, #f2ece4 0%, #f8f3ec 50%, #faf5f7 100%)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <FadeInUpSection key={index} delay={index * 0.1}>
                <div>
                  <h3 className="text-3xl font-bold text-[#4a4a4a]">
                    <AnimatedCounter value={item.value} />
                  </h3>
                  <p className="text-[#6b7280] text-sm mt-2">{item.label}</p>
                </div>
              </FadeInUpSection>
            ))}
          </div>
        </section>

        {/* SERVICES with Staggered Scroll Animation */}
        <section className="py-20 px-6 md:px-16" style={{ background: 'linear-gradient(180deg, #f2ece4 0%, #f8f3ec 50%, #faf5f7 100%)' }}>
          <FadeInUpSection>
            <h2 className="text-3xl font-bold mb-10 text-[#4a4a4a]">Our Services</h2>
          </FadeInUpSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* CTA with Scroll Animation */}
        <section className="py-20 text-center bg-[#023e8a] text-white">
          <FadeInUpSection>
            <h2 className="text-3xl font-bold">
              Ready to Start Your Project?
            </h2>
          </FadeInUpSection>

          <FadeInUpSection delay={0.2}>
            <Link to="/contact">
              <button className="mt-6 px-6 py-3 bg-white text-[#023e8a] font-bold hover:bg-black hover:text-white transition-all">
                Contact Us
              </button>
            </Link>
          </FadeInUpSection>
        </section>

      </div>
    </div>
  );
};

export default Home;
