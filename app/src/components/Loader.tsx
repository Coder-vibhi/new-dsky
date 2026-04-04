import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.fromTo(logoRef.current,
        { scale: 0.5, opacity: 0, rotateY: -180 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 1, ease: 'power3.out' }
      );

      // Progress bar animation
      gsap.fromTo(progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 2.5, ease: 'power2.inOut', delay: 0.5 }
      );

      // Text reveal
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' }
      );

      // Glitch effect on logo
      gsap.to(logoRef.current, {
        x: 'random(-3, 3)',
        y: 'random(-3, 3)',
        duration: 0.1,
        repeat: 20,
        yoyo: true,
        ease: 'none',
        delay: 1.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(160deg, #f8f3ec, #f2ece4, #faf5f7)' }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(196,123,138,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,123,138,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#023e8a]/8 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-300/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-amber-200/10 rounded-full blur-[60px]" />

      {/* Logo */}
      <div 
        ref={logoRef}
        className="relative z-10 perspective-1000 flex flex-col items-center"
      >
        <img 
          src="/images/logo.png" 
          alt="The Sky Venture" 
          className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-xl"
        />
      </div>

      {/* Progress bar */}
      <div className="mt-0 w-48 h-[2px] bg-[#ddd2c4] rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-[#023e8a] via-purple-500 to-[#023e8a] origin-left"
        />
      </div>

      {/* Loading text */}
      <div 
        ref={textRef}
        className="mt-3 text-[#6b7280] text-xs font-body tracking-[0.2em] uppercase"
      >
        Loading Experience
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="w-2 h-2 bg-[#023e8a]/60 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
