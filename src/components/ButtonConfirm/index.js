import React, { Component } from 'react';

import style from "./style.module.scss";

export default class ButtonConfirm extends Component {
  render() {
    return (
      <button className={style.buttonConfirm}>
        { this.props.buttonText }
      </button>
    )
  }
}
