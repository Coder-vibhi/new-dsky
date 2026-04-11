import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-white overflow-hidden flex flex-col justify-center pt-24 pb-16">
      {/* Background Decor - "FUTURE" text watermark */}
      <div className="absolute right-[-10%] md:right-[-2%] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0">
        <div className="text-[#f8f9fa] font-black text-[150px] md:text-[250px] xl:text-[300px] leading-none transform -rotate-90 origin-center select-none opacity-[0.85]" style={{ letterSpacing: '0.1em' }}>
          FUTURE
        </div>
      </div>
      
      {/* Dotted pattern backgrounds */}
      {/* Top right pattern */}
      <div 
        className="absolute right-[8%] top-[10%] z-0 text-[#e11d48] opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, currentColor 2.5px, transparent 2.5px)', 
          backgroundSize: '24px 24px', 
          width: '250px', 
          height: '250px' 
        }} 
      />
      
      {/* Bottom left pattern (under the text area and extending to middle) */}
      <div 
        className="absolute left-[35%] bottom-[10%] z-0 text-[#e11d48] opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, currentColor 2.5px, transparent 2.5px)', 
          backgroundSize: '24px 24px', 
          width: '300px', 
          height: '200px' 
        }} 
      />

      <div className="relative max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-8 z-10 pt-10 md:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-black leading-[0.9] text-[#0f172a] -tracking-[0.02em] flex flex-col"
          >
            <span className="uppercase block">Digital</span>
            <span className="uppercase block">Future</span>
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
              <button className="bg-[#e11d48] text-white font-bold text-sm uppercase tracking-widest px-8 md:px-10 py-4 shadow-[0_8px_20px_rgba(225,29,72,0.3)] hover:bg-[#be123c] hover:shadow-[0_10px_25px_rgba(225,29,72,0.4)] transition-all">
                Start Project
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Circular Image Layout */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-end relative mt-24 md:mt-0 z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]"
            >
              {/* Thick Red Circle Ring background behind */}
              <div className="absolute inset-0 rounded-full border-[10px] md:border-[14px] border-[#e11d48] bg-white shadow-xl z-0" />
              
              {/* Image intersecting the circle. */}
              <div className="absolute inset-[-15%] flex items-center justify-center z-10 overflow-visible">
                <img 
                  src="/images/right.png" 
                  alt="Professional team around a laptop" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] mt-10 md:mt-16 mr-[-5%] filter"
                />
              </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
