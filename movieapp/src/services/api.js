import axios from "axios";

const API_KEY = "6a7c98cf41c910f8b86b3fe8e0bfe11b";

export const fetchTrendingMovies = async () => {
  const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
  return res.data.results;
};

export const fetchMovieDetails = async (id) => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

export const fetchRecommendedMovies = async (id) => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`);
  return res.data.results;
};

export const searchMovies = async (query) => {
  const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
  return res.data.results;
};

export const fetchMoviesByGenre = async (genreId) => {
  const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
  return res.data.results;
};

export const fetchMovieTrailer = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
  );
  const data = await response.json();

  const trailer = data.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
};