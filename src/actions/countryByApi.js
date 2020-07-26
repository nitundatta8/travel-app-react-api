// data from country by API call 
export const loadDataByCountry = (placeData, country) => {

  return fetch(`http://localhost:5009/api/Places?country=${country}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        placeData(jsonifiedResponse);
      })
    .catch((error) => {
      placeData(error);
    });

};

// get review api call

export const loadReviewData = (cityName, token) => {
  console.log("City name ---  " + cityName);
  console.log("token ---  " + token);

  const requestOptions = {
    headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token }
  };
  // http://localhost:5009/api/Reviews/getreviews?city=London
  return fetch(`http://localhost:5009/api/Reviews/getreviews?city=${cityName}`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        return jsonifiedResponse
      })
    .catch((error) => {
      return error
    });

};

//get reviews without user info ---- api call
const getReviewApi = (placeId) => {
  console.log("reviews without user info    " + placeId);
  return fetch(`http://localhost:5009/api/Places/${placeId}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {

        return jsonifiedResponse;
      })
    .catch((error) => {
      return error
    });
};

// get place reviews with user info ---- api call

const getUserInfo = (placeName, token) => {
  const requestOptions = {
    headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token }
  };

  return fetch(`http://localhost:5009/api/Reviews/getreviews?city=${placeName}`, requestOptions)
    .then(response => response.json())
    .then(jsonifiedResponse => {
      return jsonifiedResponse
    })
    .catch((error) => {
      return error
    });
};

// display city review and rating, other else
export const getPlaceDetails = (placeData, placeId, token) => {
  const promise = getReviewApi(placeId);
  promise.then(placeInfo => getUserInfo(placeInfo.city, token)
    .then(reviewWithUser => placeData(Object.assign({}, placeInfo, { reviews: reviewWithUser }))))

};



//review post API call 
export const postReview = (reviewData, review, placeId, token) => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token },
    body: JSON.stringify({ "reviewText": review, "placeId": placeId })
  };


  return fetch(`http://localhost:5009/api/Reviews`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        reviewData(jsonifiedResponse);
      })
    .catch((error) => {
      reviewData(error);
    });

};