import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Handshake, Heart, UserPlus, Rocket, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
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

  return (
    <div className="min-h-screen pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/DSC01279.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-accent font-semibold tracking-wider uppercase mb-4 block">Get in Touch</span>
          <h1 className="text-5xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-xl text-white/90 leading-relaxed font-light">
            We'd love to hear from you. Let's create impact together.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-primary-dark mb-8">Contact Information</h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: "Headquarters", content: "No.153, 3rd Link Road, Palkalai Nagar,\nPalavakkam, Chennai - 600041\nTamil Nadu, India" },
                  { icon: Mail, title: "Email Us", content: "dhrishtaeducation@gmail.com", href: "mailto:dhrishtaeducation@gmail.com" },
                  { icon: Phone, title: "Call Us", content: "+91 910 0044 339", href: "tel:+919100044339" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 text-primary-dark">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-text hover:text-accent transition-colors block text-lg">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-text leading-relaxed whitespace-pre-line text-lg">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border-light relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-0" />

              <h2 className="text-3xl font-bold text-primary-dark mb-6 relative z-10">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-text-light mb-2 uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-light mb-2 uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-light mb-2 uppercase tracking-wide">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-light mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-transparent focus:bg-white focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all outline-none resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center justify-center gap-2"
                >
                  <Send size={20} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Involvement Cards */}
      <section className="py-16 bg-surface-alt">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-12">Ways to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Handshake, title: 'Partner', desc: 'Join forces for lasting impact.' },
              { icon: Heart, title: 'Donate', desc: 'Support our initiatives financially.' },
              { icon: UserPlus, title: 'Volunteer', desc: 'Contribute time and skills.' },
              { icon: Rocket, title: 'Collaborate', desc: 'Work on innovative projects.' },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 text-center group"
                >
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                    <Icon size={28} className="text-primary-dark group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-2">{card.title}</h3>
                  <p className="text-text-light text-sm leading-relaxed mb-4">{card.desc}</p>

                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <a
              href="mailto:dhrishtaeducation@gmail.com"
              className="inline-flex items-center gap-2 text-primary-dark font-bold hover:text-accent transition-colors border-b-2 border-accent pb-1"
            >
              Contact us for opportunities <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
