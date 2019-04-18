import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import './Header.css';

type HeaderProps = {
  taglines: string[];
}

export default class Header extends Component<HeaderProps> {
  shuffle<T>(array: T[]): T[] {
    const newArray = array.slice(0);
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; 
    }
    return newArray;
  }

  render() {
    const formattedTagline = this.shuffle(this.props.taglines).join(' | ');
    return (
      <div>
        <div className="intro">Hello, I'm Kyle!</div>
        <div className="tagline">
        <Typing startDelay={1000} hideCursor>
          {formattedTagline}
        </Typing>
        </div>
      </div>
    );
  }
}