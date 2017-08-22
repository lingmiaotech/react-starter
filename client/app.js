import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import Home from './pages/Home';

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <div>
      <Route path="/" component={Home}/>
    </div>
  </div>
);

export default () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
