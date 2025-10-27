import React, { useState, useRef, useEffect } from 'react';
import './HeroSection.css';

const TechIcon = ({ icon, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [pausedPosition, setPausedPosition] = useState(null);
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    if (iconRef.current) {
      const computedStyle = window.getComputedStyle(iconRef.current);
      const transform = computedStyle.transform;
      setPausedPosition(transform);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPausedPosition(null);
  };

  return (
    <div 
      ref={iconRef}
      className={`tech-icon tech-icon-${index} ${isHovered ? 'paused' : ''}`}
      style={{
        backgroundColor: isHovered ? color : 'rgba(255, 255, 255, 0.1)',
        animationPlayState: isHovered ? 'paused' : 'running',
        transform: pausedPosition || undefined,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className={icon} style={{color: isHovered ? '#1a0a0a' : color}}></i>
    </div>
  );
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(true);
  
  const titles = ['Web Developer', 'Front-end Developer', 'UI/UX Designer'];
  const subtitles = [
    'Passionate about crafting pixel-perfect, high-performance web applications. Transforming ideas into elegant digital experiences through cutting-edge technologies and innovative solutions. 🚀',
    'Specializing in React, Vue, and modern JavaScript frameworks. Building responsive, scalable, and user-centric interfaces that deliver exceptional digital experiences. 💻',
    'Creating intuitive and visually stunning user interfaces. Combining aesthetics with functionality to design seamless user experiences that engage and delight. 🎨'
  ];
  
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let timeout;
    
    if (!isDeleting) {
      // Typing effect
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, 100);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting effect
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  // Fade out subtitle when starting to delete
  useEffect(() => {
    if (isDeleting && displayText.length === titles[currentIndex].length) {
      setSubtitleVisible(false);
    }
  }, [isDeleting, displayText, currentIndex, titles]);

  // Fade in subtitle when new title starts
  useEffect(() => {
    if (!isDeleting && displayText.length === 1) {
      setTimeout(() => {
        setSubtitleVisible(true);
      }, 300);
    }
  }, [isDeleting, displayText]);
  
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm Vishal Singh 👋</p>
          <h1 className="hero-title">
            {displayText}
            <span className="cursor">|</span>
          </h1>
          <p className={`hero-subtitle ${subtitleVisible ? 'visible' : 'hidden'}`}>
            {subtitles[currentIndex]}
          </p>
          <button className="download-btn">DOWNLOAD CV</button>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vishal-singh9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/919335404282" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://github.com/vishalsingh5647" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-container">
            <div className="avatar-glow"></div>
            <div className="avatar">
              <img src="/images/avtar.jpg" alt="Vishal Singh" className="avatar-image" />
            </div>
            <TechIcon icon="fab fa-html5" color="#E34F26" index={1} />
            <TechIcon icon="fab fa-react" color="#61DAFB" index={2} />
            <TechIcon icon="fab fa-vuejs" color="#4FC08D" index={3} />
            <TechIcon icon="fab fa-angular" color="#DD0031" index={4} />
            <TechIcon icon="fab fa-node" color="#339933" index={5} />
            <TechIcon icon="fab fa-python" color="#3776AB" index={6} />
            <TechIcon icon="fab fa-github" color="#181717" index={7} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;