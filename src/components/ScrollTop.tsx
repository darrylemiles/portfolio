import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [pathname, search, hash]);

  return children || null;
};


export default ScrollTop;
