import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,
  Route} from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Trending from './Pages/Trending';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';


const App = () => {
  /*State variable with array and return values */
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  /*function to take in search Value and send to request*/
  const getMovieRequest = async(searchValue) => {
  /*Omdb Movie API*/
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=67ef11b8`

  const response = await fetch(url);
  /*cOnVERT SEARCH REQUEST TO JSON*/
  const responseJson = await response.json('');

  if(responseJson.Search) {
  setMovies(responseJson.Search);
  }
  };
/*useEffect gets called on first app render. 
....CaLLS GETmOVIErEQI=UEST WITH PASSED in SEARCH VALUE*/
useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);

const addFavoriteMovie = (movie) => {
  const newFavoriteList = [...favorites, movie];
  setFavorites(newFavoriteList);
}


  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/trending' component={Trending} />
        </Switch>
      </Router>

      <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading 
            heading='Movies' />
          <SearchBox searchValue={searchValue} 
            setSearchValue={setSearchValue} />
        </div>
        <div className='row'>
          <MovieList movies={movies} 
            handleFavoritesClick={addFavoriteMovie} 
           favoriteComponent = {AddFavorites}/>
       </div>
      </div>

    </div>
  );
};

export default App;
