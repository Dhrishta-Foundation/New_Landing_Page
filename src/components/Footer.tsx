import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-light-text">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/directors" className="hover:text-accent transition-colors duration-300">
                  Directors
                </Link>
              </li>
              <li>
                <Link to="/research" className="hover:text-accent transition-colors duration-300">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-accent transition-colors duration-300">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-sm">
                  No.153, 3rd Link Road, Palkalai Nagar<br />
                  Palavakkam, Chennai - 600041<br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0 text-accent" />
                <a href="mailto:dhrishtaeducation@gmail.com" className="text-sm hover:text-accent transition-colors">
                  dhrishtaeducation@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0 text-accent" />
                <a href="tel:+919100044339" className="text-sm hover:text-accent transition-colors">
                  +91 910 0044 339
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm">
            © 2024 Dhrishta Educational Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
