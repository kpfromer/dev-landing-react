import React, { Component } from 'react';
import ProjectList from '../Projects/ProjectList';
import Chip from './Chip';
import { ProjectType } from '../types';

type BaseProjectPageProps = {
  projects: ProjectType[];
}

type BaseProjectPageState = {
  selectedTag: null | string;
}

export default class BaseProjectPage extends Component<BaseProjectPageProps, BaseProjectPageState> {

  state: BaseProjectPageState = {
    selectedTag: null
  }

  handleTagClick = (tagName: string) => () => this.setState(prevState => {
    if (prevState.selectedTag === tagName) {
      return { selectedTag: null };
    }
    return { selectedTag: tagName };
  });

  render() {
    const { projects } = this.props;
    const { selectedTag } = this.state;

    const tagNames = projects.reduce((prevTags: string[], project) => {
      const list = [...prevTags];
      project.tags.forEach(tag => {
        if (!list.includes(tag)) list.push(tag)
      });
      return list;
    }, []);

    const filteredProjects = selectedTag === null ? projects : projects.filter(project => project.tags.includes(selectedTag));

    const tags = tagNames.map(tag => 
      <Chip
        key={tag}
        onClick={this.handleTagClick(tag)}
        clicked={tag === selectedTag}
      >
        {tag}
      </Chip>
    );
    
    return (
      <div>
        {tags}
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}