import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Quiz from './Quiz';
import NotFound from './NotFound';

const App = () => (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/quiz/:quizId' component={Quiz}/>
    <Route path='/' component={NotFound}/>
  </Switch>
);

export default App;
