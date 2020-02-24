import React, { Component } from 'react'
import MovieCard from '../movies/MovieCard'
import axios from 'axios'
import Service from '../../Service';

export default class MovieList extends Component {
	constructor() {
        super();

        this.movies = [];

        this.state = {
        	loading : false,
        	maxCount : 2
        };
  	}

    componentDidMount() {
        this.getMovies(this.props.term);
    }

   	getMovies = function(term){
    	Service.getMovie(term, this.setMovies.bind(this), this.error);
    };

    setMovies = function(movies){
        if(!movies){
            return false;
        }

        if(movies.length === 0){
            return false;
        }

        this.movies = movies;
        this.state.loading = false;
        
        this.forceUpdate();
    };

    renderMovies = (movies) => {
        return movies.slice(0, this.state.maxCount).map(function(movie){
            return <MovieCard title={movie.Title} year={movie.Year} image={movie.Poster} description=""/>
        });
    }

    showMore = () => {
        this.setState({ maxCount : 10 });
    }

    error = function(response){
      console.log('Couldn t find movies!');
    };

    render() {
        return(
            <div className="dropdown">
                <div className="dropdown-menu is-active">
                    <div className="dropdown-content results">{this.renderMovies(this.movies)}</div>
                    { this.movies.length > 2 ? <button onClick={this.showMore}>Show More</button> : null }
                </div>
            </div>
        )
    }
}