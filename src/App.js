import './App.css';
import React, {useState} from 'react';
import Home from './components/Home';
import {Link,Routes,Route} from 'react-router-dom'
// import Test from './components/Test';
import './components/NavStyle.css'
import { product } from './products';
// import Movies from './components/Movies';
import ProductRend from './ProductRend';
import MoviesDes from './components/MoviesDes';

function App() {
  const [BtShow,setBtShow] = useState(true)
  const [unshow,setUnShow] = useState(false)
  const [movies,setMovies] = useState(product)
  const [newMovie, setNewMovie] = useState({ id: '', title: '', description: '', posterURL: '', rating: '' ,trailer: ''});
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(''); 

  const New = () => {
    setBtShow(false)
    setUnShow(true)
  }
  
  const old = () => {
    product.push(newMovie)
    setNewMovie({ id: '', title: '', description: '', posterURL: '', rating: '' ,trailer: ''});
    setMovies(product)
    setBtShow(true)
    setUnShow(false)
  }

  const handleTitleFilter = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilter = (event) => {
    setRatingFilter(event.target.value);
  };

  const handleFilter = () => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        (ratingFilter === '' || movie.rating >= parseFloat(ratingFilter))
      );
    });

    setMovies(filteredMovies);
  };

  return (
    <div className="Apps">
      <div className='nav'>
            <ul className='ulone'>
                <li>
                  <button className='bt' >
                    <Link to="/" className='bt-text'>Home</Link>
                  </button>
                </li>
                <li>
                  <button className='bt'>
                    <Link to="/movies" className='bt-text'>Movies</Link>
                  </button>
                </li>
            </ul>
            <h1>LOGO</h1>
            <ul id='test'>
                <li id='searchlist'>
                    <input type="text" placeholder='Search The Title' id="searchtitle" onChange={handleTitleFilter}/>
                    <input type="text" placeholder='Search The Rate' id="searchrate" onChange={handleRatingFilter}/>
                </li>
                <li>
                    <button className='bt' id='BtSearch' onClick={handleFilter}>Search</button>
                </li>
            </ul>
        </div>
        <Routes>
          <Route index
            path="/"
            element={<Home />} />
          <Route
            path="/movies"
            element={<ProductRend BtShow={BtShow} setBtShow={setBtShow} unshow={unshow} setUnShow={setUnShow}  movies={movies}  setMovies ={setMovies} newMovie={newMovie} 
            setNewMovie={setNewMovie} New={New} old={old}/>} 
          />
        <Route 
          path="/movies/:id"
          element={<MoviesDes />} />
        </Routes>
    </div>
  );
}

export default App;

