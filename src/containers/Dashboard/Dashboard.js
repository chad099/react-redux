import React, {Component} from 'react';
import {Header} from '../../components/common';
import {connect} from 'react-redux';

@connect(state => ({
  user: state.user
}))

export default class Dashboard extends Component {
  
  componentDidMount() {
    document.body.className = 'bg';
  }

  componentWillUnMount() {
      document.body.className = '';
  }

  render() {
    return(
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
