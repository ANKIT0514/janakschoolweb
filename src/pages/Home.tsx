import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import FloatingApplyButton from '@/components/FloatingApplyButton';
import GradientText from '@/components/GradientText';
import { useCountUp } from '@/hooks/useCountUp';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { 
  Users, 
  Target, 
  Star,
  Sparkles,
  GraduationCap,
  Brain
} from 'lucide-react';
// <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden w-full">
// className="w-full h-full object-cover block"

const Home = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const studentsCount = useCountUp({ end: 1000, suffix: '+' });
  const successCount = useCountUp({ end: 99, suffix: '%' });
  const facultyCount = useCountUp({ end: 50, suffix: '+' });
  const yearsCount = useCountUp({ end: 25, suffix: '+' });
// https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80
//https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2148
//https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80
//https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80
//https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80
//https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80
  const heroImages = [
    {
      src: "/images/1.jpg",
      alt: "School Campus"
    },
    {
      src: "/images/2.JPG",
      alt: "Students Learning"
    },
    {
      src: "/images/3.jpg",
      alt: "Classroom"
    },
    {
      src: "/images/4.JPG",
      alt: "Students Reading"
    },
    {
      src: "/images/8.JPG",
      alt: "Science Lab"
    },
    {
      src: "/images/6.JPG",
      alt: "Sports Activities"
    }
  ];
  const features = [
    {
      icon: Brain,
      title: 'Critical Thinking',
      description: 'Developing analytical minds that question, explore, and innovate for a better tomorrow.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Building teamwork skills and social intelligence through interactive group activities.',
      color: 'green'
    },
    {
      icon: Sparkles,
      title: 'Creative Expression',
      description: 'Nurturing artistic talents and creative problem-solving abilities in every student.',
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Helping students set and achieve ambitious academic and personal goals.',
      color: 'orange'
    }
  ];

  const achievements = [
    {
      countHook: studentsCount,
      label: 'Active Students',
      description: 'Growing community'
    },
    {
      countHook: successCount,
      label: 'Success Rate',
      description: 'Academic excellence'
    },
    {
      countHook: facultyCount,
      label: 'Expert Faculty',
      description: 'Dedicated teachers'
    },
    {
      countHook: yearsCount,
      label: 'Years Legacy',
      description: 'Educational excellence'
    }
  ];

  return (
    <div className="min-h-screen p-0 m-0">
      {/* Hero Section - Full Screen Carousel */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration: 30,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="h-full w-full"
        >
          <CarouselContent className="h-full ml-0">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain block"
                  />
                  <div className="absolute inset-0 bg-black/10 animate-[fade-in_1s_ease-in-out]"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Hero Content Section */}
      <section className="relative pt-8 pb-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background mt-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="section-number text-xs sm:text-sm">01 EXCELLENCE</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2">
              Janak School: Where 
              <GradientText className="block mt-2" animationSpeed={6}>
                Excellence Meets Growth.
              </GradientText>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
              Janak School combines academic excellence with character development,
              creating tomorrow's leaders through innovative education and unwavering dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <GraduationCap className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto mb-4 sm:mb-6 md:mb-8 animate-float" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-playfair px-2">
              <span className="block"><span className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal">For </span>Healthy Atmosphere,</span>
              <span className="block mt-2">Quality Education</span>
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal block mt-2 sm:mt-3 md:mt-4 mb-1 sm:mb-2">And</span>
              <span className="block mt-2">High Degree of Discipline.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed px-4">
             At Janak School, your child enjoys a healthy, stress-free environment, top-quality education, and
             strong discipline, fostering confidence, character, and lifelong success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
            <div className="section-number text-xs sm:text-sm">02 APPROACH</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2">
              The Janak <GradientText animationSpeed={6} className="inline-block">Difference</GradientText>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              We don't just teach—we inspire, challenge, and transform young minds into confident, 
              capable individuals ready to shape the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`text-center border-0 bg-card group cursor-pointer transition-all duration-700 ease-out ${
                  hoveredFeature === index 
                    ? feature.color === 'blue' ? 'bg-blue-500/40 shadow-[0_0_80px_rgba(59,130,246,1),0_0_40px_rgba(59,130,246,0.8)] scale-105' 
                    : feature.color === 'green' ? 'bg-green-500/40 shadow-[0_0_80px_rgba(34,197,94,1),0_0_40px_rgba(34,197,94,0.8)] scale-105'
                    : feature.color === 'purple' ? 'bg-purple-500/40 shadow-[0_0_80px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.8)] scale-105'
                    : 'bg-orange-500/40 shadow-[0_0_80px_rgba(249,115,22,1),0_0_40px_rgba(249,115,22,0.8)] scale-105'
                    : 'hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto transition-all duration-700 ease-out ${
                    hoveredFeature === index
                      ? feature.color === 'blue' ? 'bg-blue-500 shadow-[0_0_40px_rgba(59,130,246,1),0_0_20px_rgba(59,130,246,1)]'
                      : feature.color === 'green' ? 'bg-green-500 shadow-[0_0_40px_rgba(34,197,94,1),0_0_20px_rgba(34,197,94,1)]'
                      : feature.color === 'purple' ? 'bg-purple-500 shadow-[0_0_40px_rgba(168,85,247,1),0_0_20px_rgba(168,85,247,1)]'
                      : 'bg-orange-500 shadow-[0_0_40px_rgba(249,115,22,1),0_0_20px_rgba(249,115,22,1)]'
                      : 'bg-primary/10'
                  }`}>
                    <feature.icon className={`h-10 w-10 transition-all duration-700 ease-out ${
                      hoveredFeature === index ? 'text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-primary'
                    }`} />
                  </div>
                  <h3 className={`text-2xl font-bold transition-all duration-700 ease-out ${
                    hoveredFeature === index
                      ? feature.color === 'blue' ? 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]'
                      : feature.color === 'green' ? 'text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]'
                      : feature.color === 'purple' ? 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]'
                      : 'text-orange-400 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]'
                      : ''
                  }`}>{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
            <div className="section-number text-xs sm:text-sm">03 IMPACT</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2">
             By the <GradientText animationSpeed={6}>Numbers</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {achievements.map((stat, index) => (
              <div 
                key={index} 
                ref={stat.countHook.elementRef}
                className="text-center space-y-2 sm:space-y-3 md:space-y-4 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-primary to-secondary w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto">
                  <Star className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <GradientText animationSpeed={5}>{stat.countHook.count}</GradientText>
                </div>
                <div className="space-y-1">
                  <div className="text-base sm:text-lg md:text-xl font-semibold">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
            <div className="section-number text-xs sm:text-sm">04 FACILITIES</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2">
              World-Class <GradientText animationSpeed={6}>Learning Environment</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl hover-lift">
              <img
                src="\images\smart.jpg"
                alt="Modern Classrooms"
                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 sm:p-6 md:p-8">
                <div className="text-white space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Smart Classrooms</h3>
                  <p className="text-sm sm:text-base text-white/90">Technology-enabled learning spaces</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl hover-lift">
              <img
                src="/images/9.jpg"
                alt="Games and Sports"
                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 sm:p-6 md:p-8">
                <div className="text-white space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Games and Sports</h3>
                  <p className="text-sm sm:text-base text-white/90">Comprehensive athletic programs</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl hover-lift">
              <img
                src="/images/3.jpg"
                alt="Expert Faculty"
                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 sm:p-6 md:p-8">
                <div className="text-white space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Expert Mentors</h3>
                  <p className="text-sm sm:text-base text-white/90">Passionate educators who care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 text-primary-foreground">
            <GraduationCap className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto animate-float" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2">
              Join Our Legacy of Excellence
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed px-4">
              Be part of a community that values education, character, and the limitless potential 
              of every student. Your journey to excellence starts here.
            </p>
          </div>
        </div>
      </section>

      <FloatingApplyButton />
    </div>
  );
};

export default Home;
