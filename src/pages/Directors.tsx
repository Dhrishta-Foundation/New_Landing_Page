import { useState } from 'react';
import { X, Linkedin, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Director {
  name: string;
  image: string;
  title: string;
  label: string;
  shortDescription: string;
  fullDescription: string;
  socials?: {
    linkedin?: string;
    email?: string;
  };
}

export default function Directors() {
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  const directors: Director[] = [
    {
      name: 'Dr. K. Bhaskar Reddy',
      image: '/assets/images/director/bhaskar_reddy.jpeg',
      title: 'Academic Leader & FSSAI Member',
      label: 'Board of Directors',
      shortDescription:
        'Dean at Apollo University with over 153 publications. Led projects worth ₹200 Lakhs and brings extensive academic expertise.',
      fullDescription:
        "Dr. K. Bhaskar Reddy leads our pharmaceutical and health sciences research with distinguished credentials as Professor & Dean at Apollo Institute of Pharmaceutical Sciences and Dean (in-charge) of the School of Health Sciences at The Apollo University.\n\nHis research portfolio includes over 153 peer-reviewed publications and multiple patents that have advanced pharmaceutical knowledge. As principal investigator for seven major research projects valued at ₹200 Lakhs and funded by prestigious bodies such as DST and ICMR, he has established himself as a significant contributor to India's research landscape.\n\nHis multidisciplinary research expertise is recognized through his membership on the Scientific Panel/Scientific Expert Committee on Functional Foods, Nutraceuticals, and Dietetic Products under FSSAI. His research leadership extends to serving as Dean - R&D at Sri Venkateswara Group of Educational Institutions, where he established research centers and developed partnerships with international universities.",
      socials: {
        linkedin: "#",
        email: "bhaskar.reddy@dhrishta.org"
      }
    },
    {
      name: 'Mr. A. Rukesh Reddy',
      image: '/assets/images/director/rukesh.jpeg',
      title: 'Engineering Research & Innovation Lead',
      label: 'Board of Directors',
      shortDescription:
        'Mechanical Engineering professional, SPOC for Dassault. Actively involved with Skill Development and mentoring initiatives.',
      fullDescription:
        "Mr. A. Rukesh Reddy directs our engineering research and innovation initiatives, bringing specialized expertise in Mechanical Engineering, advanced manufacturing technologies, and emerging fields like 3D Printing. Currently pursuing doctoral research at Pacific University, Udaipur.\n\nHis leadership in technology research is demonstrated through his role as SPOC for Dassault Systems' 3D Experience Lab, where he has facilitated applied research in digital manufacturing technologies. His expertise in securing research grants from funding bodies such as UGC, AICTE, and DST has strengthened institutional research capacity.\n\nMr. Reddy's ongoing specialized research training in 3D Printing from the University of Illinois and Supply Chain Logistics from Rutgers University reflects his commitment to advancing research frontiers.",
      socials: {
        linkedin: "#",
        email: "rukesh.reddy@dhrishta.org"
      }
    },
    {
      name: 'Mr. Rajesh Kadati',
      image: '/assets/images/director/rajesh.jpeg',
      title: 'Digital Innovation & Automation Expert',
      label: 'Board of Directors',
      shortDescription:
        'Senior Test Engineer at TCS with experience at Apple Inc. Expertise in DevOps and API Testing.',
      fullDescription:
        'Mr. Rajesh Kadati heads our digital innovation research with over 14 years of specialized expertise in automation technologies, software quality engineering, and DevOps methodologies. His technical research at Tata Consultancy Services (TCS) has involved developing innovative testing frameworks for global technology leaders like Apple Inc.\n\nHis research focus on API automation, mobile application testing protocols, and performance optimization has contributed significant knowledge to software quality engineering. At Dhrishta, Mr. Kadati\'s technical research informs our digital education platforms, online learning analytics, and educational technology innovations.\n\nHis expertise in automation frameworks and continuous integration methodologies drives our research in adaptive learning technologies and AI-driven assessment systems.',
      socials: {
        linkedin: "#",
        email: "rajesh.kadati@dhrishta.org"
      }
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-accent font-semibold tracking-wider uppercase mb-4 block">Leadership</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Directors</h1>
          <p className="text-xl text-white/90 leading-relaxed font-light">
            Meet the visionary leaders driving Dhrishta Educational Foundation's  research and impact.
          </p>
        </motion.div>
      </section>

      {/* Directors Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hard transition-all duration-300 cursor-pointer border border-border-light"
                onClick={() => setSelectedDirector(director)}
              >
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-60 z-10" />
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-sm">
                      {director.label}
                    </span>
                  </div>
                </div>

                <div className="p-8 relative">
                  {/* Floating Action Button overlap */}
                  <div className="absolute -top-6 right-8 z-30 bg-white rounded-full p-3 shadow-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <ChevronRight size={24} />
                  </div>

                  <h3 className="text-2xl font-bold text-primary-dark mb-1 group-hover:text-accent transition-colors">{director.name}</h3>
                  <p className="text-sm font-semibold text-text-light mb-4 uppercase tracking-wide">{director.title}</p>
                  <p className="text-text leading-relaxed line-clamp-3">
                    {director.shortDescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Modal */}
      <AnimatePresence>
        {selectedDirector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedDirector(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDirector(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white md:text-primary-dark md:bg-gray-100 md:hover:bg-gray-200 rounded-full p-2 transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-primary-dark/20 mix-blend-multiply md:hidden" />
                <img
                  src={selectedDirector.image}
                  alt={selectedDirector.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                <div className="inline-block bg-accent/10 text-accent text-sm font-bold px-4 py-1.5 rounded-full mb-6">
                  {selectedDirector.label}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">{selectedDirector.name}</h2>
                <p className="text-xl text-text-light font-medium mb-8 border-b border-border-light pb-6">{selectedDirector.title}</p>

                <div className="prose prose-lg text-text max-w-none mb-8">
                  <p className="whitespace-pre-line leading-relaxed">
                    {selectedDirector.fullDescription}
                  </p>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border-light">
                  {selectedDirector.socials?.linkedin && (
                    <a href={selectedDirector.socials.linkedin} className="p-3 bg-gray-100 rounded-full hover:bg-[#0077b5] hover:text-white transition-all">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {selectedDirector.socials?.email && (
                    <a href={`mailto:${selectedDirector.socials.email}`} className="p-3 bg-gray-100 rounded-full hover:bg-accent hover:text-white transition-all">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
