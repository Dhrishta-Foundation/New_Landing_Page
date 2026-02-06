import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

export default function About() {
  const header = useScrollAnimation();
  const content1 = useScrollAnimation();
  const content2 = useScrollAnimation();
  const mission = useScrollAnimation();

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
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90">Our Research Journey, Vision, and Governance</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div
            ref={content1.ref}
            className={`space-y-12 transition-all duration-1000 ${
              content1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Research Foundation</h2>
              <p className="text-lg text-text-dark leading-relaxed">
                Dhrishta Educational Foundation was established with the belief that scientific inquiry and evidence-based approaches drive societal advancement. Our research agenda is anchored in methodological rigor, data integrity, and ethical research practices. As outlined in our Memorandum of Association, we aim to establish research institutes, conduct investigations, and translate findings into practical solutions across India.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Research Leadership</h2>
              <p className="text-lg text-text-dark leading-relaxed">
                Our directors bring exceptional credentials and innovation expertise, contributing to scientific discovery, technological advancements, international collaborations, and digital innovation.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Legal Status</h2>
              <p className="text-lg text-text-dark leading-relaxed">
                Registered as a Section-8 nonprofit organization under the Companies Act, 2013, with our office in Tamil Nadu, we ensure that our research operations adhere to the highest standards of scientific integrity and ethics.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Research Vision</h2>
              <p className="text-lg text-text-dark leading-relaxed">
                We aspire to become a premier R&D hub, generating transformative knowledge, developing innovative solutions, and building capacity for scientific investigation in the education and healthcare sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Our R&D Mission</h2>
          <div
            ref={mission.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
              mission.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Lightbulb size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Knowledge Generation
              </h3>
              <p className="text-text-dark text-center leading-relaxed">
                Establish and manage cutting-edge research centers focused on fundamental and applied research across disciplines.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Healthcare Innovation
              </h3>
              <p className="text-text-dark text-center leading-relaxed">
                Create research-driven healthcare models and conduct clinical investigations for improved delivery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Evidence-Based Social Impact
              </h3>
              <p className="text-text-dark text-center leading-relaxed">
                Implement data-driven community development programs based on rigorous methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
