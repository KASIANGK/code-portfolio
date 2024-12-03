import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Div360.css';
import portfolioData from '/src/data/portfolio.json';  // Assure-toi que le chemin est correct pour importer ton JSON

const Div360 = () => {
    const [portfolio, setPortfolio] = useState([]);

    // Charger les données JSON
    useEffect(() => {
        // Simule un appel API pour obtenir les données (ici, les données sont statiques)
        setPortfolio(portfolioData.portfolio);  // On met à jour l'état avec les données du JSON
    }, []);

    // Sélectionner un projet spécifique (par exemple, le premier projet)
    const project = portfolio[0]; // Tu peux changer l'index ici pour afficher un autre projet si nécessaire

    return (
        <div className='playersall'>
            <div className='players'>
                <h1 className='titlee play-bold'>Portfolio</h1>
                {project ? (
                    <div className="row">
                        <div className="div-indi col-md-4 col-sm-6 col-xs-12" key={0}>
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
                                        <Link to={`/portfolio/0`}>👀</Link> {/* lien vers une page de détails du projet */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>No Projects Available</p>
                )}
            </div>
        </div>
    );
}

export default Div360;




// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Div360.css';
// import portfolioData from '/src/data/portfolio.json';  // Assure-toi que le chemin est correct pour importer ton JSON

// const Div360 = () => {
//     const [portfolio, setPortfolio] = useState([]);

//     // Charger les données JSON (ici, elles sont importées localement)
//     useEffect(() => {
//         // Simule un appel API pour obtenir les données (ici, les données sont statiques)
//         setPortfolio(portfolioData.portfolio);  // On met à jour l'état avec les données du JSON
//     }, []);

//     return (
//         <div className='playersall'>
//             <div className='players'>
//                 <h1 className='titlee play-bold'>Portfolio</h1>
//                     <div className="row container-div-360">
//                         <div className="col-md-4 col-sm-6 col-xs-12 container-div-360-bis">
//                             <div className="card">
//                                 <div 
//                                     className="cover" 
//                                     // style={{ 
//                                     //     backgroundImage: `url(${project.image})`,  
//                                     // }}
//                                 >
//                                     <h1>HEY</h1>
//                                     <span className="price">I'm Kasia</span>
//                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex excepturi, nam corrupti distinctio quisquam maiores animi porro voluptas molestiae, repellat aspernatur. Consequuntur numquam aperiam neque? Atque adipisci cum voluptatum.</p>
//                                     <div className="card-back">
//                                         <button>❌</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//         </div>
//     );
// }

// export default Div360;

