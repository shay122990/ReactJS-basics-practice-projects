import styles from "./UsePopcorn.module.css";

export default function WatchedSummary({ watched }) {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className={styles.summary}>
      <h2>Movies you watched</h2>

      <div className={styles.summaryStats}>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>
            {Number.isNaN(avgImdbRating) ? 0 : avgImdbRating.toFixed(2)}
          </span>
        </p>
        <p>
          <span>🌟</span>
          <span>
            {Number.isNaN(avgUserRating) ? 0 : avgUserRating.toFixed(2)}
          </span>
        </p>
        <p>
          <span>⏳</span>
          <span>
            {Number.isNaN(avgRuntime) ? 0 : avgRuntime.toFixed(2)} min
          </span>
        </p>
      </div>
    </div>
  );
}
