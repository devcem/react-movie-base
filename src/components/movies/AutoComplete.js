import React, { Component} from 'react'
import axios from 'axios'

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
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results');

const onInput = async event => {
    const movies = await fetchData(event.target.value);
    console.log(movies);
    resultsWrapper.innerHTML = "";
    dropdown.classList.add('is-active');

    for (let movie of movies) {
        const option = document.createElement('a');
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        option.classList.add('dropdown-item');
        option.innerHTML = `
            <img src="${imgSrc}" />
            ${movie.Title}
        `;

        resultsWrapper.appendChild(option);
    }
};

export default class AutoComplete extends Component {
    
    render() {
        return(
            <div class="dropdown">
                <div class="dropdown-menu">
                    <a class="dropdown-item results" href="#"></a>
                </div>
            </div>
        )
    }
}