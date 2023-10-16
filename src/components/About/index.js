import { useEffect, useState } from 'react';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I&apos;m a very ambitious full-stack developer looking for a role in an
            established Tech company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            Since I was a little boy, Coding has always been my passion.
            So when the time came for my undergraduate studies I chose Software Engineering and
            I became part of the second batch of students to graduate in the field from my campus.
            I always thought I could work as a developer but things took a different turn and
            I started working as a digital marketer both locally and on freelancing platforms.
            This experience helped me to understand what it means to work as part of a remote team.
            I was able to work for companies in the USA, Israel, and Malaysia.
          </p>
          <p>
            If I need to define myself in a sentence it would be a believer of Jesus Christ,
            a family man, a father to a handsome boy, and tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGem} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
