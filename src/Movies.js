

const Movie = ({movie}) => {

    return (
        <li className="movie-list-item" key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.title} by {movie.director} was released in {movie.year}</p>
            <p>Movie Rating - {movie.rating}</p>
            <p>Movie Runtime - {movie.runtime} minutes</p>
        </li>
    )
}

export default Movie;