import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  BookOpen,
  Trophy,
  Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of education and character development.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building character through honesty, respect, and strong moral values.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fostering a supportive and inclusive learning environment for all.'
    },
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'Promoting lifelong learning and intellectual curiosity in every student.'
    }
  ];

  const achievements = [
    'Top 10 Schools in Janakpurdham',
    '99% Board Exam Success Rate',
    ' 3rd Winner of Dance competition organized by PABSON Janakpurdham',
    '4 GPA Holder in SEE - 2081',
    'Best Boarding School Facilities Recognition',
    'District Topper (SEE - 2072)',
  ];

  return (
    <div className="animate-fade-in">

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Our School
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Established with a vision to provide quality education, Janak Secondary English 
                Boarding School has been nurturing young minds for over 20 years, creating 
                responsible citizens and future leaders.
              </p>
            </div>
            <div>
              <img
                src="/images/1.jpg"
                alt="School Campus"
                className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our History
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Founded in 2000, Janak Secondary English Boarding School was established with the
                vision of providing high-quality education that nurtures both academic excellence
                and strong character. From its humble beginnings, the school has grown steadily
                and now serves over 1,000 students from diverse backgrounds.
              </p>

              <p>
                At Janak School, academic achievement goes hand in hand with discipline, moral
                values, good manners, and holistic development, ensuring that every student grows
                into a confident and well-rounded individual.
              </p>

              <p>
                The school has remained true to its founding vision: fostering morally upright,
                disciplined students, nurturing self-confidence and good manners, encouraging
                each child’s unique talents, and maintaining strong collaboration with families
                and the wider community.
              </p>

              <p>
                Today, Janak School stands as a leading educational institution in Nepal,
                preparing students to thrive academically, socially, and ethically. Its alumni
                have gone on to excel nationally and internationally, reflecting the school’s
                long-standing commitment to excellence, leadership, and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Mission */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  To create a positive and engaging learning environment where students are
                  encouraged to ask questions, think clearly, practice regularly, and take
                  active part in their studies. Janak School provides supportive teaching,
                  personal guidance, and learning opportunities that build strong academic
                  foundations. By promoting responsibility, discipline, and regular study
                  habits, each child is guided to make steady academic progress and develop
                  good character.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  To be a progressive and caring school where students learn with happiness,
                  purpose, and respect for others. Janak School aims to nurture capable, kind,
                  and responsible individuals who contribute positively to their families,
                  community, and the world. Our learning environment empowers students to
                  become adaptable, confident, and lifelong learners, equipped to thrive in
                  a rapidly changing future.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Trophy className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md flex items-center space-x-4"
              >
                <Star className="h-6 w-6 text-secondary" />
                <span className="text-gray-700 font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message (UNCHANGED) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

              <div className="lg:col-span-1">
                <img
                  src="/images/principal.JPG"
                  alt="Principal"
                  className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
                />
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Principal's Message
                </h2>

                <blockquote className="text-lg text-gray-600 leading-relaxed italic mb-6">
                  "At Janak School, every child receives quality education, building a strong 
                  foundation for lifelong learning and growth. We cultivate a high degree of 
                  discipline, helping students achieve mastery over themselves, the true 
                  backbone of success. I warmly welcome you to the Janak Secondary English Boarding School, where
                  together we guide every child to learn, grow, and shine."
                </blockquote>

                <div>
                  <p className="font-semibold text-gray-900">Mr. Raju Shah</p>
                  <p className="text-gray-600">Principal</p>
                  <p className="text-sm text-gray-500">
                    Janak Secondary English Boarding School
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
