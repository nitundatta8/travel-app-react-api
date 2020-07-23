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

//country deatails API call 
export const loadDataByCountryDetails = (cityDetailsData, cityId) => {
  console.log("City id ---  " + cityId);

  return fetch(`http://localhost:5009/api/Places/${cityId}`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        // console.log("jsonifiedResponse  ");
        // console.log(jsonifiedResponse);
        //cityDetailsData(jsonifiedResponse);
        return jsonifiedResponse;
      })
    .catch((error) => {
      return error
    });

};

// get review call

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


export const loadCityData = (cityDetailsData, cityId, token) => {
  console.log("async");
  const promise = loadDataByCountryDetails(cityDetailsData, cityId);

  console.log("token:" + token)
  promise.then(cityData =>
    loadReviewData(cityData.city, token).then(
      reviewData => {
        cityDetailsData(Object.assign({}, cityData, { reviews: reviewData }));
      }
    )
  )


}



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