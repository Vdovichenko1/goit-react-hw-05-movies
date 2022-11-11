import React, { useEffect, useState } from 'react';
import {
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { SearchMovieApi } from 'utils/MovieApi';
import { ButtonFrom, FormMovie, ImageSearch, InputForm, ItemSearch, LinkSearch, NameFilm, SearchNavLink, Spinner } from './styledPages/Movies.styled';

export default function Movies() {
  const [film, setFilm] = useState([]);
  const [query, setQuery] = useState(null);
  const [btn, setBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('query');

  const handleQuery = e => {
    setBtn(false);
    const query = e.target.value;
    setQuery(query !== '' ? { query } : {});
    console.log(query);
  };
  const handleSubmitForm = e => {
    e.preventDefault();
    setSearchParams(query);
    if (!query) {
      setBtn(true);
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    SearchMovieApi(searchQuery)
      .then(({ data }) => setFilm(data.results))
      .catch(error => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  }, [searchQuery]);

  return (
    <>
      <section>
        <FormMovie onSubmit={handleSubmitForm}>
          <label>
            <InputForm placeholder="Enter the title" onChange={handleQuery} />
          </label>
          <ButtonFrom disabled={btn} type="submit">
            Search
          </ButtonFrom>
        </FormMovie>
              <Spinner>
          {loading && <PacmanLoader color="orange" />}
        </Spinner>
        
      </section>
      <section>
        <ItemSearch>
          {' '}
          {film.map(({ id, poster_path, title }) => {
            return (
              <LinkSearch key={id}>
                <SearchNavLink to={`/movies/${id}`} state={{ from: location }}>
                  <ImageSearch width='300px'
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                  />
                  <NameFilm>{title}</NameFilm>
                </SearchNavLink>
              </LinkSearch>
            );
          })}
          
          <Outlet />
        </ItemSearch>
      </section>
    </>
  );
}
