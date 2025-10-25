import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { services } from '../data/service';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  Zap,
  Code,
  Smartphone,
  LayoutDashboard,
  Cloud,
  BrainCircuit,
  Database,
  Sun,
  Moon,
  X,
  Menu,
} from 'lucide-react';

// Icon mapping for services
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  'code': Code,
  'smartphone': Smartphone,
  'layout': LayoutDashboard,
  'cloud': Cloud,
  'brain': BrainCircuit,
  'database': Database,
};

const Navbar = () => {
 const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, _item: string, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const target = targetId || 'home';
    
    // If not on home page, navigate to home with hash
    if (window.location.pathname !== '/') {
      navigate(`/#${target}`, { replace: true });
    } else {
      // On home page, update URL with hash and scroll to section
      window.history.pushState({}, '', `#${target}`);
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Update active section
    setActiveSection(target);
  };

  // State for dropdown and active section
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Toggle services dropdown
  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.services-dropdown') && !target.closest('.services-dropdown-toggle')) {
        setIsServicesDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Handle scroll to update active nav item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Get all sections
      const sections = ['home', 'features', 'services', 'techStack', 'contact'];
      
      // Find the current section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (e: any, href: string) => {
    e.preventDefault();
    navigate(href);
    setIsMenuOpen(false);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'} transition-colors duration-300`}>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
        } backdrop-blur-xl border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300`}
      >
        <div className="max-w-[1450px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold gradient-text">
                TechFlow
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">

              {/* Navigation Links */}
              <div className="flex items-center space-x-1">
                <Link
                  to="/"
                  onClick={(e) => handleNavClick(e, 'home', '')}
                  className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === 'home'
                      ? 'text-orange-500 dark:text-amber-400 font-semibold bg-orange-50 dark:bg-orange-900/20'
                      : 'text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-amber-400 hover:bg-orange-50/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  Home
                </Link>
                
                <Link
                  to="#features"
                  onClick={(e) => handleNavClick(e, 'features', 'features')}
                  className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === 'features'
                      ? 'text-orange-500 dark:text-amber-400 font-semibold bg-orange-50 dark:bg-orange-900/20'
                      : 'text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-amber-400 hover:bg-orange-50/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  Features
                </Link>
                
                {/* Services Dropdown */}
                <div className="relative group" 
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}>
                  <a
                    href="#services"
                    className={`px-4 py-2 rounded-lg flex items-center gap-1 font-medium transition-all duration-200 ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    } ${
                      isServicesOpen ? (theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100') : ''
                    }`}
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </a>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="fixed left-0 right-0 top-16 z-40 pt-2"
                    >
                    <div className="w-full flex justify-center">
                      <div
                        className={`w-full max-w-6xl min-w-[800px] ${
                          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                        } rounded-2xl shadow-2xl border ${
                          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
                        } p-6 grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-200`}
                      >
                        {services.map((service, i) => (
                          <Link
                            to={service.href}
                            key={i}
                            onClick={(e) => handleServiceClick(e, service.href)}
                            className={`p-5 rounded-xl ${
                              theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                            } transition-all duration-200 text-left group/item flex items-start gap-3`}
                          >
                            <div
                              className={`p-2 rounded-lg ${
                                theme === 'dark'
                                  ? 'bg-gray-800 text-amber-400'
                                  : 'bg-orange-50 text-orange-600'
                              } group-hover/item:scale-110 transition-all duration-200 group-hover/item:bg-orange-100 group-hover/item:text-orange-700`}
                            >
                              {service.icon === 'code' && <Code className="w-5 h-5" />}
                              {service.icon === 'smartphone' && <Smartphone className="w-5 h-5" />}
                              {service.icon === 'layout' && <LayoutDashboard className="w-5 h-5" />}
                              {service.icon === 'cloud' && <Cloud className="w-5 h-5" />}
                              {service.icon === 'brain' && <BrainCircuit className="w-5 h-5" />}
                              {service.icon === 'database' && <Database className="w-5 h-5" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`font-semibold ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                                } group-hover/item:text-orange-500 transition-colors duration-200`}
                              >
                                {service.title}
                              </p>
                              <p
                                className={`text-sm ${
                                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                } mt-0.5`}
                              >
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
                
                <Link
                  to="#techStack"
                  onClick={(e) => handleNavClick(e, 'techStack', 'techStack')}
                  className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === 'techStack'
                      ? 'text-orange-500 dark:text-amber-400 font-semibold bg-orange-50 dark:bg-orange-900/20'
                      : 'text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-amber-400 hover:bg-orange-50/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  Tech Stack
                </Link>
                
                <Link
                  to="#contact"
                  onClick={(e) => handleNavClick(e, 'contact', 'contact')}
                  className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === 'contact'
                      ? 'text-orange-500 dark:text-amber-400 font-semibold bg-orange-50 dark:bg-orange-900/20'
                      : 'text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-amber-400 hover:bg-orange-50/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-100 hover:bg-gray-200'
                } transition-all duration-200 hover:scale-110`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2.5 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                } transition-all duration-200`}
              >
                {isMenuOpen ? (
                  <X className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} animate-in slide-in-from-top duration-200`}
          >
            <div className="px-4 py-6 space-y-2">
             

              {['home', 'features', 'techStack', 'contact'].map((item) => {
                const label = item.charAt(0).toUpperCase() + item.slice(1);
                const targetId = item === 'home' ? '' : item;
                
                return (
                  <a
                    key={item}
                    href={`#${targetId}`}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(e, item, targetId);
                      setIsMenuOpen(false);
                    }}
                  >
                    {label}
                  </a>
                );
              })}
               <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full flex justify-between items-center px-4 py-3 rounded-lg ${
                  theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                } font-medium transition-all duration-200`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="pl-4 space-y-1">
                  {services.map((service, i) => (
                    <Link
                      to={service.href}
                      key={i}
                      onClick={(e) => handleServiceClick(e, service.href)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:bg-gray-800 hover:text-gray-300'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      } text-sm transition-all duration-200 ${
                        location.pathname === service.href
                          ? theme === 'dark'
                            ? 'text-white bg-gray-800'
                            : 'text-gray-900 bg-gray-100'
                          : ''
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
