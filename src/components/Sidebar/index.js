import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
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
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" className="nav-svg" />
      </NavLink>
      <NavLink exact="true" className="about-link nav-menu-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" className="nav-svg" />
      </NavLink>
      <NavLink
        exact="true"
        className="contact-link nav-menu-link"
        to="/contact"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          color="#4d4d4e"
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
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Bifabig">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/biftu94">
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://medium.com/@biftubig">
          <FontAwesomeIcon icon={faMedium} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wellfound.com/u/biftu-girma"
        >
          <FontAwesomeIcon icon={faAngellist} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
