import React, { Component } from 'react';
import Project from './Project';

import styles from './ProjectList.module.css';
import { ProjectType } from '../types';

type ProjectListProps = {
  projects: ProjectType[];
}

class ProjectList extends Component<ProjectListProps> {
  render() {
    return (
      <div className={styles.projectList} >
        {this.props.projects.map(project => 
          <Project {...project} />  
        )}
      </div>
    );
  }
}

export default ProjectList;