import React from 'react'
import './MoviesStyle.css'
import { Link } from 'react-router-dom'

const Movies=({movies}) => {
  return (
    <div className='card'>
      <figure>
        <div className='imagee' style={{backgroundImage : `url(${movies.posterURL})`, width:"100%",
        backgroundSize:'100% 100%',backgroundRepeat:'no-repeat',
        }} />
      </figure>
      <div className='card-body'>
        <div className='card-body-top'>
          <h2>{movies.title}</h2> 
          <h3>{movies.rating}/10</h3>
        </div>
        <p>{movies.description}</p>
        <Link className='Link' to={`/movies/${movies.id}`}>
          <button className='bt-about'>see more</button>
        </Link>
      </div>
    </div>
  )
}

export default Movies