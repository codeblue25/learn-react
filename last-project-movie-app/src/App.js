import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Movies !</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
