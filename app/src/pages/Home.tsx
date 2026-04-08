import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MonitorSmartphone, Code2, Brain, Palette, Globe, Shield, MessageSquare, ChevronRight } from 'lucide-react';

const services = [
  { id: 'ai-training', title: 'AI Training', description: 'Industry-leading AI training program and professional certification curriculum.', icon: Brain },
  { id: 'web-development', title: 'Web Development', description: 'Custom responsive websites and complex web applications built to scale.', icon: Code2 },
  { id: 'app-development', title: 'App Development', description: 'Native and cross-platform mobile applications for seamless user experiences.', icon: MonitorSmartphone },
  { id: 'ui-ux-design', title: 'UI/UX Design', description: 'User-centered digital design that combines aesthetics with raw functionality.', icon: Palette },
  { id: 'digital-marketing', title: 'SEO Strategy', description: 'Data-driven marketing and SEO techniques to increase organic traffic.', icon: Globe },
  { id: 'cyber-security', title: 'Data Security', description: 'Advanced protection protocols securing your enterprise data architecture.', icon: Shield }
];

const teamImages = [
  '/images/project-1.jpg',
  '/images/project-2.jpg',
  '/images/project-5.jpg',
  '/images/project-4.jpg'
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <div className="bg-[#fcfdff] text-[#1e293b] font-body overflow-x-hidden min-h-screen relative">

      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row pt-24 z-10 bg-[#fcfdff] overflow-hidden">
        {/* Dotted background ornaments similar to the provided image */}
        <div className="absolute top-[10%] right-[5%] w-64 h-64 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #e11d48 3px, transparent 3px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute bottom-[20%] right-[35%] w-48 h-48 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #e11d48 3px, transparent 3px)', backgroundSize: '24px 24px' }}></div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row h-full items-center justify-between pb-10 min-h-[calc(100vh-6rem)] gap-10 lg:gap-0">

          {/* Left / Text Side */}
          <div className="flex-[1] flex flex-col justify-center items-start pl-6 pr-4 lg:pl-16 relative z-20">
            <FadeIn>
              <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black leading-tight text-gray-900 mb-6 drop-shadow-sm">
                Digital Future
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm md:text-base text-gray-500 font-medium max-w-[90%] leading-relaxed mb-8">
                We engineer enterprise-grade technical solutions and immersive digital experiences that elevate your brand to the next standard of excellence in the modern market.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/contact">
                <button className="px-8 py-3 bg-[#e11d48] text-white text-sm font-bold uppercase tracking-widest rounded-md hover:bg-rose-700 transition-colors shadow-lg">
                  START PROJECT
                </button>
              </Link>
            </FadeIn>
          </div>

          {/* Right / Red Circle Graphic */}
          <div className="flex-[1] flex justify-center items-center relative z-20 w-full">

            {/* Massive Vertical Text (kept but restyled for light background) */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 origin-center -rotate-90 select-none z-0 hidden lg:block">
              <h1 className="text-[5rem] xl:text-[7rem] font-black text-gray-50 italic leading-none whitespace-nowrap">
                Software
              </h1>
            </div>

            <FadeIn delay={0.3} className="z-20">
              <motion.div
                className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full bg-[#e11d48] shadow-xl flex items-center justify-center p-2 lg:p-3"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="w-full h-full overflow-hidden rounded-full bg-white relative border-4 border-white">
                  <img
                    src="/images/right.png"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Circular Badge */}
                {/* <motion.div
                  className="absolute top-[8%] -left-[8%] w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 text-center border-gray-50 flex-col leading-none z-30"
                  animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-lg lg:text-xl font-black text-[#e11d48]">No.1</span>
                  <span className="text-[8px] lg:text-[10px] font-bold text-gray-500 tracking-wider">AGNCY</span>
                </motion.div> */}
              </motion.div>
            </FadeIn>

            {/* Premium IT text block (kept but positioned Bottom Right) */}
            {/* <div className="absolute bottom-4 right-6 lg:bottom-10 lg:right-10 flex flex-col items-end text-right z-30">
              <FadeIn delay={0.4}>
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 tracking-wider mb-1">
                  Premium IT
                </h3>
                <p className="text-gray-500 text-xs lg:text-sm font-medium leading-snug">
                  Our great developers,<br />
                  Now with extra code.
                </p>
              </FadeIn>
            </div> */}

          </div>
        </div>
      </section>

      {/* --- 2. SERVICES GRID (Menu Equivalent) --- */}
      <section className="relative w-full bg-[#f8f9fa] py-32 overflow-hidden z-10 border-t-8 border-white border-b border-gray-200">
        {/* Huge Faded Background Watermark corresponding to 'Menu' */}
        {/* <div className="absolute top-1/4 right-0 -rotate-90 origin-bottom-right opacity-5 select-none pointer-events-none">
          <span className="text-[10rem] font-black text-gray-900 leading-none">Solutions</span>
        </div> */}

        <div className="relative w-full max-w-[1200px] mx-auto px-6 z-10">

          <div className="text-center mb-20">
            <FadeIn>
              <span className="text-[#e11d48] text-sm font-bold uppercase tracking-[0.2em]">Our expertise</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mt-2">
                Web + Mobile Development
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1} className="h-full">
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col items-center text-center shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-gray-100 group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-40 h-40 mb-6 bg-gray-50 rounded-full flex items-center justify-center p-6 border-4 border-gray-50 group-hover:border-[#e11d48]/10 transition-colors">
                    {/* Replacing the raw Burger graphic with an elegant IT Icon block */}
                    <service.icon className="w-16 h-16 text-gray-700 group-hover:text-[#e11d48] transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-[#e11d48] mb-3">{service.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium mb-6">
                    {service.description}
                  </p>

                  <div className="mt-auto w-full border-t border-dashed border-gray-200 pt-6">
                    <Link to={`/services/${service.id}`} className="group/btn flex items-center justify-center gap-3">
                      <div className="w-10 h-10 bg-[#e11d48] rounded-md flex items-center justify-center text-white shrink-0 group-hover/btn:bg-rose-700 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                      <span className="text-[#e11d48] border border-[#e11d48] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider group-hover/btn:bg-[#e11d48] group-hover/btn:text-white transition-colors">
                        READ MORE
                      </span>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* --- 3. TRI-COLOR BANNER --- */}
      <section className="w-full flex flex-col md:flex-row h-auto md:h-[400px]">
        {/* Banner 1 - Red */}
        <div className="flex-1 bg-[#f04b50] relative overflow-hidden group flex flex-col justify-end p-8 pt-48 md:pt-8 hover:flex-[1.2] transition-all duration-500 min-h-[300px]">
          <img src="/images/app-dev.png" className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[120%] max-w-[300px] object-contain group-hover:scale-105 transition-transform drop-shadow-2xl opacity-90" alt="Tech" />
          <div className="relative z-10 w-full">
            <h3 className="text-white text-3xl font-black mb-4 w-2/3 leading-tight">Product Strategy</h3>
            <button className="bg-white text-[#f04b50] px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-gray-100">
              Start Now
            </button>
          </div>
        </div>

        {/* Banner 2 - Yellow */}
        <div className="flex-1 bg-[#dafb15] relative overflow-hidden group flex flex-col justify-end p-8 pt-48 md:pt-8 hover:flex-[1.2] transition-all duration-500 min-h-[300px]">
          <img src="/images/digital-marketing.png" className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[120%] max-w-[300px] object-contain group-hover:scale-105 transition-transform drop-shadow-2xl opacity-90" alt="Tech" />
          <div className="relative z-10 w-full">
            <h3 className="text-white text-3xl font-black mb-4 w-2/3 leading-tight drop-shadow-md">Cloud Solutions</h3>
            <button className="bg-white text-gray-900 px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-gray-100">
              Start Now
            </button>
          </div>
        </div>

        {/* Banner 3 - Orange */}
        <div className="flex-1 bg-[#ee8c46] relative overflow-hidden group flex flex-col justify-end p-8 pt-48 md:pt-8 hover:flex-[1.2] transition-all duration-500 min-h-[300px]">
          <img src="/images/web-dev.png" className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[120%] max-w-[300px] object-contain group-hover:scale-105 transition-transform drop-shadow-2xl opacity-90" alt="Tech" />
          <div className="relative z-10 w-full">
            <h3 className="text-white text-3xl font-black mb-4 w-2/3 leading-tight">Cyber Security</h3>
            <button className="bg-white text-[#ee8c46] px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-gray-100">
              Start Now
            </button>
          </div>
        </div>
      </section>

      {/* --- 4. TEAM / SOCIAL FOOTER EQUIVALENT --- */}
      <section className="w-full bg-white py-32 relative overflow-hidden">
        {/* Massive Follow Watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left opacity-5 select-none pointer-events-none">
          <span className="text-[12rem] font-black text-gray-900 leading-none tracking-tighter">Corporate</span>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                Follow our journey
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto font-medium text-sm">
                For the latest news, tech updates and inspirational content,
                follow our teams to flavor up your digital strategy!
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pl-12 lg:pl-32">
            {teamImages.map((img, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="aspect-square bg-gray-100 relative group overflow-hidden border border-gray-200">
                  <img src={img} alt={`Team ${index}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {/* Circular Avatar Badge matching Instagram look */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg">
                    <img src={img} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <MessageSquare className="text-white w-8 h-8" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;
