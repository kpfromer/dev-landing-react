import React, { Component } from 'react';
import Header from "../Header/Header";
import SocialIconList from "../SocialIconList/SocialIconList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/fontawesome-free-solid";

import './LandingPage.css';
import { SocialIconType } from '../types';

type LandingPageProps = {
  icons: SocialIconType[];
  taglines: string[];
}

type LandingPageState = {
  isArrowHidden: boolean;
}

export default class LandingPage extends Component<LandingPageProps, LandingPageState> {
  state: LandingPageState = {
    isArrowHidden: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 30 && !this.state.isArrowHidden) {
      this.setState({
        isArrowHidden: true
      });
    } else if (scrollPosition <= 30 && this.state.isArrowHidden) {
      this.setState({
        isArrowHidden: false
      });
    }
  };

  render() {

    const arrowDownOpacity = this.state.isArrowHidden ? 0 : 1;

    return (
      <div className="container">
        <main>
          <Header taglines={this.props.taglines}/>
          <SocialIconList icons={this.props.icons}/>
        </main>
        <div className="icon-container">
          <FontAwesomeIcon className="down-arrow" icon={faArrowDown as any} style={{ opacity: arrowDownOpacity }} />
        </div>
      </div>
    );
  }
}
