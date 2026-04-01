import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useCountUp } from '@/hooks/useCountUp';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

 // const classroomStats = useCountUp({ end: 50, duration: 2000, suffix: '+' });
 // const eventStats = useCountUp({ end: 100, duration: 2000, suffix: '+' });
//  const sportsStats = useCountUp({ end: 30, duration: 2000, suffix: '+' });
//  const tripsStats = useCountUp({ end: 25, duration: 2000, suffix: '+' });

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classrooms', name: 'Classrooms' },
    { id: 'events', name: 'Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const photos = {
    classrooms: [
      '/images/3.jpg'
    ],
    events: [
      '/images/event1.jpg',
      '/images/45.jpg',
      '/images/52.jpg',
      '/images/46.jpg',
      '/images/47.jpg',
      '/images/61.jpg',
      '/images/69.jpg',
      '/images/70.jpg',
      '/images/54.jpg',
      '/images/51.jpg'
    ],
    sports: [
      '/images/cricket.jpg',
      '/images/volleyball.jpeg',
      '/images/cricket.jpg',
      '/images/cricket2.jpg',
      '/images/59.jpg',
      '/images/60.jpg',
      '/images/58.jpg'
    ],
    facilities: [
      
    ]
  };

  const allPhotos = Object.values(photos).flat();
  const currentPhotos = selectedCategory === 'all' ? allPhotos : photos[selectedCategory] || [];

  const openLightbox = (index) => {
    setLightboxPhoto(currentPhotos);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxPhoto(null);
    setLightboxIndex(0);
  };

  const goPrev = () => {
    setLightboxIndex(prev => (prev - 1 + lightboxPhoto.length) % lightboxPhoto.length);
  };

  const goNext = () => {
    setLightboxIndex(prev => (prev + 1) % lightboxPhoto.length);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        goNext(); // swiped left → next
      } else {
        goPrev(); // swiped right → prev
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="animate-fade-in">

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10"
          onClick={handleBackdropClick}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-gray-800 bg-white/80 hover:bg-white rounded-full p-2 transition z-50 shadow-lg"
          >
            <X size={28} />
          </button>

          {/* Prev arrow - desktop only */}
          {lightboxPhoto.length > 1 && (
            <button
              onClick={goPrev}
              className="hidden sm:flex absolute left-4 text-gray-800 bg-white/80 hover:bg-white rounded-full p-2 transition z-50 shadow-lg"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Image with swipe support */}
          <img
            src={lightboxPhoto[lightboxIndex]}
            alt=""
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl select-none"
            draggable={false}
          />

          {/* Next arrow - desktop only */}
          {lightboxPhoto.length > 1 && (
            <button
              onClick={goNext}
              className="hidden sm:flex absolute right-4 text-gray-800 bg-white/80 hover:bg-white rounded-full p-2 transition z-50 shadow-lg"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 text-gray-800 bg-white/70 px-3 py-1 rounded-full text-sm shadow">
            {lightboxIndex + 1} / {lightboxPhoto.length}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden h-[350px] sm:h-[400px] md:h-[450px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/janak.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              School Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed px-4">
              Take a visual journey through our vibrant school life, modern facilities,
              and memorable moments that shape our students' educational experience.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt=""
                onClick={() => openLightbox(index)}
                className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      {/*
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div ref={classroomStats.elementRef}>
              <div className="text-3xl font-bold text-primary mb-2">{classroomStats.count}</div>
              <div className="text-gray-600">Classroom Photos</div>
            </div>
            <div ref={eventStats.elementRef}>
              <div className="text-3xl font-bold text-primary mb-2">{eventStats.count}</div>
              <div className="text-gray-600">Event Moments</div>
            </div>
            <div ref={sportsStats.elementRef}>
              <div className="text-3xl font-bold text-primary mb-2">{sportsStats.count}</div>
              <div className="text-gray-600">Sports Activities</div>
            </div>
            <div ref={tripsStats.elementRef}>
              <div className="text-3xl font-bold text-primary mb-2">{tripsStats.count}</div>
              <div className="text-gray-600">School Trips</div>
            </div>
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

export default Gallery;
