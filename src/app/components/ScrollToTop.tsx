import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * ScrollToTop Component
 * Automatically scrolls to top on route changes
 * Ensures consistent user experience across all page navigations
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately and forcefully when route changes
    // Use multiple methods to ensure it works
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}