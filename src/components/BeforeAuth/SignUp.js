import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {TextBox} from '../FormInput';
import { Field, reduxForm } from 'redux-form';
import {required, maxLength30, maxLength254, email, minLength8, maxLength50, password} from '../../validationRules';
import {signup} from '../../reducers/auth';
import {Validation} from '../common';

@connect(state => ({
  auth: state.auth
}))

@reduxForm({
  form: "signupForm"
})

export default class SignUp extends Component {

  renderLogin = () => {
    const {dispatch} = this.props;
    dispatch(push(`/`));
  }

  handleSignup = prop => {
    const {dispatch} = this.props;
  console.log('prop', prop);
  dispatch(signup(prop));
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const {errors} = this.props.auth;
    console.log('errors', errors);
    return (
      <div className="col-md-5 col-sm-5 login-form sign-up">
          <h1>Sign Up</h1>
          <p className="text-size"><strong>Please fill your infomation below</strong></p>
          <Validation errors={errors} />
          <form onSubmit={handleSubmit(this.handleSignup)}>
              <div className="form-group">
                <Field name="first_name" placeholder="First Name" type="text" component={TextBox} validate={[required, maxLength30]} className="form-control"/>
              </div>

              <div className="form-group">
                <Field name="last_name" placeholder="Last Name" type="text" component={TextBox} validate={[required, maxLength30]}/>
              </div>

              <div className="form-group">
                <Field name="email" placeholder="Email" type="text" component={TextBox} validate={[required, maxLength254, email]}/>
              </div>

              <div className="form-group">
                <Field name="institution" type="text" placeholder="Institution/Organization" component={TextBox} validate={[required, maxLength50]}/>
              </div>

              <div className="form-group">
                <Field name="password" type="password" placeholder="password" component={TextBox} validate={[required, minLength8, password]}/>
              </div>

              <div className="form-group">
                <Field name="confirmPassword" type="password" placeholder="Confirm password" component={TextBox} validate={[required, password]} />
              </div>

              <div className="form-group">
                  <div style={{height: '62px;background: #ccc'}}></div>
              </div>

              <div className="form-group">
                  <Field name="captcha" placeholder="Captcha" component={TextBox} />
              </div>

              <div className="col-md-12 text-center m-top">
                  <button type="submit" className="btn btn-default" disabled={submitting}>Sign Up</button>
              </div>

          </form>
          <div className="col-md-12 text-center m-top">
              <p className="gray-color"><strong>Already have an account? <span className="text-color" onClick={this.renderLogin}>Login</span></strong></p>
          </div>
      </div>
    );
  }
}
