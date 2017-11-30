import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from './components/App';
import { Route, Switch, Redirect } from 'react-router-dom';
import BeforeAuth  from './containers/BeforeAuth';
import {Login, SignUp} from './components/BeforeAuth';
import Dashboard from './containers/Dashboard';
import {DashboardWelcome, MainDashboard, WorkFlow} from './components/Dashboard';
import {checkAuth} from './reducers/auth';

@connect(state => ({
  auth: state.auth
}))

export default class Routes extends Component {

  componentWillMount = () => {
    const {dispatch} = this.props;
    dispatch(checkAuth());
  }

  render() {
    const {ConnectedRouter, history} = this.props;
    const {auth} = this.props.auth;
    return(
      <ConnectedRouter history={history}>
        <div>
          <WithoutAuth exact path="/" parent={BeforeAuth} component={Login} auth={auth}/>
          <WithoutAuth exact path="/signup" parent={BeforeAuth} component={SignUp} auth={auth}/>
          <PrivateRoute exact path="/dashboard-welcome" component={DashboardWelcome} parent={Dashboard} auth={auth} />
          <PrivateRoute exact path="/dashboard" component={WorkFlow} parent={MainDashboard} auth={auth} />
        </div>
      </ConnectedRouter>
    );
  }
}

const WithoutAuth = ({ component: Component, parent: Parent, auth: auth, ...rest}) => {
  return(
    <Route {...rest} auth={auth} render={props => (
       auth && auth.token? (
         <Redirect to={{
           pathname: '/dashboard',
           state: { from: props.location }
         }}/>
       ) : (
          <Parent {...props}><Component {...props}></Component></Parent>
       )
  )}/>
 )
}

const PrivateRoute = ({ component: Component, parent: Parent, auth: auth, ...rest }) => {
  return (
    <Route {...rest} auth={auth} render={props => (
      auth && auth.token? (
        <Parent {...props}><Component {...props}></Component></Parent>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
}
