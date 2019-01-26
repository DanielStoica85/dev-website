import React from 'react';
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
        {' '}
        Web <span className="text-secondary">Developer</span> / QA{' '}
        <span className="text-secondary">Engineer</span> / JavaScript{' '}
        <span className="text-secondary">Enthusiast</span>
      </h2>
      <IconsList />
    </main>
  );
};

export default Homepage;
