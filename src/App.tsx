import { Hash } from 'crypto';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
