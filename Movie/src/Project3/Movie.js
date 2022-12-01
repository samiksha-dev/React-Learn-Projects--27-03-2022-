import { useEffect, useState } from "react";
import "./Movie.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

//372590ee
const API_URL = "http://www.omdbapi.com?apikey=372590ee";
const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  Title: "Batman Forever",
  Type: "movie",
  Year: "1995",
  imdbID: "tt0112462",
};

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSatesearchMovie] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Seach for Movies"
          value={searchMovie}
          onChange={(e) => {
            setSatesearchMovie(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchMovie)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movie1} /> */}
          {/* for passing one movie
          so we are dynamically looping over our movie array which is fetched from API then we are taking individual movie as done in movies.map(movie) and then dynamically passing it as a prop to our movie card*/}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
          {/* for passing all movies */}
        </div>
      ) : (
        <div className="empty">No movies found</div>
      )}
    </div>
  );
};
export default Movie;
