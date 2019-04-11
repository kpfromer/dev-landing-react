import React, { Component } from 'react';

import styles from './Project.module.css';
import { ProjectType, Tag, Omit } from '../types';
import Chip from '../ProjectPage/Chip';

const Link = ({ to, children, ...rest }: any) => <a href={to} {...rest}>{children}</a>; 

type ProjectProps = Omit<ProjectType, 'tags'> & { tags: Tag[] }

class Project extends Component<ProjectProps> {
  render() {
    const { name, description, imageUrl, url, tags } = this.props;
    const tagEl = tags.map(tag => (
      <Chip
        key={tag.name}
        color={tag.color} 
        className={styles.tag}
      >
        {tag.name}
      </Chip>
    ));
    return (
      <Link to={url} className={styles.project}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={imageUrl} />
        </div>
        <div className={styles.textBox}>
          <h3>{name}</h3>
          <p>{description}</p>
          <div className={styles.tags}>
            {tagEl}
          </div>

          <div className={styles.more}>
            <div>See More</div>
            {/* <div className={styles.arrow}>></div> */}
          </div>
        </div>
      </Link>
    );
  }
}

export default Project;