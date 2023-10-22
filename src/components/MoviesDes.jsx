import React from 'react'
import { Routes, useParams } from 'react-router-dom'
import {product} from '../products'
import "./MoviesDesStyle.css"
function MoviesDes() {
  let {id} = useParams();
  console.log(id)
  let obj = product.find((elt)=> elt.id === id )
  console.log(obj)
  return (
      <div className='des-main'>
        <div className='des-item'>
          <h1>{obj.title}</h1>
          <h3>{obj.description}</h3>
        </div>
        <iframe width="560" height="315" src= {obj.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default MoviesDes