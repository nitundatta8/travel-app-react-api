import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { postUpdateReview } from './../actions/updateReview';
import { useHistory } from 'react-router-dom';


const EditReview = () => {
  const city = useSelector(state => state.city);
  console.log(" place id");
  console.log(city);
  const { reviewId } = useParams();
  const token = useSelector(state => state.user.userInfo.token);
  const history = useHistory();

  const review = city.city.reviews.filter(review => review.reviewId == reviewId)[0];

  const updateReview = () => {
    history.push(`/countryDetails/${city.city.placeId}`);
  };

  const updateComment = (event) => {
    event.preventDefault();
    console.log("post Api call ");
    const newReview = Object.assign({}, review, { reviewText: event.target.name.value })
    postUpdateReview(updateReview, newReview, token);

  };
  return (
    <React.Fragment>
      <h3>Edit Reviews</h3>
      <h3>City : {city.city.city}</h3>
      <form onSubmit={updateComment.bind(this)}>
        <textarea
          name='review'
          placeholder='Enter a review'
          defaultValue={review.reviewText} /><br />
        <button type='submit'>Comment</button>
      </form>
    </React.Fragment>
  );
};

export default EditReview;

