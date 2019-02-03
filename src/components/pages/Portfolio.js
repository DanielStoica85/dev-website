import React, { Component } from 'react';
import Skill from '../elements/Skill';

export class Portfolio extends Component {
  state = {
    skills: [
      {
        name: 'HTML5',
        percentage: '85%'
      },
      {
        name: 'CSS3, Flexbox, Grid',
        percentage: '75%'
      },
      {
        name: 'Sass',
        percentage: '75%'
      },
      {
        name: 'Vamilla JavaScript',
        percentage: '80%'
      },
      {
        name: 'React',
        percentage: '60%'
      },
      {
        name: 'Vue.js',
        percentage: '45%'
      },
      {
        name: 'Node.js, Express, REST API',
        percentage: '65%'
      }
    ],
    projects: [
      {
        title: 'The Project',
        description: 'This is a short description of the project',
        image: '',
        url: 'http://www.danielstoica.io',
        github: 'https://www.github.com/DanielStoica85'
      },
      {
        title: 'The Project',
        description: 'This is a short description of the project',
        image: '',
        url: 'http://www.danielstoica.io',
        github: 'https://www.github.com/DanielStoica85'
      },
      {
        title: 'The Project',
        description: 'This is a short description of the project',
        image: '',
        url: 'http://www.danielstoica.io',
        github: 'https://www.github.com/DanielStoica85'
      },
      {
        title: 'The Project',
        description: 'This is a short description of the project',
        image: '',
        url: 'http://www.danielstoica.io',
        github: 'https://www.github.com/DanielStoica85'
      }
    ]
  };

  render() {
    return (
      <main className="portfolio-main">
        <div className="portfolio-intro">
          <div className="portfolio-description">
            <h1 className="page-title">
              My <span className="text-secondary">Work_</span>
            </h1>
            <h2 className="page-subtitle">
              The main area of my web development expertise is front-end
              development (client side of a web application). Here you can find
              a few examples of projects built by myself and the main
              technologies and tools that I currently use.
            </h2>
          </div>
          <div className="portfolio-skills">
            {this.state.skills.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              );
            })}
          </div>
        </div>
        <div className="projects" />
      </main>
    );
  }
}

export default Portfolio;
