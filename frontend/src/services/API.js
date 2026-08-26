const API_KEY = "75a48cc3ee1af04172a245254f56e236";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) throw new Error(`TMDB request failed: ${response.status}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  if (!response.ok) throw new Error(`TMDB request failed: ${response.status}`);
  const data = await response.json();
  return data.results;
};
