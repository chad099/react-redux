import React, {Component} from 'react';
import {push} from 'react-router-redux';

export default class DashboardWelcome extends Component {

  static contextTypes = {
       store: React.PropTypes.object.isRequired,
   }

  renderDashboard = () => {
     const { dispatch } = this.context.store;
    dispatch(push(`/dashboard`));
  }

  render() {
    return(
      <div>
        <section className="welcome">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Welcome to <span className="text-color">Triad</span></h1>
                        <p className="text-color-p">GET STARTED WITH A TUTORIAL</p>
                        <button type="button" className="btn btn-warning">START TUTORIAL <i className="fa fa-angle-right" aria-hidden="true"></i></button>
                        <p className="skip" onClick={this.renderDashboard}>Skip Tutorial <i className="fa fa-angle-double-right" aria-hidden="true"></i></p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
