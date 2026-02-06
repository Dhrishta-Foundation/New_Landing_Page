import { useState } from 'react';
import { X, Handshake, DollarSign, Users, Rocket, ArrowRight, ChevronRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResearchArea {
  title: string;
  image: string;
  shortItems: string[];
  details: { title: string; description: string }[];
}

export default function Research() {
  const [selectedArea, setSelectedArea] = useState<ResearchArea | null>(null);

  const researchAreas: ResearchArea[] = [
    {
      title: 'Educational Research Initiatives',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
      shortItems: [
        'Research center setup',
        'Innovative teaching methods',
        'Longitudinal studies',
        'Global research networks',
      ],
      details: [
        {
          title: 'Research Institute Development',
          description:
            'Establishing specialized research centers focused on learning sciences, educational technology, curriculum innovation, and pedagogical advancement.',
        },
        {
          title: 'Evidence-Based Training Programs',
          description:
            'Developing and testing innovative instructional methodologies through experimental workshops, longitudinal studies, and comparative educational research.',
        },
        {
          title: 'Research Network Expansion',
          description:
            'Creating collaborative research hubs and knowledge exchange platforms across India and internationally to accelerate educational innovation.',
        },
      ],
    },
    {
      title: 'Healthcare Research Projects',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
      shortItems: [
        'Clinical labs',
        'Population studies',
        'Indigenous solutions',
        'Rural health models',
      ],
      details: [
        {
          title: 'Clinical Research Infrastructure',
          description:
            'Developing research hospitals, biomedical laboratories, and clinical trial facilities focused on investigating indigenous healthcare solutions.',
        },
        {
          title: 'Population Health Studies',
          description:
            'Conducting epidemiological research, community health assessments, and healthcare delivery models with particular focus on underserved populations.',
        },
      ],
    },
    {
      title: 'Advanced Research & Development',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop',
      shortItems: [
        'Interdisciplinary research',
        'Policy analysis',
        'Research conferences',
        'Innovation forums',
      ],
      details: [
        {
          title: 'Interdisciplinary Investigations',
          description:
            'Pursuing cross-sectoral research that bridges traditional disciplines with emerging fields to address complex societal challenges.',
        },
        {
          title: 'Policy Research',
          description:
            'Conducting rigorous analysis of governance structures, market mechanisms, and regulatory frameworks to inform evidence-based policy recommendations.',
        },
        {
          title: 'Knowledge Dissemination',
          description:
            'Organizing research symposia, scientific conferences, and academic forums to stimulate intellectual exchange and research collaboration.',
        },
      ],
    },
    {
      title: 'Community-Based Research',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop',
      shortItems: [
        'Action research',
        'Community surveys',
        'Impact evaluation',
        'Grassroots innovation',
      ],
      details: [
        {
          title: 'Action Research Models',
          description:
            'Implementing iterative research cycles that combine investigation with intervention to address pressing community issues.',
        },
        {
          title: 'Impact Assessment Studies',
          description:
            'Conducting systematic evaluations of development initiatives using mixed-methods research approaches to measure outcomes and refine interventions.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-accent font-semibold tracking-wider uppercase mb-4 block">Innovation Hub</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Research Portfolio</h1>
          <p className="text-xl text-white/90 leading-relaxed font-light">
            Advancing knowledge through rigorous scientific investigation and collaborative discovery.
          </p>
        </motion.div>
      </section>

      {/* Main Research Areas */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-hard transition-all duration-300 cursor-pointer border border-border-light/50"
                onClick={() => setSelectedArea(area)}
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/10 transition-colors z-10" />
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <Search className="w-5 h-5 text-primary-dark" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {area.shortItems.map((item, idx) => (
                      <li key={idx} className="flex items-center text-text-light group-hover:text-text-dark transition-colors">
                        <ChevronRight className="w-4 h-4 text-accent mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-accent font-semibold group/btn">
                    View Research Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-24 bg-surface-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">Research Engagement</h2>
            <p className="text-lg text-text leading-relaxed">
              We foster a collaborative ecosystem where partnerships, funding, and participation converge to create meaningful impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Handshake, title: 'Partnerships', desc: 'Collaborate on critical investigative projects.' },
              { icon: DollarSign, title: 'Funding', desc: 'Support our work through grants and endowments.' },
              { icon: Users, title: 'Participation', desc: 'Join our teams as consultants or subject experts.' },
              { icon: Rocket, title: 'Application', desc: 'Translate findings into real-world interventions.' },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{card.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedArea && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedArea(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-48 relative flex-shrink-0">
                <img src={selectedArea.image} alt={selectedArea.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button
                  onClick={() => setSelectedArea(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-2 text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <h2 className="absolute bottom-6 left-8 text-3xl font-bold text-white max-w-2xl">
                  {selectedArea.title}
                </h2>
              </div>

              <div className="p-8 overflow-y-auto">
                <div className="space-y-8">
                  {selectedArea.details.map((detail, index) => (
                    <div key={index} className="bg-secondary/50 rounded-xl p-6 border border-border-light">
                      <h3 className="text-xl font-bold text-accent mb-3">{detail.title}</h3>
                      <p className="text-text-dark leading-relaxed">{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
