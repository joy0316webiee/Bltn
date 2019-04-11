import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Landing from "../../../components/Landing";
import ButtonGoogle from "../../../components/ButtonGoogle";
import ButtonConfirm from "../../../components/ButtonConfirm";
import InputText from "../../../components/InputText";

import style from './style.module.scss';

class SignIn extends Component {
  render() {
    return (
      <div className={style.container}>
        <Landing
          className={style.landing}
        />
        <div className={style.signIn}>
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
            <div className={style.create}>
              No account?<a href="#"> Create One!</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default SignIn;