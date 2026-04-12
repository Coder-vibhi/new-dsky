import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, Award, Users,
  Clock, Heart, Sparkles
} from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="group relative h-full cursor-pointer overflow-hidden border border-gray-100">
      <div className="relative p-8 h-full flex flex-col" style={{ background: '#ffffff' }}>
        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote Icon */}
        <div className="mb-4">
          <Sparkles className="w-8 h-8 text-[#e11d48]/30" />
        </div>

        {/* Quote */}
        <p className="text-[#6b7280] font-body text-sm mb-6 flex-grow leading-relaxed">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-base font-display font-bold text-[#4a4a4a]">{testimonial.name}</h4>
            <p className="text-xs text-[#6b7280]">{testimonial.role}, {testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      quote: 'The Sky transformed our digital presence with stunning animations and a website that truly represents our brand. Their attention to detail is exceptional and they delivered ahead of schedule.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder',
      company: 'GreenWave Eco',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'Working with The Sky was a game-changer for our startup. They delivered a beautiful, functional website that helped us attract investors and customers alike.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'The team at The Sky understood our vision perfectly. Our new website has increased our conversion rate by 40% within just two months of launch.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CTO',
      company: 'InnovateLabs',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      quote: 'Professional, creative, and technically skilled. The Sky delivered a seamless user experience that has set us apart from our competitors.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Amanda Foster',
      role: 'Owner',
      company: 'Bloom Bakery',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      quote: 'Our online orders tripled after The Sky rebuilt our website. The animations and layout perfectly showcase our products and brand story.',
      rating: 5,
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Director',
      company: 'Apex Fitness',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: 'The Sky exceeded all our expectations. The website they created perfectly captures the energy and motivation we bring to our fitness community.',
      rating: 5,
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Dedicated Support',
      desc: '24/7 dedicated support team ready to assist you with any queries or issues'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      desc: 'Multiple awards and recognition for excellence in digital solutions'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      desc: 'Committed to delivering projects on schedule, every single time'
    },
    {
      icon: Heart,
      title: 'Client-First Approach',
      desc: 'Your satisfaction is our priority. We listen, adapt, and deliver'
    },
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
              Client Stories
            </motion.span>

            <motion.h1
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#4a4a4a] leading-none tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              WHAT OUR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e11d48] via-rose-500 to-red-600">
                CLIENTS SAY
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg text-[#6b7280] font-body leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Don't just take our word for it. Hear from our satisfied clients about
              their experience working with The Sky Venture.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#f8f9fa' }}>
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
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
                THE SKY DIFFERENCE
              </motion.h2>

              <div className="space-y-6">
                {whyChooseUs.map((featureItem, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#e11d48]/20 flex items-center justify-center flex-shrink-0">
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
                { value: '200+', label: 'Happy Clients' },
                { value: '150+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' },
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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#f8f9fa' }}>
        <div className="w-full px-6 md:px-12 lg:px-20">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-black text-[#4a4a4a] mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-[#6b7280] font-body mb-8">
              Let's create something amazing together. Get in touch with us today
              and see why hundreds of clients trust The Sky for their digital needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#e11d48] text-white font-body font-semibold rounded-lg hover:bg-rose-700 transition-colors duration-300 shadow-lg"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
