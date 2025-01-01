import React from 'react'
import "../css/MovieCard.css"

const MovieCard = ({movie}) => {

  function onFavoriteClick(){
    alert("clicked ")
  }

  return (
    <div className='mocie-card'>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <div className="movie-overlay">
          <button className='favorite-btn' onClick={onFavoriteClick}>❤️</button>
        </div>
      </div>
     <div classNamw='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
     </div>
    </div>
  )
}

export default MovieCard