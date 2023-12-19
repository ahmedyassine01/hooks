import React from 'react'
import StarRating from './StarRating'
import EditedMovie from './EditMovie'
import { Link } from 'react-router-dom'

const MovieCard = ({movie,functionDelete,handleEdit}) => {
  return (
    <div className='movie-card'>
        <h3>{movie.name}</h3>
        <img src={movie.image} alt={movie.name} />
        <StarRating rating={movie.rating}/>
        <p>{movie.date}</p>
        <button className='btn' onClick={()=>functionDelete(movie.id)}>Delete</button>
       <Link to={`/info/${movie.id}`}>
       <button>Info</button></Link> 
        <EditedMovie film={movie} handleEdit={handleEdit}/>
    </div>
  )
}

export default MovieCard