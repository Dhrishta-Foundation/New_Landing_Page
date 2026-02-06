import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  title: string;
}

export default function Gallery() {
  const header = useScrollAnimation();
  const section1 = useScrollAnimation();
  const section2 = useScrollAnimation();
  const section3 = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const classAndLab: GalleryImage[] = [
    { src: '/assets/images/DSC01232.jpg', title: 'Teaching Students' },
    { src: '/assets/images/DSC01246.jpg', title: 'Students Learning' },
    { src: '/assets/images/DSC01307.jpg', title: 'Training in Laboratory' },
    { src: '/assets/images/DSC01341.jpg', title: 'Training in Laboratory' },
  ];

  const yogaTraining: GalleryImage[] = [
    { src: '/assets/images/DSC01359.jpg', title: 'Yoga' },
    { src: '/assets/images/DSC01368.jpg', title: 'Yoga' },
    { src: '/assets/images/DSC01395.jpg', title: 'Yoga' },
    { src: '/assets/images/DSC01400.jpg', title: 'Yoga' },
  ];

  const independenceDay: GalleryImage[] = [
    { src: '/assets/images/independence_day/flag.jpg', title: 'Independence Day' },
    {
      src: '/assets/images/independence_day/all_staff_with_student.jpg',
      title: 'Independence Day',
    },
    { src: '/assets/images/independence_day/flag_selute.jpg', title: 'Independence Day' },
    { src: '/assets/images/independence_day/rukesh_speech.jpg', title: 'Independence Day' },
    {
      src: '/assets/images/independence_day/student_performance.jpg',
      title: 'Independence Day',
    },
    { src: '/assets/images/independence_day/all_faculty_member.jpg', title: 'Independence Day' },
    { src: '/assets/images/independence_day/teacher_speech.jpg', title: 'Independence Day' },
    { src: '/assets/images/independence_day/student_speech.jpg', title: 'Independence Day' },
  ];

  const renderGallerySection = (
    images: GalleryImage[],
    title: string,
    animationRef: { ref: React.RefObject<HTMLDivElement>; isVisible: boolean }
  ) => (
    <div
      ref={animationRef.ref}
      className={`transition-all duration-1000 ${
        animationRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white font-semibold p-4">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

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
          <h1 className="text-5xl font-bold text-white mb-4">Our Gallery</h1>
          <p className="text-xl text-white/90">Capturing Moments of Impact and Innovation</p>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-[1200px] space-y-16">
          {renderGallerySection(classAndLab, 'Class and Laboratory', section1)}
          {renderGallerySection(yogaTraining, 'Yoga Training', section2)}
          {renderGallerySection(independenceDay, 'Independence Day Celebration', section3)}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
          >
            <X size={24} />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center text-xl font-semibold mt-4">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
