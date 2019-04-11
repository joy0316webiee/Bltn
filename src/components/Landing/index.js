import React, { Component } from 'react';

import style from "./style.module.scss";

class Landing extends Component {
  computeClassName() {
    let className = style.container;
    if (this.props.className) className += ' ' + this.props.className;

    return className;
  }

  render() {
    return (
      <div className={this.computeClassName()}>
        <h1>bulletin</h1>
      </div>
    )
  }
}

export default Landing;
