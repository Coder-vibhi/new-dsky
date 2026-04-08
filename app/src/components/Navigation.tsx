import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '/' },
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
        <div className="w-full flex items-center h-24">

          {/* Left Side (White area) - roughly 50% */}
          <div className="flex-1 flex items-center justify-between pl-8 pr-4 lg:pl-16 lg:pr-12 h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-900 overflow-hidden">
                <span className="text-xl font-black text-gray-900 tracking-tighter leading-none">𝒯</span>
                <span className="text-orange-500 text-lg font-black leading-none -ml-0.5">𝓼</span>
              </div>
              <div className="flex flex-col leading-[1.1] ml-1">
                <span className="text-[12px] font-black text-gray-900 uppercase tracking-widest whitespace-nowrap">The Sky</span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] whitespace-nowrap">Ventures</span>
              </div>
            </Link>

            {/* Desktop Navigation links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-[11px] font-extrabold uppercase tracking-widest transition-colors ${location.pathname === link.href || (link.href === '/' && location.pathname === '')
                    ? 'text-rose-600'
                    : 'text-gray-500 hover:text-rose-600'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side (Red area) - roughly 50% */}
          <div className="flex-1 flex items-center justify-end pr-8 lg:pr-16 h-full">
            <div className="hidden lg:flex items-center gap-6">
              <span className="text-white font-bold tracking-widest text-sm whitespace-nowrap">
                +1 - 800 - 123 - 4567
              </span>
              <Link to="/contact">
                <button className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
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
                      ? 'text-rose-600' : 'text-gray-900'
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
