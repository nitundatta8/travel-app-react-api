import React from 'react';

function Destination(props) {
  loadData();

  return (

    <React.Fragment>
      <h1>Country List...</h1>

    </React.Fragment>
  );

  function loadData() {
    console.log("Calling api")
  }

};
export default Destination;