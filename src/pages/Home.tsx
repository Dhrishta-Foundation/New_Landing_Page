
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Activity, Heart, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  '/assets/images/DSC01232.jpg',
  '/assets/images/DSC01359.jpg',
  '/assets/images/class_with_faculty.jpg',
  '/assets/images/lab_with_student.jpg',
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const notifications = [
    {
      title: "New Research Center Inauguration",
      date: "March 15, 2024",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
      desc: "Opening of our state-of-the-art biomedical research facility."
    },
    {
      title: "Annual Science Symposium",
      date: "April 02, 2024",
      category: "Events",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
      desc: "Bringing together leading minds in education and healthcare."
    },
    {
      title: "Community Health Drive",
      date: "April 10, 2024",
      category: "Outreach",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      desc: "Free health checkup camp for underserved communities."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-surface overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Slider */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-surface" />
          </motion.div>
        </AnimatePresence>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 container-custom text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-medium text-white/90">
              Welcome to Dhrishta
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Empowering Through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
              Knowledge & Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Bridging the gap between scientific inquiry and societal impact through education, healthcare, and research.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/about" className="btn-primary group flex items-center justify-center gap-2">
              Discover Our Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-3 rounded-xl font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
              Get Involved
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Skew */}
      <div className="relative -mt-20 z-20 pb-20">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary" />
            {[
              { icon: Users, count: "5000+", label: "Lives Impacted" },
              { icon: Activity, count: "50+", label: "Research Projects" },
              { icon: Calendar, count: "100+", label: "Workshops Conducted" },
              { icon: Heart, count: "25+", label: "Community Partners" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center relative group">
                  <div className="w-12 h-12 mx-auto bg-primary-light/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary-dark mb-1">{stat.count}</h3>
                  <p className="text-text-light font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Latest Updates */}
      <section className="py-24 bg-surface relative">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase mb-2 block">What's New</span>
              <h2 className="text-4xl font-bold text-primary-dark">Latest Updates</h2>
            </div>
            <Link to="/gallery" className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2 mt-4 md:mt-0">
              View All Updates <ArrowRight className="w-4 h-4" />
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
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide shadow-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-text-light mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase mb-2 block">Our Focus</span>
            <h2 className="text-4xl font-bold mb-6">Driving Positive Change</h2>
            <p className="text-xl text-white/80 font-light">
              We concentrate our efforts on three key pillars to maximize our impact on society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Knowledge Creation",
                desc: "Conducting cutting-edge research to solve real-world problems.",
                link: "/research",
                image: "/assets/images/DSC01307.jpg"
              },
              {
                title: "Capacity Building",
                desc: "Training programs to enhance skills and employability.",
                link: "/training",
                image: "/assets/images/DSC01341.jpg"
              },
              {
                title: "Social Welfare",
                desc: "Community outreach initiatives for health and well-being.",
                link: "/contact",
                image: "/assets/images/DSC01395.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.desc}
                  </p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-accent font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-accent to-accent-light rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-accent/20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
              <p className="text-xl text-white/90 mb-10 font-medium">
                Join us in our mission to transform lives through education and research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-accent px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Partner With Us
                </Link>
                <Link to="/about" className="bg-accent-dark/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-accent-dark/30 transition-all duration-300">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
