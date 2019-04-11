import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Landing from "../../../components/Landing";
import ButtonGoogle from "../../../components/ButtonGoogle";
import ButtonConfirm from "../../../components/ButtonConfirm";
import InputText from "../../../components/InputText";
import CheckBox from "../../../components/CheckBox";

import style from './style.module.scss';

class SignUp extends Component {
  render() {
    return (
      <div className={style.container}>
        <Landing
          className={style.landing}
        />
        <div className={style.signUp}>
          <div className={style.form}>
            <h2>Create a new account</h2>
            <ButtonGoogle
              labelText="Sign up with your work Google account."
              buttonText="Sign up with Google"
            />
            <div className={style.splitter}>
              <span>or</span>
            </div>
            <div className={style.withEmail}>
              <h3>Enter you work details</h3>
              <InputText
                labelText="Full Name"
                placeholderText="John Smith"
              />
              <InputText
                labelText="Work Email"
                placeholderText="name@company.com"
              />
              <InputText
                labelText="Password"
                placeholderText="Password"
              />
              <CheckBox>
                <label>I agree to Bulletin's <u>Terms of Use</u> and <u>Privacy Policy</u></label>
              </CheckBox>
            </div>            
            <ButtonConfirm
              buttonText="Sign Up"
            />
          </div>
        </div>
      </div>
    )
  }
};

export default SignUp;