import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';

class Habit extends Component {

    handleIncrement = () =>{
        this.props.onIncrement(this.props.ptato)
    }
    handleDecrement = () =>{
        this.props.onDecrement(this.props.ptato)
    }
    handleDelete = () =>{
        this.props.onDelete(this.props.ptato)
    }
    
    render() {
        const { name , count} = this.props.ptato
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-plus" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-circle"></i>
                </button>
                <button className="habit-button habit-minus" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-circle"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-ban"></i>
                </button>
            </li>
        );
    }
}

export default Habit;