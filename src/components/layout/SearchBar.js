import React, { Component} from 'react'
import AutoComplete from '../movies/AutoComplete'

export default class SearchBar extends Component {
  constructor() {
      super();
    this.state = {
        color: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({color: false})
    }, 2000)
  }
 changeColor = () => {
     this.setState({
         color: !this.state.color
     })
 }
    
  render() {
        return (
            <div className="search-bar">
                <h1 onClick={this.changeColor} className={this.state.color ? 'hide' : 'show'}>Test</h1>
                <input type="text" placeholder="Enter the name of the movie you want"/>
                <AutoComplete/>
            </div>
        )
    }
}