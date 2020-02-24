import React, { Component} from 'react'
import AutoComplete from '../movies/AutoComplete'
import MovieList from '../movies/MovieList'

export default class SearchBar extends Component {
  constructor() {
        super();

        this.term  = 'parasite';

        this.state = {
          term : ''
        };
  }
  componentDidMount() {
    this.setState({ term : this.props.match.params.id });

    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
          if (timeoutId) {
              clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(() => {
            func.apply(null,args);  
          }, delay);
      };
  };

    const input = document.querySelector('input');
    const dropdown = document.querySelector('.dropdown-menu');
    const resultsWrapper = document.querySelector('.results');

    const onInput = async event => {
        //call movie service and render movies
        //this.setState({ term : event.target.value });
        window.location.pathname = 'movies/' + event.target.value;
    };

    input.addEventListener('input', debounce(onInput, 500));
}
    
    render() {
        return (
            <div>
                <a href="/Login">Login</a>
                <div className="search-bar">
                    <input type="text" 
                    placeholder="Enter the name of the movie you want"
                    />
                    { this.state.term ? <MovieList term={this.state.term}/> : null }
                </div>
            </div>
        )
    }
}