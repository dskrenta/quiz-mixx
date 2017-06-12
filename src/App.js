import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';

import Header from './Header';
import Landing from './Landing';
import Quiz from './Quiz';
import NotFound from './NotFound';

const App = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/quiz/:quizId' component={Quiz}/>
      <Route path='/' component={NotFound}/>
    </Switch>
  </div>
);

export default App;
