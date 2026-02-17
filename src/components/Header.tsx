import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './ShinyText.css';

// ShinyText Component
interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;
  return (
    <span 
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} 
      style={{ ['--animation-duration' as any]: animationDuration }}
      data-text={text}
    >
      {text}
    </span>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    // { name: 'News & Events', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 py-2 md:py-4">
      <div className="container mx-auto px-4">
        <div className={`px-3 py-2 md:px-6 md:py-3 ${
          isScrolled 
            ? 'bg-background rounded-2xl shadow-[0_4px_24px_-6px_rgba(59,130,246,0.15)] border border-border/40' 
            : ''
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3">
              <div className="bg-background p-0.5 md:p-1 rounded-lg shrink-0">
                <img 
                  src="/janak-logo.png" 
                  alt="Janak Secondary School Logo" 
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-base md:text-lg font-bold">
                  <ShinyText text="JANAK" speed={3} />
                </h1>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
                  Secondary English Boarding School
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => 
                item.name === 'Contact' ? (
                  <Button
                    key={item.name}
                    asChild
                    variant="solid"
                    size="sm"
                    className="ml-2"
                  >
                    <Link to={item.path}>
                      {item.name}
                    </Link>
                  </Button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group ${
                      isActive(item.path)
                        ? 'text-primary'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    {item.name === 'About Us' ? (
                      <>
                        <span className="hidden lg:inline">About Us</span>
                        <span className="lg:hidden">About Janak</span>
                      </>
                    ) : (
                      item.name
                    )}
                    <span 
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-200 ${
                        isActive(item.path) 
                          ? 'w-8' 
                          : 'w-0 group-hover:w-8'
                      }`}
                    />
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden h-8 w-8 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pt-4 mt-4 border-t border-border/40">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActive(item.path) 
                        ? 'text-primary bg-primary/5' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-accent/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name === 'About Us' ? 'About Janak' : item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;