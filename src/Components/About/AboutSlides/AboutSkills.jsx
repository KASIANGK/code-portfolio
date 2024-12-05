import React, { useState, useEffect } from 'react';
import './AboutSkills.css';
import skillsData from '../../../data/skills.json'; // Assurez-vous que ce chemin est correct

function AboutSkills() {
  // État pour les compétences, filtre, recherche et pagination
  const [skills, setSkills] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 4;

  // Charger les compétences à partir de skills.json
  useEffect(() => {
    if (skillsData && skillsData.skills) {
      setSkills(skillsData.skills);  // On utilise skillsData.skills ici
    }
  }, []);

  // Filtrer les compétences selon la catégorie et le terme de recherche
  const filteredSkills = skills.filter(skill => {
    const matchesCategory = categoryFilter === 'All' || skill.category === categoryFilter;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calcul des indices des compétences à afficher pour la page actuelle
  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = filteredSkills.slice(indexOfFirstSkill, indexOfLastSkill);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);

  // Fonction pour afficher les étoiles en fonction du niveau
  const renderStars = (level) => {
    const maxStars = 5;
    const filledStars = Math.round(level / 20);

    let stars = [];
    for (let i = 0; i < maxStars; i++) {
      stars.push(i < filledStars ? '★' : '☆');
    }

    return stars.join('');
  };

  // Fonction de pagination
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

        {/* Filtre des catégories */}
        <div className="category-filter">
          <button onClick={() => setCategoryFilter('All')}>All</button>
          <button onClick={() => setCategoryFilter('Frontend')}>Frontend</button>
          <button onClick={() => setCategoryFilter('Backend')}>Backend</button>
          <button onClick={() => setCategoryFilter('Logiciels')}>Logiciels</button>
          <button onClick={() => setCategoryFilter('Bibliothèques')}>Bibliothèques</button>
        </div>
      </div>

      {/* Affichage des compétences filtrées */}
      <div className="ag-courses_box">
        {currentSkills.map((skill, index) => (
          <section key={index} className="ag-courses_item">
            <div className="ag-courses-item_link">
              {/* Utilisation de l'image comme fond pour chaque carte */}
              <div
                className="ag-courses-item_bg"
                style={{ backgroundImage: `url(${skill.image})` }}  
              ></div>
              <div className="ag-courses-item_content" style={{ zIndex: 3 }}>
                <p className="boutonsH">{skill.name}</p>
                <p>{skill.category}</p>
                <p>{renderStars(skill.level)}</p>
                <button>See more</button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="previous"
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}>
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button 
          className="next"
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default AboutSkills;





// import React, { useState, useEffect } from 'react';
// import './AboutSkills.css';
// import skillsData from '../../../data/skills.json'; // Assurez-vous que ce chemin est correct

// function AboutSkills() {
//   // État pour les compétences, filtre, recherche et pagination
//   const [skills, setSkills] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const skillsPerPage = 4;

//   // Charger les compétences à partir de skills.json
//   useEffect(() => {
//     if (skillsData && skillsData.skills) {
//       setSkills(skillsData.skills);  // On utilise skillsData.skills ici
//     }
//   }, []);

//   // Filtrer les compétences selon la catégorie et le terme de recherche
//   const filteredSkills = skills.filter(skill => {
//     const matchesCategory = categoryFilter === 'All' || skill.category === categoryFilter;
//     const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    
//     console.log(`Filtrage pour ${skill.name}:`, matchesSearch);  // Debugging
    
//     return matchesCategory && matchesSearch;
//   });
  

//   // Calcul des indices des compétences à afficher pour la page actuelle
//   const indexOfLastSkill = currentPage * skillsPerPage;
//   const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
//   const currentSkills = filteredSkills.slice(indexOfFirstSkill, indexOfLastSkill);

//   // Calcul du nombre total de pages
//   const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);

//   // Fonction pour afficher les étoiles en fonction du niveau
//   const renderStars = (level) => {
//     const maxStars = 5;
//     const filledStars = Math.round(level / 20);

//     let stars = [];
//     for (let i = 0; i < maxStars; i++) {
//       stars.push(i < filledStars ? '★' : '☆');
//     }

//     return stars.join('');
//   };

//   // Fonction de pagination
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="about-skills">
//       <div className='search-filter'>
//         {/* Barre de recherche */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search by skill name..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Filtre des catégories */}
//         <div className="category-filter">
//           <button onClick={() => setCategoryFilter('All')}>All</button>
//           <button onClick={() => setCategoryFilter('Frontend')}>Frontend</button>
//           <button onClick={() => setCategoryFilter('Backend')}>Backend</button>
//           <button onClick={() => setCategoryFilter('Logiciels')}>Logiciels</button>
//           <button onClick={() => setCategoryFilter('Bibliothèques')}>Bibliothèques</button>
//         </div>
//       </div>

//       {/* Affichage des compétences filtrées */}
//       <div className="skills-container">
//         {currentSkills.map((skill, index) => (
//           <div key={index} className="skill-card">
//             <h3>{skill.name}</h3>
//             <img src={skill.image}></img>
//             <div className="skill-stars">
//               <p>{renderStars(skill.level)}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}


//       <div className="pagination">
//         {/* Bouton Previous avec la classe "previous" */}
//         <button 
//           className="previous"
//           onClick={() => paginate(currentPage - 1)} 
//           disabled={currentPage === 1}>
//           Previous
//         </button>

//         {/* Boutons de numérotation des pages */}
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={currentPage === index + 1 ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}

//         {/* Bouton Next avec la classe "next" */}
//         <button 
//           className="next"
//           onClick={() => paginate(currentPage + 1)} 
//           disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>

//       {/* <div className="pagination">
//         <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={currentPage === index + 1 ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
//       </div> */}
//     </div>
//   );
// }

// export default AboutSkills;



