import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Team.css';
import teamImage from '../../assets/about.png'; // Chemin relatif depuis le fichier

const Team = () => {

    return (
        <div className='teams'>
            <div className='teams_list'>
                <div className='titleT'>
                    <h1 className='play-bold'>TEAMS</h1>
                </div>
                <div className='teams_list_deux'>
                    <section className="section">
                        <div className="card">
                            <div className="card__border"></div>
                            <div className="card__border-line"></div>
                            <div className="card__inner">
                                <div className="card__img">
                                    {/* Affichage de l'image importée */}
                                    <div className="img__athlete">
                                        <img src={teamImage} alt="Team" />
                                    </div>
                                </div>
                                <div className="card__text">
                                    <div className="card__type" style={{ '--bg-color': 'hsl(40, 100%, 50%)' }}></div>
                                    <h1 className='titleCard'>Team Name</h1>
                                    <div className='boutonsTeams'>
                                        {/* <Link to={`/teams/update/${team.id}`}><button>🔎</button></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Team;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Navbar from '../General/Navbar';
// import '../../style/Teams.css';

// const Teams = () => {
//     const [teams, setTeams] = useState([]);

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/teams')
//             .then((response) => {
//                 setTeams(response.data.data.teams);
//             })
//             .catch((error) => {
//                 console.error('ooops error fetching teams', error);
//             });
//     }, []);

//     const handleDelete = async (teamId) => {
//         try {
//             await axios.delete(`http://127.0.0.1:8000/api/teams/delete/${teamId}`);
//             setTeams(teams.filter(team => team.id !== teamId));
//         } catch (error) {
//             console.error('Error deleting team:', error);
//         }
//     };

//     const getColorByTeam = (teamId) => {
//         switch (teamId) {
//             case 472:
//                 return 'hsl(240, 44%, 36%)'; 
//             case 473:
//                 return 'hsl(133, 42%, 27%)';
//             case 474:
//                 return 'hsl(54, 46%, 31%)';
//             case 475:
//                 return 'hsl(0, 58%, 46%)'; 
//             default:
//                 return 'hsl(240, 67%, 8%)'; 
//         }
//     };

//     return (
//         <div className='teams'>
//             <Navbar />
//             {Array.isArray(teams) && teams.length > 0 ? (
//                 <div className='teams_list'>
//                     <div className='titleT'>
//                         <h1 className='play-bold'>TEAMS</h1>
//                     </div>
//                     <div className='teams_list_deux'>
//                     {teams.map((team) => (
//                         <section className="section" key={team.id}>
//                             <div className="card" style={{ '--color': getColorByTeam(team.id) }}>
//                                 <div className="card__border"></div>
//                                 <div className="card__border-line"></div>
//                                 <div className="card__inner">
//                                     <div className="card__img">
//                                         {/* <div className="img__team play-bold">
//                                             <p>{team.name}</p>
//                                         </div> */}
//                                         <div className="img__athlete">
//                                             {team.image && (
//                                                 <img src={`http://127.0.0.1:8000${team.image}`} alt={team.name} />
//                                             )}
//                                         </div>
//                                     </div>
//                                     <div className="card__text">
//                                         <div className="card__type" style={{ '--bg-color': 'hsl(40, 100%, 50%)' }}></div>
//                                         <Link to={`/teams/${team.id}`}><h1 className='titleCard'>{team.name}</h1></Link>
//                                         <div className='boutonsTeams'>
//                                             <button onClick={() => handleDelete(team.id)}>❌</button>
//                                             <Link to={`/teams/update/${team.id}`}><button>🔎</button></Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     ))}
//                     </div>
//                 </div>
//             ) : (
//                 <p>NO TEAMS</p>
//             )}
//             <Link to="/teams/create"><button>CREATE TEAM</button></Link>
//         </div>
//     );
// };

// export default Teams;