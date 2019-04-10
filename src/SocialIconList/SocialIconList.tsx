import React, { Component } from 'react';
import SocialIcon from "../SocialIcon/SocialIcon";
import './SocialIconList.css';
import { SocialIconType } from '../types';

type SocialIconListProps = {
  icons: SocialIconType[];
}

export default class SocialIconList extends Component<SocialIconListProps> {
  render() {
    return (
      <div className="icons-social">
        {this.props.icons.map(icon =>
          <SocialIcon key={icon.url} url={icon.url} icon={icon.icon}/>
        )}
      </div>
    );
  }
}
