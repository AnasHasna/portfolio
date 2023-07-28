import React from 'react';
import './SideBar.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logoAH.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4D4D4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassName="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4D4D4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassName="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4D4D4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/anas-hasna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="anchor-icon"
              color="#4D4D4e"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AnasHasna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="anchor-icon"
              color="#4D4D4e"
            />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/xanashasnax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="anchor-icon"
              color="#4D4D4e"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
