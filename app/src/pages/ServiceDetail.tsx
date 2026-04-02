import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, Smartphone, Palette, Globe, 
  Users, Briefcase, Shield, Calculator,
  ArrowLeft, Check, Sparkles, Zap, Brain,
  Award, GraduationCap, FileText, Building, Star
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import type { LucideIcon } from 'lucide-react';

const serviceData: Record<string, {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; desc: string }[];
  color: string;
  gradient: string;
  image?: string;
  isAI?: boolean;
}> = {
  'ai-training': {
    icon: Brain,
    title: 'AI Training & Development',
    subtitle: 'Transform Your Career with AI',
    description: 'Our industry-leading AI Training & Development program is designed for students and professionals who want to break into the most in-demand field in tech. With hands-on projects, expert mentors, and guaranteed career support, this is your launchpad to a thriving AI career.',
    features: [
      'Professional Certificate',
      'Internship Opportunity',
      'Placement Guarantee',
      'Letter of Recommendation',
      'Training Performance Letter',
      'Campus Selection Support'
    ],
    benefits: [
      'Industry-recognized certification',
      'Real-world project experience',
      'Direct placement opportunities',
      'Expert mentorship & guidance',
      'Career-ready skill development',
      'Networking with top companies'
    ],
    process: [
      { step: 1, title: 'Enroll', desc: 'Register for the program' },
      { step: 2, title: 'Learn', desc: 'Master AI fundamentals & advanced topics' },
      { step: 3, title: 'Build', desc: 'Work on real-world AI projects' },
      { step: 4, title: 'Certify', desc: 'Earn your professional certificate' },
      { step: 5, title: 'Launch', desc: 'Get placed with top companies' },
    ],
    color: 'from-pink to-purple-600',
    gradient: 'from-pink/40 to-purple-600/50',
    image: '/images/hero-tech.png',
    isAI: true
  },
  'web-development': {
    icon: Code,
    title: 'Web Development',
    subtitle: 'Building Digital Experiences',
    description: 'We create stunning, high-performance websites and web applications that captivate users and drive business results. Our team leverages the latest technologies to build scalable, secure, and user-friendly digital solutions.',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'CMS Integration',
      'API Development',
      'Cloud Deployment'
    ],
    benefits: [
      'Increased online visibility',
      'Better user engagement',
      'Higher conversion rates',
      'Scalable architecture',
      'Fast loading speeds',
      'SEO optimization'
    ],
    process: [
      { step: 1, title: 'Discovery', desc: 'Understanding your requirements and goals' },
      { step: 2, title: 'Design', desc: 'Creating wireframes and visual designs' },
      { step: 3, title: 'Development', desc: 'Building with clean, efficient code' },
      { step: 4, title: 'Testing', desc: 'Rigorous quality assurance' },
      { step: 5, title: 'Deployment', desc: 'Launching your solution' },
    ],
    color: 'from-pink to-rose-500',
    gradient: 'from-pink/40 to-rose-500/50',
    image: '/images/web-dev.png'
  },
  'app-development': {
    icon: Smartphone,
    title: 'App Development',
    subtitle: 'Mobile-First Solutions',
    description: 'We build native and cross-platform mobile applications that deliver exceptional user experiences. From concept to App Store, we handle every aspect of mobile app development.',
    features: [
      'iOS App Development',
      'Android App Development',
      'React Native Apps',
      'Flutter Applications',
      'App Maintenance',
      'App Store Optimization'
    ],
    benefits: [
      'Reach mobile users',
      'Enhanced brand presence',
      'Improved customer loyalty',
      'Direct communication channel',
      'Increased engagement',
      'Competitive advantage'
    ],
    process: [
      { step: 1, title: 'Strategy', desc: 'Defining app goals and features' },
      { step: 2, title: 'UX Design', desc: 'Creating intuitive user flows' },
      { step: 3, title: 'Development', desc: 'Building your application' },
      { step: 4, title: 'Testing', desc: 'Ensuring quality and performance' },
      { step: 5, title: 'Launch', desc: 'Deploying to app stores' },
    ],
    color: 'from-purple-500 to-violet-500',
    gradient: 'from-purple-500/50 to-violet-500/50',
    image: '/images/app-dev.png'
  },
  'ui-ux-design': {
    icon: Palette,
    title: 'UI/UX Design',
    subtitle: 'Design That Converts',
    description: 'We create beautiful, intuitive interfaces that users love. Our design process is rooted in research and focused on delivering experiences that drive engagement and conversions.',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Design Systems',
      'Usability Testing'
    ],
    benefits: [
      'Improved user satisfaction',
      'Higher conversion rates',
      'Reduced bounce rates',
      'Stronger brand identity',
      'Competitive differentiation',
      'Lower support costs'
    ],
    process: [
      { step: 1, title: 'Research', desc: 'Understanding user needs' },
      { step: 2, title: 'Ideation', desc: 'Exploring design concepts' },
      { step: 3, title: 'Design', desc: 'Creating visual solutions' },
      { step: 4, title: 'Prototype', desc: 'Building interactive models' },
      { step: 5, title: 'Test', desc: 'Validating with users' },
    ],
    color: 'from-cyan-500 to-blue-500',
    gradient: 'from-cyan-500/50 to-blue-500/50',
    image: '/images/ui-ux.png'
  },
  'digital-marketing': {
    icon: Globe,
    title: 'Digital Marketing',
    subtitle: 'Grow Your Online Presence',
    description: 'We develop and execute data-driven marketing strategies that increase visibility, drive qualified traffic, and convert visitors into loyal customers.',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'PPC Campaigns',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    benefits: [
      'Increased brand awareness',
      'Higher search rankings',
      'More qualified leads',
      'Better ROI',
      'Measurable results',
      'Competitive edge'
    ],
    process: [
      { step: 1, title: 'Audit', desc: 'Analyzing current performance' },
      { step: 2, title: 'Strategy', desc: 'Developing marketing plan' },
      { step: 3, title: 'Execute', desc: 'Implementing campaigns' },
      { step: 4, title: 'Optimize', desc: 'Improving performance' },
      { step: 5, title: 'Report', desc: 'Measuring success' },
    ],
    color: 'from-emerald-500 to-teal-500',
    gradient: 'from-emerald-500/50 to-teal-500/50',
    image: '/images/digital-marketing.png'
  },
  'staffing': {
    icon: Users,
    title: 'IT Staffing',
    subtitle: 'Find the Right Talent',
    description: 'We provide flexible staffing solutions to help you build high-performing technology teams. From short-term contractors to permanent placements, we connect you with top talent.',
    features: [
      'Contract Staffing',
      'Permanent Placement',
      'Team Augmentation',
      'Skill Assessment',
      'Technical Screening',
      'Onboarding Support'
    ],
    benefits: [
      'Access to top talent',
      'Reduced hiring time',
      'Flexible workforce',
      'Cost efficiency',
      'Quality candidates',
      'Industry expertise'
    ],
    process: [
      { step: 1, title: 'Requirements', desc: 'Understanding your needs' },
      { step: 2, title: 'Sourcing', desc: 'Finding candidates' },
      { step: 3, title: 'Screening', desc: 'Evaluating skills' },
      { step: 4, title: 'Interview', desc: 'Meeting candidates' },
      { step: 5, title: 'Placement', desc: 'Onboarding talent' },
    ],
    color: 'from-amber-500 to-orange-500',
    gradient: 'from-amber-500/50 to-orange-500/50',
    image: '/images/hero-tech.png'
  },
  'bpo': {
    icon: Briefcase,
    title: 'BPO Services',
    subtitle: 'Streamline Operations',
    description: 'Our business process outsourcing services help you reduce costs, improve efficiency, and focus on your core business activities.',
    features: [
      'Customer Support',
      'Data Entry',
      'Back Office',
      'Technical Support',
      'Order Processing',
      'Quality Assurance'
    ],
    benefits: [
      'Reduced operational costs',
      'Improved efficiency',
      'Scalable operations',
      '24/7 support',
      'Focus on core business',
      'Quality service'
    ],
    process: [
      { step: 1, title: 'Analysis', desc: 'Understanding processes' },
      { step: 2, title: 'Design', desc: 'Creating workflow' },
      { step: 3, title: 'Setup', desc: 'Implementing systems' },
      { step: 4, title: 'Train', desc: 'Preparing team' },
      { step: 5, title: 'Launch', desc: 'Going live' },
    ],
    color: 'from-red-500 to-pink',
    gradient: 'from-red-500/50 to-pink/50',
    image: '/images/hero-tech.png'
  },
  'insurance': {
    icon: Shield,
    title: 'Insurance Solutions',
    subtitle: 'Technology for Insurance',
    description: 'We develop specialized technology solutions for the insurance industry, helping companies modernize operations and improve customer experiences.',
    features: [
      'Policy Management',
      'Claims Processing',
      'CRM Solutions',
      'Data Analytics',
      'Portal Development',
      'Integration Services'
    ],
    benefits: [
      'Faster claim processing',
      'Improved customer service',
      'Reduced operational costs',
      'Better data insights',
      'Regulatory compliance',
      'Competitive advantage'
    ],
    process: [
      { step: 1, title: 'Assess', desc: 'Evaluating needs' },
      { step: 2, title: 'Plan', desc: 'Designing solution' },
      { step: 3, title: 'Build', desc: 'Developing system' },
      { step: 4, title: 'Test', desc: 'Ensuring quality' },
      { step: 5, title: 'Deploy', desc: 'Going live' },
    ],
    color: 'from-indigo-500 to-purple-500',
    gradient: 'from-indigo-500/50 to-purple-500/50',
    image: '/images/hero-tech.png'
  },
  'financial': {
    icon: Calculator,
    title: 'Financial Services',
    subtitle: 'Fintech Innovation',
    description: 'We help financial institutions navigate digital transformation with secure, compliant, and innovative technology solutions.',
    features: [
      'Fintech Solutions',
      'Payment Gateways',
      'Risk Management',
      'Compliance Systems',
      'Trading Platforms',
      'Mobile Banking'
    ],
    benefits: [
      'Enhanced security',
      'Regulatory compliance',
      'Improved efficiency',
      'Better customer experience',
      'Competitive advantage',
      'Scalable solutions'
    ],
    process: [
      { step: 1, title: 'Consult', desc: 'Understanding goals' },
      { step: 2, title: 'Design', desc: 'Creating architecture' },
      { step: 3, title: 'Develop', desc: 'Building solution' },
      { step: 4, title: 'Secure', desc: 'Implementing security' },
      { step: 5, title: 'Launch', desc: 'Deploying system' },
    ],
    color: 'from-green-500 to-emerald-500',
    gradient: 'from-green-500/50 to-emerald-500/50',
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const sectionRef = useRef<HTMLDivElement>(null);

  const service = serviceId ? serviceData[serviceId] : null;

  useEffect(() => {
    if (!service) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.detail-content',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.detail-content',
            start: 'top 80%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(160deg, #f8f3ec, #f2ece4, #faf5f7)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-[#2c2420] mb-4">Service Not Found</h1>
          <Link to="/services" className="text-pink hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  // Premium AI Training & Development Page
  if (service.isAI) {
    return (
      <main ref={sectionRef} className="relative pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #f8f3ec, #f2ece4, #faf5f7)' }} />
          <motion.div
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[200px] bg-gradient-to-br from-pink/15 to-purple-500/15"
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[180px] bg-gradient-to-br from-cyan-400/10 to-purple-500/10"
            animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, delay: 3 }}
          />

          <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Link to="/services" className="inline-flex items-center gap-2 text-[#7a6e64] hover:text-pink transition-colors mb-8">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-body">Back to Services</span>
              </Link>
            </motion.div>

            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 border border-pink/20 mb-6">
                <Star className="w-4 h-4 text-pink" />
                <span className="text-sm font-body font-semibold text-pink tracking-wide uppercase">Featured Career Program</span>
              </div>

              <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-display font-black text-[#2c2420] leading-none tracking-tighter">
                AI TRAINING <span style={{ background: 'linear-gradient(135deg, #ff73c3, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>&amp;</span> DEVELOPMENT
              </h1>

              <motion.p className="mt-8 text-xl text-[#7a6e64] font-body leading-relaxed max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                The most in-demand skill of the decade. Our comprehensive AI program gives you everything you need to launch a successful career — from expert training and real-world projects to professional certification and guaranteed placement support.
              </motion.p>

              <motion.div className="mt-10 flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Link to="/contact">
                  <motion.button className="px-10 py-5 bg-gradient-to-r from-pink to-purple-600 text-white font-display font-bold text-lg tracking-wide flex items-center gap-3 shadow-lg" whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(255,115,195,0.4)' }} whileTap={{ scale: 0.95 }}>
                    Start Your AI Career Now
                    <Sparkles className="w-5 h-5" />
                  </motion.button>
                </Link>
                <motion.div className="flex items-center gap-2 px-6 py-4 border-2 border-pink/30 rounded-full text-pink font-display font-bold" animate={{ borderColor: ['rgba(255,115,195,0.3)', 'rgba(255,115,195,0.6)', 'rgba(255,115,195,0.3)'] }} transition={{ duration: 2, repeat: Infinity }}>
                  Limited Seats Available
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Showcase */}
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f2ece4, #f8f3ec, #faf5f7)' }}>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink/[0.02] to-transparent" />
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span className="text-pink text-sm font-body tracking-[0.3em] uppercase" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                What You Get
              </motion.span>
              <motion.h2 className="mt-4 text-4xl md:text-6xl font-display font-black text-[#2c2420]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                EVERYTHING FOR YOUR <span className="text-pink">AI CAREER</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Award, title: 'Professional Certificate', desc: 'Earn an industry-recognized certificate that validates your AI expertise and boosts your resume.', color: 'from-pink to-rose-500' },
                { icon: Building, title: 'Internship Opportunity', desc: 'Gain real-world experience with hands-on internships at leading tech companies.', color: 'from-purple-500 to-violet-500' },
                { icon: GraduationCap, title: 'Placement Guarantee', desc: 'Our dedicated placement team ensures you land your dream job with top companies.', color: 'from-cyan-500 to-blue-500' },
                { icon: FileText, title: 'Letter of Recommendation', desc: 'Receive personalized letters of recommendation from industry experts and mentors.', color: 'from-emerald-500 to-teal-500' },
                { icon: Star, title: 'Training Performance Letter', desc: 'Official documentation of your skills, projects, and achievements throughout the program.', color: 'from-amber-500 to-orange-500' },
                { icon: Users, title: 'Campus Selection', desc: 'Direct access to campus recruitment drives with our partner companies and organizations.', color: 'from-red-500 to-pink' },
              ].map((item, index) => (
                <motion.div key={index} className="group relative p-8 border border-[#ddd2c4] rounded-xl shadow-sm overflow-hidden" style={{ background: 'linear-gradient(135deg, #fefcfa, #f9f5f0)' }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.7 }} whileHover={{ y: -8, scale: 1.02 }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#2c2420] mb-3">{item.title}</h3>
                  <p className="text-[#7a6e64] font-body text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why AI / Urgency Section */}
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #f8f3ec, #f2ece4, #faf5f7)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink/[0.04] via-transparent to-purple-500/[0.04]" />
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 className="text-4xl md:text-6xl font-display font-black text-[#2c2420] mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                THE FUTURE IS <span style={{ background: 'linear-gradient(135deg, #ff73c3, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
              </motion.h2>
              <motion.p className="text-lg text-[#7a6e64] font-body mb-8 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                AI is transforming every industry. Professionals with AI skills are in massive demand, commanding premium salaries and exciting career paths. Don't miss this opportunity to future-proof your career.
              </motion.p>
              <div className="grid grid-cols-3 gap-8 mb-12">
                {[
                  { value: '75%', label: 'Job Growth in AI by 2030' },
                  { value: '₹12L+', label: 'Average AI Salary in India' },
                  { value: '1M+', label: 'AI Jobs Available Globally' },
                ].map((stat, i) => (
                  <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}>
                    <div className="text-3xl md:text-5xl font-display font-black text-pink">{stat.value}</div>
                    <div className="mt-2 text-xs text-[#7a6e64] font-body">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <Link to="/contact">
                <motion.button className="px-12 py-6 bg-gradient-to-r from-pink to-purple-600 text-white font-display font-bold text-xl tracking-wide shadow-lg" whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(255,115,195,0.4)' }} whileTap={{ scale: 0.95 }}>
                  Start Your AI Career Now
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8f3ec, #f2ece4)' }}>
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[200px] bg-gradient-to-t from-purple-200/[0.04] to-transparent rounded-full blur-[80px]" />
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span className="text-pink text-sm font-body tracking-[0.3em] uppercase" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                Your Journey
              </motion.span>
              <motion.h2 className="mt-4 text-4xl md:text-5xl font-display font-black text-[#2c2420]" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                FROM LEARNING TO <span className="text-pink">PLACEMENT</span>
              </motion.h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {service.process.map((step, index) => (
                <motion.div key={index} className="relative" initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.15, type: 'spring' }} whileHover={{ y: -10, scale: 1.05 }}>
                  <div className="p-6 border border-[#ddd2c4] h-full group hover:border-pink/50 transition-colors duration-300 shadow-sm rounded-lg" style={{ background: 'linear-gradient(135deg, #fefcfa, #f9f5f0)' }}>
                    <motion.div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink to-purple-600 flex items-center justify-center mb-4" whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                      <span className="text-white font-display font-bold">{step.step}</span>
                    </motion.div>
                    <h3 className="text-lg font-display font-bold text-[#2c2420] mb-2 group-hover:text-pink transition-colors">{step.title}</h3>
                    <p className="text-[#7a6e64] font-body text-sm">{step.desc}</p>
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-[#e5ddd4]" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #f8f3ec, #f2ece4, #faf5f7)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink/[0.06] via-transparent to-purple-500/[0.06]" />
          <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 className="text-4xl md:text-5xl font-display font-black text-[#2c2420] mb-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                DON'T WAIT. <span className="text-pink">ENROLL TODAY.</span>
              </motion.h2>
              <motion.p className="text-lg text-[#7a6e64] font-body mb-10 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                Seats are filling fast. Take the first step towards a rewarding AI career with professional certification, guaranteed placement, and industry mentorship.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <Link to="/contact">
                  <motion.button className="px-12 py-6 bg-gradient-to-r from-pink to-purple-600 text-white font-display font-bold text-xl tracking-wide flex items-center gap-3 mx-auto shadow-lg" whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(255,115,195,0.4)' }} whileTap={{ scale: 0.95 }}>
                    Apply Now — Limited Seats
                    <Sparkles className="w-6 h-6" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Regular Service Detail Page (Light Theme)
  return (
    <main ref={sectionRef} className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image || '/images/hero-tech.png'} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        {/* Soft Gradient Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 z-0`} />
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, rgba(250,248,245,0.92), rgba(245,240,235,0.92))' }} />
        
        {/* Animated elements */}
        <motion.div
          className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[150px] bg-gradient-to-br ${service.color} opacity-10`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-[#7a6e64] hover:text-pink transition-colors mb-8">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-body">Back to Services</span>
            </Link>
          </motion.div>

          <div className="max-w-4xl">
              {/* Icon */}
              <motion.div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8`}
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>
            
            <motion.span 
              className="text-pink text-sm font-body tracking-[0.3em] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {service.subtitle}
            </motion.span>
            
            <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl font-display font-black text-[#2c2420] leading-none tracking-tighter">
              {service.title.toUpperCase()}
            </h1>
            
            <motion.p 
              className="mt-8 text-xl text-[#7a6e64] font-body leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {service.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-pink text-white font-display font-bold tracking-wide flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GET STARTED
                  <Sparkles className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f2ece4, #f8f3ec, #faf5f7)' }}>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-pink/[0.03] to-transparent rounded-full blur-[100px]" />
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <div className="detail-content">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2c2420] mb-8">
                WHAT WE <span className="text-pink">OFFER</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/80 border border-[#ddd2c4] group"
                    whileHover={{ borderColor: 'rgba(255,115,195,0.5)', x: 10, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.3 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Check className={`w-5 h-5 flex-shrink-0 bg-gradient-to-br ${service.color} rounded p-0.5 text-white`} />
                    </motion.div>
                    <span className="text-[#7a6e64] font-body text-sm group-hover:text-[#2c2420] transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="detail-content">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2c2420] mb-8">
                KEY <span className="text-pink">BENEFITS</span>
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#7a6e64] font-body">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24" style={{ background: '#f8f3ec' }}>
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="text-pink text-sm font-body tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.span>
            <motion.h2 
              className="mt-4 text-4xl md:text-5xl font-display font-black text-[#2c2420]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              HOW WE <span className="text-pink">WORK</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: 'spring' }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="p-6 bg-white/80 border border-[#ddd2c4] h-full group hover:border-pink/50 transition-colors duration-300 shadow-sm">
                  <motion.div 
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-display font-bold">{step.step}</span>
                  </motion.div>
                  <h3 className="text-lg font-display font-bold text-[#2c2420] mb-2 group-hover:text-pink transition-colors">{step.title}</h3>
                  <p className="text-[#7a6e64] font-body text-sm">{step.desc}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-[#e5ddd4]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8f3ec, #faf5f7)' }}>
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-black text-[#2c2420] mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              READY TO <span className="text-pink">GET STARTED?</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-[#7a6e64] font-body mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Let&apos;s discuss how our {service.title} services can help transform your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/contact">
                <motion.button
                  className="px-10 py-5 bg-pink text-white font-display font-bold text-lg tracking-wide"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CONTACT US
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;


