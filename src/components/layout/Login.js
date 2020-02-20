import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }
    SubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
      }
    changeHandler = (event) => {
        this.setState({
            username : event.target.value
        })
    }
    render() {
       let header= "";
       if (this.state.username) {
           header = <h1>Hello {this.state.username}</h1>;
       } else {
           header = "";
       }
        return (
            <form onSubmit={this.SubmitHandler}>
                {header}
                <input 
                type="text"
                onChange={this.changeHandler}
                />
                <input
                type="submit" />
            </form>
        );
    }
} 