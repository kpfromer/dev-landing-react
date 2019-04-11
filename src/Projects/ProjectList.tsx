import React, { Component } from 'react';
import Project from './Project';

import styles from './ProjectList.module.css';
import { Tag } from '../types';
import { inject, observer } from 'mobx-react';
import { ProjectStore } from '../store/ProjectStore';

type ProjectListProps = {
  projectStore: ProjectStore
}

@observer
class ProjectList extends Component<ProjectListProps> {
  render() {
    return (
      <div className={styles.projectList}>
        {this.props.projectStore.projectWithDefinitions.map(project => {
          if (project.tags.includes(undefined)) throw new Error('Tag definitions are incomplete');
          return <Project key={project.name} {...project} tags={project.tags as Tag[]} />
        })}
      </div>
    );
  }
}

export default inject(store => ({ projectStore: store.projectStore }))(ProjectList);
