import React from 'react';
//import { useHistory } from 'react-router-dom';
import { login } from '../actions/Login';
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


function LoginForm(props) {


  const dispatch = useDispatch();
  //const history = useHistory();
  const loginStatus = useSelector(state => state.user.login);
  const authenticationFail = useSelector(state => state.user.authenticationFail);
  return (

    <React.Fragment>
      {loginStatus ? <Redirect to="/destination" /> : <h3></h3>}

      {authenticationFail ? <h3>Login Fail {authenticationFail}</h3> : <h3></h3>}

      <h1>Sign in</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='text'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
    </React.Fragment>
  );


  function doSignUp(event) {
    event.preventDefault();
    console.log("Email.. : " + event.target.name.value);



    dispatch(login(event.target.text.value, event.target.password.value));

    //makeApiCall(event.target.email.value, event.target.password.value);
    // return <Redirect to="/destination" />;



  };

};
export default LoginForm;