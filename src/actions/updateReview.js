export const postUpdateReview = (updateReview, review, token) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'bearer ' + token },
    body: JSON.stringify(review)
  };


  return fetch(`http://localhost:5009/api/Reviews/${review.reviewId}`, requestOptions)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log("jsonifiedResponse  ");
        console.log(jsonifiedResponse);
        updateReview(jsonifiedResponse);
      })
    .catch((error) => {
      updateReview(error);
    });

};