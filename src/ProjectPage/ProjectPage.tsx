import React, { Component } from 'react';

// import styles from './ProjectPage.module.css';
import { ProjectType } from '../types';

export default class ProjectPage extends Component<ProjectType> {
  render() {
    const { name, description, imageUrl, url } = this.props;
    return (
      <div>
        
      </div>
    );
  }
}