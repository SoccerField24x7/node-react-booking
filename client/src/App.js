import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './booking/Home';
import Register from './auth/Register';
import Login from './auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
