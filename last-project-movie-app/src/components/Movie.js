import styles from './Movie.module.css';
import { Link } from "react-router-dom";

function Movie({coverImage, title, genres, summary}) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={coverImage} alt={title} />
      </div>
      <div>
        <h3>
          <Link to="/movie">{title}</Link>
        </h3>
        {genres.map((genere) => (
          <div className={styles.chip} key={genere}>
            {genere}
          </div>
        ))}
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default Movie