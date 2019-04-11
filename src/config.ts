import { ProjectType, Tag, SocialIconType } from "./types";
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/fontawesome-free-brands";
import convict from 'convict';

export default convict({
  projects: [
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
  ] as ProjectType[],
  tags: [
    {
      id: 'react',
      name: 'React',
      color: '#00d8ff'
    },
    {
      id: 'node',
      name: 'Nodejs',
      color: '#6cc24a'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      color: '#007acc'
    },
    {
      id: 'rails',
      name: 'Rails',
      color: '#cc0000'
    },
    {
      id: 'nestjs',
      name: 'NestJS',
      color: '#E0234E'
    }
  ] as Tag[],
  socialIcons: [
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
  ] as SocialIconType[],
  taglines: ['React Aficionado', 'Express Enthusiast', 'Fullstack Developer'] as string[]
});