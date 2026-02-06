import { useState, FormEvent } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Handshake, Heart, UserPlus, Rocket } from 'lucide-react';

export default function Contact() {
  const header = useScrollAnimation();
  const info = useScrollAnimation();
  const form = useScrollAnimation();
  const involvement = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:dhrishtaeducation@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  const involvementCards = [
    {
      icon: Handshake,
      title: 'Partner With Us',
      description:
        'Join forces with us to create lasting impact in communities. We welcome partnerships with organizations that share our vision for social change.',
    },
    {
      icon: Heart,
      title: 'Donate',
      description:
        'Support our initiatives through financial contributions. Your donations help us expand our reach and impact more lives.',
    },
    {
      icon: UserPlus,
      title: 'Volunteer',
      description:
        'Contribute your time and skills to our programs. We have various volunteering opportunities across our educational and healthcare initiatives.',
    },
    {
      icon: Rocket,
      title: 'Collaborate',
      description:
        "Work with us on projects and initiatives. We're always open to collaborative efforts that can amplify our social impact.",
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
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">Get in Touch with Our Team</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              ref={info.ref}
              className={`transition-all duration-1000 ${
                info.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Office Address</h3>
                    <p className="text-text-dark leading-relaxed">
                      Dhrishta Educational Foundation<br />
                      No.153, 3rd Link Road, Palkalai Nagar<br />
                      Palavakkam, Chennai - 600041<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
                    <a
                      href="mailto:dhrishtaeducation@gmail.com"
                      className="text-text-dark hover:text-accent transition-colors"
                    >
                      dhrishtaeducation@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                    <a
                      href="tel:+919100044339"
                      className="text-text-dark hover:text-accent transition-colors"
                    >
                      +91 910 0044 339
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={form.ref}
              className={`transition-all duration-1000 ${
                form.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-dark font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-dark font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-text-dark font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-dark font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Get Involved</h2>
          <div
            ref={involvement.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
              involvement.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {involvementCards.map((card, index) => {
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
          <div className="text-center mt-12">
            <a
              href="mailto:dhrishtaeducation@gmail.com"
              className="inline-block bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Join Us and Make a Difference Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
