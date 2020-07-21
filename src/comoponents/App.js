import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Destination from './Destination';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <LoginForm />
          {/* <Redirect from='/signin/' to="" /> */}
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
      </Switch>
    </Router>
  );
}
//export default withRouter(App);
export default App;
