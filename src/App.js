import React from 'react';
import ServerList from './pages/ServerList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/list/:page" component={ServerList} />
        <Route path="/list" component={ServerList} />
        <Route path="/" component={ServerList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
