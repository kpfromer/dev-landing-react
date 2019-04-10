import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIconType } from '../types';

import './SocialIcon.css';

export default class SocialIcon extends Component<SocialIconType> {
  render() {
    return (
      <a target="_blank" href={this.props.url}>
        <FontAwesomeIcon className="icon" icon={this.props.icon}/>
      </a>
    );
  }
}