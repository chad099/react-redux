import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, CurrentProject} from '../../components/common';
import {setCurrentProject} from '../../reducers/user';

@connect(state => ({
  user: state.user,
  auth: state.auth
}))

export default class MainDashboard extends Component {
  state = {open: false};

  openSidebar = () => {
    const {open} = this.state;
    const el = document.getElementById("sidebar");
    const sidebarCollapse = document.getElementById("sidebarCollapse");
    this.setState({open: !open});
    el.className = (!open)? 'active': '';
    sidebarCollapse.className = (!open)? 'btn btn-info navbar-btn rotate': 'btn btn-info navbar-btn';
  }

  handleClick = (prop) => {
    const {dispatch} = this.props;
    const {currentProject} = this.props.user;
    let flag = true;
    for(let i = 0; i < currentProject.length; i++) {
      if(currentProject[i].title == prop.title) {
        flag = false;
        break;
      }
    }

    if(flag) {
      currentProject.push(prop);
    }

    dispatch(setCurrentProject(currentProject));
  }

  render() {
    const {currentProject} = this.props.user;
    return(
      <div>
        <Header handleClick={this.handleClick}/>
        <div className="wrapper">
            <div>
              <CurrentProject currentProject={currentProject}/>
            </div>
            <div id="content">
                <div className="navbar-header">
                    <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn" onClick={this.openSidebar}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                </div>
                {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}
