import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const isInitialMount = useRef(true);
  const lastPath = useRef(pathname + hash);

  // Handle hash-based scrolling with custom offset
  useEffect(() => {
    if (!hash) return;

    const scrollToElement = () => {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Check if mobile view (adjust breakpoint if needed)
        const isMobile = window.innerWidth < 768;
        
        // Different offsets for mobile and desktop
        const headerOffset = isMobile ? 150 : 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Smooth scroll to the element with offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    const timer = setTimeout(scrollToElement, 100);
    return () => clearTimeout(timer);
  }, [hash]);

  // Scroll to top on pathname change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
