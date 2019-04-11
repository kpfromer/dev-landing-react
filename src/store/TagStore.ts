import { observable, action } from 'mobx';
import config from "../config";
import { Tag } from "../types";

export class TagStore {
  @observable tags: Tag[];
  @observable selectedTag: string | null;
  constructor(tags: Tag[] = [], selectedTag = null) {
    this.tags = tags;
    this.selectedTag = selectedTag;
  }

  @action changeSelectedTag = (tagId: string | null) => this.selectedTag = tagId;
}

export default new TagStore(config.get('tags') as Tag[]);