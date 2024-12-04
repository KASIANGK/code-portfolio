import React, { useState } from 'react';
import './AboutSkills.css';

function AboutSkills() {
  // Tableau des compétences avec leur niveau et leur catégorie
  const skills = [
    { name: 'HTML', level: 90, description: 'Maîtrise du HTML5 et des bonnes pratiques.', category: 'Frontend' },
    { name: 'CSS', level: 85, description: 'Création de layouts responsives et animations CSS.', category: 'Frontend' },
    { name: 'JavaScript', level: 80, description: 'Programmation dynamique avec ES6+.', category: 'Frontend' },
    { name: 'React', level: 75, description: 'Création d’applications interactives avec React.', category: 'Frontend' },
    { name: 'Node.js', level: 70, description: 'Développement backend avec Node.js et Express.', category: 'Backend' },
    { name: 'Git', level: 95, description: 'Gestion de version avec Git et GitHub.', category: 'Logiciels' },
    { name: 'Photoshop', level: 65, description: 'Création et édition d’images avec Photoshop.', category: 'Logiciels' },
    { name: 'Sass', level: 80, description: 'Préprocesseur CSS pour un code plus propre et structuré.', category: 'Frontend' },
    { name: 'Vue.js', level: 70, description: 'Framework JavaScript pour des interfaces utilisateur dynamiques.', category: 'Frontend' },
    { name: 'Nuxt.js', level: 65, description: 'Framework pour créer des applications Vue.js côté serveur.', category: 'Frontend' },
    { name: 'Next.js', level: 80, description: 'Framework React pour des applications côté serveur.', category: 'Frontend' },
    { name: 'PHP', level: 60, description: 'Langage de programmation pour le développement backend.', category: 'Backend' },
    { name: 'Django Rest Framework', level: 70, description: 'Framework pour créer des APIs avec Django.', category: 'Backend' },
    { name: 'Python', level: 75, description: 'Langage de programmation pour le développement backend.', category: 'Backend' },
    { name: 'Laravel', level: 65, description: 'Framework PHP pour le développement backend rapide.', category: 'Backend' },
    { name: 'Bender', level: 50, description: 'Logiciel de modélisation 3D.', category: 'Logiciels' },
    { name: 'Premiere Pro', level: 60, description: 'Logiciel de montage vidéo.', category: 'Logiciels' },
    { name: 'Final Pro', level: 55, description: 'Logiciel de montage vidéo professionnel.', category: 'Logiciels' },
    { name: 'Procreate', level: 70, description: 'Application de dessin pour tablettes.', category: 'Logiciels' },
    { name: 'Three.js', level: 65, description: 'Bibliothèque JavaScript pour la création de graphismes 3D.', category: 'Bibliothèques' },
  ];

  // État pour le filtre de catégorie, la recherche et la page actuelle
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 4; // Nombre de compétences par page

  // Filtrer les compétences par catégorie et par recherche
  const filteredSkills = skills.filter(skill => {
    const matchesCategory = categoryFilter === 'All' || skill.category === categoryFilter;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculer les indices des compétences à afficher pour la page actuelle
  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = filteredSkills.slice(indexOfFirstSkill, indexOfLastSkill);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);

  // Fonction pour afficher les étoiles en fonction du niveau
  const renderStars = (level) => {
    const maxStars = 5;
    const filledStars = Math.round(level / 20); // Calculer le nombre d'étoiles pleines, 20% par étoile

    let stars = [];
    for (let i = 0; i < maxStars; i++) {
      stars.push(i < filledStars ? '★' : '☆'); // Étoiles pleines ou vides
    }

    return stars.join('');
  };

  // Fonction pour changer de page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="about-skills">
      <div className='search-filter'>
        {/* Barre de recherche */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by skill name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filtre des compétences */}
        <div className="category-filter">
          <button onClick={() => setCategoryFilter('All')}>All</button>
          <button onClick={() => setCategoryFilter('Frontend')}>Frontend</button>
          <button onClick={() => setCategoryFilter('Backend')}>Backend</button>
          <button onClick={() => setCategoryFilter('Logiciels')}>Logiciels</button>
          <button onClick={() => setCategoryFilter('Bibliothèques')}>Bibliothèques</button>
        </div>
      </div>
      {/* Affichage des compétences filtrées */}
      <div className="skills-container">
        {currentSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h2>{skill.name}</h2>

            {/* Affichage des étoiles */}
            <div className="skill-stars">
              <p>{renderStars(skill.level)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default AboutSkills;


// import React from 'react';
// import './AboutSkills.css';

// function AboutSkills() {
//   // Tableau des compétences avec leur niveau
//   const skills = [
//     { name: 'HTML', level: 90, description: 'Maîtrise du HTML5 et des bonnes pratiques.' },
//     { name: 'CSS', level: 85, description: 'Création de layouts responsives et animations CSS.' },
//     { name: 'JavaScript', level: 80, description: 'Programmation dynamique avec ES6+.' },
//     { name: 'React', level: 75, description: 'Création d’applications interactives avec React.' },
//     { name: 'Node.js', level: 70, description: 'Développement backend avec Node.js et Express.' },
//     { name: 'Git', level: 95, description: 'Gestion de version avec Git et GitHub.' },
//     { name: 'Photoshop', level: 65, description: 'Création et édition d’images avec Photoshop.' },
//   ];

//   return (
//     <div className="about-skills">
//       <h1>My Skills</h1>
//       <div className="skills-container">
//         {skills.map((skill, index) => (
//           <div key={index} className="skill-card">
//             <h2>{skill.name}</h2>
//             <p>{skill.description}</p>
//             <div className="skill-bar">
//               <div
//                 className="skill-level"
//                 style={{ width: `${skill.level}%` }}
//               ></div>
//             </div>
//             <span className="skill-level-text">{skill.level}%</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AboutSkills;
