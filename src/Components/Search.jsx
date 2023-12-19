import React from 'react'
import StarRating from './StarRating'

const Search = ({searchText,rating,hadleText,hadleRating}) => {
  return (
    <div className='bo'>
        <form >
            <input type="text" value={searchText} onChange={(e)=>hadleText(e.target.value)}/>
            <StarRating rating={rating} handleRating={hadleRating} />
        </form>
    </div>
  )
}

export default Search