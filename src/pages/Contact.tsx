
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Music2
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Janakpurdham, Nepal',
      subDetails: 'Ward No. 5, Janakpurdham Sub- Metropolitan City'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: '041-521536',
      subDetails: '+977 9844129184 (Mobile)'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'janakschool2057@gmail.com',
      // subDetails: 'admissions@janakschool.edu.np'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Friday: 8:00 AM - 5:00 PM',
      subDetails: 'Saturday: 8:00 AM - 1:00 PM'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              We'd love to hear from you. Get in touch with us for admissions, 
              inquiries, or any questions about our school.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <p className="text-gray-700 font-medium mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.subDetails}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 sm:py-14 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader className="text-center">
                  <MessageSquare className="h-10 w-10 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & School Info */}
            <div className="space-y-8">
              {/* Map */}
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg overflow-hidden h-64 mb-4">
                    <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.814087501513!2d85.92435847546244!3d26.72669677676913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec53f37dfcf6c7%3A0x3d1c357b4a41c27a!2sGyan%20Da%20International%20School%20Janakpur%20Dham!5e0!3m2!1sen!2snp!4v1728139176924!5m2!1sen!2snp"
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       allowFullScreen
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">
                      <strong>Address:</strong> Ward No. 5, Jankpurdham  City, Nepal
                    </p>
                    <p>
                      <strong>Landmark:</strong> Near Janaki Mandir, 5 minutes walk from Janaki Mandir
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚌</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">By Public Transport</h3>
                <p className="text-gray-600 text-sm">
                  Take any bus to Janaki MAndir and walk 5 minutes towards Devi Chowk road. 
                  The school is easily accessible from major bus stops.
                </p>
              </div>
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">By Private Vehicle</h3>
                <p className="text-gray-600 text-sm">
                  Parking available on campus. Enter through the main gate and 
                  follow signs to the visitor parking area.
                </p>
              </div>
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚶</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Walking Distance</h3>
                <p className="text-gray-600 text-sm">
                  5 minutes from Janaki Mandir, Towards Devi chowk road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Connect */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Follow us on social media to stay updated with school activities, 
            achievements, and important announcements.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://wa.me/9779844129184" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
              <Phone className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/share/17SNTcjzKt/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/janakschooljanakpur?igsh=MTBoNzAwd3dmaDhjZA==" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://youtube.com/@janakschooljanakpur?si=N_yQmLMdQezeLXiG" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/@janak.school?_t=ZS-90I9Wz4W1mz&_r=1" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
              <Music2 className="h-6 w-6" />
            </a>
          </div>
          <p className="text-blue-100">
            Emergency Contact: +977-9844129184 (Available 24/7 for urgent matters)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
