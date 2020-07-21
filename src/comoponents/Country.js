import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { loadDataByCountry } from './../actions/countryByApi'
import { Link } from 'react-router-dom';


const Country = () => {
  //const token = useSelector(state => state.user.userInfo.token);

  const { countryName } = useParams();
  const [places, setState] = useState([]);

  const placeData = (data) => {
    console.log("data");
    console.log(data[0].city);
    setState(data);

  }

  useEffect(() => {
    // Update the document title using the browser API
    loadDataByCountry(placeData, countryName);
  }, [countryName]);

  return (
    <React.Fragment>
      {console.log("inside fragment")}
      <h3>Country  Name:  {countryName}</h3>
      <ul>
        {/* {<Link to={`/users/${place.id}`} activeClassName="active">{place.name}<li>{place.city}</li></Link>} */}
        {/* {places.map((place) => { return <li>{place.city}</li> })} */}
        {/* {places.map(place => <Link to={`/countryDetails/${place.placeId}`} activeClassName="active">{place.name}<li>{place.city}</li></Link>)} */}
        {places.map(place => <li><Link to={`/countryDetails/${place.placeId}`} activeClassName="active">{place.name} {place.city}</Link></li>)}
      </ul>

    </React.Fragment>
  );
};

export default Country;