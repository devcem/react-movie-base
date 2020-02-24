import React, { Component } from 'react'

export default class MovieCard extends Component {
	constructor() {
        super();

        this.defaultDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat, tellus et euismod fringilla, libero nibh semper mi, sit amet porta augue ipsum eget nunc.';
  	}

    render() {
        return (
        	<div>
        		<div className="movie-card">
        			<img src={this.props.image} />
		            <div className="movie-card-info">
		                  <p>{this.props.title} ({this.props.year})</p> 
		                  <p>{this.defaultDescription}</p>
		            </div>
		        </div>
        	</div>
        )
    }
}