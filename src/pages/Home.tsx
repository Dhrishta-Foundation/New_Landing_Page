import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, FlaskConical } from 'lucide-react';

export default function Home() {
  const hero = useScrollAnimation();
  const mission = useScrollAnimation();
  const cta = useScrollAnimation();

  const notifications = [
    { title: 'Independence Day Celebration', image: '/assets/images/independence_day/flag.jpg' },
    { title: 'Independence Day Celebration', image: '/assets/images/independence_day/all_staff_with_student.jpg' },
    { title: 'Student Gathering', image: '/assets/images/students_outside.jpg' },
    { title: 'Teaching Sessions', image: '/assets/images/class_with_faculty.jpg' },
    { title: 'Laboratory Training', image: '/assets/images/lab_with_student.jpg' },
    { title: 'Yoga Training', image: '/assets/images/DSC01368.jpg' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <div
          ref={hero.ref}
          className={`relative z-10 text-center px-4 transition-all duration-1000 ${
            hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-accent">Dhrishta</span> Educational and Research Foundation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
            Pioneering Research, Driving Innovation, Transforming Communities
          </p>
        </div>
      </section>

      <section className="bg-white py-12 overflow-hidden">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Latest Updates & Achievements
          </h2>
          <div className="relative">
            <div className="flex gap-6 animate-scroll">
              {[...notifications, ...notifications].map((notif, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 bg-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <img
                    src={notif.image}
                    alt={notif.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-text-dark">{notif.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-text-dark leading-relaxed">
              Welcome to <strong>Dhrishta Educational Foundation</strong> — a Section-8 nonprofit organization dedicated to advancing knowledge through cutting-edge research, innovative technologies, and evidence-based solutions. Registered under the Companies Act, 2013, our foundation is building a robust R&D ecosystem that addresses critical challenges in education, healthcare, and community development.
            </p>
          </div>

          <div
            ref={mission.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
              mission.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <BookOpen size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Knowledge Creation
              </h3>
              <p className="text-text-dark text-center leading-relaxed">
                Establishing research centers, laboratories, and think tanks focused on pioneering solutions to educational and healthcare challenges.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Healthcare Innovation
              </h3>
              <p className="text-text-dark text-center leading-relaxed">
                Developing medical research facilities that investigate indigenous solutions and next-generation treatment approaches.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FlaskConical size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                Applied Research
              </h3>
              <p className="text-text-dark text-center leading-relaxed">
                Implementing evidence-based community programs informed by rigorous research methodologies and data analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={cta.ref}
        className={`py-20 bg-gradient-to-r from-primary to-primary/90 text-white transition-all duration-1000 ${
          cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join us in our mission to transform communities through education, research, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
