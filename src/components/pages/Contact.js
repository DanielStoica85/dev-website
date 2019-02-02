import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <main className="contact-main">
        <h1 className="page-title">
          Contact <span className="text-secondary">Me_</span>
        </h1>
        <h2>
          Have a question for me? Or maybe you would like us to work together on
          a cool project? Feel free to send me an email or use one of the social
          links listed below.
        </h2>
        <div className="contact-boxes">
          <div>
            <a
              href="mailto:contact@daniel.stoica.io?Subject=Hello%20there"
              target="_top"
              rel="noopener"
            >
              <i className="fas fa-envelope" /> contact@daniel.stoica.io
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/daniel-stoica-18262650/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://github.com/DanielStoica85"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" /> Github
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Contact;
