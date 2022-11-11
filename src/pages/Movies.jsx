import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { SearchMovieApi } from 'utils/MovieApi';

export default function Movies() {
    const [film, setFilm] = useState([]);
    const [query, setQuery] = useState(null);
    const [btn, setBtn] = useState(true)
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const searchQuery = searchParams.get('query');

    const handleQuery = e => {
        setBtn(false)
        const query = e.target.value;
        setQuery(query !== '' ? { query } : {});
        console.log(query);
    };
    const handleSubmitForm = e => {
		e.preventDefault();
        setSearchParams(query);
        if (!query) {
          setBtn(true)  
        }
	};
    
    useEffect(() => {
    if (!searchQuery) {
			return;
		}
    SearchMovieApi(searchQuery).then(({data}) => setFilm(data.results)).catch(error => console.log(error.message));
  }, [searchQuery]);


  return (
      <>
          <section>
              <form onSubmit={handleSubmitForm}>
                  <label>
                      <input placeholder="Enter the title" onChange={handleQuery} />
                      </label>
                  <button disabled={btn} type='submit'>Search</button>
              </form>
          </section>
          <section>
              <ul> {film.map(({ id, poster_path, title }) => {
                  return (
                      <li key={id}>
                          <Link to={`/movies/${id}`} state={{ from: location }}>
                              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                              <p>{title}</p>
                          </Link>
                      </li>
                  )
              } )}
              </ul>
          </section>
        <Outlet />
      </>
  )
}

