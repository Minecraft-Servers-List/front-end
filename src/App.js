import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ServerList from './pages/ServerList';
import ServerDetails from './pages/ServerDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/server/:id" component={ServerDetails} />
        <Route path="/server" component={ServerDetails} />
        <Route path="/list/:page" component={ServerList} />
        <Route path="/list" component={ServerList} />
        <Route path="/" component={ServerList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
