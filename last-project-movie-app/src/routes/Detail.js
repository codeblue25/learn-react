import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([])

  const { id } = useParams()

  const getMovieDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()

    console.log(json)
    setDetails(json.data.movie);
    setLoading(false)
  }

  useEffect(() => {
    getMovieDetails();
  }, [])

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>About [ {details.title} ]</h1>}
      <img src={details.large_cover_image} alt={details.title} />
    </div>
  )
}

export default Detail