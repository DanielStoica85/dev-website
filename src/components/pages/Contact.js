import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <main className="contact-main">
        <h1 className="page-title">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2>
          Have a question for me? Or maybe you would like us to work together on
          a cool project? Feel free to send me an email or use of the social
          links listed below.
        </h2>
        <div className="contact-boxes">
          <div>
            <a
              href="mailto:contact@daniel.stoica.io?Subject=Hello%20there"
              target="_top"
              rel="noopener"
            >
              <i className="fas fa-envelope fa-2x" /> contact@daniel.stoica.io
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/daniel-stoica-18262650/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" /> LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://github.com/DanielStoica85"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x" /> Github
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Contact;
