
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  Users, 
  Trophy,
  BookOpen,
  Star,
  Megaphone,
  ArrowRight
} from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Admissions Open for Academic Year 2024-2025',
      excerpt: 'We are now accepting applications for the upcoming academic year. Limited seats available across all grades.',
      date: '2024-01-15',
      category: 'Admissions',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Students Excel in National Science Olympiad',
      excerpt: 'Our students secured top positions in the National Science Olympiad, bringing pride to our school.',
      date: '2024-01-10',
      category: 'Achievement',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      featured: false
    },
    {
      id: 3,
      title: 'Annual Sports Day 2024 Announced',
      excerpt: 'Join us for our annual sports day celebration with various competitions and fun activities for all students.',
      date: '2024-01-08',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      featured: false
    },
    {
      id: 4,
      title: 'New Computer Lab Inaugurated',
      excerpt: 'State-of-the-art computer laboratory with latest technology to enhance digital learning experience.',
      date: '2024-01-05',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1544531586-fbd96ceaeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Parent-Teacher Meeting Schedule',
      excerpt: 'Important meeting to discuss student progress and academic development with parents.',
      date: '2024-01-03',
      category: 'Meetings',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Winter Break Homework Guidelines',
      excerpt: 'Important instructions and guidelines for winter break homework assignments.',
      date: '2023-12-20',
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
      featured: false
    }
  ];

  const upcomingEvents = [
    {
      title: 'Annual Science Fair',
      date: '2024-02-15',
      time: '9:00 AM - 4:00 PM',
      location: 'School Auditorium',
      description: 'Students showcase their innovative science projects and experiments.'
    },
    {
      title: 'Cultural Program',
      date: '2024-02-20',
      time: '2:00 PM - 5:00 PM',
      location: 'Main Hall',
      description: 'Annual cultural celebration featuring music, dance, and drama performances.'
    },
    {
      title: 'Inter-House Sports Competition',
      date: '2024-02-25',
      time: '8:00 AM - 5:00 PM',
      location: 'School Playground',
      description: 'Competitive sports events between different school houses.'
    },
    {
      title: 'Parent Workshop: Digital Learning',
      date: '2024-03-05',
      time: '10:00 AM - 12:00 PM',
      location: 'Conference Room',
      description: 'Workshop for parents on supporting children in digital learning environment.'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'admissions':
        return Users;
      case 'achievement':
        return Trophy;
      case 'events':
        return Calendar;
      case 'infrastructure':
        return BookOpen;
      case 'meetings':
        return Users;
      case 'academic':
        return Star;
      default:
        return Megaphone;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'admissions':
        return 'bg-blue-100 text-blue-800';
      case 'achievement':
        return 'bg-green-100 text-green-800';
      case 'events':
        return 'bg-purple-100 text-purple-800';
      case 'infrastructure':
        return 'bg-orange-100 text-orange-800';
      case 'meetings':
        return 'bg-yellow-100 text-yellow-800';
      case 'academic':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              News & Events
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest news, announcements, and upcoming events 
              from Janak Secondary English Boarding School.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured News</h2>
              <Card className="bg-white border-0 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(featuredNews.category)}>
                        {featuredNews.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-gray-500 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(featuredNews.date)}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredNews.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {featuredNews.excerpt}
                    </p>
                    <Button className="self-start">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Recent News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item) => {
                const IconComponent = getCategoryIcon(item.category);
                return (
                  <Card key={item.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(item.category)}>
                          <IconComponent className="h-3 w-3 mr-1" />
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-gray-500 text-sm mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div className="text-center md:text-left">
                        <div className="bg-primary/10 rounded-lg p-4 inline-block">
                          <Calendar className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center md:text-right">
                        <Badge variant="outline" className="mb-2">
                          {event.location}
                        </Badge>
                        <br />
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Megaphone className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest updates about school activities, 
            important announcements, and upcoming events directly in your inbox.
          </p>
          <Button size="lg" variant="secondary" className="text-primary hover:bg-secondary/90">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
};

export default News;
