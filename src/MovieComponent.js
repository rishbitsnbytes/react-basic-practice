import { movies } from './data/movie.js';
import Movie from './Movies';
import './movies.css';

const fetchMovieData = () => {
    return movies;
}


  const MovieComponent = () => {
      const movieData = fetchMovieData();

    return (
        <div className="movie-container">
            <h1>Movies</h1>
            <ul className="movie-list">
               { 
                    movieData.map( movie => (
                      <Movie key={movie.id} movie={movie} />
                    ))
                }
            </ul>
        </div>
    )
  }

  export default MovieComponent;