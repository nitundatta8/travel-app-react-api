import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import DestinationList from './DestinationList';
import Country from './Country'
import CountryDetails from './CountryDetails';

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
          <DestinationList />
        </Route>
        <Route path="/country/:countryName">
          <Country />
        </Route>
        <Route path="/countryDetails/:cityId">
          <CountryDetails />
        </Route>
      </Switch>
    </Router>
  );
}
//export default withRouter(App);
export default App;
