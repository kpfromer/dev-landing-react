import React, { Component } from 'react';
import ProjectList from '../Projects/ProjectList';
import Chip from './Chip';

import styles from './BaseProjectPage.module.css';
import { inject, observer } from 'mobx-react';
import { ProjectStore } from '../store/ProjectStore';
import { TagStore } from '../store/TagStore';

type BaseProjectPageProps = {
  projectStore: ProjectStore;
  tagStore: TagStore;
}

@observer
class BaseProjectPage extends Component<BaseProjectPageProps> {

  handleTagClick = (tagId: string) => () => {
    if (this.props.tagStore.selectedTag === tagId) {
      return this.props.tagStore.changeSelectedTag(null);
    }
    this.props.tagStore.changeSelectedTag(tagId);
  }

  render() {
    const { projectStore, tagStore } = this.props;
    const { selectedTag } = tagStore;

    const projects = projectStore.projectWithDefinitions;

    const filteredProjects = selectedTag === null ?
      projects
      :
      projects.filter(project => project.tags.map(tag => {
        if (tag === undefined) throw new Error(`Tag in project is not`);
        return tag.name;
      }).includes(selectedTag));

    const tags = tagStore.tags.map(tag => {
      return (
        <Chip
          key={tag.id}
          onClick={this.handleTagClick(tag.id)}
          clicked={tag.id === selectedTag}
          className={styles.chip}
          color={tag.color}
        >
          {tag.name}
        </Chip>
      );
    });
    
    return (
      <div className={styles.content}>
        <div className={styles.chipList}>
          {tags}
        </div>
        <ProjectList />
      </div>
    );
  }
}

export default inject(store => ({ projectStore: store.projectStore, tagStore: store.tagStore }))(BaseProjectPage);