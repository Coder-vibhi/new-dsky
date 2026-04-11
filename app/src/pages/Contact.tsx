import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, Phone, MapPin, Send, Check, AlertCircle,
  Linkedin, Twitter, Instagram, Facebook
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setSubmitMessage(data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Failed to submit. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@dskyventures.com',
      href: 'mailto:info@dskyventures.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Tech Park, Bangalore, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const services = [
    'AI Training & Development',
    'Web Development',
    'App Development',
    'UI/UX Design',
    'Digital Marketing',
    'IT Staffing',
    'BPO Services',
    'Insurance Solutions',
    'Financial Services',
    'Other'
  ];

  return (
    <main ref={sectionRef} className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0" style={{ background: '#fcfdff' }} />
        
        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#e11d48]/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-4xl">
            <motion.span 
              className="text-[#e11d48] text-sm font-body tracking-[0.3em] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Get In Touch
            </motion.span>
            
              <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-display font-black text-[#4a4a4a] leading-none tracking-tighter">
              LET&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] via-rose-500 to-red-600">TALK</span>
            </h1>
            
            <motion.p 
              className="mt-8 text-xl text-[#6b7280] font-body leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Have a project in mind? We&apos;d love to hear from you. Send us a message 
              and we&apos;ll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#f8f9fa' }}>
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-gradient-to-b from-[#e11d48]/[0.03] to-transparent rounded-full blur-[100px]" />
        <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div className="contact-content">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#4a4a4a] mb-8">
                CONTACT <span className="text-[#e11d48]">INFORMATION</span>
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 border border-gray-100 hover:border-[#e11d48]/50 transition-all duration-300 group shadow-sm" style={{ background: '#ffffff' }}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, type: 'spring' }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-[#e11d48]/20 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6 text-[#e11d48]" />
                    </motion.div>
                    <div>
                      <p className="text-[#6b7280] text-sm font-body">{item.label}</p>
                      <p className="text-[#4a4a4a] font-body group-hover:text-[#e11d48] transition-colors duration-300">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-display font-bold text-[#4a4a4a] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                       className="w-12 h-12 border border-gray-100 flex items-center justify-center hover:bg-[#e11d48] hover:border-[#e11d48] transition-all shadow-sm group" style={{ background: '#ffffff' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="contact-content">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#4a4a4a] mb-8">
                SEND A <span className="text-[#e11d48]">MESSAGE</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#6b7280] font-body text-sm mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-100 text-[#4a4a4a] font-body focus:border-[#e11d48] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6b7280] font-body text-sm mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/80 border border-gray-100 text-[#4a4a4a] font-body focus:border-[#e11d48] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#6b7280] font-body text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-100 text-[#4a4a4a] font-body focus:border-[#e11d48] focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6b7280] font-body text-sm mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/80 border border-gray-100 text-[#4a4a4a] font-body focus:border-[#e11d48] focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                    <label className="block text-[#6b7280] font-body text-sm mb-2">Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-100 text-[#4a4a4a] font-body focus:border-[#e11d48] focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-white">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-[#6b7280] font-body text-sm mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/80 border border-gray-100 text-[#4a4a4a] font-body focus:border-[#e11d48] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 border border-[#e11d48] text-[#e11d48] font-display tracking-wide flex items-center justify-center gap-3 hover:bg-[#e11d48] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm font-bold"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="p-4 bg-green-500/20 border border-green-500/50 flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-400 font-body text-sm">{submitMessage}</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="p-4 bg-red-500/20 border border-red-500/50 flex items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-400 font-body text-sm">{submitMessage}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-0">
        <div className="w-full h-[400px] relative overflow-hidden">
          {/* Placeholder map */}
          <div className="absolute inset-0" style={{ background: '#fcfdff' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#e11d48] mx-auto mb-4" />
              <p className="text-[#4a4a4a] font-display font-bold text-xl">The Sky Venture</p>
              <p className="text-[#6b7280] font-body">123 Tech Park, Bangalore, India</p>
            </div>
          </div>
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(rgba(26,26,26,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26,26,26,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </section>
    </main>
  );
};

export default Contact;


