import React from "react";
import Movies from "./components/Movies";
import './components/NewMoviesStyle.css'


const ProductRend = (props) => {

  return (
    <div className="ProductRend">
      {props.movies.map((movies, index) => (
        <Movies key={index} movies={movies} />
        ))}
        <div className='card' >
      <div className='NewBt-contain'>
        {props.BtShow && !props.unshow ? <button className='NewBt' onClick={props.New}>+</button> : 
        <table className='InputMovie'>
          <ul className='InputMovie-item'>
            <li><h5>Movie ID :</h5></li>
            <li>
              <input type="text" 
              placeholder="ID"
              value={props.newMovie.id}
              onChange={(e) => props.setNewMovie({ ...props.newMovie, id: e.target.value })} 
              /> 
            </li>
          </ul>
          <ul className='InputMovie-item'>
            <li><h5>Movie Name :</h5></li>
            <li>
              <input type="text" 
              placeholder="Title"
              value={props.newMovie.title}
              onChange={(e) => props.setNewMovie({ ...props.newMovie, title: e.target.value })} 
              /> 
            </li>
          </ul>
          <ul className='InputMovie-item'>
            <li><h5>Movie Description :</h5></li>
            <li>
              <textarea cols="20" rows="5" placeholder="Description" 
              value={props.newMovie.description}
              onChange={(e) => props.setNewMovie({ ...props.newMovie, description: e.target.value })} 
              ></textarea>
            </li>
          </ul>
          <ul className='InputMovie-item'>
            <li><h5>Movie Image :</h5></li>
            <li>
              <input type="text" 
              placeholder="Poster URL"
              value={props.newMovie.posterURL}
              onChange={(e) => props.setNewMovie({ ...props.newMovie, posterURL: e.target.value })} 
              />
              </li>
          </ul>
          <ul className='InputMovie-item'>
            <li><h5>Movie Trailer :</h5></li>
            <li>
              <input type="text" 
              placeholder="Movie Trailer From Embed"
              value={props.newMovie.trailer}
              onChange={(e) => props.setNewMovie({ ...props.newMovie, trailer: e.target.value })} 
              />
            </li>
          </ul>
          <ul className='InputMovie-item'>
            <li><h5>Movie Rate :</h5></li>
            <li>
              <input type="text" 
              placeholder="Rating"
              value={props.newMovie.rating}
              onChange={(e) => props.setNewMovie({ ...props.newMovie, rating: e.target.value })} 
              />
            </li>
          </ul>
          <button onClick={props.old} className="NewSub">Submit</button>
        </table> }
        {props.unshow ? !props.BtShow : console.log("non")}
      </div>
    </div>
    </div>
  );
};

export default ProductRend;