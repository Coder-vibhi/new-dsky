import { Link } from 'react-router-dom';
import { ArrowUp, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="relative border-t border-gray-100" style={{ background: '#fcfdff' }}>
      {/* Main Footer */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <div className="text-2xl font-display font-black text-[#4a4a4a] tracking-tighter">
                The Sky <span className="text-[#e11d48]">Venture</span>
              </div>
            </Link>
            <p className="mt-4 text-[#6b7280] font-body text-sm max-w-xs leading-relaxed">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#4a4a4a] font-display font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-[#6b7280] font-body text-sm hover:text-[#e11d48] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#4a4a4a] font-display font-bold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white border border-gray-100 flex items-center justify-center hover:bg-[#e11d48] hover:border-[#e11d48] transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-[#6b7280] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-4 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6b7280] font-body text-xs">
            &copy; {new Date().getFullYear()} The Sky Venture. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 border border-gray-100 flex items-center justify-center hover:border-[#e11d48] hover:bg-[#e11d48]/5 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#6b7280]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
