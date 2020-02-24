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
      		<Route exact path="/" component={SearchBar} />    
	      	<Route exact path="/movies/:id" component={SearchBar} />    
	      	<Route path="/Login" component={Login} />
      	</Router>
    </div>
  );
}

export default App;