import React, { Component} from 'react'

export default class AutoComplete extends Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        
      }



    render() {
        return(
            <div className="dropdown">
                <div className="dropdown-menu">
                  <div className="dropdown-content results"></div>
                </div>
            </div>
        )
    }
}