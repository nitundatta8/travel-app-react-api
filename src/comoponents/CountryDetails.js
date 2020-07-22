import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { loadDataByCountryDetails } from './../actions/countryByApi'
import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { postReview, loadCityData } from './../actions/countryByApi'


const CountryDetails = () => {
  const history = useHistory();
  const location = useLocation();
  const { cityId } = useParams();
  const [city, setState] = useState({});
  const token = useSelector(state => state.user.userInfo.token);
  const userId = useSelector(state => state.user.userInfo.id);
  const loginStatus = useSelector(state => state.user.login);


  const cityDetailsData = (data) => {
    console.log("city data");
    //  console.log(data.reviews.length);
    setState(data);

  }
  const reviewData = (data) => {
    console.log(" post review....");
    // console.log(data);
    loadCityData(cityDetailsData, cityId, token);

  };
  const doComment = (event) => {

    event.preventDefault();
    if (token == null) {
      console.log("signin  " + location.pathname);
      history.push(`/signin${location.pathname}`);
    } else {
      console.log("review.. : ");
      postReview(reviewData, event.target.review.value, city.placeId, token);
    }

  }

  useEffect(() => {
    // Update the document title using the browser API
    //  loadDataByCountryDetails(cityDetailsData, cityId);
    loadCityData(cityDetailsData, cityId, token);
  }, [cityId]);

  return (
    <React.Fragment>

      {!loginStatus ? <Redirect to={`/signin${location.pathname}`} /> : <h3></h3>}

      <h3>{city.city} Details</h3>
      <h3>City Rating : {city.rating} </h3>
      <h4>Reviews</h4>
      {

        city.reviews?.map(review => <li>{review.reviewText}

          {review.user.id === userId ? <a href="#">  Edit </a> : ''}
        </li>)

      }




      <h5>Share your reviews</h5>
      <form onSubmit={doComment.bind(this)}>
        <textarea
          name='review'
          placeholder='Enter a review' /><br />
        <button type='submit'>Comment</button>
      </form>

    </React.Fragment>
  );



};

export default CountryDetails;