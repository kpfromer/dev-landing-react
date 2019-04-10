import React, { Component } from 'react';
import Particles from 'react-particles-js';

import './App.css';

import AboutPage from "./AboutPage/AboutPage";
import LandingPage from "./LandingPage/LandingPage";
import BaseProjectPage from './ProjectPage/BaseProjectPage';
import { SocialIconType, ProjectType } from './types';

type AppProps = {
  icons: SocialIconType[];
  projects: ProjectType[];
  taglines: string[];
}

type AppState = {
  mainColor: string;
  secondColor: string;
}

class App extends Component<AppProps, AppState> {

  state = {
    mainColor: '#0277BD',
    secondColor: '#FAFAFA'
  };

  componentDidMount() {
    this.updateTheme();
  }

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    if (prevState.mainColor !== this.state.mainColor || prevState.secondColor !== this.state.secondColor) {
      this.updateTheme();
    }
  }

  updateTheme = () => {
    const { mainColor, secondColor } = this.state;
    document.documentElement.style.setProperty('--main-color', mainColor);
    document.documentElement.style.setProperty('--second-color', secondColor);
  };

  render() {

    const { mainColor, secondColor } = this.state;

    const particlesStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: secondColor
    };

    const particlesParams = {
      particles: {
        value: 80,
        size: {
          value: 5,
          random: true
        },
        density: {
          enable: true,
          value_area: 800
        },
        color: {
          value: mainColor
        },

      },
      retina_detect: true
    };

    return (
      <div>
        <Particles params={particlesParams} style={particlesStyle} />
        <LandingPage icons={this.props.icons} taglines={this.props.taglines}/>
        <AboutPage/>
        <BaseProjectPage projects={this.props.projects} />
      </div>
    );
  }
}

export default App;
