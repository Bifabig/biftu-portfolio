import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = 'iftu,'.split('');
  const jobArray = 'a Full-stack'.split('');
  const jobArray2 = 'web developer'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i!</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>&apos;m</span>
            <img src={LogoTitle} alt="developer" />
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
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
              idx={22}
            />
          </h1>
          <h2>
            React/Redux | Ruby on Rails | 100% Job Success Score on Upwork
            | Digital Marketing Specialist

          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Home;
