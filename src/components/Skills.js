import React from 'react';
import '../skills.css';

function Skills() {
  return (
    <div className="skills-container" id="skills">
      <h2>My Skills</h2>
      <div className="skill">
        <div className="skill-name">HTML</div>
        <div className="skill-bar"><div className="skill-perc html"></div></div>
      </div>
      <div className="skill">
        <div className="skill-name">CSS</div>
        <div className="skill-bar"><div className="skill-perc css"></div></div>
      </div>
      <div className="skill">
        <div className="skill-name">JavaScript</div>
        <div className="skill-bar"><div className="skill-perc javascript"></div></div>
      </div>
      <div className="skill">
        <div className="skill-name">Python</div>
        <div className="skill-bar"><div className="skill-perc python"></div></div>
      </div>
    </div>
  );
}

export default Skills;
