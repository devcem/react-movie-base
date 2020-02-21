import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            color: true
        };
    }
    changeColor = () => {
        this.setState({
            color: !this.state.color
        })
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
            <React.Fragment>
            <h1 onClick={this.changeColor} className={this.state.color ? 'show' : 'hide'}>Fun WiTh ColOUrs</h1>
            <form onSubmit={this.SubmitHandler}>
                {header}
                <input 
                type="text"
                onChange={this.changeHandler}
                />
                <input
                type="submit" />
            </form>
            </React.Fragment>
            
        );
    }
} 