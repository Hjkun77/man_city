import React from 'react';
import Layout from './Hoc/Layout';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import Matches from './pages/matches';
import Team from './pages/team';
import SigIn from './pages/sign_in';


const Routes = props => {
  return(
    <Layout>
      <Switch>
        <Route exact component={Home} path="/"/>
        <Route exact component={Matches} path="/the_matches"/>
        <Route exact component={Team} path="/the_team"/>
        <Route exact component={SigIn} path="/sign_in" />
      </Switch>
    </Layout>
  );
}

export default Routes;
