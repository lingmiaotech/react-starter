import React from 'react';
import { Provider, connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import history from './history';
import stores from './stores';
import Home from './pages/Home';
import Services from './pages/Services';

const App = connect(state => state)(() => (
  <div>
    <Link to={'/aaa'}>
      click here2
    </Link>
    <Route exact path="/" component={Home}/>
    <Route path={'/aaa'} component={Services}/>
  </div>
));

export default () => (
  <Provider store={stores}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
);
