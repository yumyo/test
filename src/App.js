import { hot } from 'react-hot-loader/root';
import React from 'react';
import Routes from './Routes/Routes.jsx';
import ApolloProvider from './Apollo/Apollo.jsx';
import './index.scss';

const App = () => (
  <ApolloProvider>
    <Routes />
  </ApolloProvider>
);

export default hot(App);
