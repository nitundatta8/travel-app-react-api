import { Link } from "react-router-dom";
import React from 'react';

function Header() {
  const styleHeader = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '5px',
    backgroundColor: 'gray',
    fontSize: '30px',
    color: 'white',
    width: '100%',
    borderBottom: '5px solid black',
    padding: '1rem'
  }
  return (
    <nav style={styleHeader}>
      <h3>Travel App</h3>
      <Link to="/signin">Sign In</Link>
      <Link to="/">Home</Link>
    </nav>
  )
};
export default Header;