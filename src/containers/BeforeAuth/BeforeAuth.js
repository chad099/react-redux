import React, { Component } from 'react';
import logo from '../../styles/images/logo.png';
import username from '../../styles/images/username.png';
import tick from '../../styles/images/tick.png';
import password from '../../styles/images/password.png';

export default class Login extends Component {
  render() {
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
                      {this.props.children}
                </div>
            </div>
        </section>
      </div>
    );
  }
}
