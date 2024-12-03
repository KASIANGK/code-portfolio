import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './General.css';

const General = () => {
    const [portfolioData, setPortfolioData] = useState([]); // Initialise le state comme un tableau vide

    useEffect(() => {
        // Remplace par le chemin correct de ton fichier JSON ou ton API
        axios.get('/src/data/portfolio.json')  // Assure-toi que le chemin est correct
            .then((response) => {
                console.log('Portfolio data:', response.data);  // Vérifie ce qui est retourné
                setPortfolioData(response.data.portfolio);  // Set les données dans le state
            })
            .catch((error) => {
                console.error('Oops, error fetching portfolio data', error);
            });
    }, []);

    return (
        <div className="home">
            <div className="ag-format-container">
                <div className="ag-courses_box">
                    {portfolioData.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        portfolioData.map((item) => (
                            <section key={item.id} className="ag-courses_item">
                                <div className="ag-courses-item_link">
                                    {/* Utilisation de l'image comme fond */}
                                    <div
                                        className="ag-courses-item_bg"
                                        style={{ backgroundImage: `url(${item.image})` }}  // Applique l'image de fond
                                    ></div>
                                    <div className="ag-courses-item_title">{item.nom}</div>
                                    <div className="ag-courses-item_content" style={{ zIndex: 3 }}>
                                        <Link to={`/portfolio/${item.id}`}>
                                            <p className="boutonsH">{item.nom}</p>
                                        </Link>
                                        <p>{item.societe}</p>
                                        <p>{item.date}</p>
                                        <p>{item.programmes}</p>
                                        <button>See more</button>
                                    </div>
                                </div>
                            </section>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default General;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './General.css';

// const General = () => {
//     const [portfolioData, setPortfolioData] = useState([]); // Initialise le state comme un tableau vide

//     useEffect(() => {
//         // Remplace par le chemin correct de ton fichier JSON ou ton API
//         axios.get('/src/data/portfolio.json')  // Assure-toi que le chemin est correct
//             .then((response) => {
//                 console.log('Portfolio data:', response.data);  // Vérifie ce qui est retourné
//                 setPortfolioData(response.data.portfolio);  // Set les données dans le state
//             })
//             .catch((error) => {
//                 console.error('Oops, error fetching portfolio data', error);
//             });
//     }, []);
//     const renderSection = (title, items) => {
//         console.log('Rendering section with items:', items); // Vérifie les items avant de rendre
//         return (
//             <section className="ag-courses_item">
//                 <div className="ag-courses-item_link">
//                     <div className="ag-courses-item_bg"></div>
//                     <div className="ag-courses-item_title">{title}</div>
//                     <div className="ag-courses-item_content" style={{ zIndex: 3 }}>
//                         {Array.isArray(items) && items.length > 0 ? (
//                             items.map((item) => (
//                                 <div key={item.nom}>  {/* Utilise item.nom ou item.id pour la clé */}
//                                     <Link to={`/portfolio/${item.id}`}>
//                                         <p className='boutonsH'>{item.nom}</p>
//                                     </Link>
//                                     <p>{item.societe}</p>
//                                     <p>{item.date}</p>
//                                     <p>{item.programmes}</p>
//                                     <button>See more</button>
//                                 </div>
//                             ))

//                         ) : (
//                             <p>No projects available</p>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         );
//     };
    
    

//     return (
//         <div className='home'>
//             <div className='ag-format-container'>
//                 <div className='ag-courses_box'>
//                     {portfolioData.length === 0 ? (
//                         <p>Loading...</p>
//                     ) : (
//                         portfolioData.map((item) => (
//                             <section key={item.id} className="ag-courses_item">
//                                 <div className="ag-courses-item_link">
//                                     <div className="ag-courses-item_bg"></div>
//                                     <div className="ag-courses-item_title">{item.nom}</div>
//                                     <div className="ag-courses-item_content" style={{ zIndex: 3 }}>
//                                         <Link to={`/portfolio/${item.id}`}>
//                                             <p className='boutonsH'>{item.nom}</p>
//                                         </Link>
//                                         <p>{item.societe}</p>
//                                         <p>{item.date}</p>
//                                         <p>{item.programmes}</p>
//                                         <button>See more</button>
//                                     </div>
//                                 </div>
//                             </section>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
    
    
// };

// export default General;

