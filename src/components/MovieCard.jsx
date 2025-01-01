import React from 'react'
import "../css/MovieCard.css"
import { useMovieContext } from '../contexts/MovieContext'
const MovieCard = ({ movie }) => {

  const { isFavorite, addToFavorites, removeFromFavorites, isSeen, addToSeenMovies, removeFromSeenMovies } = useMovieContext()
  const favorite = isFavorite(movie.id)
  const seen = isSeen(movie.id)
  function onFavoriteClick(e) {
    e.preventDefault()
    if (favorite) {
      removeFromFavorites(movie.id)
    }
    else {
      addToFavorites(movie)
    }
  }
  function onSeenClick(e) {
    e.preventDefault()
    if (seen) {
      removeFromSeenMovies(movie.id)
    } else {
      addToSeenMovies(movie)
      if(favorite) removeFromFavorite(movie.id)
    }
  }

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="button-container">
          <button className={`favorite-btn ${seen ? "active" : ""} `} onClick={onSeenClick}>✅</button>
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
            📺
          </button>
        </div>



      </div>
      <div classNamw='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>

      </div>
    </div>
  )
}

export default MovieCard
