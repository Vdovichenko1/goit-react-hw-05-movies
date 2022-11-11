import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { CompleteInfoMovieApi } from 'utils/MovieApi';
import { DetailsImage, DetailsInfo, DetailsLink, InformationDetails, InformationNavLink, MovieInfo, TitleMovie, UserScore } from './MovieDetails.styled';

export default function MovieDetails() {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    CompleteInfoMovieApi(movieId)
      .then(res => {
        setFilm(res.data);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <div>
      <DetailsLink to={location.state?.from ?? '/'}> Go back</DetailsLink>
      {film && (
        <section>
            {film.poster_path && (
              <div>
                <DetailsInfo>
                  <DetailsImage
                    src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                    alt={film.title}
                    width="300"
                    height="500"
                  />
                  <MovieInfo>
                    <TitleMovie>{film.title}</TitleMovie>
                    <UserScore>User Score: {film.vote_average.toFixed(1)}%</UserScore>
                    <UserScore>Overview </UserScore>
                    <li>{film.overview}</li>
                    <UserScore>Genres</UserScore>
                    <li>
                      {film.genres.map(({ name }) => {
                        return (
                          <span key={name}>
                            <span>{name} </span>
                          </span>
                        );
                      })}
                    </li>
                  </MovieInfo>
                </DetailsInfo>
                <InformationDetails>
                  <p>Information</p>
                  <InformationNavLink to="cast" state={{ from: location.state.from }}>
                    {' '}
                    Cast{' '}
                  </InformationNavLink>
                  <InformationNavLink to="reviews" state={{ from: location.state.from }}>
                    {' '}
                    Reviews{' '}
                  </InformationNavLink>
                  <Outlet />
                </InformationDetails>
              </div>
            )}
        </section>
      )}
    </div>
  );
}
