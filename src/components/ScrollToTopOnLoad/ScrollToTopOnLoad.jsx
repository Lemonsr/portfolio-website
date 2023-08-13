import React, { useEffect } from 'react';

const ScrollToTopOnLoad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTopOnLoad;