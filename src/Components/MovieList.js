import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({list,deleteFunction,handleEdit}) => {
  return (
    <div className='movie-list'>
        {
            React.Children.toArray(list.map(item=><MovieCard movie={item} functionDelete={deleteFunction} handleEdit={handleEdit}/>   ))
        }
      
    </div>
  )
}

export default Movielist