import React, { Component} from 'react'
import axios from 'axios'

export default class AutoComplete extends Component {


    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }



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