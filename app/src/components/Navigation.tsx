import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'TESTIMONIALS', href: '/testimonials' },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="w-full flex items-center justify-between h-24 px-6 md:px-8 lg:px-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 shrink-0">
            <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center border-2 border-[#0f172a]">
              <span className="text-[20px] font-bold text-[#0f172a] -mr-[1px] mt-[1px]">T</span>
              <span className="text-[20px] font-bold text-[#e11d48] mt-[1px]">S</span>
            </div>
            {/* Stacked logo layout */}
            <div className="flex flex-col justify-center leading-[1.1] pt-1">
              <span className="text-[15px] font-black text-[#0f172a] uppercase tracking-[0.1em] whitespace-nowrap">The Sky</span>
              <span className="text-[10px] font-bold text-[#64748b] uppercase tracking-[0.25em] whitespace-nowrap">Ventures</span>
            </div>
          </Link>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 ml-16 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[12px] font-bold uppercase tracking-widest transition-colors ${location.pathname === link.href || (link.href === '/' && location.pathname === '')
                  ? 'text-[#e11d48]'
                  : 'text-[#64748b] hover:text-[#0f172a]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-6 shrink-0 justify-end">
            <div className="hidden lg:flex items-center gap-6">
              <span className="text-gray-900 font-bold tracking-widest text-sm whitespace-nowrap">
                +1 - 800 - 123 - 4567
              </span>
              <Link to="/contact">
                <button className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-[#e11d48] transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-900 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={28} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white lg:hidden pt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-8 right-8 text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center justify-start h-full gap-8 px-6">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-2xl font-black tracking-widest uppercase ${location.pathname === link.href || (link.href === '/' && location.pathname === '')
                      ? 'text-[#e11d48]' : 'text-gray-900'
                      }`}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}

              <div className="mt-8 flex flex-col items-center gap-4">
                <span className="text-gray-900 font-bold tracking-widest text-lg">
                  +1 - 800 - 123 - 4567
                </span>
                <Link to="/contact">
                  <button className="px-10 py-3 bg-gray-900 text-white font-bold tracking-widest uppercase">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
