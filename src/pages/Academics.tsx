
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock,
  Target,
  Microscope,
  Calculator,
  Globe,
  Palette,
  Music,
  Trophy,
  Computer
} from 'lucide-react';

const Academics = () => {
  const classes = [
    {
      grade: 'Nursery - KG',
      age: '3-5 years',
      focus: 'Play-based learning, Basic literacy and numeracy',
      subjects: ['English', 'Nepali', 'Math', 'Drawing', 'Games']
    },
    {
      grade: 'Class 1-5',
      age: '6-10 years',
      focus: 'Foundation building, Creative thinking',
      subjects: ['English', 'Nepali', 'Mathematics', 'Science', 'Social Studies', 'Computer']
    },
    {
      grade: 'Class 6-8',
      age: '11-13 years',
      focus: 'Comprehensive curriculum, Skill development',
      subjects: ['English', 'Nepali', 'Mathematics', 'Science', 'Social Studies', 'Computer', 'Health & PE']
    },
    {
      grade: 'Class 9-10',
      age: '14-15 years',
      focus: 'SEE preparation, Career guidance',
      subjects: ['Compulsory English', 'Nepali', 'Mathematics', 'Science', 'Social Studies', 'Health & PE', 'Optional Math']
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: Calculator, description: 'Problem-solving and logical thinking' },
    { name: 'Science', icon: Microscope, description: 'Practical experiments and scientific inquiry' },
    { name: 'English', icon: BookOpen, description: 'Communication skills and literature' },
    { name: 'Social Studies', icon: Globe, description: 'History, geography, and civic education' },
    { name: 'Computer', icon: Computer, description: 'Digital literacy and programming' },
    { name: 'Arts & Crafts', icon: Palette, description: 'Creative expression and fine arts' },
  ];

  const achievements = [
    'District Level Science Competition - 1st Position',
    'Inter-School Mathematics Olympiad - Top 3',
    'Regional English Debate Competition - Winners',
    'National Level Quiz Competition - Finalists'
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Academic Excellence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Our comprehensive academic program is designed to challenge students intellectually 
              while fostering creativity, critical thinking, and a love for lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Following the National Education Board curriculum with international teaching methodologies 
              and modern educational practices.
            </p>
          </div>

          <div className="space-y-6">
            {classes.map((classInfo, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">{classInfo.grade}</CardTitle>
                      <p className="text-gray-600">Age Group: {classInfo.age}</p>
                    </div>
                    <Badge variant="secondary" className="self-start md:self-center mt-2 md:mt-0">
                      {classInfo.focus}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {classInfo.subjects.map((subject, subIndex) => (
                      <Badge key={subIndex} variant="outline" className="text-sm">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subject Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each subject is taught with modern methodologies and practical applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <subject.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{subject.name}</h3>
                  <p className="text-gray-600">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Modern Teaching Methods
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Learning</h3>
                    <p className="text-gray-600">Engaging students through hands-on activities, group discussions, and practical applications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Computer className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Integration</h3>
                    <p className="text-gray-600">Smart classrooms, educational software, and digital resources enhance learning experiences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Attention</h3>
                    <p className="text-gray-600">Small class sizes ensure individual attention and customized learning approaches.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Modern Classroom"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Academic Calendar */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Clock className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Academic Year 2024-2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">First Term</h3>
              <p className="text-blue-100"></p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Second Term</h3>
              <p className="text-blue-100"></p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Third Term</h3>
              <p className="text-blue-100"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
