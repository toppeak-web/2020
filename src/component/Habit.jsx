import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

class Habit extends Component {
    state = {
        count: 0
    }

    handleIncrement = () =>{
        this.setState({count: this.state.count+1})
    }
    handledecrement = () =>{
        const count = this.state.count - 1
        this.setState({count: count < 0 ? 0 : count })
    }
    render() {
        return (
            <li className="habit">
                <span className="habit-name"></span>
        <span className="habit-count">{this.state.count}</span>
                <button className="habit-button habit-plus" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-circle"></i>
                </button>
                <button className="habit-button habit-minus" onClick={this.handledecrement}>
                    <i className="fas fa-minus-circle"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-ban"></i>
                </button>
            </li>
        );
    }
}

export default Habit;