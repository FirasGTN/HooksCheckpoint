import './App.css';
import React, {useState} from 'react';
import ProductRend from './ProductRend';
import Home from './components/Home';
import './components/NavStyle.css'
import { product } from './products';

function App() {
  const [ShowM, setShowM] = useState(false)
  const [ShowH, setShowH] = useState(true)
  
  const MoviesClick = () => {
      setShowM(true)
      setShowH(false)
  }
  
  const HomeClick = () => {
      setShowH(true)
      setShowM(false)
  }

  const [BtShow,setBtShow] = useState(true)
  const [unshow,setUnShow] = useState(false)
  const [movies,setMovies] = useState(product)
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(''); 

  const New = () => {
    setBtShow(false)
    setUnShow(true)
  }
  
  const old = () => {
    product.push(newMovie)
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
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
                <li><button className='bt' onClick={HomeClick}>Home</button></li>
                <li><button className='bt' onClick={MoviesClick}>Movies</button></li>
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
        <div className='main'>
            {ShowM ? <ProductRend BtShow={BtShow} setBtShow={setBtShow} unshow={unshow} setUnShow={setUnShow} setShowH={setShowH} MoviesClick={MoviesClick} HomeClick={HomeClick} movies={movies}  setMovies ={setMovies} newMovie={newMovie} 
            setNewMovie={setNewMovie} New={New} old={old}
            /> : console.log("ok")}
            {ShowH ? <Home/> : console.log("ok2")}
        </div>
    </div>
  );
}

export default App;

