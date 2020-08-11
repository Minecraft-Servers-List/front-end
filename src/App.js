import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ServerList from './pages/ServerList';
import ServerDetails from './pages/ServerDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/server/:id" component={ServerDetails} />
        <Route exact path="/server" component={ServerDetails} />
        <Route exact path="/list/:page" component={ServerList} />
        <Route exact path="/list" component={ServerList} />
        <Route exact path="/" component={ServerList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
