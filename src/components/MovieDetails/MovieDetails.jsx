import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { CompleteInfoMovieApi } from 'utils/MovieApi';

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
      <NavLink to={location.state?.from ?? '/'}>Go back</NavLink>
      {film && (
        <section>
            {film.poster_path && (
              <div>
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                    alt={film.title}
                    width="300"
                    height="500"
                  />
                  <ul>
                    <li>{film.title}</li>
                    <li>User Score: {film.vote_average}%</li>
                    <li>Overview </li>
                    <li>{film.overview}</li>
                    <li>Genres</li>
                    <li>
                      {film.genres.map(({ name }) => {
                        return (
                          <span key={name}>
                            <span>{name} </span>
                          </span>
                        );
                      })}
                    </li>
                  </ul>
                </>
                <ul>
                  <p>Information</p>
                  <NavLink to="cast" state={{ from: location.state.from }}>
                    {' '}
                    Cast{' '}
                  </NavLink>
                  <NavLink to="reviews" state={{ from: location.state.from }}>
                    {' '}
                    Reviews{' '}
                  </NavLink>
                  <Outlet />
                </ul>
              </div>
            )}
        </section>
      )}
    </div>
  );
}
