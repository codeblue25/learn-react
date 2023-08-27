import { useEffect, useState } from "react";
import styles from './App.module.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])

  const getMoives = async() => {
    const response = await 
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    const json = await response.json()
    setMovies(json.data.movies);
    setLoading(false);

    console.log(json.data.movies)
   }

  useEffect(() => {
    getMoives()
  }, []);

  return (
    <div>
      <h1>The Movies !</h1>
      {loading ? <strong>Loading...</strong> : null}


        {movies.map((movie) => (
          <div className={styles.card} key={movie.id}>
            <div className={styles.image}>
              <img src={movie.medium_cover_image} />
            </div>
            <div>
              <h3>{movie.title}</h3>
              {movie.genres.map((genere) => (
                <div className={styles.chip} key={genere}>
                  {genere}
                </div>
              ))}
              <p>{movie.summary}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
