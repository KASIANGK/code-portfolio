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
    const renderSection = (title, items) => {
        console.log('Rendering section with items:', items); // Vérifie les items avant de rendre
        return (
            <section className="ag-courses_item">
                <div className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>
                    <div className="ag-courses-item_title">{title}</div>
                    <div className="ag-courses-item_content" style={{ zIndex: 3 }}>
                        {Array.isArray(items) && items.length > 0 ? (
                            items.map((item) => (
                                <div key={item.nom}>  {/* Utilise item.nom ou item.id pour la clé */}
                                    <Link to={`/portfolio/${item.id}`}>
                                        <p className='boutonsH'>{item.nom}</p>
                                    </Link>
                                    <p>{item.societe}</p>
                                    <p>{item.date}</p>
                                    <p>{item.programmes}</p>
                                    <button>See more</button>
                                </div>
                            ))

                        ) : (
                            <p>No projects available</p>
                        )}
                    </div>
                </div>
            </section>
        );
    };
    
    

    return (
        <div className='home'>
            <div className='ag-format-container'>
                <div className='ag-courses_box'>
                    {portfolioData.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        portfolioData.map((item) => (
                            <section key={item.id} className="ag-courses_item">
                                <div className="ag-courses-item_link">
                                    <div className="ag-courses-item_bg"></div>
                                    <div className="ag-courses-item_title">{item.nom}</div>
                                    <div className="ag-courses-item_content" style={{ zIndex: 3 }}>
                                        <Link to={`/portfolio/${item.id}`}>
                                            <p className='boutonsH'>{item.nom}</p>
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
// // import Navbar from './Navbar'; // Si tu utilises un Navbar
// import './General.css';
// import portfolioData from '/src/data/portfolio.json';  // Assure-toi que le chemin est correct pour importer ton JSON


// const General = () => {
//     const [portfolioData, setPortfolioData] = useState([]);

//     useEffect(() => {
//         axios.get('/src/data/portfolio.json')  // Remplace par le chemin réel du fichier portfolio.json
//             .then((response) => {
//                 setPortfolioData(response.data.portfolio);
//             })
//             .catch((error) => {
//                 console.error('Oops, error fetching portfolio data', error);
//             });
//     }, []);

//     const renderSection = (title, items) => (
//         <section className="ag-courses_item">
//             <div className="ag-courses-item_link">
//                 <div className="ag-courses-item_bg"></div>
//                 <div className="ag-courses-item_title">{title}</div>
//                 <div className="ag-courses-item_content" style={{ zIndex: 3 }}>
//                     {items.length > 0 ? (
//                         items.map((item, index) => (
//                             <div key={index}>
//                                 <Link to={`/portfolio/${item.id}`}>
//                                     <p className='boutonsH'>{item.nom}</p>
//                                 </Link>
//                                 <p>{item.societe}</p>
//                                 <p>{item.date}</p>
//                                 <p>{item.programmes}</p>
//                                 <button>See more</button>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No projects available</p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );

//     return (
//         <div className='home'>
//             <div className='ag-format-container'>
//                 <div className='ag-courses_box'>
//                     {renderSection('Portfolio Projects', portfolioData)}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default General;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import '../../style/Home.css';

// const Home = () => {
//     const [data, setData] = useState({
//         teams_full: [],
//         teams_not_full: [],
//         players_without_team: [],
//         players_with_team: [],
//         europe_teams: [],
//         non_europe_teams: [],
//         female_players_with_team: [],
//         male_players_with_team: []
//     });

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/home')
//             .then((response) => {
//                 setData(response.data);
//             })
//             .catch((error) => {
//                 console.error('Oops, error fetching data', error);
//             });
//     }, []);

//     const renderSection = (title, items, isPlayer = false) => (
//         <section className="ag-courses_item">
//             <div className="ag-courses-item_link">
//                 <div className="ag-courses-item_bg"></div>
//                 <div className="ag-courses-item_title">{title}</div>
//                 <div className="ag-courses-item_content" style={{ zIndex: 3 }}>
//                     {items.length > 0 ? (
//                         items.map(item => (
//                             <div key={item.id}>
//                                 {isPlayer ? (
//                                     <Link to={`/players/${item.id}`}>
//                                         <p className='boutonsH'>{item.first_name}</p>
//                                     </Link>
//                                 ) : (
//                                     <Link to={`/teams`}>
//                                         <button>{item.name}</button>
//                                     </Link>
//                                 )}
//                             </div>
//                         ))
//                     ) : (
//                         <p>No {isPlayer ? 'Players' : 'Teams'}</p>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );

//     return (
//         <div className='home'>
//             <Navbar />
//             {/* <h1 className='poetsen-one-regular'>HOME</h1> */}
//             <div className='ag-format-container'>
//                 <div className='ag-courses_box'>
//                     {renderSection('TEAMS REMPLIES', data.teams_full)}
//                     {renderSection('TEAMS NON REMPLIES', data.teams_not_full)}
//                     {renderSection('4 PLAYERS SANS TEAM', data.players_without_team, true)}
//                     {renderSection('4 PLAYERS AVEC EQUIPE', data.players_with_team, true)}
//                     {renderSection('TEAMS EUROPE', data.europe_teams)}
//                     {renderSection('TEAMS EN DEHORS EUROPE', data.non_europe_teams)}
//                     {renderSection('5 PLAYERS GIRLS AVEC TEAM', data.female_players_with_team, true)}
//                     {renderSection('5 PLAYERS BOYS AVEC TEAM', data.male_players_with_team, true)}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;