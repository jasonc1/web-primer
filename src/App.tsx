import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
