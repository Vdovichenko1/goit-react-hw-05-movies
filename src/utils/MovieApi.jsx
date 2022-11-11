import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '34ec28facaf098a1035125630014210f';

export const MovieApi = async () => {
  const response = await axios.get(`trending/movie/day`, {
    params: {
      api_key: KEY,
    },
  });
  return response;
};

export const SearchMovieApi = async query => {
  const response = await axios.get(`search/movie/`, {
    params: {
      query: query,
      api_key: KEY,
    },
  });
  return response;
};

export const CompleteInfoMovieApi = async movie_id => {
  const response = await axios.get(`movie/${movie_id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response;
};


export const CastMovieApi = async movie_id => {
  const response = await axios.get(`movie/${movie_id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return response;
};

export const ReviewsMovieApi = async movie_id => {
  const response = await axios.get(`movie/${movie_id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return response;
};

