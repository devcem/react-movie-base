import React, { Component} from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from '../layout/Login';
import MovieCard from '../movies/MovieCard'

export default class AutoComplete extends Component {
    state = {
        maxCount : 2
    }
    
    componentDidMount() {
        
    }

    renderMovies = (movies) => {
        return movies.slice(0, this.state.maxCount).map(function(movie){
            return <MovieCard title={movie.Title} year={movie.Year} image={movie.Poster} description=""/>
        });
    }

    showMore = () => {
        this.setState({ maxCount : 10 });
    }
    
    render() {
        return(
            <div className="dropdown">
                <div className="dropdown-menu is-active">
                    <div className="dropdown-content results">{this.renderMovies(this.props.movies)}</div>
                    { this.props.movies.length > 2 ? <button onClick={this.showMore}>Show More</button> : null }
                </div>
            </div>
        )
    }
}