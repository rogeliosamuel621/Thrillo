import React from 'react';
import './styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Board, Register } from './components/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/board" component={Board} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
