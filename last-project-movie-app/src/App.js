import { useEffect, useState } from "react";
import Movie from './Movie.js'

import PropTypes from 'prop-types';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])

  const getMoives = async() => {
    const response = await 
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    const json = await response.json()
    setMovies(json.data.movies);
    setLoading(false);
   }

  useEffect(() => {
    getMoives()
  }, []);

  return (
    <div>
      <h1>The Movies !</h1>
      {loading ? <strong>Loading...</strong> : null}

        {movies.map((movie) => (
          <Movie
            key={movie.id}
            coverImage={movie.medium_cover_image}
            title={movie.title}
            genres={movie.genres}
            summary={movie.summary}
          />
        ))}
    </div>
  );
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
  summary:PropTypes.string.isRequired,
}

export default App;
