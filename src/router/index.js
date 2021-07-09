import React, { Component, useEffect, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const AddDetails = React.lazy(() => import('../pages/AddDetail/index'));
const GamePage = React.lazy(() => import('../pages/Game/index'));

const history = createBrowserHistory();

const Routes = () => {
 

  

  return (
    <Suspense fallback={<div></div>}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={AddDetails} />
         
          <Route exact path='/addPlayersInfo' component={AddDetails} />
          <Route
            exact
            path='/gamePage_player_one=:id&player_two=:id'
            component={GamePage}
          />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
