import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Landing from "../../common/Landing";
import ButtonGoogle from "../../common/ButtonGoogle";
import ButtonConfirm from "../../common/ButtonConfirm";
import InputText from "../../common/InputText";

import style from './style.module.scss';

export default class SignIn extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.container}>
        <Landing
          className={style.landing}
        />
        <div className={style.form}>
          <h2>Sign in</h2>
          <ButtonGoogle
            labelText="Sign in with your work Google account."
            buttonText="Sign in with Google"
          />
          <div className={style.splitter}>
            <span>or</span>
          </div>
          <div className={style.withEmail}>
            <h3>Enter you work details</h3>
            <InputText
              labelText="Work Email"
              placeholderText="name@company.com"
            />
            <InputText
              labelText="Password"
              placeholderText="Password"
            />
          </div>
          <div className={style.forgot}>
            <a href="#">Forgot Password?</a>
          </div>
          <ButtonConfirm
            buttonText="Sign In"
          />
        </div>
      </div>
    )
  }
};