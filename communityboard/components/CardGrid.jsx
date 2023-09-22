
import React, {useEffect, useState } from 'react';
import MatchCard from './matchCard';
import './CardGrid.css';

const CardGrid = ({ matches }) => {
  return (
    <div className="card-grid">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default CardGrid;