import styles from "./UsePopcorn.module.css";

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className={styles.list}>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  console.log(movie);
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <div>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <span>{movie.Type}</span>
      </div>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
