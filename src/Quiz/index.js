import React from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './index.css';

const style = {
  height: 100,
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

const Quiz = ({ match }) => (
  <div className="container">
    <div className="main">
      <h1>Quiz Title</h1>
      <Paper style={style}>
        <h2>Quix Landing Image</h2>
      </Paper>
    </div>
    <div className="side">
      <h1>Side</h1>
      <Paper style={style}>
        <h2>Ad</h2>
      </Paper>
    </div>
  </div>
);

export default Quiz;
