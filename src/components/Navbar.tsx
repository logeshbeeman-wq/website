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
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { services } from '../data/service';

const Navbar = () => {
 const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Determine active menu
  const isServicePage = location.pathname.startsWith('/services');
  const currentHash = location.hash ? location.hash.substring(1) : '';

  const isActive = (item: string) => {
    if (isServicePage) {
      return item === 'services';
    }
    if (item === 'home') {
      return location.pathname === '/' && !currentHash;
    }
    return currentHash === item;
  };

  const handleNavClick = (item: string, targetId: string) => {
    if (item === 'services') {
      navigate('/services');
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      setIsMenuOpen(false);
      return;
    }

    if (item === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#');
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg group-hover:shadow-violet-500/50 transition-all duration-300 group-hover:scale-110">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                TechFlow
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Services Dropdown */}
              <div className="relative group">
                <a
                  href="#services"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-1 font-medium transition-all duration-200 ${
                    isServicePage
                      ? 'text-white bg-gray-800'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </a>

                {isServicesOpen && (
                  <div
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
                                  ? 'bg-gray-800 text-violet-400'
                                  : 'bg-violet-50 text-violet-600'
                              } group-hover/item:scale-110 transition-transform duration-200`}
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
                                } group-hover/item:text-violet-500 transition-colors duration-200`}
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
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              {['home', 'features', 'team', 'contact'].map((item) => {
                const isActive =
                  (!isServicePage &&
                    ((item === 'home' && !currentHash) || currentHash === item)) ||
                  (isServicePage && item === 'features');

                const targetId = item === 'home' ? '' : item;

                return (
                  <a
                    key={item}
                    href={`#${targetId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item, targetId);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? theme === 'dark'
                          ? 'text-white bg-gray-800'
                          : 'text-gray-900 bg-gray-100'
                        : theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                );
              })}
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

              {['Features', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-3 rounded-lg ${
                    theme === 'dark' ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                  } font-medium transition-all duration-200`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.toLowerCase(), item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
