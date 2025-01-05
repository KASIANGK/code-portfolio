import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioAll.css';
import portfolioData from '/src/data/portfolio.json';
import skillsData from '/src/data/skills.json'; // Importez les skills ici
import { useLocation } from 'react-router-dom';

import videoFile from '/assets/switchpp.mp4';

const PortfolioAll = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);
    const location = useLocation();

    // data JSON
    useEffect(() => {
        setPortfolio(portfolioData.portfolio);
    }, []);

    // lecture automatique de la vidéo lorsque la route /portfolio-all est visitée
    useEffect(() => {
        if (location.pathname === '/portfolio-all' && videoRef.current) {
            videoRef.current.play();
        }
    }, [location.pathname]);

    // gestion de la fin de la vidéo
    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    // Fonction pour obtenir les images des programmes
    const getSkillImages = (programmes) => {
        // divise la chaîne de programmes en un tableau
        const programmeList = programmes.split(',').map(p => p.trim());
        // Filtre les skills qui correspondent aux programmes
        return skillsData.skills.filter(skill => programmeList.includes(skill.name));
    };

    return (
        <div className='portfolio-all'>
            {/* Vidéo en arrière-plan */}
            <video
                ref={videoRef}
                className="background-video"
                muted
                autoPlay
                playsInline
                onEnded={handleVideoEnd}
            >
                <source src={videoFile} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
            </video>

            {/* Div intermédiaire avec fond noir qui devient progressivement plus opaque */}
            <div className={`black-overlay ${videoEnded ? 'show' : ''}`} />

            {/* Afficher la div playersall uniquement après la fin de la vidéo */}
            {videoEnded && (
                <div className='playersall'>
                    <div className='players'>
                        {portfolio.length > 0 ? (
                            <div className="row all-portfolio">
                                {portfolio.map((project, index) => {
                                    const skills = getSkillImages(project.programmes); // Récupère les skills correspondants
                                    return (
                                        <div className="div-indi col-md-4 col-sm-6 col-xs-12" key={index}>
                                            <div className="card">
                                                    <div 
                                                        className="cover" 
                                                        style={{ 
                                                            backgroundImage: `url(${project.image[0]})`,
                                                        }}
                                                    >
                                                        <h1>{project.nom}</h1>
                                                        <span className="price">{project.societe} - {project.date}</span>
                                                        {/* <p>{project.programmes}</p> */}
                                                        <div className="card-back">
                                                            <Link to={`/portfolio/${index}`}>👀</Link>
                                                            <div className="programs-images">
                                                                {skills.length > 0 ? (
                                                                    skills.slice(0, 4).map((skill, idx) => ( // Limite à 4 compétences
                                                                        <img
                                                                            key={idx}
                                                                            src={skill.image}
                                                                            alt={skill.name}
                                                                            title={skill.description}
                                                                            style={{
                                                                                backgroundColor: skill['background-color'],
                                                                                margin: '5px',
                                                                                borderRadius: '5px',
                                                                                width: '50px',
                                                                                height: '50px',
                                                                            }}
                                                                        />
                                                                    ))
                                                                ) : (
                                                                    <p>Aucune compétence trouvée.</p>
                                                                )}
                                                            </div>

                                                        </div>

                                                    </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p>No Projects Available</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioAll;





// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import './PortfolioAll.css';
// import portfolioData from '/src/data/portfolio.json';  // Assurez-vous que le chemin est correct pour importer ton JSON
// import { useLocation } from 'react-router-dom';

// // Importez votre vidéo à partir du répertoire src/assets
// import videoFile from '/src/assets/switchpp.mp4';  // Remplacez 'video.mp4' par le nom de votre fichier vidéo

// const PortfolioAll = () => {
//     const [portfolio, setPortfolio] = useState([]);
//     const [videoEnded, setVideoEnded] = useState(false); // Etat pour savoir si la vidéo est terminée
//     const videoRef = useRef(null);  // Référence à la vidéo
//     const location = useLocation(); // Pour détecter la route actuelle

//     // Charger les données JSON
//     useEffect(() => {
//         setPortfolio(portfolioData.portfolio);
//     }, []);

//     // Lecture automatique de la vidéo lorsque la route /portfolio-all est visitée
//     useEffect(() => {
//         if (location.pathname === '/portfolio-all' && videoRef.current) {
//             videoRef.current.play();
//         }
//     }, [location.pathname]);

//     // Fonction de gestion de la fin de la vidéo
//     const handleVideoEnd = () => {
//         setVideoEnded(true);  // La vidéo est terminée, on affiche la div playersall
//     };

//     return (
//         <div className='portfolio-all'>
//             {/* Vidéo en arrière-plan */}
//             <video
//                 ref={videoRef}
//                 className="background-video"
//                 muted
//                 autoPlay
//                 playsInline
//                 onEnded={handleVideoEnd} // Quand la vidéo se termine, on met à jour l'état
//             >
//                 <source src={videoFile} type="video/mp4" />
//                 Votre navigateur ne supporte pas la balise vidéo.
//             </video>

//             {/* Div intermédiaire avec fond noir qui devient progressivement plus opaque */}
//             <div className={`black-overlay ${videoEnded ? 'show' : ''}`} />

//             {/* Afficher la div playersall uniquement après la fin de la vidéo */}
//             {videoEnded && (
//                 <div className='playersall'>
//                     <div className='players'>
//                         {/* <h1 className='titlee play-bold'>Portfolio</h1> */}
//                         {portfolio.length > 0 ? (
//                             <div className="row all-portfolio">
//                                 {portfolio.map((project, index) => (
//                                     <div className="div-indi col-md-4 col-sm-6 col-xs-12" key={index}>
//                                         <div className="card">
//                                             <div 
//                                                 className="cover" 
//                                                 style={{ 
//                                                     backgroundImage: `url(${project.image})`,  // Utilisation de l'image de fond
//                                                 }}
//                                             >
//                                                 <h1>{project.nom}</h1>
//                                                 <span className="price">{project.societe} - {project.date}</span>
//                                                 <p>{project.programmes}</p>
//                                                 <div className="card-back">
//                                                     <button>❌</button>
//                                                     <Link to={`/portfolio/${index}`}>👀</Link> {/* Lien vers une page de détails du projet */}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         ) : (
//                             <p>No Projects Available</p>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PortfolioAll;




