import React from 'react';
import './AnimatedFiles.scss';

const AnimatedLetters = (prop) => {
  return (
    <span>
      {prop.strArray.map((char, i) => (
        <span key={char + i} className={`${prop.letterClass} _${i + prop.idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
