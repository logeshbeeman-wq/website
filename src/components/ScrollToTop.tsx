import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If there's a hash and we're not on the home page, navigate to home first
    if (hash && pathname !== '/') {
      navigate(`/${hash}`, { replace: true });
      return;
    }

    const scrollToElement = () => {
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80; // Height of your navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          // Check if we're already at the target position (within 5px)
          const currentPosition = window.scrollY;
          if (Math.abs(currentPosition - offsetPosition) < 5) {
            return; // Already at the target position, do nothing
          }
          
          // Only scroll if not already at the target position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update URL with hash after scroll
          window.history.replaceState(null, '', `#${id}`);
        }
      } else if (pathname === '/' && window.scrollY > 0) {
        // Only scroll to top on home page if not already at top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    // Small delay to ensure the page has rendered
    const timer = setTimeout(scrollToElement, 10);
    return () => clearTimeout(timer);
  }, [pathname, hash, navigate]);

  return null;
}
