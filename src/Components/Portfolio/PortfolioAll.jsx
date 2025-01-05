import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioAll.css';
import portfolioData from '/src/data/portfolio.json';
import skillsData from '/src/data/skills.json'; 
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

    // lecture automatique de la video lorsque la route /portfolio-all est visitee
    useEffect(() => {
        if (location.pathname === '/portfolio-all' && videoRef.current) {
            videoRef.current.play();
        }
    }, [location.pathname]);

    // gestion de la fin de la video
    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    // fonction pour obtenir les images des programmes
    const getSkillImages = (programmes) => {
        // divise la chaine de programmes en un tableau
        const programmeList = programmes.split(',').map(p => p.trim());
        // filtre les skills qui correspondent aux programmes
        return skillsData.skills.filter(skill => programmeList.includes(skill.name));
    };

    return (
        <div className='portfolio-all'>
            {/* vidéo en arriere-plan */}
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

            {/* div intermediaire avec fond noir qui devient progressivement plus opaque */}
            <div className={`black-overlay ${videoEnded ? 'show' : ''}`} />

            {/* afficher la div playersall uniquement apres la fin de la video */}
            {videoEnded && (
                <div className='playersall'>
                    <div className='players'>
                        {portfolio.length > 0 ? (
                            <div className="row all-portfolio">
                                {portfolio.map((project, index) => {
                                    const skills = getSkillImages(project.programmes); 
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
                                                                    skills.slice(0, 4).map((skill, idx) => ( // limite a 4 competences
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



