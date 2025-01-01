import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your pending movie list</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className='favorites-empty'>
      <h2>Your favorite list is empty</h2>
      <p>Start adding your favourite movies</p>
    </div>
  )
}

export default Favorites 