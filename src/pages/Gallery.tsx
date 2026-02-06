import { useState } from 'react';
import { X, Search, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState('All');

  // Consolidated image data with categories
  const allImages: GalleryImage[] = [
    { src: '/assets/images/DSC01232.jpg', title: 'Teaching Students', category: 'Education' },
    { src: '/assets/images/DSC01246.jpg', title: 'Students Learning', category: 'Education' },
    { src: '/assets/images/DSC01307.jpg', title: 'Laboratory Training', category: 'Training' },
    { src: '/assets/images/DSC01341.jpg', title: 'Science Experiments', category: 'Training' },
    { src: '/assets/images/DSC01359.jpg', title: 'Yoga Session', category: 'Wellness' },
    { src: '/assets/images/DSC01368.jpg', title: 'Wellness Workshop', category: 'Wellness' },
    { src: '/assets/images/DSC01395.jpg', title: 'Meditation', category: 'Wellness' },
    { src: '/assets/images/DSC01400.jpg', title: 'Group Exercise', category: 'Wellness' },
    { src: '/assets/images/independence_day/flag.jpg', title: 'Flag Hoisting', category: 'Events' },
    { src: '/assets/images/independence_day/all_staff_with_student.jpg', title: 'Staff & Students', category: 'Events' },
    { src: '/assets/images/independence_day/flag_selute.jpg', title: 'Saluting the Flag', category: 'Events' },
    { src: '/assets/images/independence_day/rukesh_speech.jpg', title: 'Director Speech', category: 'Events' },
    { src: '/assets/images/independence_day/student_performance.jpg', title: 'Cultural Performance', category: 'Events' },
    { src: '/assets/images/independence_day/all_faculty_member.jpg', title: 'Faculty Members', category: 'Events' },
  ];

  const categories = ['All', 'Education', 'Training', 'Wellness', 'Events'];

  const filteredImages = filter === 'All'
    ? allImages
    : allImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-accent font-semibold tracking-wider uppercase mb-4 block">Visual Journey</span>
          <h1 className="text-5xl font-bold text-white mb-2">Our Gallery</h1>
          <p className="text-xl text-white/90 leading-relaxed font-light">
            Capturing moments of impact, innovation, and community.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat
                    ? 'bg-accent text-white shadow-lg scale-105'
                    : 'bg-white text-text-light hover:bg-gray-100'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-like Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={image.src}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                      <ZoomIn size={24} />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{image.category}</p>
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />

              <div className="mt-6 text-center">
                <span className="inline-block bg-accent px-3 py-1 rounded-full text-xs font-bold text-white mb-2">{selectedImage.category}</span>
                <h3 className="text-white text-2xl font-semibold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
