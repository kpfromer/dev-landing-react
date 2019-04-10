import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/fontawesome-free-brands";
import { SocialIconType, ProjectType } from './types';

const icons = [
  {
    icon: faGithub,
    url: 'https://github.com/kpfromer'
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/users/3448490/kyle-pfromer'
  },
  {
    icon: faLinkedin,
    url: 'https://linkedin.com/in/kyle-pfromer-a313a013b'
  }
] as SocialIconType[];

const taglines = ['React Lover', 'Express Enthusiast', 'Fullstack Developer'];

const projects = [
  {
    name: 'Fairview Robotics',
    description: 'A react based homepage for Fairview\'s Robotics team.',
    imageUrl: '',
    url: 'project/fairview-robotics',
    tags: ['react']
  },
  {
    name: 'Silent Auction',
    description: 'An expressjs and react based auction site.',
    imageUrl: 'http://gernene.com/img/projects/silent-auction/thumb.png',
    url: 'project/silent-auction',
    tags: ['react', 'node']
  },
  {
    name: 'Fairview Web Team',
    description: 'A react based response page creator, a kin to wix, for our school\'s counselors to create content.',
    imageUrl: 'http://gernene.com/img/projects/fhs/thumb.jpg',
    url: 'project/web-team',
    tags: ['react', 'typescript', 'rails']
  },
  {
    name: 'nestjs-typegoose',
    description: 'A library that connects typegoose (a mongoose model library) with nestjs.',
    imageUrl: '',
    url: 'project/nestjs-typegoose',
    tags: ['typescript', 'nestjs']
  }
] as ProjectType[];

ReactDOM.render(
  <App
    icons={icons}
    taglines={taglines}
    projects={projects} 
  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
