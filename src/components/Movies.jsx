import React from 'react'
import './MoviesStyle.css'

const Movies=({movies}) => {
  return (
    <div className='card'>
      <figure>
        <div className='imagee' style={{backgroundImage : `url(${movies.posterURL})`, width:"100%",
        backgroundSize:'300px 350px',backgroundRepeat:'no-repeat',
        }} />
      </figure>
      <div className='car-body'>
        <h2>{movies.title}</h2> 
        <p>{movies.description}</p>
        <h3>{movies.rating}/10</h3>
      </div>
    </div>
  )
}

export default Movies