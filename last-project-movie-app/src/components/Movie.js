import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

function Movie({coverImage, id, title, genres, summary}) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={coverImage} alt={title} />
      </div>
      <div>
        <h3>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        {genres.map((genere) => (
          <div className={styles.chip} key={genere}>
            {genere}
          </div>
        ))}
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <p>Show more</p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
  summary:PropTypes.string.isRequired,
}

export default Movie