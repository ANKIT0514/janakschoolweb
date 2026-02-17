
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import jsPDF from 'jspdf';
import { 
  FileText, 
  DollarSign, 
  Calendar, 
  CheckCircle,
  Users,
  Book,
  Home,
  Phone,
  Mail,
  User,
  Download
} from 'lucide-react';

const Admissions = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    grade: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    previousSchool: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store submitted data for PDF generation
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
    
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 2-3 working days to schedule an interview. You can now download your application.",
    });
    
    // Reset form
    setFormData({
      studentName: '',
      dateOfBirth: '',
      grade: '',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      address: '',
      previousSchool: '',
      message: ''
    });
  };

  const handleDownloadPDF = () => {
    if (!submittedData) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Header
    doc.setFillColor(59, 130, 246);
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('Janak Secondary English Boarding School', pageWidth / 2, 20, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text('Admission Application Form', pageWidth / 2, 32, { align: 'center' });
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    
    // Student Information
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text('Student Information', 20, 55);
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text(`Full Name: ${submittedData.studentName}`, 20, 68);
    doc.text(`Date of Birth: ${submittedData.dateOfBirth}`, 20, 78);
    doc.text(`Grade Applying For: ${submittedData.grade}`, 20, 88);
    doc.text(`Previous School: ${submittedData.previousSchool || 'N/A'}`, 20, 98);
    
    // Parent/Guardian Information
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text('Parent/Guardian Information', 20, 115);
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'normal');
    doc.text(`Name: ${submittedData.parentName}`, 20, 128);
    doc.text(`Phone: ${submittedData.parentPhone}`, 20, 138);
    doc.text(`Email: ${submittedData.parentEmail}`, 20, 148);
    
    // Address
    doc.text('Address:', 20, 158);
    const addressLines = doc.splitTextToSize(submittedData.address, pageWidth - 40);
    doc.text(addressLines, 20, 168);
    
    // Additional Information
    if (submittedData.message) {
      const messageY = 168 + (addressLines.length * 10) + 15;
      doc.setFontSize(16);
      doc.setFont(undefined, 'bold');
      doc.text('Additional Information', 20, messageY);
      
      doc.setFontSize(12);
      doc.setFont(undefined, 'normal');
      const messageLines = doc.splitTextToSize(submittedData.message, pageWidth - 40);
      doc.text(messageLines, 20, messageY + 13);
    }
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Application Date: ${new Date().toLocaleDateString()}`, 20, doc.internal.pageSize.getHeight() - 20);
    doc.text('This is a computer-generated document.', 20, doc.internal.pageSize.getHeight() - 10);
    
    // Save PDF
    doc.save(`Admission_Application_${submittedData.studentName.replace(/\s+/g, '_')}.pdf`);
    
    toast({
      title: "PDF Downloaded!",
      description: "Your application has been saved as a PDF file.",
    });
  };

  const admissionProcess = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out the online application form with required documents'
    },
    {
      step: 2,
      title: 'Entrance Test',
      description: 'Student takes age-appropriate entrance examination'
    },
    {
      step: 3,
      title: 'Interview',
      description: 'Parent-student interview with school administration'
    },
    {
      step: 4,
      title: 'Admission Confirmation',
      description: 'Receive admission decision and complete enrollment'
    }
  ];


  const requirements = [
    'Birth Certificate (Original & Copy)',
    'Previous School Transfer Certificate',
    'Academic Transcripts/Mark Sheets',
    'Passport Size Photographs (2 copies)',
    'Parent/Guardian ID Copy',
    'Character Certificate (if applicable)'
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Admissions Open
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Applications are accepted throughout the year. Begin your child's learning journey with us today.
            </p>
            <a href="#application-form">
             <Badge 
                  variant="secondary" 
                        className="text-base sm:text-lg px-4 sm:px-6 py-1.5 sm:py-2 cursor-pointer"
              >
                Start Your Application
              </Badge>
            </a>

          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined admission process ensures a smooth experience for parents and students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     


      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FileText className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Required Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please prepare the following documents for a complete application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Application Form</h2>
              <p className="text-xl text-gray-600">
                Fill out the form below to begin your admission process.
              </p>
            </div>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="studentName" className="flex items-center space-x-2 mb-2">
                        <User className="h-4 w-4" />
                        <span>Student Full Name</span>
                      </Label>
                      <Input
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => handleInputChange('studentName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth" className="flex items-center space-x-2 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>Date of Birth</span>
                      </Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="grade" className="flex items-center space-x-2 mb-2">
                      <Book className="h-4 w-4" />
                      <span>Grade Applying For</span>
                    </Label>
                    <Select value={formData.grade} onValueChange={(value) => handleInputChange('grade', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Playgroup">PG</SelectItem>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="1">Class 1</SelectItem>
                        <SelectItem value="2">Class 2</SelectItem>
                        <SelectItem value="3">Class 3</SelectItem>
                        <SelectItem value="4">Class 4</SelectItem>
                        <SelectItem value="5">Class 5</SelectItem>
                        <SelectItem value="6">Class 6</SelectItem>
                        <SelectItem value="7">Class 7</SelectItem>
                        <SelectItem value="8">Class 8</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="parentName" className="flex items-center space-x-2 mb-2">
                        <Users className="h-4 w-4" />
                        <span>Parent/Guardian Name</span>
                      </Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentPhone" className="flex items-center space-x-2 mb-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone Number</span>
                      </Label>
                      <Input
                        id="parentPhone"
                        value={formData.parentPhone}
                        onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="parentEmail" className="flex items-center space-x-2 mb-2">
                      <Mail className="h-4 w-4" />
                      <span>Email Address</span>
                    </Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="flex items-center space-x-2 mb-2">
                      <Home className="h-4 w-4" />
                      <span>Address</span>
                    </Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="previousSchool" className="mb-2 block">
                      Previous School (if any)
                    </Label>
                    <Input
                      id="previousSchool"
                      value={formData.previousSchool}
                      onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-2 block">
                      Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Any special requirements or information you'd like to share..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1">
                      Submit Application
                    </Button>
                    <Button 
                      type="button" 
                      size="lg" 
                      variant="outline"
                      className="flex-1"
                      onClick={handleDownloadPDF}
                      disabled={!isSubmitted}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download PDF
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-12 w-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">Application Deadline</h3>
              <p className="text-blue-100 text-lg"></p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Entrance Tests</h3>
              <p className="text-blue-100 text-lg"></p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Academic Year Begins</h3>
              <p className="text-blue-100 text-lg"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
