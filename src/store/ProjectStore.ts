import { observable, computed } from "mobx";
import { ProjectType } from '../types';
import tagStore from './TagStore';
import config from "../config";

export class ProjectStore {
  @observable projects: ProjectType[];
  constructor(projects: ProjectType[] = []) {
    this.projects = projects;
  }

  @computed get projectWithDefinitions() {
    const filteredProjects = tagStore.selectedTag === null ? this.projects : this.projects.filter(project => project.tags.includes(tagStore.selectedTag as string));
    return filteredProjects.map(project => {
      const tagsWithDefinitions = project.tags.map(tag => tagStore.tags.find(definition => definition.id === tag));
      return {
        ...project,
        tags: tagsWithDefinitions
      }
    })
  }
}
export default new ProjectStore(config.get('projects') as ProjectType[]);