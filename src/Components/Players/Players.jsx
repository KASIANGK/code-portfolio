import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Players.css';
import portfolioData from '/src/data/portfolio.json';  // Assure-toi que le chemin est correct pour importer ton JSON

const Players = () => {
    const [portfolio, setPortfolio] = useState([]);

    // Charger les données JSON (ici, elles sont importées localement)
    useEffect(() => {
        // Simule un appel API pour obtenir les données (ici, les données sont statiques)
        setPortfolio(portfolioData.portfolio);  // On met à jour l'état avec les données du JSON
    }, []);

    return (
        <div className='playersall'>
            <div className='players'>
                <h1 className='titlee play-bold'>Portfolio</h1>
                {portfolio.length > 0 ? (
                    <div className="row">
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
                                            <Link to={`/portfolio/${index}`}>👀</Link> {/* lien vers une page de détails du projet */}
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
    );
}

export default Players;

