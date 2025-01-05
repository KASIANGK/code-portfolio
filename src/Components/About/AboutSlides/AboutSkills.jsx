import React, { useState, useEffect } from 'react';
import './AboutSkills.css';
import skillsData from '../../../data/skills.json'; 

function AboutSkills() {
  const [skills, setSkills] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 12;

  // data
  useEffect(() => {
    if (skillsData && skillsData.skills) {
      setSkills(skillsData.skills);  
    }
  }, []);

  // recherche/filtre skills selon la categorie et le terme 
  const filteredSkills = skills.filter(skill => {
    const matchesCategory = categoryFilter === 'All' || skill.category === categoryFilter;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  

  // competences a afficher par page
  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = filteredSkills.slice(indexOfFirstSkill, indexOfLastSkill);

  // calcul du nombre total de pages
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);

  // afficher les etoiles en fonction du niveau
    const renderStars = (level) => {
      const maxStars = 5;
      const filledStars = Math.round(level / 20); // calcul du nombre d'etoiles remplies
    
      let stars = [];
      for (let i = 0; i < maxStars; i++) {
        stars.push(
          <span
            key={i}
            className={i < filledStars ? 'star filled' : 'star'}
          ></span>
        );
      }
      return stars;
    };
    

  // pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(categoryFilter);  
  console.log(skills.map(skill => skill.category));  

// skill.color_category
  function hexToRgb(hex) {
    // remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');
    
    // parse the r, g, b values
    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);
  
    return `${r}, ${g}, ${b}`;
  }

  
  return (
    <div className="about-skills">
      <div className="search-filter">
        {/* searchbar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by skill name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* filtre par categories */}
        <div className="category-filter">
          <button onClick={() => setCategoryFilter('All')}>All</button>
          <button onClick={() => setCategoryFilter('Frontend')}>Frontend</button>
          <button onClick={() => setCategoryFilter('Backend')}>Backend</button>
          <button onClick={() => setCategoryFilter('Software')}>Software</button>
          <button onClick={() => setCategoryFilter('Libraries')}>Libraries</button>
          <button onClick={() => setCategoryFilter('Framework')}>Framework</button>
        </div>
      </div>

      {/* affichage des competences filtrees */}
      <div className="ag-courses_box">
        {currentSkills.map((skill, index) => (
          <section key={index} className="ag-courses_item">
            <div className="ag-courses-item_link"
              style={{
                backgroundColor: `rgba(${hexToRgb(skill.color_category)}, 0.5)`  
              }}>
              <div
                className="ag-courses-item_bg"
                style={{
                  backgroundImage: `url(${skill.image})`,
                  backgroundColor: skill['background-color'], 
                }}
              ></div>
              <div className="ag-courses-item_content">
                <p className="boutonsH skill-title">{skill.name}</p>
                <p>{renderStars(skill.level)}</p>
              </div>
            </div>
          </section>

        ))}
      </div>

      {/* pagination */}
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









