import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Vue.js',
    'Angular',
    'Node.js',
    'Python',
    'Git',
    'Responsive Design',
    'UI/UX Design'
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm Vishal Singh, a passionate Web Developer, Front-end Developer, and UI/UX Designer. 
              I specialize in crafting pixel-perfect, high-performance web applications using cutting-edge 
              technologies like React, Vue, and Angular. My goal is to transform innovative ideas into 
              elegant digital experiences that delight users and solve real-world problems.
            </p>
            
            <h3 className="skills-title">Skills & Technologies</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="about-code">
            <div className="code-window">
              <div className="code-header">
                <span className="code-dot"></span>
                <span className="code-dot"></span>
                <span className="code-dot"></span>
              </div>
              <pre className="code-content">
                <code>
{`const developer = {
  name: 'Vishal Singh',
  roles: ['Web Developer', 
          'Front-end Developer', 
          'UI/UX Designer'],
  passion: 'Creating elegant digital experiences 
  through cutting-edge technologies',
  location: 'Noida, India',
  available: true
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
