import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './style.css';
import './project.css';
import './contact.css';
import './skills.css';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="profile-container">
          <img src="/images/IMG_1463.JPG" alt="Kelly Kuoch" className="profile-image" />
        </div>
        <h1>Kelly Kuoch</h1>
        <h2>Front End Developer</h2>
        <nav className="nav-links">
          <a href="My Resume.pdf">Resume</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact me</a>
        </nav>
      </header>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>Email: yongkunkuoch12@gmail.com</p>
        <p>GitHub: <a href="https://github.com/KellyKuoch">Kelly Kuoch</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kelly-kuoch-b23739202/">Kelly Kuoch</a></p>
      </footer>
    </div>
  );
}

export default App;
