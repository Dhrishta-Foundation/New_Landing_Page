import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X } from 'lucide-react';

interface Director {
  name: string;
  image: string;
  title: string;
  label: string;
  shortDescription: string;
  fullDescription: string;
}

export default function Directors() {
  const header = useScrollAnimation();
  const cards = useScrollAnimation();
  const [selectedDirector, setSelectedDirector] = useState<Director | null>(null);

  const directors: Director[] = [
    {
      name: 'Dr. K. Bhaskar Reddy',
      image: '/assets/images/director/bhaskar_reddy.jpeg',
      title: 'Academic Leader & FSSAI Member',
      label: 'Board of Directors',
      shortDescription:
        'Dean at Apollo University with over 153 publications. Led projects worth ₹200 Lakhs and brings extensive academic expertise to our foundation.',
      fullDescription:
        "Dr. K. Bhaskar Reddy leads our pharmaceutical and health sciences research with distinguished credentials as Professor & Dean at Apollo Institute of Pharmaceutical Sciences and Dean (in-charge) of the School of Health Sciences at The Apollo University. His research portfolio includes over 153 peer-reviewed publications and multiple patents that have advanced pharmaceutical knowledge. As principal investigator for seven major research projects valued at ₹200 Lakhs and funded by prestigious bodies such as the Department of Science & Technology (DST) and the Indian Council of Medical Research (ICMR), he has established himself as a significant contributor to India's research landscape. His multidisciplinary research expertise is recognized through his membership on the Scientific Panel/Scientific Expert Committee on Functional Foods, Nutraceuticals, and Dietetic Products under FSSAI, under the Ministry of Health & Family Welfare, Government of India. His research leadership extends to serving as Dean - R&D at Sri Venkateswara Group of Educational Institutions (SVGEI), where he established research centers, secured research funding, and developed research partnerships with international universities. Dr. Reddy's research excellence has been recognized with the Young Scientist Award by SERB, DST, highlighting his innovative contributions to pharmaceutical sciences. As Chief Editor of the International Journal of Advanced Biomedical and Pharmaceutical Research (IJABPR) and reviewer for multiple international journals, he plays a critical role in advancing scientific publishing and research dissemination. His interdisciplinary research vision and commitment to evidence-based healthcare innovations continue to drive Dhrishta's research agenda.",
    },
    {
      name: 'Mr. A. Rukesh Reddy',
      image: '/assets/images/director/rukesh.jpeg',
      title: 'Engineering Research & Innovation Lead',
      label: 'Board of Directors',
      shortDescription:
        'Mechanical Engineering professional, SPOC for Dassault. Actively involved with Skill Development and various training/mentoring initiatives.',
      fullDescription:
        "Mr. A. Rukesh Reddy directs our engineering research and innovation initiatives, bringing specialized expertise in Mechanical Engineering, advanced manufacturing technologies, and emerging fields like 3D Printing. Currently pursuing doctoral research at Pacific University, Udaipur, his investigative focus represents the foundation's commitment to continuous knowledge advancement. His leadership in technology research is demonstrated through his role as Single Point of Contact (SPOC) for Dassault Systems' 3D Experience Lab, where he has facilitated applied research in digital manufacturing technologies. His expertise in securing research grants from funding bodies such as UGC, AICTE, and DST has strengthened institutional research capacity and infrastructure development. Mr. Reddy's contributions to technology diffusion through the Skill Development initiatives and have created a bridge between laboratory research and practical applications. His ongoing specialized research training in 3D Printing from the University of Illinois and Supply Chain Logistics from Rutgers University reflects his commitment to advancing research frontiers. At Dhrishta, he leads research initiatives in advanced manufacturing, engineering education, and technology transfer that connect theoretical frameworks with practical applications.",
    },
    {
      name: 'Mr. Rajesh Kadati',
      image: '/assets/images/director/rajesh.jpeg',
      title: 'Digital Innovation & Automation Expert',
      label: 'Board of Directors',
      shortDescription:
        'Senior Test Engineer at TCS with experience at Apple Inc. Expertise in DevOps and API Testing, actively mentoring professionals and supporting foundation\'s technical initiatives.',
      fullDescription:
        'Mr. Rajesh Kadati heads our digital innovation research with over 14 years of specialized expertise in automation technologies, software quality engineering, and DevOps methodologies. His technical research at Tata Consultancy Services (TCS) has involved developing innovative testing frameworks and quality assurance methodologies for global technology leaders like Apple Inc. His research focus on API automation, mobile application testing protocols, and performance optimization has contributed significant knowledge to software quality engineering. His expertise in web services testing (REST & SOAP UI) and performance analysis using JMeter and LoadRunner demonstrates his research depth in digital technologies. At Dhrishta, Mr. Kadati\'s technical research informs our digital education platforms, online learning analytics, and educational technology innovations. His expertise in automation frameworks and continuous integration methodologies drives our research in adaptive learning technologies, educational data mining, and AI-driven assessment systems. His investigative approach to technology implementation ensures that Dhrishta\'s digital initiatives are built on sound scientific principles and research evidence.',
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
          <h1 className="text-5xl font-bold text-white mb-4">Our Directors</h1>
          <p className="text-xl text-white/90">
            Meet the passionate leaders driving Dhrishta Educational Foundation's vision and impact.
          </p>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div
            ref={cards.ref}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
              cards.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {directors.map((director, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedDirector(director)}
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    {director.label}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{director.name}</h3>
                  <p className="text-lg text-accent font-semibold mb-3">{director.title}</p>
                  <p className="text-text-dark leading-relaxed">{director.shortDescription}</p>
                  <button className="mt-4 text-accent font-semibold hover:text-primary transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedDirector && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDirector(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDirector(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedDirector.image}
              alt={selectedDirector.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-8">
              <div className="inline-block bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full mb-3">
                {selectedDirector.label}
              </div>
              <h2 className="text-3xl font-bold text-primary mb-2">{selectedDirector.name}</h2>
              <p className="text-xl text-accent font-semibold mb-6">{selectedDirector.title}</p>
              <p className="text-text-dark text-lg leading-relaxed whitespace-pre-line">
                {selectedDirector.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
