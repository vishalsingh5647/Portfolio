import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A complete e-commerce platform with shopping cart, payment, and admin dashboard features.',
      image: '/images/project1.jpg', // Replace with your actual image path
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'An interactive portfolio website with animations and responsive design to showcase work.',
      image: '/images/project2.jpg', // Replace with your actual image path
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop and real-time collaboration features.',
      image: '/images/project3.jpg', // Replace with your actual image path
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A modern social media dashboard with real-time analytics, user engagement metrics, and content management.',
      image: '/images/project4.jpg', // Replace with your actual image path
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Weather Forecast App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: '/images/project5.jpg', // Replace with your actual image path
      technologies: ['React', 'API Integration', 'Chart.js'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Blog CMS Platform',
      description: 'A full-featured content management system for bloggers with markdown support and SEO optimization.',
      image: '/images/project6.jpg', // Replace with your actual image path
      technologies: ['Next.js', 'Prisma', 'MySQL'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  <a href={project.liveLink} className="btn-demo" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="btn-github" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
