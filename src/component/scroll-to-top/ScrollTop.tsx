"use client"
import React, { useEffect, useState } from 'react';

const ScrollTop = () => {
    const isBrowser = () => typeof window !== 'undefined'; 
    const [isVisible, setIsVisible] = useState(false);

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div>
       <div id="gotoTop" className={`... scrollToTopButton ${isVisible ? 'visible' : ''} icon-angle-up`} style={{display: "block"}} onClick={scrollToTop}>
            <i className="fa-solid fa-chevron-up"></i>
       </div>
    </div>
  )
}

export default ScrollTop