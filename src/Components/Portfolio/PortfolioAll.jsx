import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioAll.css';
import portfolioData from '/src/data/portfolio.json';  // Assurez-vous que le chemin est correct pour importer ton JSON
import { useLocation } from 'react-router-dom';

// Importez votre vidéo à partir du répertoire src/assets
import videoFile from '/src/assets/switchpp.mp4';  // Remplacez 'video.mp4' par le nom de votre fichier vidéo

const PortfolioAll = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [videoEnded, setVideoEnded] = useState(false); // Etat pour savoir si la vidéo est terminée
    const videoRef = useRef(null);  // Référence à la vidéo
    const location = useLocation(); // Pour détecter la route actuelle

    // Charger les données JSON
    useEffect(() => {
        setPortfolio(portfolioData.portfolio);
    }, []);

    // Lecture automatique de la vidéo lorsque la route /portfolio-all est visitée
    useEffect(() => {
        if (location.pathname === '/portfolio-all' && videoRef.current) {
            videoRef.current.play();
        }
    }, [location.pathname]);

    // Fonction de gestion de la fin de la vidéo
    const handleVideoEnd = () => {
        setVideoEnded(true);  // La vidéo est terminée, on affiche la div playersall
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
                onEnded={handleVideoEnd} // Quand la vidéo se termine, on met à jour l'état
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
                        {/* <h1 className='titlee play-bold'>Portfolio</h1> */}
                        {portfolio.length > 0 ? (
                            <div className="row all-portfolio">
                                {portfolio.map((project, index) => (
                                    <div className="div-indi col-md-4 col-sm-6 col-xs-12" key={index}>
                                        <div className="card">
                                            <div 
                                                className="cover" 
                                                style={{ 
                                                    backgroundImage: `url(${project.image})`,  // Utilisation de l'image de fond
                                                }}
                                            >
                                                <h1>{project.nom}</h1>
                                                <span className="price">{project.societe} - {project.date}</span>
                                                <p>{project.programmes}</p>
                                                <div className="card-back">
                                                    <button>❌</button>
                                                    <Link to={`/portfolio/${index}`}>👀</Link> {/* Lien vers une page de détails du projet */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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

//             {/* Afficher la div playersall uniquement après la fin de la vidéo */}
//             {videoEnded && (
//                 <div className='playersall'>
//                     <div className='players'>
//                         <h1 className='titlee play-bold'>Portfolio</h1>
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








