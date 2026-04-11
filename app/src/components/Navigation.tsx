import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { 
    label: 'SERVICES', 
    href: '/services',
    dropdown: [
      { label: 'AI Training and Development', href: '/services/ai-training' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'App Development', href: '/services/app-development' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'IT Staffing', href: '/services/staffing' },
      { label: 'BPO Services', href: '/services/bpo' },
      { label: 'Insurance Solution', href: '/services/insurance' },
      { label: 'Financial Services', href: '/services/financial' },
    ]
  },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'TESTIMONIALS', href: '/testimonials' },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeout = useRef<any>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (location.pathname === path || (path === '/' && location.pathname === '')) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

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
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 ml-16 flex-1 h-full">
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="py-8 flex items-center cursor-pointer">
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 text-[12px] font-bold uppercase tracking-widest transition-colors ${
                      (location.pathname === link.href) || 
                      (link.href !== '/' && location.pathname.startsWith(link.href)) ||
                      (link.href === '/' && location.pathname === '')
                      ? 'text-[#e11d48]'
                      : 'text-[#64748b] hover:text-[#0f172a]'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                  </Link>
                </div>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[80%] left-0 mt-0 w-64 bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-50 rounded-sm overflow-hidden"
                    >
                      <div className="py-2 max-h-[70vh] overflow-y-auto">
                        {link.dropdown.map((dropLink) => (
                          <Link 
                            key={dropLink.label}
                            to={dropLink.href}
                            onClick={(e) => handleLinkClick(e, dropLink.href)}
                            className="block px-6 py-3 text-[11px] font-bold text-gray-500 hover:text-[#e11d48] hover:bg-gray-50/50 uppercase tracking-widest transition-colors border-b border-gray-50 last:border-0"
                          >
                            {dropLink.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
            className="fixed inset-0 z-[60] bg-white lg:hidden pt-24 overflow-y-auto"
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
            <div className="flex flex-col items-center justify-start h-full gap-8 px-6 pb-20">
              {navLinks.map((link) => (
                <div key={link.label} className="w-full flex flex-col items-center">
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className={`text-2xl font-black tracking-widest uppercase flex items-center gap-2 ${
                      (location.pathname === link.href) || 
                      (link.href !== '/' && location.pathname.startsWith(link.href)) ||
                      (link.href === '/' && location.pathname === '')
                      ? 'text-[#e11d48]' : 'text-gray-900'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className={`w-6 h-6 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                  </button>
                  
                  {/* Mobile dropdown rendering */}
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="flex flex-col items-center gap-4 mt-6 mb-4 overflow-hidden"
                    >
                      {link.dropdown.map(drop => (
                        <Link 
                          key={drop.label}
                          to={drop.href}
                          onClick={(e) => {
                            handleLinkClick(e, drop.href);
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-[#e11d48]"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                  
                  {!link.dropdown && (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hidden"
                    />
                  )}
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
