import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { loadDataByCountryDetails } from './../actions/countryByApi'
import { useSelector } from 'react-redux';

const CountryDetails = () => {
  const { cityId } = useParams();

  const [cityes, setState] = useState({});
  // const token = useSelector(state => state.user.userInfo.id);

  const cityDetailsData = (data) => {
    console.log("city data");
    console.log(data);
    setState(data);

  }

  useEffect(() => {
    // Update the document title using the browser API
    loadDataByCountryDetails(cityDetailsData, cityId);
  }, [cityId]);

  return (
    <React.Fragment>
      <h3>Courtry Details</h3>
    </React.Fragment>
  );
};

export default CountryDetails;