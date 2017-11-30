import React, {Component} from 'react';
import {Header, LeftMenu} from './common';
import {authUser} from '../reducers/user';
import {connect} from 'react-redux';
import { Button } from 'semantic-ui-react';

@connect(state => ({
  user: state.user
}))

export default class App extends Component {
  componentWillMount() {
    const { dispatch} = this.props;
    dispatch(authUser());
  }

  render() {
    const {pathname} = this.props.location;
    return(
      <div>
        <Header pathname={pathname}/>
         <Button primary>Primary</Button>
        <div className="container  mb-2">
          {this.props.children}
        </div>
      </div>
    );
  }
}
