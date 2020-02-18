import React, { Component} from 'react'
import AutoComplete from '../movies/AutoComplete'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <input type="text" placeholder="Enter the name of the movie you want"/>
                <AutoComplete/>
            </div>
        )
    }
}