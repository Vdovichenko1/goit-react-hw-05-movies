import Home from "pages/Home";
import Movies from "pages/Movies";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigator from "./Navigator";
import MovieDetails from "./MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Navigator />}>
          <Route index element={<Home/>} />
          <Route path='movies' element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace/>} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/goit-react-hw-05-movies" />} /> */}
      </Routes>
    </div>
  );
};


// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}