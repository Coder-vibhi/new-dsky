import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] bg-white overflow-hidden flex flex-col justify-center pt-24 pb-16">
      {/* Generated Soft Abstract Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: 'url(/images/hero-bg.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
      />
      
      {/* Background Decor - "FUTURE" text watermark */}
      <div className="absolute right-[-10%] md:right-[-2%] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0">
        <div className="text-[#f8f9fa] font-black text-[150px] md:text-[250px] xl:text-[300px] leading-none transform -rotate-90 origin-center select-none opacity-[0.85]" style={{ letterSpacing: '0.1em' }} aria-hidden="true">
          FUTURE
        </div>
      </div>
      
      {/* Dotted pattern backgrounds */}
      {/* Top right pattern */}
      <div 
        className="absolute right-[8%] top-[10%] z-0 text-[#e11d48] opacity-[0.10] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, currentColor 2.5px, transparent 2.5px)', 
          backgroundSize: '24px 24px', 
          width: '250px', 
          height: '250px' 
        }} 
        aria-hidden="true"
      />
      
      {/* Bottom left pattern */}
      <div 
        className="absolute left-[35%] bottom-[10%] z-0 text-[#e11d48] opacity-[0.10] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, currentColor 2.5px, transparent 2.5px)', 
          backgroundSize: '24px 24px', 
          width: '300px', 
          height: '200px' 
        }} 
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-8 z-10 pt-10 md:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[40px] md:text-[50px] lg:text-[55px] xl:text-[65px] font-black leading-[1.1] text-[#0f172a] tracking-tight"
          >
            We Build <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] to-[#870000]">Scalable Digital</span><br className="hidden md:block" /> Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#64748b] font-medium text-[16px] md:text-[18px] leading-relaxed max-w-[500px]"
          >
            We engineer enterprise-grade technical solutions and immersive digital
            experiences that elevate your brand to the next standard of excellence in the
            modern market.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link to="/contact">
              <button className="relative group overflow-hidden bg-gradient-to-r from-[#e11d48] to-[#870000] text-white font-bold text-sm uppercase tracking-widest px-8 md:px-10 py-4 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(225,29,72,0.5)]">
                <span className="relative z-10 drop-shadow-md">Start Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#870000] to-[#e11d48] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Circular Image Layout */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-end relative mt-16 md:mt-0 z-10 py-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]"
            >
              {/* Outer soft accent ring */}
              <div className="absolute -inset-4 md:-inset-6 rounded-full border-[1px] md:border-[2px] border-[#e11d48]/20 pointer-events-none shadow-[0_0_60px_rgba(225,29,72,0.15)] animate-[pulse_4s_ease-in-out_infinite]" />
              
              {/* Secondary outer offset ring */}
              <div className="absolute -inset-8 rounded-full border border-gray-100 pointer-events-none opacity-50" />
              
              {/* Circular clipping frame for image */}
              <div className="absolute inset-0 rounded-full bg-white shadow-xl overflow-hidden border-[6px] border-white group">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center relative bg-gray-50 border border-gray-100">
                  <img 
                    src="/images/right.png" 
                    alt="Professional technical team" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Soft overlay gradient to deepen contrast slightly */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0f172a]/10 to-transparent pointer-events-none mix-blend-overlay" />
                </div>
              </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
