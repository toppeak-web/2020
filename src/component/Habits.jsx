import React, { Component } from 'react';
import Habit from './Habit';

class Habits extends Component {
    

    handleIncrement = habit => {
        this.props.onIncrement(habit)
    }
    handleDecrement = habit =>{
        this.props.onDecrement(habit)
    }

    handleDelete = habit => {
        this.props.onDelete(habit)
    }
    render() {
        return (
           <ul>
               {this.props.tomato.map(habita=>(
                   <Habit
                    key={habita.id}
                    ptato={habita}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}/>
                   ))}
           </ul>
        );
    }
}

export default Habits;