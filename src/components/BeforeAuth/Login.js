import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import logo from '../../styles/images/logo.png';
import username from '../../styles/images/username.png';
import tick from '../../styles/images/tick.png';
import passwordImage from '../../styles/images/password.png';
import {required, email, password} from '../../validationRules';
import {signup} from '../../reducers/auth';
import {TextBox} from '../FormInput';
import { Field, reduxForm } from 'redux-form';
import {login} from '../../reducers/auth';
import {Validation} from '../common';

@connect(state => ({
  auth: state.auth
}))

@reduxForm({
  form: "loginForm"
})

export default class Login extends Component {
  renderSignup = () => {
    const {dispatch} = this.props;
    dispatch(push(`/signup`));
  }

  login = prop => {
    const {dispatch} = this.props;
    prop.isDashboard = true;
    dispatch(login(prop));
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const {errors} = this.props.auth;
    return(
      <div className="col-md-5 col-sm-5 login-form">
          <h1>Login</h1>
          <p className="text-size"><strong>Please fill your infomation below</strong></p>
          <Validation errors={errors}/>
          <form onSubmit={handleSubmit(this.login)}>
              <div className="form-group">
                  <label>Username/Email</label>
                  <Field name="email" type="text" component={TextBox} validate={[required, email]} className="form-control"/>
                  <img className="icon" src={username}></img>
                  <img className="tick" src={tick}></img>
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <Field name="password" type="password" component={TextBox} validate={[required, password]} className="form-control"/>
                  <img className="icon" src={passwordImage}></img>
              </div>

              <a href="#">Forgot Password?</a>
              <div className="col-md-12 text-center m-top">
                  <button type="submit" className="btn btn-default" disabled={submitting}>Login</button>
              </div>
          </form>
          <div className="col-md-12 text-center m-top">
              <p className="gray-color"><strong>Dont have an account yet? <span className="text-color" onClick={this.renderSignup}>Sign Up</span></strong></p>
            </div>
        </div>
    );
  }
}
