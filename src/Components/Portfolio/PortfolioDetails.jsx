import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import portfolio from '/src/data/portfolio.json';  
import skillsData from '/src/data/skills.json'; 
import './PortfolioDetails.css';
import Footer from '../Footer/Footer'

const PortfolioDetails = () => {
  const { id } = useParams();  // recup id du projet depuis l'URL
  const [project, setProject] = useState(null);
  const [isProgrammesVisible, setIsProgrammesVisible] = useState(false);  
  const navigate = useNavigate()

  // charger le projet specifique
  useEffect(() => {
    const selectedProject = portfolio.portfolio[id];
    setProject(selectedProject);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  // fonction pour afficher/masquer la div depliante des programmes
  const toggleProgrammesVisibility = () => {
    setIsProgrammesVisible(!isProgrammesVisible);
  };

  // Recuperer les competences correspondantes aux programmes utilises dans le projet
  const usedSkills = project.programmes.split(',').map(program => {
    return skillsData.skills.filter(skill => skill.name.toLowerCase() === program.trim().toLowerCase());
  }).flat();


  return (
    <div className="portfolio-details">
      <div
      className="portfolio-background"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      ></div>     
      {/* contenu du projet */}
      <div className="project-content">
          <div className='project-txt'>
              {/* <h1>{project.nom}</h1> */}
              <div className='project-details'>
                <div className='project-info-general'>
                <button className='btn-back' onClick={() => navigate('/portfolio-all')}>Back</button>

                  <h1>{project.nom}</h1>
                  <p><strong>Entreprise : </strong>{project.societe}</p>
                  <p><strong>Date : </strong>{project.date}</p>
                </div>
                <div className='project-description'>
                  <p>{project.description}</p>
                  <p>{project.descriptionAssets}</p>
                  <p>{project.descriptionResponsive}</p>
                  <p>{project.descriptionData}</p>
                </div>
              </div>
              {/* <p><strong>Frontend : </strong>{project.frontend}</p>
              <p><strong>Backend : </strong>{project.backend}</p> */}
              
              {/* div des programmes */}
              <div className="programmes-details">
              <button className="toggle-butto-programs" onClick={toggleProgrammesVisibility}>
                  {isProgrammesVisible ? "Hide tools" : "See the tools used"}
              </button>
              {/* <button className='btn-back'>BACK</button> */}
              
              {/* si la div est visible, afficher les programmes */}
              {isProgrammesVisible && (
                  <div className="programmes-images">
                  {usedSkills.length > 0 ? (
                      usedSkills.map((skill, index) => (
                      <div key={index} className="program-image">
                          <img src={skill.image} alt={skill.name} />
                          <p>{skill.name}</p>
                      </div>
                      ))
                  ) : (
                      <p>Aucune compétence correspondante.</p>
                  )}
                  </div>
              )}
              </div>
          </div>
          {/* <div className='retour'>
            <button>Back</button>
          </div> */}
        <div className="video-container">
          <video 
            className="project-video"
            muted 
            loop
            autoPlay 
            playsInline
          >
            <source src={project.video} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      </div>
      
      {/* section video */}
      <div className="details-visu">


        <div className="project-image-container">
          {Array.isArray(project.image) ? (
            project.image.map((imgSrc, index) => (
              <img 
                key={index} 
                src={imgSrc} 
                alt={`${project.nom} - image ${index + 1}`} 
                className="project-image"
              />
            ))
          ) : (
            <img 
              src={project.image} 
              alt={project.nom} 
              className="project-image"
            />
          )}
        </div>

      </div>

      <Footer></Footer>
    </div>
  );
};

export default PortfolioDetails;

