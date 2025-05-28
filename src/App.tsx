import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorFollowerRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
        
        setTimeout(() => {
          if (cursorFollowerRef.current) {
            cursorFollowerRef.current.style.left = e.clientX + 'px';
            cursorFollowerRef.current.style.top = e.clientY + 'px';
          }
        }, 80);
      }
    };

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${scrollPercent}%`;
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={cursorFollowerRef}></div>
      
      {/* Scroll Progress */}
      <div className="scroll-progress" ref={scrollProgressRef}></div>
      
      {/* Background Animation */}
      <div className="bg-animation"></div>
      
      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element">⚡</div>
        <div className="floating-element">🚀</div>
        <div className="floating-element">💎</div>
        <div className="floating-element">🔥</div>
        <div className="floating-element">✨</div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="logo">KS.DEV</div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#experience">Experience</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#skills">Skills</a></li>
            <li className="nav-item"><a href="#languages">Languages</a></li>
            <li className="nav-item"><a href="#education">Education</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-greeting">👋 Hello, World!</div>
            <h1 className="hero-title">I'm Karim Saeed</h1>
            <p className="hero-subtitle">Backend Software Engineer crafting scalable server-side solutions with modern technologies and innovative approaches.</p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">Explore Work</a>
              <a href="#contact" className="btn btn-secondary">Let's Talk</a>
            </div>
          </div>
          
          <div className="profile-card">
            <div className="profile-avatar"></div>
            <h3 className="profile-name">Karim Saeed Elrashidy</h3>
            <p className="profile-role">Backend Software Engineer</p>
            <div className="profile-location">
              <MapPin size={18} className="icon" />
              <span>Suez, Egypt</span>
            </div>
            <div className="profile-skills">
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express.js</span>
              <span className="skill-badge">GraphQL</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">PostgreSQL</span>
              <span className="skill-badge">AWS</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-content">
            <p>Experienced backend developer with over 4 years of expertise in designing and implementing server-side architecture for enterprise applications. Passionate about creating efficient, scalable solutions with modern technologies.</p>
            <p>Specialized in Node.js, Express, GraphQL, MongoDB, and PostgreSQL with extensive experience in database design, API development, and performance optimization. I focus on delivering high-quality, maintainable code that solves real business problems.</p>
            <p>Proven track record of leading complex projects from conception to completion while collaborating effectively with cross-functional teams. Experienced in e-commerce platforms, workflow management systems, and real estate solutions.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">Aug 2021 – Present</div>
              <h3 className="timeline-title">Backend Software Engineer</h3>
              <div className="timeline-company">SQM Company, Suez, Egypt</div>
              <p className="timeline-description">
                Lead backend development for enterprise applications, implementing scalable cloud solutions with focus on performance and security.
              </p>
              <ul className="timeline-achievements">
                <li>Designed and implemented over 15 major projects including e-commerce platforms, HR systems, and real estate portals</li>
                <li>Developed robust APIs using Node.js, Express, and GraphQL serving millions of requests</li>
                <li>Integrated payment solutions (PayLink) and third-party services into applications</li>
                <li>Implemented efficient database solutions with MongoDB and PostgreSQL</li>
                <li>Created comprehensive documentation and conducted code reviews</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">Oct 2019 – Aug 2021</div>
              <h3 className="timeline-title">Backend Developer</h3>
              <div className="timeline-company">Freelance, Remote</div>
              <p className="timeline-description">
                Worked on various projects as a freelance developer, focusing on backend solutions with Node.js and database management.
              </p>
              <ul className="timeline-achievements">
                <li>Built RESTful and GraphQL APIs for web and mobile applications</li>
                <li>Implemented authentication and authorization systems</li>
                <li>Created database schemas and optimized queries for performance</li>
                <li>Collaborated with frontend developers to ensure seamless integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Ayat Workflow Platform</h3>
            <p className="project-description">Robust workflow management platform handling complex processes with multi-step workflow orchestration. Reduced process time by 40% and improved organizational efficiency.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">GraphQL</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Prisma</span>
            </div>
            <a href="https://taskforce.ersaiss.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">Refee E-Commerce</h3>
            <p className="project-description">Comprehensive e-commerce platform scaled to handle 5M+ concurrent users with PayLink payment integration and complete admin control panel for inventory and order management.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">PayLink</span>
              <span className="tech-tag">Socket.io</span>
            </div>
            <a href="https://refee.sa/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">Ayat LIMS System</h3>
            <p className="project-description">Laboratory Information Management System streamlining lab operations with enhanced efficiency, quality assurance, and real-time data management capabilities.</p>
            <div className="project-tech">
              <span className="tech-tag">GraphQL</span>
              <span className="tech-tag">Apollo</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Prisma</span>
              <span className="tech-tag">Node.js</span>
            </div>
            <a href="https://test-lims-test-setup-front.vercel.app/auth/login" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">Ersa Real Estate</h3>
            <p className="project-description">Dynamic real estate platform with admin panel, user statistics dashboard, and installment payment management for buyers, sellers, and administrators.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Socket.io</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Express.js</span>
            </div>
            <a href="https://realestate-plateform.ersaiss.com/en" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">Ayat HR System</h3>
            <p className="project-description">Custom Human Resources information system with comprehensive employee management, attendance tracking, leave management, and real-time communication features.</p>
            <div className="project-tech">
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Prisma</span>
              <span className="tech-tag">Socket.io</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">GraphQL</span>
            </div>
            <a href="https://ayt-hr-front-prodv.vercel.app/en/login" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">Profilaat Platform</h3>
            <p className="project-description">Comprehensive freelance and employment platform connecting freelancers and employers, with project discovery features, skill matching, and secure payment integration.</p>
            <div className="project-tech">
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Prisma</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">JWT</span>
            </div>
            <a href="https://mawared-employment-front.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <h3 className="category-title">Backend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">⚙️</div>
                <div className="skill-name">Node.js</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔌</div>
                <div className="skill-name">Express.js</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📋</div>
                <div className="skill-name">GraphQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔄</div>
                <div className="skill-name">REST APIs</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔒</div>
                <div className="skill-name">Authentication</div>
              </div>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Databases</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">🍃</div>
                <div className="skill-name">MongoDB</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🐘</div>
                <div className="skill-name">PostgreSQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📊</div>
                <div className="skill-name">Prisma</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🗄️</div>
                <div className="skill-name">SQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📑</div>
                <div className="skill-name">Redis</div>
              </div>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">DevOps & Cloud</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">☁️</div>
                <div className="skill-name">AWS</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🐳</div>
                <div className="skill-name">Docker</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔄</div>
                <div className="skill-name">CI/CD</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📊</div>
                <div className="skill-name">Monitoring</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🚀</div>
                <div className="skill-name">Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="section">
        <h2 className="section-title">Programming Languages</h2>
        <div className="skills-container">
          <div className="skills-category">
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">📜</div>
                <div className="skill-name">JavaScript</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔷</div>
                <div className="skill-name">TypeScript</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🐍</div>
                <div className="skill-name">Python</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔧</div>
                <div className="skill-name">Bash</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-container">
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div className="education-content">
              <h3 className="education-degree">Bachelor of Computer Science</h3>
              <div className="education-school">Suez Canal University</div>
              <div className="education-date">2015 - 2019</div>
              <p className="education-description">Studied computer science fundamentals, algorithms, data structures, and software engineering principles.</p>
            </div>
          </div>
          
          <div className="education-card">
            <div className="education-icon">📚</div>
            <div className="education-content">
              <h3 className="education-degree">Professional Certifications</h3>
              <ul className="certification-list">
                <li>AWS Certified Developer Associate</li>
                <li>MongoDB Certified Developer</li>
                <li>Node.js Application Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <Mail size={32} />
            </div>
            <h3 className="contact-title">Email</h3>
            <a href="mailto:karimsaeed816@gmail.com" className="contact-info">karimsaeed816@gmail.com</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <Phone size={32} />
            </div>
            <h3 className="contact-title">Phone</h3>
            <a href="tel:+201550527057" className="contact-info">+201550527057</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <Linkedin size={32} />
            </div>
            <h3 className="contact-title">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/kareem-saeed-a4869a195/" target="_blank" rel="noopener noreferrer" className="contact-info">Karim Saeed</a>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <Github size={32} />
            </div>
            <h3 className="contact-title">GitHub</h3>
            <a href="https://github.com/KarimSaeed1" target="_blank" rel="noopener noreferrer" className="contact-info">KarimSaeed1</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Karim Saeed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;