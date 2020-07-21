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
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        cityDetailsData(jsonifiedResponse);
      })
    .catch((error) => {
      cityDetailsData(error);
    });

};