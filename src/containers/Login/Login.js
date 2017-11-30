import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import logo from '../../styles/images/logo.png';
import username from '../../styles/images/username.png';
import tick from '../../styles/images/tick.png';
import password from '../../styles/images/password.png';
import {TextBox} from '../FormInput';
import { Field, reduxForm } from 'redux-form';
import {required, maxLength30, maxLength254, email, minLength8, maxLength50, password} from '../../validationRules';
import {login} from '../../reducers/auth';

@connect(state => ({
  auth: state.auth
}))

@reduxForm({
  form: "loginForm"
})

export default class Login extends Component {

  handleLogin = prop => {
    const {dispatch} = this.props;
  console.log('prop', prop);
  prop.isDashboard = true;
  dispatch(login(prop));
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return(
      <div>
        <section className="login-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 col-sm-7 login-bg">
                        <img src={logo} alt="logo"></img>
                        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                        <p>Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing </p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                    </div>
                    <div className="col-md-5 col-sm-5 login-form">
                        <h1>Login</h1>
                        <p className="text-size"><strong>Please fill your infomation below</strong></p>
                        <form onSubmit={handleSubmit(this.handleLogin)}>
                            <div className="form-group">
                                <label>Username/Email</label>
                                <Field name="username" placeholder="username" type="text" component={TextBox} validate={[required, maxLength254, email]}/>
                                <img className="icon" src={username}></img>
                                <img className="tick" src={tick}></img>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <Field name="password" placeholder="password" type="password" component={TextBox} validate={[required, maxLength254, password]}/>
                                <img className="icon" src={password}></img>
                            </div>

                            <a href="#">Forgot Password?</a>
                            <div className="col-md-12 text-center m-top">
                                <button type="submit" className="btn btn-default">Login</button>
                            </div>
                        </form>
                        <div className="col-md-12 text-center m-top">
                            <p className="gray-color"><strong>Dont have an account yet? <span className="text-color">Sign Up</span></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
