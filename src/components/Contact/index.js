import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fy9dwjf', 'template_73vdu8l', form.current, 'lKPVSQb5D0K5YfNh9')
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        },
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am interested in remote/freelance opportunities.
            If you have any requests or questions,
            don&apos;t hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Biftu Girma
          <br />
          <br />
          Addis Ababa,
          <br />
          Ethiopia
          {' '}
          <br />
          <span>biftubig@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[9.005808, 38.767968]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[9.005808, 38.767968]}>
              <Popup>Biftu lives here! :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
