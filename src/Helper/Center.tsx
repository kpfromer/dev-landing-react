import React, { Component } from 'react';

type CenterProps = {
  className: string;
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
}

export default class Center extends Component<CenterProps> {
  static defaultProps = {
    className: '',
    left: false,
    right: false,
    top: false,
    bottom: false
  }
  render() {
    const { className, left, right, top, bottom } = this.props; 
    const childStyle = {
      marginLeft: left ? 'auto' : 'none',
      marginRight: right ? 'auto' : 'none',
      marginTop: top ? 'auto' : 'none',
      marginBottom: bottom ? 'auto' : 'none'
    }
    return (
      <div style={{ display: 'flex' }}>
        <div style={childStyle} className={className} >
          {this.props.children}
        </div>
      </div>
    );
  }
}