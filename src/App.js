import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import MovieList from './components/movies/MovieList';
import MovieCard from './components/movies/MovieCard';
import SearchBar from './components/layout/SearchBar';
import Login from './components/layout/Login';


function App() {
  return (
    <div className="App">
      <SearchBar/>
    </div>
  );
}

export default App;
