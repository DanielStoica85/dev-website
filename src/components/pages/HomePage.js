import React from 'react';
import { Link } from 'react-router-dom';
import IconsList from '../elements/IconsList';

const Homepage = () => {
  return (
    <main>
      <h1>
        Hi<span className="text-secondary">.</span>
      </h1>
      <h1>
        I<span className="text-secondary">'</span>m
        <span className="text-secondary"> Daniel</span>.
      </h1>
      <h2>
        I'm a Web & QA <span className="text-secondary">Developer</span> based
        in Eindhoven, Netherlands.
      </h2>
      <Link to="/contact" className="contact-button">
        <i className="fas fa-envelope fa-1x" /> Say Hi!
      </Link>
      <IconsList className="icons" />
    </main>
  );
};

export default Homepage;
