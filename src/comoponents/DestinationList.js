import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
//import { loadDataByCountry } from '../actions/countryByApi';
import { useHistory } from 'react-router-dom';
//import { Redirect } from 'react-router-dom';


function DestinationList() {
  const history = useHistory();
  const [value, setValue] = useState('');
  const handleSelect = (e) => {
    console.log("this country" + e);
    setValue(e);
    history.push("/country/" + e);
  }

  return (

    <React.Fragment>
      <DropdownButton
        alignRight
        title="Dropdown right"
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="Japan">Japan</Dropdown.Item>
        <Dropdown.Item eventKey="US">US</Dropdown.Item>
        <Dropdown.Item eventKey="England">England</Dropdown.Item>

      </DropdownButton>
      <h4>You selected {value}</h4>
    </React.Fragment>
  );

  // function loadData() {
  //   console.log("Calling api")
  // }

};
export default DestinationList;