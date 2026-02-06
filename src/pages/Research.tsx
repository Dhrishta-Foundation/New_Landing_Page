import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X, Handshake, DollarSign, Users, Rocket } from 'lucide-react';

interface ResearchArea {
  title: string;
  shortItems: string[];
  details: { title: string; description: string }[];
}

export default function Research() {
  const header = useScrollAnimation();
  const areas = useScrollAnimation();
  const engagement = useScrollAnimation();
  const [selectedArea, setSelectedArea] = useState<ResearchArea | null>(null);

  const researchAreas: ResearchArea[] = [
    {
      title: 'Educational Research Initiatives',
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

  const engagementCards = [
    {
      icon: Handshake,
      title: 'Research Partnerships',
      description:
        'Collaborate on research projects that investigate critical questions in education, healthcare, and social development. We welcome academic partnerships, industry research collaborations, and technology co-development initiatives.',
    },
    {
      icon: DollarSign,
      title: 'Research Funding',
      description:
        'Support our investigative work through research grants, endowments, and project-specific funding. Your contributions enable laboratory establishment, field studies, and the development of research-based interventions.',
    },
    {
      icon: Users,
      title: 'Research Participation',
      description:
        'Share your expertise by joining our research teams as consultants, methodology advisors, or subject matter experts. Your knowledge can strengthen our research design and implementation.',
    },
    {
      icon: Rocket,
      title: 'Research Application',
      description:
        'Help translate our research findings into practice through pilot programs, technology transfer initiatives, and evidence-based interventions.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-black/20" />
        <div
          ref={header.ref}
          className={`relative z-10 text-center px-4 transition-all duration-1000 ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Research Portfolio</h1>
          <p className="text-xl text-white/90">Advancing Knowledge Through Scientific Investigation</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div
            ref={areas.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
              areas.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedArea(area)}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.shortItems.map((item, idx) => (
                    <li key={idx} className="flex items-center text-text-dark">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-accent font-semibold hover:text-primary transition-colors">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Research Engagement
          </h2>
          <div
            ref={engagement.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
              engagement.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {engagementCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
                  <p className="text-text-dark text-sm leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedArea && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArea(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">{selectedArea.title}</h2>
              <div className="space-y-6">
                {selectedArea.details.map((detail, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-accent mb-2">{detail.title}</h3>
                    <p className="text-text-dark leading-relaxed">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
