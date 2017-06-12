import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue700 } from 'material-ui/styles/colors';

import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';
import './index.css';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    FloatingActionButton: blue500,
  },
});

const networkInterface = createNetworkInterface({
  uri: '/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

injectTapEventPlugin();

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <MuiThemeProvider muiTheme={muiTheme}>
        <App/>
      </MuiThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();
