import React, { Component } from 'react';

import './AboutPage.css';

// import ctPhoto from './ct-photo.jpg';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <h1 className="header">About</h1>

          <p>
            I am Kyle Pfromer, a software developer that lives in Boulder, Colorado. Naturally, I enjoy mountain biking, hiking, and snowboarding.
          </p>

          <p>
            I mountain biked the entire <a href="http://tomoab.com/ct/">450 mile Colorado Trail</a> last summer with my dad.
          </p>

            {/* <img src={ctPhoto} alt="Colorado Trail"/> */}

          <p>
            I am crazy about Typescript. Typescript's flexibility and tools, especially when it comes to
            decorators, is extraordinary!
          </p>

        </div>
      </div>
    );
  }
}
