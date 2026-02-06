import { GraduationCap, Cog, Heart, Sprout, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Training() {
  const trainingCards = [
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      programs: [
        { name: 'Faculty Development', desc: 'Enhancing teaching effectiveness & innovation.' },
        { name: 'Modern Pedagogy', desc: 'Tools for learner-centered education.' },
        { name: 'Outcome-Based Education', desc: 'Curriculum alignment with industry needs.' },
        { name: 'Academic Leadership', desc: 'Building institutional management skills.' },
      ],
      color: "bg-blue-50 text-blue-600",
      accent: "bg-blue-600"
    },
    {
      icon: Cog,
      title: 'Industry 4.0 & Skills',
      programs: [
        { name: 'CAD/CAM & 3D Printing', desc: 'Hands-on design & manufacturing skills.' },
        { name: 'Digital Manufacturing', desc: 'Simulation & virtual modeling tools.' },
        { name: 'IoT, AI & Robotics', desc: 'Future-ready intelligent systems.' },
        { name: 'Employability Skills', desc: 'Soft skills & career readiness.' },
      ],
      color: "bg-orange-50 text-orange-600",
      accent: "bg-orange-600"
    },
    {
      icon: Heart,
      title: 'Healthcare & Public Health',
      programs: [
        { name: 'Community Health', desc: 'Basic hygiene & outreach methods.' },
        { name: 'Emergency Response', desc: 'Life-saving interventions training.' },
        { name: 'Hospital Administration', desc: 'Efficient healthcare delivery skills.' },
        { name: 'Nutrition & Wellness', desc: 'Preventive care & lifestyle education.' },
      ],
      color: "bg-rose-50 text-rose-600",
      accent: "bg-rose-600"
    },
    {
      icon: Sprout,
      title: 'Community Development',
      programs: [
        { name: 'Rural Livelihoods', desc: 'Vocational skills for income generation.' },
        { name: 'Women Empowerment', desc: 'Leadership & SHG strengthening.' },
        { name: 'Youth Entrepreneurship', desc: 'Idea to business guidance.' },
        { name: 'Digital Literacy', desc: 'Banking & digital transaction skills.' },
      ],
      color: "bg-emerald-50 text-emerald-600",
      accent: "bg-emerald-600"
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/DSC01341.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-accent font-semibold tracking-wider uppercase mb-4 block">Capacity Building</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Training Philosophy</h1>
          <p className="text-xl text-white/90 leading-relaxed font-light">
            Building Skills. Empowering Communities. Shaping Futures through transformative education.
          </p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-primary-dark mb-6">Bridging the Skills Gap</h2>
            <p className="text-lg text-text leading-relaxed text-left md:text-center">
              Dhrishta Educational Foundation is committed to fostering human capital development across India. As a Section-8 nonprofit organization, we believe that training is a transformative tool that empowers individuals, strengthens communities, and accelerates national development. Our programs are meticulously designed to cater to students, professionals, educators, healthcare workers, and community leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Portfolio */}
      <section className="py-24 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark">Our Training Portfolio</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark mb-2">{card.title}</h3>
                      <div className={`h-1 w-12 ${card.accent} rounded-full`} />
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {card.programs.map((program, idx) => (
                      <div key={idx} className="group/item">
                        <h4 className="text-lg font-bold text-primary-dark group-hover/item:text-accent transition-colors mb-1">
                          {program.name}
                        </h4>
                        <p className="text-text-light text-sm leading-relaxed">
                          {program.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/pattern.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Training Delivery & Approach</h2>
              <div className="space-y-6">
                {[
                  { title: "Blended Learning", desc: "A mix of theory, practice, and digital engagement ensures effective outcomes." },
                  { title: "Expert-Led Sessions", desc: "Delivered by experienced professionals and subject matter experts." },
                  { title: "Certifications", desc: "Joint certifications and digital credentials for career growth." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-accent">Strategic Collaborations</h3>
              <p className="text-lg leading-relaxed mb-8 text-white/90">
                Dhrishta collaborates with government agencies, academic institutions, corporates, and international bodies to ensure high-impact training.
              </p>
              <ul className="space-y-4">
                {[
                  "Joint Certifications",
                  "Industry-Endorsed Badges",
                  "Internship Linkages",
                  "Placement Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full btn-primary flex items-center justify-center gap-2">
                Explore Partnerships <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
