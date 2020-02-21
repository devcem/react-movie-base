import React, { Component} from 'react'
import AutoComplete from '../movies/AutoComplete'
import axios from 'axios'

export default class SearchBar extends Component {
  constructor() {
      super();
    this.state = {
        DummyDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Mauris feugiat, tellus et euismod fringilla, 
        libero nibh semper mi, sit amet porta augue ipsum eget nunc.`
    }
  }
  componentDidMount() {
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

  const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/' , {
        params: {
            apikey: 'b10e8819',
            s: searchTerm
        }
    });
    if(response.data.Error){
        return [];
    }
    return response.data.Search;
};

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown-menu');
const resultsWrapper = document.querySelector('.results');

const onInput = async event => {
    const movies = await fetchData(event.target.value);
    console.log(movies);
    resultsWrapper.innerHTML = "";
    dropdown.classList.toggle('is-active');

    for (let movie of movies) {
        const option = document.createElement('a');
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        option.classList.add('dropdown-item');
        option.innerHTML = `
        <div class="movie-card">
            <img src="${imgSrc}" />
            <div class="movie-card-info">
                <p>${movie.Title} (${movie.Year})</p> 
                <p>${this.state.DummyDescription}</p>
            </div>
        </div>
        `;

        resultsWrapper.appendChild(option);
    }
};

input.addEventListener('input', debounce(onInput, 500));
  }

    
  render() {
        return (
            <div className="search-bar">
                <input type="text" 
                placeholder="Enter the name of the movie you want"
                />
                <AutoComplete/>
            </div>
        )
    }
}