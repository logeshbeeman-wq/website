import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileApps from './pages/services/MobileApps';
import AISolutions from './pages/services/AISolutions';
import CloudSolutions from './pages/services/CloudSolutions';
import UIUXDesign from './pages/services/UIUXDesign';
import DataEngineering from './pages/services/DataEngineering';
import { Services } from './components/Services';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { saveScrollPosition, restoreScrollPosition } from './utils/scrollUtils';

const Home = () => {
  const location = useLocation();

  // Save scroll position when leaving the page
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        saveScrollPosition(location.pathname + location.hash);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Restore scroll position when component mounts or hash changes
  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          restoreScrollPosition(location.pathname + location.hash);
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Team />
      <Contact />
    </>
  );
};

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

const App = () => {
  const location = useLocation();
  
  // Save scroll position when navigating away
  useEffect(() => {
    return () => {
      if (location.pathname === '/') {
        saveScrollPosition(location.pathname + (location.hash || ''));
      }
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/ai-ml" element={<AISolutions />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/data-engineering" element={<DataEngineering />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
