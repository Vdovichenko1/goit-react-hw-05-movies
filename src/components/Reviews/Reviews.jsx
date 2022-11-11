import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ReviewsMovieApi } from 'utils/MovieApi';
import { ItemReview, ListReview } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams();

  console.log(reviews);

  useEffect(() => {
    ReviewsMovieApi(movieId)
      .then(res => {
        setReviews(res.data.results);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <div> {reviews.length > 0 && reviews.map(({ id, author, content, created_at }) => (
      <ItemReview key={id}>
        <ListReview>Author: {author} </ListReview>
        <ListReview>Date: {new Date(created_at).toLocaleDateString()}</ListReview>
        <ListReview>{content}</ListReview>
      </ItemReview>
    ))}
      {reviews.length === 0 && <p>We don`t have any reviews for this movie.</p> }</div>
  )
}