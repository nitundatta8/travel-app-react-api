import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { getPlaceDetails } from './../actions/countryByApi'
//import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { postReview } from './../actions/countryByApi';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as c from '../actions/ActionsType';


const CountryDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { placeId } = useParams();
  const [city, setCity] = useState({});
  const token = useSelector(state => state.user.userInfo.token);
  const userId = useSelector(state => state.user.userInfo.id);
  const loginStatus = useSelector(state => state.user.login);


  const cityDetailsData = (data) => {
    console.log("Reviews  ");
    console.log(data);
    setCity(data);
    const action = {
      type: c.ADD_REVIEW,
      data
    }
    console.log(" Action ");
    console.log(action);
    dispatch(action);
  };

  //reviewData callback for Review 
  const reviewData = (data) => {
    getPlaceDetails(cityDetailsData, placeId, token);

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

    getPlaceDetails(cityDetailsData, placeId, token);
  }, [placeId]);

  return (
    <React.Fragment>

      {!loginStatus ? <Redirect to={`/signin${location.pathname}`} /> : <h3></h3>}

      <h3> City Name: {city.city} </h3>
      <h3>City Rating : {city.rating} </h3>
      <h4>Reviews</h4>
      {
        city.reviews?.map(review =>
          <li>{review.reviewText}
            {/* <Link to={`/countryDetails/${place.placeId}`}><a href="#">  Edit </a></Link> */}
            {review.user.id === userId ? <Link to={`/editReview/${review.reviewId}`}> Edit </Link> : ''}
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