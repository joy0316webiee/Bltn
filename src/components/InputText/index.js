import React, { Component } from 'react';

import style from "./style.module.scss";

export default class InputText extends Component {
  render() {
    return (
      <div className={style.container}>
        <label className={style.label}>{ this.props.labelText }</label>
        <input className={style.text} placeholder={ this.props.placeholderText }/>
      </div>
    )
  }
}
