import React from 'react'
import reactLogo from "../Images/logo192.png";
import { FaGithub, FaLinkedin, FaNewspaper, FaGlobe, FaLayerGroup, FaRss } from 'react-icons/fa';

const About = () => {
  return (
    <div id='about'>
      {/* Hero Section */}
      <div className="about-hero">
        <h1>Global News Hub</h1>
        <p className="tagline">Your one-stop destination for world news</p>
      </div>

      {/* Features Section */}
      <div className="about-section">
        <h2>✨ Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaGlobe size={40} color="#00e1ff" />
            <h3>Multi-Country News</h3>
            <p>Get news from India, USA, UK, Australia, Canada, and Pakistan</p>
          </div>
          <div className="feature-card">
            <FaLayerGroup size={40} color="#cf2d55" />
            <h3>Category Based</h3>
            <p>Browse news by categories: Technology, Health, Business, Sports & more</p>
          </div>
          <div className="feature-card">
            <FaNewspaper size={40} color="#313552" />
            <h3>Real-time Updates</h3>
            <p>Stay updated with the latest headlines from around the world</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="about-section">
        <h2>🛠️ Built With</h2>
        <div className="tech-stack">
          <div className="tech-item">
            <img src={reactLogo} alt="React" id="react" />
            <span>React JS</span>
          </div>
          <div className="tech-item">
            <FaRss size={50} color="#4285f4" />
            <span>GNews API</span>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="about-section">
        <h2>🔗 Links</h2>
        <div className="about-links">
          <a href="https://gnews.io/" target="_blank" rel="noreferrer" className="about-btn api-btn">
            <FaRss size={20} /> News API
          </a>
          <a href="https://github.com/psaikeshav/NewsApp" target="_blank" rel="noreferrer" className="about-btn github-btn">
            <FaGithub size={20} /> View on GitHub
          </a>
        </div>
      </div>

      {/* Developer Section */}
      <div className="about-section developer-section">
        <h2>👨‍💻 Developer</h2>
        <div className="developer-card">
          <div className="developer-avatar">SK</div>
          <h3>Sai Keshav</h3>
          <p>Full Stack Developer</p>
          <a href="https://www.linkedin.com/in/saikeshav/" target="_blank" rel="noreferrer" className="linkedin-btn">
            <FaLinkedin size={20} /> Connect on LinkedIn
          </a>
        </div>
      </div>

      <footer className="about-footer">
        <p>Made with ❤️ using React JS</p>
      </footer>
    </div>
  )
}

export default About
