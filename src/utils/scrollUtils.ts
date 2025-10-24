// Save scroll position for a specific route
export const saveScrollPosition = (path: string) => {
  const scrollY = window.scrollY;
  sessionStorage.setItem(`scrollPos_${path}`, scrollY.toString());
};

// Restore scroll position for a specific route
export const restoreScrollPosition = (path: string) => {
  const savedScroll = sessionStorage.getItem(`scrollPos_${path}`);
  if (savedScroll !== null) {
    window.scrollTo(0, parseInt(savedScroll));
  }
};

// Clear saved scroll position for a specific route
export const clearScrollPosition = (path: string) => {
  sessionStorage.removeItem(`scrollPos_${path}`);
};
