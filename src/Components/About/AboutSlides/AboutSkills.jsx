import React from 'react';
import './AboutSkills.css';

function AboutSkills() {
  // Tableau des compétences avec leur niveau
  const skills = [
    { name: 'HTML', level: 90, description: 'Maîtrise du HTML5 et des bonnes pratiques.' },
    { name: 'CSS', level: 85, description: 'Création de layouts responsives et animations CSS.' },
    { name: 'JavaScript', level: 80, description: 'Programmation dynamique avec ES6+.' },
    { name: 'React', level: 75, description: 'Création d’applications interactives avec React.' },
    { name: 'Node.js', level: 70, description: 'Développement backend avec Node.js et Express.' },
    { name: 'Git', level: 95, description: 'Gestion de version avec Git et GitHub.' },
    { name: 'Photoshop', level: 65, description: 'Création et édition d’images avec Photoshop.' },
  ];

  return (
    <div className="about-skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-level-text">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutSkills;
