import React from 'react';
import './pattern-selector.styles.scss';

const PatternSelector = ({ name, img, selectedPattern, setSelectedPattern }) => {
  return (
    <div
      className='pattern-container'
      style={selectedPattern === name ? { transform: 'scale(1.2)', transition: 'all .4s ease-in-out' } : {}}
      onClick={() => setSelectedPattern(name)}
    >
      <img src={img} alt={`${name} pattern`} />
      <p>{name}</p>
    </div>
  );
};

export default PatternSelector;
