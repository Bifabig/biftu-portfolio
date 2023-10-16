import PropTypes, { number, string } from 'prop-types';
import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => (
  <span>
    {strArray.map((char, i) => (
      <span key={char + Math.random()} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    ))}
  </span>
);

AnimatedLetters.defaultProps = {
  strArray: [],
  letterClass: string,
  idx: number,
};
AnimatedLetters.propTypes = {
  strArray: PropTypes.arrayOf(PropTypes.string),
  letterClass: PropTypes.string,
  idx: PropTypes.number,
};

export default AnimatedLetters;
