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
    <footer className="relative border-t border-[#ddd2c4]" style={{ background: '#f2ece4' }}>
      {/* Main Footer */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <div className="text-2xl font-display font-black text-[#4a4a4a] tracking-tighter">
                The Sky <span className="text-[#023e8a]">Venture</span>
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
                  <Link to={link.href} className="text-[#6b7280] font-body text-sm hover:text-[#023e8a] transition-colors">
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
                  className="w-10 h-10 bg-white/60 border border-[#ddd2c4] flex items-center justify-center hover:bg-[#023e8a] hover:border-[#023e8a] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-[#6b7280] hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-4 border-t border-[#ddd2c4]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6b7280] font-body text-xs">
            &copy; {new Date().getFullYear()} The Sky Venture. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 border border-[#ddd2c4] flex items-center justify-center hover:border-[#023e8a] hover:bg-[#023e8a]/5 transition-all"
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
