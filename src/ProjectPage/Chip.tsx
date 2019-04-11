import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Chip.module.css';

type ChipProps = {
  onClick: () => any;
  color: string;
  backgroundColor: string;
  className: string;
  clicked: boolean;
  children: string;
}

export default class Chip extends Component<ChipProps> {

  static defaultProps = {
    onClick: () => {},
    clicked: false,
    color: 'var(--main-color)',
    backgroundColor: 'var(--second-color)',
    className: ''
  }

  render() {
    const { onClick, color, backgroundColor, className, clicked, children } = this.props;
    const classVal = classNames(styles.chip, className);
    
    const style = {
      color,
      backgroundColor: backgroundColor,
      boxShadow: `0px 0px 0px 3px ${color} inset`
    }
    const clickedStyle = {
      color: backgroundColor,
      backgroundColor: color
    }
    return (
      <div style={clicked ? { ...style, ...clickedStyle } : style} className={classVal} onClick={onClick}>
        <div className={styles.text}>
          {children}
        </div>
      </div>
    );
  }
}