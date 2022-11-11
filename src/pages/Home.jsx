import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { MovieApi } from 'utils/MovieApi';
import { Item, List, Title } from './styledPages/Home.styled';

export default function Home() {
    const [movie, setMovie] = useState([]);
    // const [loading, setLoading] = useState(false)

  const location = useLocation();

    useEffect(() => {
    MovieApi().then(({data}) => setMovie(data.results)).catch(error => console.log(error.message));
  }, []);

  return (
    <section>
      <Title>Trends of the day</Title>
      <Item>
        {movie.map(({ id, title, poster_path }) => (
          <List key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <img width='300px'
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
            </NavLink>
          </List>
        ))}
        <Outlet />
      </Item>
    </section>
  );
}
