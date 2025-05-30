import React, { useEffect, useRef , useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && cursorFollowerRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        cursorFollowerRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    };

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.width = `${scrollPercent}%`;
      }
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
          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
            <li className="nav-item"><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li className="nav-item"><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li className="nav-item"><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li className="nav-item"><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li className="nav-item"><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li className="nav-item"><a href="#languages" onClick={() => setIsMenuOpen(false)}>Languages</a></li>
            <li className="nav-item"><a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a></li>
            <li className="nav-item"><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li className="nav-item"><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
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
          {/* Ayat Workflow Platform */}
          <div className="project-card">
            <h3 className="project-title">Ayat Workflow</h3>
            <p className="project-description">Robust workflow management platform designed to handle and orchestrate complex processes across various task types and operational flows. Users can define, execute, and monitor multi-step workflows, improving efficiency and streamlining operations.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">GraphQL</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Prisma</span>
            </div>
          </div>

          {/* Ayat LIMS System */}
          <div className="project-card">
            <h3 className="project-title">Ayat LIMS</h3>
            <p className="project-description">Laboratory Information Management System (LIMS) streamlining laboratory operations with sample tracking, experiments, and data management. Features enhanced efficiency, quality assurance, improved accuracy, and comprehensive data management.</p>
            <div className="project-tech">
              <span className="tech-tag">GraphQL</span>
              <span className="tech-tag">Apollo</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Prisma</span>
              <span className="tech-tag">TypeScript</span>
            </div>
            <a href="https://test-lims-test-setup-front.vercel.app/auth/login" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Ayat HR System */}
          <div className="project-card">
            <h3 className="project-title">Ayat HR</h3>
            <p className="project-description">Custom HR information system for Ayat Group with comprehensive employee management, attendance tracking, leave management, and real-time communication features.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Prisma</span>
              <span className="tech-tag">Socket.IO</span>
            </div>
            <a href="https://ayt-hr-front-prodv.vercel.app/en/login" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Refee E-Commerce */}
          <div className="project-card">
            <h3 className="project-title">Refee</h3>
            <p className="project-description">Comprehensive e-commerce platform with PayLink payment integration and complete admin control panel. Features include product management, user accounts, order processing, and secure transactions.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">PayLink</span>
              <span className="tech-tag">Socket.IO</span>
            </div>
            <a href="https://refee.sa/" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Ersa Real Estate */}
          <div className="project-card">
            <h3 className="project-title">Ersa Real Estate</h3>
            <p className="project-description">Dynamic real estate platform with admin panel, user statistics dashboard, and installment payment management for stakeholders including property owners, buyers, lessors, and marketers.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Socket.IO</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Express.js</span>
            </div>
            <a href="https://realestate-plateform.ersaiss.com/en" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Profilaat Platform */}
          <div className="project-card">
            <h3 className="project-title">Profilaat</h3>
            <p className="project-description">LinkedIn-style platform connecting freelancers and employers, facilitating project discovery and seamless communication between parties. Features job posting, application management, and user profiles.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Prisma</span>
            </div>
            <a href="https://mawared-employment-front.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Ayat Portal */}
          <div className="project-card">
            <h3 className="project-title">Ayat Portal</h3>
            <p className="project-description">Centralized user management platform with MFA security, managing accounts and permissions across multiple affiliated websites. Features streamlined user administration and enhanced access control.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Socket.IO</span>
              <span className="tech-tag">AWS S3</span>
            </div>
            <a href="https://dev-ayt-portal-user-management-front.vercel.app" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Ayat Chat System */}
          <div className="project-card">
            <h3 className="project-title">Ayat Chat</h3>
            <p className="project-description">Real-time chat platform supporting one-to-one and group conversations with instant notifications and message synchronization. Features include real-time updates and comprehensive chat functionality.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Socket.IO</span>
              <span className="tech-tag">Mongoose</span>
            </div>
          </div>

          {/* Insnd Finance */}
          <div className="project-card">
            <h3 className="project-title">Insnd</h3>
            <p className="project-description">Comprehensive finance management platform handling business operations from salary administration to payment processing. Features loan request management and financial oversight tools.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>

          {/* Medica Platform */}
          <div className="project-card">
            <h3 className="project-title">Medica</h3>
            <p className="project-description">Medical industry platform with integrated e-store, supply chain systems, and comprehensive admin controls for managing multiple integrated sites. Features tailored for medical industry needs.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Unit Testing</span>
            </div>
          </div>

          {/* Mawared E-store */}
          <div className="project-card">
            <h3 className="project-title">Mawared E-store</h3>
            <p className="project-description">Industrial platform with integrated e-commerce and supply chain management features. Includes comprehensive admin panel for centralized control of multiple interconnected systems.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Unit Testing</span>
              <a href="https://maward-e-store-react-front.vercel.app/en" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>

            </div>
          </div>

          {/* Sunnah Project */}
          <div className="project-card">
            <h3 className="project-title">Sunnah Project</h3>
            <p className="project-description">Comprehensive platform for Prophet's Hadiths with multilingual support, chat system, and cross-platform accessibility. Features include real-time communication and content management system.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Flutter</span>
              <span className="tech-tag">Socket.IO</span>
            </div>
          </div>

          {/* Cup Tracking App */}
          <div className="project-card">
            <h3 className="project-title">Cup Tracking</h3>
            <p className="project-description">Deep learning-based object tracking application for tracking cups in video streams. Features real-time tracking, detection, and performance optimization.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Tkinter</span>
              <span className="tech-tag">YOLO v7</span>
              <span className="tech-tag">Deep Sort</span>
            </div>
          </div>

          {/* Face Detection App */}
          <div className="project-card">
            <h3 className="project-title">Face Detection</h3>
            <p className="project-description">Real-time facial expression detection application classifying happy and sad emotions. Features immediate visual feedback and optimized performance.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Tkinter</span>
              <span className="tech-tag">NumPy</span>
              <span className="tech-tag">YOLO v7</span>
            </div>
          </div>

          {/* Movieno */}
          <div className="project-card">
            <h3 className="project-title">Movieno</h3>
            <p className="project-description">Movie information website with latest releases, news, and detailed movie information. Features comprehensive movie catalog and real-time updates.</p>
            <div className="project-tech">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>

          {/* Notaty Notes */}
          <div className="project-card">
            <h3 className="project-title">Notaty Notes</h3>
            <p className="project-description">Web-based note management application with CRUD operations for personal notes. Features intuitive interface for managing and organizing notes.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>

          {/* English Memorize System */}
          <div className="project-card">
            <h3 className="project-title">English Memorize System</h3>
            <p className="project-description">Desktop application for memorizing English vocabulary with interactive learning features. Designed to enhance the process of learning new words.</p>
            <div className="project-tech">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">Qt</span>
            </div>
          </div>

          {/* Taskforce */}
          <div className="project-card">
            <h3 className="project-title">Taskforce</h3>
            <p className="project-description">Task management website with real-time updates and collaborative features for tracking progress and managing follow-ups. Features comprehensive project management tools.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Socket.IO</span>
            </div>
            <a href="https://taskforce.ersaiss.com/" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Auto Highline */}
          <div className="project-card">
            <h3 className="project-title">Auto Highline</h3>
            <p className="project-description">Car website with integrated admin panel for comprehensive control over content and operations. Features efficient management of website functionalities and data.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">Firebase</span>
            </div>
            <a href="https://toys-a6321.web.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Ayat Donation Platform */}
          <div className="project-card">
            <h3 className="project-title">Ayat Donation Platform</h3>
            <p className="project-description">Developed a comprehensive platform for Ayat Company, including a user-facing website and an admin panel, to manage all donation-related operations efficiently. The system streamlines project donations, providing users with a seamless experience and enabling administrators to oversee and control operations effectively.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">AWS</span>
            </div>
            <a href="https://ayt-donations-site-front.vercel.app/en" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Tickety */}
          <div className="project-card">
            <h3 className="project-title">Tickety</h3>
            <p className="project-description">Ticket reservation system with QR code generation and validation. Features include user detail collection and secure ticket verification for events.</p>
            <div className="project-tech">
              <span className="tech-tag">Vue.js</span>
              <span className="tech-tag">Firebase</span>
            </div>
          </div>

          {/* Gap Analysis */}
          <div className="project-card">
            <h3 className="project-title">Gap Analysis</h3>
            <p className="project-description">Survey platform for collecting citizen feedback on global digital transformation initiatives. Helps gather valuable insights for future strategies.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
            </div>
            <a href="https://gapanalysis.ersaiss.com/#/" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Akhawen Real Estate */}
          <div className="project-card">
            <h3 className="project-title">Akhawen Real Estate</h3>
            <p className="project-description">Real estate platform with admin panel and dashboard for property management and installment tracking. Features comprehensive management tools for all stakeholders.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">AWS</span>
            </div>
            <a href="https://site-akhawen.ersaiss.com/ar" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Anjez */}
          <div className="project-card">
            <h3 className="project-title">Anjez</h3>
            <p className="project-description">Real-time task management application with comprehensive follow-up capabilities and team collaboration features. Includes real-time updates and notifications.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Socket.IO</span>
            </div>
          </div>

          {/* Ball Game */}
          <div className="project-card">
            <h3 className="project-title">Ball Game</h3>
            <p className="project-description">Interactive desktop game where players collect points by hitting obstacles with dynamic ball movement. Features engaging gameplay mechanics, user interface, and scoring system.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Tkinter</span>
            </div>
          </div>

          {/* University System */}
          <div className="project-card">
            <h3 className="project-title">University System</h3>
            <p className="project-description">Command-line application for managing student records with comprehensive CRUD operations. Features academic data management including GPA tracking.</p>
            <div className="project-tech">
              <span className="tech-tag">C++</span>
              <span className="tech-tag">SQLite</span>
            </div>
          </div>

          {/* MLNC Platform */}
          <div className="project-card">
            <h3 className="project-title">MLNC Platform</h3>
            <p className="project-description">Industrial platform with integrated e-commerce, supply chain, and admin control systems. Features unified interface for operations management.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Unit Testing</span>
            </div>
            <a href="https://dev-mlnc-admin-front.vercel.app/#" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Maward Supply Chain */}
          <div className="project-card">
            <h3 className="project-title">Maward Supply Chain</h3>
            <p className="project-description">Developed a comprehensive industrial platform featuring a centralized admin panel to manage and oversee multiple interconnected systems. This platform integrates landing pages, an e-commerce store, and supply chain management functionalities, supporting full-cycle actions and providing a unified control interface for all operations.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Unit Testing</span>
            </div>
            <a href="https://supply-chain-front2024.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* MLNC Supply Chain */}
          <div className="project-card">
            <h3 className="project-title">MLNC Supply Chain</h3>
            <p className="project-description">Comprehensive supply chain management system with centralized admin control. Features streamlined operations and inventory management.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Unit Testing</span>
            </div>
            <a href="https://dev-mlnc-supply-chain-front.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* MLNC E-commerce */}
          <div className="project-card">
            <h3 className="project-title">MLNC E-commerce</h3>
            <p className="project-description">Full-featured e-commerce platform with comprehensive admin controls and inventory management. Includes standard e-commerce functionalities.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Unit Testing</span>
            </div>
            <a href="hhttps://dev-mlnc-estore-front.vercel.app/en" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* LIMS Portal */}
          <div className="project-card">
            <h3 className="project-title">LIMS Portal</h3>
            <p className="project-description">Secure centralized user management platform for Laboratory Information Management System. Features license-based access control and real-time updates.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">AWS S3</span>
              <span className="tech-tag">Socket.IO</span>
            </div>
            <a href="https://dev-lims-portal-user-management-front.vercel.app/auth/login" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>

          {/* Ayat Inventory */}
          <div className="project-card">
            <h3 className="project-title">Ayat Inventory</h3>
            <p className="project-description">Warehouse Management System for streamlining inventory storage and movement. Features include warehouse permits management and inventory tracking.</p>
            <div className="project-tech">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">GraphQL</span>
              <span className="tech-tag">Apollo</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">TypeScript</span>
            </div>
            <a href="https://dev-lims-inventory-front.vercel.app/auth/login" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <h3 className="category-title">Programming Languages</h3>
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
                <div className="skill-icon">🐘</div>
                <div className="skill-name">PHP</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🌐</div>
                <div className="skill-name">HTML</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🎨</div>
                <div className="skill-name">CSS</div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Backend Technologies</h3>
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
                <div className="skill-icon">🐱</div>
                <div className="skill-name">Nest.js</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🚀</div>
                <div className="skill-name">Laravel</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📡</div>
                <div className="skill-name">WebSocket</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📋</div>
                <div className="skill-name">GraphQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🚀</div>
                <div className="skill-name">Apollo</div>
              </div>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Databases & ORMs</h3>
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
                <div className="skill-icon">🐬</div>
                <div className="skill-name">MySQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📊</div>
                <div className="skill-name">Prisma</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🍃</div>
                <div className="skill-name">Mongoose</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🗄️</div>
                <div className="skill-name">SQL</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📑</div>
                <div className="skill-name">NoSQL</div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Frontend & UI</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">⚛️</div>
                <div className="skill-name">React</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📝</div>
                <div className="skill-name">HTML</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🎨</div>
                <div className="skill-name">CSS</div>
              </div>
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">DevOps & Cloud</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">☁️</div>
                <div className="skill-name">AWS Cloud Services</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🐳</div>
                <div className="skill-name">Docker</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔥</div>
                <div className="skill-name">Firebase</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔄</div>
                <div className="skill-name">CI/CD</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🌐</div>
                <div className="skill-name">Apache</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📦</div>
                <div className="skill-name">NPM</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🎼</div>
                <div className="skill-name">Composer</div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Development Tools</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">📝</div>
                <div className="skill-name">VS Code</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">💻</div>
                <div className="skill-name">Visual Studio</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📡</div>
                <div className="skill-name">Postman</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔍</div>
                <div className="skill-name">Git & Github</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📊</div>
                <div className="skill-name">Microsoft Office Suite</div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Software Engineering</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">🏗️</div>
                <div className="skill-name">Design Patterns</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔄</div>
                <div className="skill-name">OOP</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🗃️</div>
                <div className="skill-name">Database Design</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📐</div>
                <div className="skill-name">Software Design</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🧪</div>
                <div className="skill-name">Unit Testing</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🔍</div>
                <div className="skill-name">Debugging</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">📊</div>
                <div className="skill-name">Data Structures</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🧮</div>
                <div className="skill-name">Algorithms</div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Professional Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">💡</div>
                <div className="skill-name">Problem Solving</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">🎯</div>
                <div className="skill-name">Agile</div>
              </div>
              <div className="skill-item">
                <div className="skill-icon">💭</div>
                <div className="skill-name">Creative Thinking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="section">
        <h2 className="section-title">Languages</h2>
        <div className="languages-container">
          <div className="language-card">
            <div className="language-icon">🌍</div>
            <div className="language-content">
              <h3 className="language-name">Arabic</h3>
              <div className="language-level">Native Speaker</div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>

          <div className="language-card">
            <div className="language-icon">🌎</div>
            <div className="language-content">
              <h3 className="language-name">English</h3>
              <div className="language-level">Professional Working Proficiency</div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-container">
          <div className="certification-card">
            <div className="certification-icon">🎓</div>
            <div className="certification-content">
              <h3 className="certification-name">CS50: Computer Science</h3>
              <div className="certification-issuer">Harvard University</div>
              <p className="certification-description">Comprehensive computer science fundamentals including algorithms, data structures, and software development principles.</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-icon">💻</div>
            <div className="certification-content">
              <h3 className="certification-name">EgFwd Embedded Professional Track</h3>
              <div className="certification-issuer">Udacity</div>
              <p className="certification-description">Advanced embedded systems development focusing on ARM architecture and real-time operating systems.</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-icon">⚡</div>
            <div className="certification-content">
              <h3 className="certification-name">Complete Node.js Developer</h3>
              <div className="certification-issuer">Udemy</div>
              <p className="certification-description">Comprehensive Node.js development including Express.js, APIs, databases, testing, and deployment.</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-icon">🌐</div>
            <div className="certification-content">
              <h3 className="certification-name">Computer Networks Fundamentals</h3>
              <div className="certification-issuer">ITI Maharatech</div>
              <p className="certification-description">Network protocols, architecture, and security principles for modern distributed systems.</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-icon">🐍</div>
            <div className="certification-content">
              <h3 className="certification-name">Programming for Everybody (Python)</h3>
              <div className="certification-issuer">Coursera</div>
              <p className="certification-description">Python programming fundamentals covering core concepts, data structures, and best practices.</p>
            </div>
          </div>

          <div className="certification-card">
            <div className="certification-icon">📱</div>
            <div className="certification-content">
              <h3 className="certification-name">Digital Marketing Professional</h3>
              <div className="certification-issuer">Udacity</div>
              <p className="certification-description">Strategic digital marketing techniques, analytics, and campaign management.</p>
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
              <h3 className="education-degree">Relevant Coursework</h3>
              <ul className="course-list">
                <li>Data Structures and Algorithms</li>
                <li>Object-Oriented Programming</li>
                <li>Database Management Systems</li>
                <li>Software Engineering</li>
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