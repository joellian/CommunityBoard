
import React from "react";
import './MatchCard.css'; 
import Matches from '../components/Matches';


const MatchCard = ({ match }) => {

  const currentMatch = Matches.find((m) => m.id === match.id);
  if (!currentMatch) {
    return null; 
  }
  const { name, date, url } = currentMatch;
  const [team1Name, team2Name] = name.split(' vs ');

  const acmUrl = '../src/assets/acmlogo.png';
  const newcastleUrl = '../src/assets/newcastlelogo.png';
 
  return(
    <div className="match-card">
      <h2>{match.name}</h2>
      <p>{match.date}</p>
      <button className="match-button" onClick={() => window.open(match.url, '_blank')}>
        View Result
      </button>
    </div>
    );
};

export default MatchCard;