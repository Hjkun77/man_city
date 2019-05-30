import React from 'react';
import Layout from './Hoc/Layout';
import {Switch} from 'react-router-dom';
import Home from './pages/index';
import Matches from './pages/matches';
import Team from './pages/team';
import SigIn from './pages/sign_in';
import Dashboard from './pages/dashboard';
import PrivateRoute from './Components/AuthRoutes/PrivateRoute';
import PublicRoute from './Components/AuthRoutes/PublicRoute';


const Routes = props => {
  return(
    <Layout>
      <Switch>
        <PrivateRoute {...props} exact component={Dashboard} path="/dashboard" />
        <PublicRoute {...props} restricted={false} exact component={Home} path="/"/>
        <PublicRoute {...props} restricted={false} exact component={Matches} path="/the_matches"/>
        <PublicRoute {...props} restricted={false} exact component={Team} path="/the_team"/>
        <PublicRoute {...props} restricted={true} exact component={SigIn} path="/sign_in" />
      </Switch>
    </Layout>
  );
}

export default Routes;
