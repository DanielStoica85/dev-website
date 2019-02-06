import React, { Component } from 'react';
import Skill from '../elements/Skill';
import PortfolioItem from '../elements/PortfolioItem';

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
        image: './images/item.jpeg',
        url: 'http://www.danielstoica.io',
        github: 'https://www.github.com/DanielStoica85',
        tools: ['html5', 'css3', 'React']
      },
      {
        title: 'The Project',
        description: 'This is a short description of the project',
        image: './images/item.jpeg',
        url: 'http://www.danielstoica.io',
        github: 'https://www.github.com/DanielStoica85',
        tools: ['html5', 'css3', 'React']
      },
      {
        title: 'The Project',
        description: 'This is a short description of the project',
        image: './images/item.jpeg',
        url: 'http://www.danielstoica.io',
        github: 'https://www.github.com/DanielStoica85',
        tools: ['html5', 'css3', 'React']
      },
      {
        title: 'The Project',
        description: 'This is a short description of the project',
        image: './images/item.jpeg',
        url: 'http://www.danielstoica.io',
        github: 'https://www.github.com/DanielStoica85',
        tools: ['html5', 'css3', 'React']
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
        <div className="projects">
          {this.state.projects.map((project, index) => {
            return (
              <PortfolioItem
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
                github={project.github}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default Portfolio;
