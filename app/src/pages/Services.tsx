import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { 
  Code, Smartphone, Palette, Globe, 
  Users, Briefcase, Calculator, Shield,
  ArrowRight, Check, Star, Brain
} from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    icon: LucideIcon;
    title: string;
    subtitle?: string;
    description: string;
    features: string[];
    color: string;
    featured?: boolean;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  if (service.featured) {
    return (
      <Link to={`/services/${service.id}`}>
        <div className="group relative cursor-pointer overflow-hidden border-2 border-[#e11d48]/30 hover:border-[#e11d48]/60 transition-colors duration-300">
          <div className="relative p-10 md:p-12 flex flex-col md:flex-row gap-8 items-center" style={{ background: '#ffffff' }}>
            {/* Left Content */}
            <div className="flex-1">
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              {service.subtitle && (
                <p className="text-[#e11d48] text-xs font-body tracking-[0.2em] uppercase mb-2">{service.subtitle}</p>
              )}

              <h3 className="text-2xl md:text-3xl font-display font-black text-[#4a4a4a] mb-4 group-hover:text-[#e11d48] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#6b7280] font-body leading-relaxed mb-8 max-w-xl">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#6b7280]">
                    <Check className="w-4 h-4 text-[#e11d48]" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[#e11d48] font-body font-semibold">
                <span>Explore Program</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#e11d48]/15 to-rose-500/15 flex items-center justify-center">
                <service.icon className="w-20 h-20 text-[#e11d48]/50" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/services/${service.id}`}>
      <div className="group relative h-full cursor-pointer overflow-hidden border border-gray-100">
        <div className="relative p-8 h-full flex flex-col" style={{ background: '#ffffff' }}>
          {/* Icon */}
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
            <service.icon className="w-5 h-5 text-white" />
          </div>

          {/* Content */}
              <h3 className="text-xl font-display font-bold text-[#4a4a4a] mb-3 group-hover:text-[#e11d48] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-[#6b7280] font-body text-sm mb-6 flex-grow">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#6b7280]">
                <Check className="w-3.5 h-3.5 text-[#e11d48] flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2 text-[#e11d48]/60 group-hover:text-[#e11d48] transition-all duration-300">
            <span className="text-xs font-body font-medium">Explore</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Services = () => {
  const services = [
    {
      id: 'ai-training',
      icon: Brain,
      title: 'AI Training & Development',
      subtitle: 'Transform Your Career',
      description: 'Industry-leading AI training program with professional certification, internship opportunities, and real-world project experience.',
      features: ['Professional Certificate', 'Internship Opportunity', 'Placement Assistance', 'Letter of Recommendation'],
      color: 'from-rose-500 to-rose-700',
      featured: true
    },
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
      features: ['React & Next.js', 'Node.js Backend', 'E-commerce Solutions', 'CMS Integration'],
      color: 'from-rose-600 to-red-600'
    },
    {
      id: 'app-development',
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
      color: 'from-red-500 to-rose-500'
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality to create engaging digital experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-red-600 to-rose-700'
    },
    {
      id: 'digital-marketing',
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions that increase visibility, drive traffic, and convert visitors into customers.',
      features: ['SEO Optimization', 'Social Media', 'Content Strategy', 'PPC Campaigns'],
      color: 'from-[#e11d48] to-[#be123c]'
    },
    {
      id: 'staffing',
      icon: Users,
      title: 'IT Staffing',
      description: 'Flexible staffing solutions to help you find the right talent for your technology projects.',
      features: ['Contract Staffing', 'Permanent Placement', 'Team Augmentation', 'Skill Assessment'],
      color: 'from-[#be123c] to-[#9f1239]'
    },
    {
      id: 'bpo',
      icon: Briefcase,
      title: 'BPO Services',
      description: 'Business process outsourcing that helps you streamline operations and reduce costs.',
      features: ['Customer Support', 'Data Entry', 'Back Office', 'Technical Support'],
      color: 'from-[#9f1239] to-[#881337]'
    },
    {
      id: 'insurance',
      icon: Shield,
      title: 'Insurance Solutions',
      description: 'Technology solutions tailored for the insurance industry to improve efficiency and customer service.',
      features: ['Policy Management', 'Claims Processing', 'CRM Solutions', 'Data Analytics'],
      color: 'from-rose-500 to-rose-700'
    },
    {
      id: 'financial',
      icon: Calculator,
      title: 'Financial Services',
      description: 'Digital transformation solutions for financial institutions to stay competitive in the modern market.',
      features: ['Fintech Solutions', 'Payment Gateways', 'Risk Management', 'Compliance'],
      color: 'from-red-600 to-rose-600'
    }
  ];

  return (
    <main className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#fcfdff' }}>
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl">
            <motion.span 
              className="text-[#e11d48] text-sm font-body tracking-[0.3em] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              What We Offer
            </motion.span>
            
            <motion.h1 
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#4a4a4a] leading-none tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              OUR{' '}
              <span style={{
                background: 'linear-gradient(135deg, #e11d48, #be123c, #9f1239)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                SERVICES
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-[#6b7280] font-body leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive digital solutions tailored to your business needs. 
              From concept to deployment, we&apos;ve got you covered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#f8f9fa' }}>
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={service.featured ? 'sm:col-span-2 lg:col-span-3' : ''}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#fcfdff' }}>
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.span 
                className="text-[#e11d48] text-sm font-body tracking-[0.3em] uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Why Choose Us
              </motion.span>
              
              <motion.h2 
                className="mt-4 text-3xl md:text-4xl font-display font-black text-[#4a4a4a] mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                THE SKY ADVANTAGE
              </motion.h2>

              <div className="space-y-6">
                {[
                  { icon: Star, title: 'Expert Team', desc: 'Skilled professionals with years of industry experience' },
                  { icon: Check, title: 'Quality Assurance', desc: 'Rigorous testing and quality control processes' },
                  { icon: Shield, title: 'Secure Solutions', desc: 'Enterprise-grade security for all our projects' },
                ].map((featureItem, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#e11d48]/20 flex items-center justify-center flex-shrink-0">
                      <featureItem.icon className="w-5 h-5 text-[#e11d48]" />
                    </div>
                    <div>
                      <h4 className="text-base font-display font-bold text-[#4a4a4a]">{featureItem.title}</h4>
                      <p className="text-[#6b7280] font-body text-sm">{featureItem.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '150+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
                { value: '8+', label: 'Years' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 border border-gray-100 text-center"
                  style={{ background: '#ffffff' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-display font-black text-[#4a4a4a] mb-1">{stat.value}</div>
                  <div className="text-xs text-[#6b7280] font-body uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
