import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Chip.module.css';

type ChipProps = {
  onClick: () => any;
  clicked: boolean;
  children: string;
}

export default class Chip extends Component<ChipProps> {
  static defaultProps = {
    onClick: () => {},
    clicked: false
  }

  render() {
    const className = classNames(styles.chip, { [styles.clicked]: this.props.clicked })
    return (
      <div className={className} onClick={this.props.onClick}>
        <div className={styles.text}>
          {this.props.children}
        </div>
      </div>
    );
  }
}