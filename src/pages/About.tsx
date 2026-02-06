import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-accent font-semibold tracking-wider uppercase mb-4 block">Who We Are</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-white/90 leading-relaxed font-light">
            Driving societal advancement through scientific inquiry, evidence-based research, and ethical innovation.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-primary-dark mb-6">Research Foundation</h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-8" />
              <p className="text-lg text-text leading-relaxed mb-6">
                Dhrishta Educational Foundation was established with the belief that scientific inquiry and evidence-based approaches drive societal advancement. Our research agenda is anchored in methodological rigor, data integrity, and ethical research practices.
              </p>
              <p className="text-lg text-text leading-relaxed mb-8">
                As outlined in our Memorandum of Association, we aim to establish research institutes, conduct investigations, and translate findings into practical solutions across India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Methodological Rigor",
                  "Data Integrity",
                  "Ethical Practices",
                  "Societal Impact"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-primary-dark">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl -z-10 rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
                alt="Research Team"
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs border-l-4 border-accent">
                <p className="text-primary-dark font-bold text-lg mb-1">Section-8 Nonprofit</p>
                <p className="text-text-light text-sm">Registered under Companies Act, 2013</p>
              </div>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-white" />,
                title: "Knowledge Generation",
                desc: "Establish and manage cutting-edge research centers focused on fundamental and applied research across disciplines.",
                bg: "bg-blue-600"
              },
              {
                icon: <Target className="w-8 h-8 text-white" />,
                title: "Healthcare Innovation",
                desc: "Create research-driven healthcare models and conduct clinical investigations for improved delivery.",
                bg: "bg-emerald-600"
              },
              {
                icon: <Award className="w-8 h-8 text-white" />,
                title: "Social Impact",
                desc: "Implement data-driven community development programs based on rigorous methodologies and analysis.",
                bg: "bg-indigo-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 bg-white"
              >
                <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                  <div className={`${item.bg} text-transparent bg-clip-text`}>{item.icon}</div>
                </div>
                <div className="p-8">
                  <div className={`${item.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">{item.title}</h3>
                  <p className="text-text leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className={`h-1.5 w-full ${item.bg}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-20 bg-surface-alt">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-primary-dark mb-6">Our Research Leadership</h2>
            <p className="text-lg text-text leading-relaxed mb-8">
              Our directors bring exceptional credentials and innovation expertise, contributing to scientific discovery, technological advancements, international collaborations, and digital innovation.
            </p>
            <a href="/directors" className="btn-secondary inline-flex items-center gap-2">
              Meet Our Directors <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
