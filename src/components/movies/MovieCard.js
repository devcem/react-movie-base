import React, { Component} from 'react'
import axios from 'axios'

export default class MovieCard extends Component {
    state= {
        url: 'https://pokeapi.co/api/v2/pokemon',
        pokemon: null
    };

    componentDidMount() {
        const res = axios.get(this.state.url);
    }


    render() {
        return (
            <div>Tetetetetet</div>
        )
    }
}