import React from 'react';

import AppBar from 'material-ui/AppBar';

const titleStyle = {
  textAlign: 'center'
};

const Header = () => (
  <AppBar
    title="QuizMixx"
    titleStyle={titleStyle}
  />
);

export default Header;
