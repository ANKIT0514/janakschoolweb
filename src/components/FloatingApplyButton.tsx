import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import './FloatingApplyButton.css';

const FloatingApplyButton = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 animate-fade-in">
      <Button 
        asChild 
        size="default"
        className="relative text-sm sm:text-base md:text-lg h-12 px-5 sm:h-11 sm:px-6 md:h-14 md:px-8 hover-lift shadow-2xl overflow-hidden group floating-apply-btn"
      >
        <Link to="/admissions#application-form" className="flex items-center relative z-10">
          <span className="relative z-10">Apply Now</span>
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
        </Link>
      </Button>
    </div>
  );
};

export default FloatingApplyButton;