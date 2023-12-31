import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = [' ', 'A', 'n', 'a', 's', ' ', 'H', 'a', 's', 'n', 'a'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];
  useEffect(() => {
    setLetterClass('text-animate-hover');
  }, 4000);
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>MERN Stack Developer / JavaScript Expert / Engineering Student</h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
