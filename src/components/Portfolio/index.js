import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'));
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  const renderPortfolio = (portfolio) => (
    <div className="images-container">
      {portfolio.map((port) => (
        <div className="image-box" key={Math.random()}>
          <img src={port.image} className="portfolio-image" alt="portfolio" />
          <div className="content">
            <p className="title">{port.name}</p>
            <h4 className="description">{port.description}</h4>
            <button
              className="btn"
              onClick={() => window.open(port.sourceUrl)}
              type="submit"
            >
              GitHub
            </button>
            <button
              className="btn"
              onClick={() => window.open(port.liveUrl)}
              type="submit"
            >
              Live
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
