import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import MovieCard from './components/movies/MovieCard';
import SearchBar from './components/layout/SearchBar';
import Login from './components/layout/Login';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/Login">Login</Link>
      <Route path="/Login" component={Login} />
      </Router>
      
      <SearchBar/>
    </div>
  );
}

export default App;
