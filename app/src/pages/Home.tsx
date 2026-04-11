import { motion } from 'framer-motion';
import { MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import Hero from '../sections/Hero';

const serviceImages = [
  { id: 'ai', title: 'AI Training', image: '/service images/ai.png' },
  { id: 'web', title: 'Web Development', image: '/service images/web.png' },
  { id: 'app', title: 'App Development', image: '/service images/app.png' },
  { id: 'uiux', title: 'UI/UX Design', image: '/service images/uiux.png' },
  { id: 'digital', title: 'Digital Marketing', image: '/service images/digital.png' },
  { id: 'bpo', title: 'BPO Services', image: '/service images/bpo.png' },
  { id: 'insurance', title: 'Insurance Solutions', image: '/service images/insuraance.png' },
  { id: 'financial', title: 'Financial Services', image: '/service images/financial.png' },
  { id: 'staffing', title: 'IT Staffing', image: '/service images/staffing.png' }
];

const teamImages = [
  '/images/project-1.jpg',
  '/images/project-2.jpg',
  '/images/project-5.jpg',
  '/images/project-4.jpg'
];

const industries = [
  { name: 'Artificial intelligence', image: '/service images/ai.png', color: '#dcfce7' },
  { name: 'Web development', image: '/images/industries/webdev.png', color: '#fef9c3' },
  { name: 'UI/UX design', image: '/images/industries/uiux (2).png', color: '#e0f2fe' },
  { name: 'Digital marketing', image: '/images/industries/digital (2).png', color: '#f3e8ff' },
  { name: 'IT staffing', image: '/images/industries/staffing (2).png', color: '#ffedd5' },
  { name: 'Financial services', image: '/images/industries/shield.png', color: '#ede9fe' }
];

const homeTestimonials = [
  {
    name: 'Jennifer B.',
    company: 'xxxxxxx',
    text: 'Working with Eliora Technologies has been a game changer for our business. They delivered exactly what we needed, on time and within budget. Impressive!'
  },
  {
    name: 'Hassan Farah',
    company: 'xxxxxx',
    text: 'We collaborated with Eliora Technologies, a top-notch website development company, to create our company website at Horn Excellence. Our experience working with their team was a harmonious blend of creativity, professionalism, and technical expertise.'
  },
  {
    name: 'Mona Yadav',
    company: 'xxxxxxx',
    text: 'And foremost, the design of the website was very stunning. The layout was elegant and sophisticated, perfectly complementing the beauty of the products themselves. The use of high-quality images and elegant typography created a cohesive look.'
  },
  {
    name: 'David Wilson',
    company: 'xxxxxxx',
    text: 'A truly remarkable experience. The technical depth and project management were world-class. Highly recommended for any complex digital requirements.'
  }
];

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: { children: React.ReactNode; delay?: number, className?: string, direction?: "up" | "down" | "left" | "right" | "none" }) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction], scale: direction === "none" ? 1 : 0.95 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom quint ease out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <div id="solutions" className="relative w-full z-10">
        <div className="text-center py-16 bg-[#f8f9fa]">
          <FadeIn>
            <span className="text-[#e11d48] text-sm font-black uppercase tracking-[0.3em] mb-4 block">Engineered Excellence</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] to-[#be123c]">Solutions</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#e11d48] mx-auto mt-6 rounded-full" />
          </FadeIn>
        </div>

        <div className="relative">
          {/* Left Arrow - Plain White Arrow, No BG */}
          <button
            onClick={() => {
              const container = document.getElementById('service-carousel');
              if (container) container.scrollLeft -= window.innerWidth;
            }}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-125 transition-transform duration-300 active:scale-95"
          >
            <ChevronLeft className="w-16 h-16" strokeWidth={1} />
          </button>

          {/* Carousel Container - Full Width */}
          <div
            id="service-carousel"
            className="flex w-full overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {serviceImages.map((service) => (
              <div key={service.id} className="shrink-0 w-screen h-[80vh] md:h-[85vh] relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow - Plain White Arrow, No BG */}
          <button
            onClick={() => {
              const container = document.getElementById('service-carousel');
              if (container) container.scrollLeft += window.innerWidth;
            }}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:scale-125 transition-transform duration-300 active:scale-95"
          >
            <ChevronRight className="w-16 h-16" strokeWidth={1} />
          </button>
        </div>

      </div>
      {/* --- 2.5 INDUSTRIES SECTION --- */}
      <section id="industries" className="relative w-full bg-white py-32 overflow-hidden z-10">
        <div className="relative w-full max-w-[1240px] mx-auto px-6 z-10">
          <div className="text-center mb-16 px-4">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#870000] to-[#190a05] tracking-tight mb-4">
                Industries We Empower
              </h2>
              <p className="text-gray-500 font-medium text-sm md:text-base max-w-2xl mx-auto">
                Driving innovation and growth across diverse sectors with tailor-made digital strategies and technical excellence.
              </p>
              {/* Optional small percentage indicator as seen in top right of image */}
              {/* <div className="absolute top-0 right-6 hidden md:flex items-center justify-center w-14 h-14 rounded-full border-[3px] border-[#0f172a] text-[10px] font-black text-[#0f172a] bg-white shadow-sm">
                <div className="flex flex-col items-center">
                  <span>42%</span>
                  <div className="w-8 h-[2px] bg-[#0f172a]/20 mt-0.5"></div>
                </div>
              </div> */}
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <FadeIn key={index} delay={index * 0.15} direction="up">
                <div className="group relative bg-white overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-sm border border-gray-100/50">
                  {/* Image Container */}
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  {/* Industry Label Bar */}
                  <div
                    className="py-5 text-center transition-colors duration-300 border-t border-gray-100"
                    style={{ backgroundColor: industry.color }}
                  >
                    <span className="text-[#0f172a] font-bold text-lg tracking-tight">
                      {industry.name}
                    </span>
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

      {/* --- 4. TECHNOLOGIES WE WORK WITH --- */}
      <section id="tech-stack" className="relative w-full bg-white py-32 overflow-hidden border-t border-gray-100">
        <div className="absolute top-1/4 left-0 w-64 h-64 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #e11d48 3px, transparent 3px)', backgroundSize: '20px 20px' }}></div>

        <div className="relative w-full max-w-[1200px] mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-[#e11d48] text-sm font-bold uppercase tracking-[0.2em]">Our Tech Stack</span>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#870000] to-[#190a05] mt-2 tracking-tight">
                Technologies We Work With
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'HTML5', color: '#e34f26' },
              { name: 'CSS3', color: '#1572b6' },
              { name: 'JavaScript', color: '#f7df1e' },
              { name: 'React', color: '#61dafb' },
              { name: 'TypeScript', color: '#3178c6' },
              { name: 'Node.js', color: '#68a063' },
              { name: 'Python', color: '#3776ab' },
              { name: 'MongoDB', color: '#47a248' },
              { name: 'PostgreSQL', color: '#336791' },
              { name: 'AWS', color: '#ff9900' },
              { name: 'Docker', color: '#2496ed' },
              { name: 'Figma', color: '#f24e1e' }
            ].map((tech, index) => (
              <FadeIn key={index} delay={index * 0.08} direction="none">
                <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center border border-gray-100 group hover:border-[#e11d48]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 mb-4 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <span className="text-2xl font-black" style={{ color: tech.color }}>{tech.name.substring(0, 2)}</span>
                  </div>
                  <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">{tech.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. TESTIMONIAL MARQUEE SECTION --- */}
      <section className="relative w-full bg-white py-20 overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0f172a 3px, transparent 3px)', backgroundSize: '30px 30px' }}></div>

        <div className="relative w-full z-10">
          <div className="text-center mb-12">
            <FadeIn>
              <span className="text-[#e11d48] text-[10px] font-black uppercase tracking-[0.5em] mb-3 block">TESTIMONIALS</span>
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#870000] to-[#190a05] tracking-tight">
                Our Happy Clients
              </h2>
            </FadeIn>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            {/* Infinite Marquee Container */}
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: [0, -100 / 2 + "%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...homeTestimonials, ...homeTestimonials].map((client, index) => (
                <div key={index} className="w-[300px] md:w-[400px] bg-white border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white shrink-0 shadow-inner">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 opacity-80">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 leading-none">{client.name}</h4>
                      <p className="text-[9px] font-black text-gray-400 tracking-widest uppercase mt-1">{client.company}</p>
                    </div>
                  </div>

                  <div className="w-12 h-0.5 bg-[#e11d48] mb-6 rounded-full" />

                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    "{client.text}"
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Fade Gradients for the edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- 6. TEAM / SOCIAL FOOTER EQUIVALENT --- */}
      <section className="w-full bg-white py-32 relative overflow-hidden">
        {/* Massive Follow Watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left opacity-5 select-none pointer-events-none">
          <span className="text-[12rem] font-black text-gray-900 leading-none tracking-tighter">Corporate</span>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#870000] to-[#190a05] mb-4 tracking-tight">
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
    </>
  );
};

export default Home;
