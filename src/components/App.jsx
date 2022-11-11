import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
// import Home from "pages/Home";
// import Movies from "pages/Movies";
// import Navigator from "./Navigator";
// import MovieDetails from "./MovieDetails";
// import Cast from "./Cast";
// import Reviews from "./Reviews";

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Navigator = lazy(() => import('./Navigator'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<PacmanLoader color="orange" />}>
        <Routes>
          <Route path="/" element={<Navigator />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/goit-react-hw-05-movies" />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
};
