import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Cog, Heart, Sprout } from 'lucide-react';

export default function Training() {
  const header = useScrollAnimation();
  const intro = useScrollAnimation();
  const portfolio = useScrollAnimation();
  const approach = useScrollAnimation();

  const trainingCards = [
    {
      icon: GraduationCap,
      title: 'Education and Academic Excellence',
      programs: [
        {
          name: 'Faculty Development Programs (FDPs)',
          description: 'Enhancing teaching effectiveness and academic innovation among educators.',
        },
        {
          name: 'Innovative Teaching Methodologies',
          description: 'Introducing modern pedagogical tools for learner-centered education.',
        },
        {
          name: 'Curriculum Design and OBE',
          description:
            'Training faculty in outcome-based education and curriculum alignment with industry needs.',
        },
        {
          name: 'Academic Leadership and Governance',
          description:
            'Building leadership capabilities in academic planning and institutional management.',
        },
      ],
    },
    {
      icon: Cog,
      title: 'Skill Development and Industry 4.0',
      programs: [
        {
          name: 'CAD/CAM and 3D Printing',
          description: 'Offering hands-on skills in advanced design and manufacturing technologies.',
        },
        {
          name: 'Digital Manufacturing & Simulation Tools',
          description: 'Training learners in software-driven production and virtual modeling.',
        },
        {
          name: 'IoT, AI & Robotics',
          description:
            'Introducing engineering students to intelligent systems and future-ready technologies.',
        },
        {
          name: 'Employability Skills Workshops',
          description:
            'Equipping youth with soft skills, career readiness, and personal branding strategies.',
        },
      ],
    },
    {
      icon: Heart,
      title: 'Healthcare and Public Health',
      programs: [
        {
          name: 'Community Health Training',
          description: 'Educating volunteers in basic healthcare, hygiene, and outreach methods.',
        },
        {
          name: 'First Aid & Emergency Response',
          description: 'Teaching life-saving interventions for immediate care in crisis situations.',
        },
        {
          name: 'Hospital Administration',
          description:
            'Building managerial skills for efficient healthcare delivery and patient services.',
        },
        {
          name: 'Nutrition & Preventive Care',
          description: 'Promoting wellness through balanced nutrition and lifestyle education.',
        },
      ],
    },
    {
      icon: Sprout,
      title: 'Social Welfare and Community Development',
      programs: [
        {
          name: 'Rural Livelihood Training',
          description: 'Empowering rural communities with income-generating vocational skills.',
        },
        {
          name: 'Women Empowerment Programs',
          description: 'Strengthening SHGs and promoting leadership among women.',
        },
        {
          name: 'Entrepreneurship for Youth',
          description: 'Guiding aspiring entrepreneurs to develop, fund, and scale their ideas.',
        },
        {
          name: 'Financial & Digital Literacy',
          description: 'Educating communities on banking, budgeting, and digital transactions.',
        },
      ],
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
          <h1 className="text-5xl font-bold text-white mb-4">Training Philosophy</h1>
          <p className="text-xl text-white/90">
            Building Skills. Empowering Communities. Shaping Futures.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div
            ref={intro.ref}
            className={`max-w-4xl mx-auto space-y-6 transition-all duration-1000 ${
              intro.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-lg text-text-dark leading-relaxed">
              Dhrishta Educational Foundation is committed to bridging the skills gap and fostering
              human capital development across India. As a Section-8 nonprofit organization focused
              on education, healthcare, and social welfare, we believe that training is a
              transformative tool that empowers individuals, strengthens communities, and
              accelerates national development.
            </p>
            <p className="text-lg text-text-dark leading-relaxed">
              Our training programs are meticulously designed to cater to students, professionals,
              educators, healthcare workers, and community leaders—equipping them with the
              knowledge, skills, and mindset required to thrive in an ever-evolving world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Training Portfolio</h2>
          <div
            ref={portfolio.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
              portfolio.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {trainingCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{card.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {card.programs.map((program, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-semibold text-accent mb-1">{program.name}</h4>
                        <p className="text-text-dark text-sm leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div
            ref={approach.ref}
            className={`transition-all duration-1000 ${
              approach.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-bold text-primary mb-8">Training Delivery & Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-accent mb-4">Key Points</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-text-dark">
                      <strong>Blended Learning:</strong> A mix of theory, practice, and digital
                      engagement ensures effective learning outcomes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-text-dark">
                      <strong>Expert-Led Sessions:</strong> Training delivered by experienced
                      professionals and subject experts.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-text-dark">
                      <strong>Certifications & Recognition:</strong> Most programs offer joint
                      certifications and digital credentials for career growth.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Collaborations & Certifications
                </h3>
                <p className="text-text-dark mb-4">
                  Dhrishta collaborates with government agencies, academic institutions, corporates,
                  and international bodies to ensure high-impact training. Select programs offer:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-text-dark">Joint Certifications</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-text-dark">Industry-endorsed Skill Badges</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                    <span className="text-text-dark">Internship and Placement Linkages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
