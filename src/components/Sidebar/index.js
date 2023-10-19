import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faHome, faSuitcase, faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngellist,
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="subtitle" />
    </Link>
    <nav id="sidebar">
      <NavLink exact="true" className="nav-menu-link" to="/">
        <FontAwesomeIcon icon={faHome} color="#fff" className="nav-svg" />
      </NavLink>
      <NavLink exact="true" className="about-link nav-menu-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#fff" className="nav-svg" />
      </NavLink>
      <NavLink exact="true" className="portfolio-link nav-menu-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color="#fff" className="nav-svg" />
      </NavLink>
      <NavLink
        exact="true"
        className="contact-link nav-menu-link"
        to="/contact"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          color="#fff"
          className="nav-svg"
        />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/biftu-girma"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#fff" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Bifabig">
          <FontAwesomeIcon icon={faGithub} color="#fff" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/biftu94">
          <FontAwesomeIcon icon={faTwitter} color="#fff" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://medium.com/@biftubig">
          <FontAwesomeIcon icon={faMedium} color="#fff" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wellfound.com/u/biftu-girma"
        >
          <FontAwesomeIcon icon={faAngellist} color="#fff" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
