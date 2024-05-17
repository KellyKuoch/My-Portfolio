import React from 'react';
import '../project.css';

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-8">Projects</h1>
        <div className="card-list">
          <a href="https://shatfield4.github.io/cpsc349-project3/" className="card-item">
            <img src="./images/Tic_tac_toe.svg.png" alt="Board Game" className="project-image" />
            <div className="project-info">
              <span className="tag tag-developer">Web Game</span>
              <h3 className="project-title">5X5 Tic Tac Toe Game</h3>
              <p className="project-description">A web Tic Tac Toe game built using HTML, Tailwind CSS, and Vanilla Javascript for engaging gameplay.</p>
            </div>
          </a>
          <a href="https://khmerkademy.vercel.app/" className="card-item">
            <img src="./images/angkor.jpg" alt="KhmerKademy Language App" className="project-image" />
            <div className="project-info">
              <span className="tag tag-editor">E-Learning</span>
      
              <h3 className="project-title">Language Learning App (KhmerKademy)</h3>
              <p className="project-description">A user-friendly platform designed to enrich the language learning experience with diverse educational resources.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
