import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, FlaskConical, ArrowRight, Calendar, Users, Award } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const notifications = [
    {
      title: 'Independence Day Celebration',
      date: 'Aug 15, 2023',
      image: '/assets/images/independence_day/flag.jpg',
      category: 'Event'
    },
    {
      title: 'All Staff Gathering',
      date: 'Aug 15, 2023',
      image: '/assets/images/independence_day/all_staff_with_student.jpg',
      category: 'Community'
    },
    {
      title: 'Student Assembly',
      date: 'Sep 05, 2023',
      image: '/assets/images/students_outside.jpg',
      category: 'Education'
    },
    {
      title: 'Faculty Session',
      date: 'Oct 02, 2023',
      image: '/assets/images/class_with_faculty.jpg',
      category: 'Training'
    },
    {
      title: 'Lab Training',
      date: 'Nov 14, 2023',
      image: '/assets/images/lab_with_student.jpg',
      category: 'Research'
    },
    {
      title: 'Yoga & Wellness',
      date: 'Dec 21, 2023',
      image: '/assets/images/DSC01368.jpg',
      category: 'Health'
    },
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Knowledge Creation",
      description: "Establishing research centers and think tanks to pioneer solutions for educational challenges.",
      color: "bg-blue-50"
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "Healthcare Innovation",
      description: "Developing indigenous solutions and next-generation treatment approaches through medical research.",
      color: "bg-rose-50"
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-emerald-500" />,
      title: "Applied Research",
      description: "Implementing evidence-based community programs informed by rigorous data analytics.",
      color: "bg-emerald-50"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-surface overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 via-primary-dark/50 to-surface" />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container-custom text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/20 text-sm font-semibold mb-6 backdrop-blur-sm">
              Innovating for a Better Tomorrow
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Dhrishta</span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-accent font-light">Foundation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Pioneering Research, Driving Innovation, and Transforming Communities through evidence-based solutions in education and healthcare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/about" className="btn-primary flex items-center justify-center gap-2 group">
              Discover Our Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Partner With Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll-indicator" />
          </div>
        </motion.div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24 bg-surface relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-primary-dark">Latest Updates</h2>
              <p className="text-text-light text-lg max-w-xl">
                Stay informed about our latest activities, research breakthroughs, and community engagements.
              </p>
            </div>
            <Link to="/gallery" className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border-light/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-dark z-10 shadow-sm">
                    {item.category}
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold flex items-center gap-2">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-text-light mb-3">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Impact Section */}
      <section className="py-24 bg-surface-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-primary-dark">
              Transforming Lives Through Innovation
            </h2>
            <p className="text-lg text-text-light leading-relaxed">
              Dhrishta Educational Foundation is a Section-8 nonprofit dedicated to advancing knowledge.
              We are building a robust R&D ecosystem to address critical challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${feature.color} p-8 rounded-3xl border border-transparent hover:border-accent/10 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="bg-white p-4 rounded-2xl w-fit shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-text leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 pt-6 border-t border-black/5 flex items-center gap-2 text-primary font-semibold text-sm cursor-pointer hover:text-accent transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Research Papers", value: "50+", icon: <BookOpen className="w-6 h-6" /> },
              { label: "Active Projects", value: "12", icon: <FlaskConical className="w-6 h-6" /> },
              { label: "Community Members", value: "5000+", icon: <Users className="w-6 h-6" /> },
              { label: "Awards Won", value: "8", icon: <Award className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-center mb-4 text-accent">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-accent to-accent-hover rounded-3xl p-1 md:p-12 relative overflow-hidden shadow-2xl shadow-accent/30">
            <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10" />
            <div className="bg-white rounded-[20px] p-8 md:p-16 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-text-light max-w-2xl mx-auto mb-10">
                Join us in our mission to transform communities through education, research, and innovation. Every contribution counts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-primary text-lg px-10 py-4 shadow-xl shadow-accent/20"
                >
                  Get Involved Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
