import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCountUp } from '@/hooks/useCountUp';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openAlbum, setOpenAlbum] = useState(null);

  const classroomStats = useCountUp({ end: 50, duration: 2000, suffix: '+' });
  const eventStats = useCountUp({ end: 100, duration: 2000, suffix: '+' });
  const sportsStats = useCountUp({ end: 30, duration: 2000, suffix: '+' });
  const tripsStats = useCountUp({ end: 25, duration: 2000, suffix: '+' });

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classrooms', name: 'Classrooms' },
    { id: 'events', name: 'Events' },
    { id: 'sports', name: 'Sports' },
    { id: 'facilities', name: 'Facilities' }
  ];

  // Albums structured from your previous gallery items
  const albums = {
    classrooms: [
      {
        id: 'smart-classroom',
        name: 'Classroom Activities',
        cover: '/images/3.jpg',
        photos: [
          '/images/3.jpg',
          'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1544531586-fbd96ceaeb07?auto=format&fit=crop&w=800&q=80'
        ]
      }
    ],
    events: [
      {
        id: 'school-events',
        name: 'School Events',
        cover: '/images/event1.jpg',
        photos: [
          '/images/event1.jpg',
          '/images/event1.jpg'
        ]
      }
    ],
    sports: [
      {
        id: 'sports-activities',
        name: 'Sports Activities',
        cover: '/images/cricket.jpg',
        photos: [
          '/images/cricket.jpg',
          '/images/volleyball.jpeg'
        ]
      }
    ],
    facilities: [
      {
        id: 'school-facilities',
        name: 'Campus Facilities',
        cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
        photos: [
          'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
        ]
      }
    ]
  };

  const allPhotos = Object.values(albums)
    .flat()
    .flatMap(album => album.photos);

  return (
    <div className="animate-fade-in">

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden h-[350px] sm:h-[400px] md:h-[450px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/drone-shot.mp4" type="video/mp4" />
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
                onClick={() => {
                  setSelectedCategory(category.id);
                  setOpenAlbum(null);
                }}
                variant={selectedCategory === category.id ? "default" : "outline"}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ALL PHOTOS */}
      {selectedCategory === 'all' && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {allPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt=""
                  className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY → SHOW ALBUMS */}
      {selectedCategory !== 'all' && !openAlbum && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {albums[selectedCategory]?.map(album => (
                <div
                  key={album.id}
                  onClick={() => setOpenAlbum(album)}
                  className="cursor-pointer text-center"
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition">
                    <img
                      src={album.cover}
                      alt={album.name}
                      className="w-full h-60 object-cover"
                    />
                  </Card>
                  <h3 className="mt-4 text-lg font-semibold">
                    {album.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INSIDE ALBUM */}
      {openAlbum && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">

            <div className="mb-6">
              <Button variant="outline" onClick={() => setOpenAlbum(null)}>
                ← Back to Albums
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {openAlbum.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt=""
                  className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Stats (UNCHANGED) */}
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

    </div>
  );
};

export default Gallery;
