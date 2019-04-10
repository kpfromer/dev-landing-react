import React, { Component } from 'react';

import styles from './Project.module.css';
import { ProjectType } from '../types';

const Link = ({ to, children, ...rest }: any) => <a href={to} {...rest}>{children}</a>; 

class Project extends Component<ProjectType> {
  render() {
    const { name, description, imageUrl, url } = this.props;
    return (
      <Link to={url} className={styles.project}>
        <div className={styles.imageBox}>
          <img className={styles.image} src={imageUrl} />
        </div>
        <div className={styles.textBox}>
          <h3>{name}</h3>
          <p>{description}</p>

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