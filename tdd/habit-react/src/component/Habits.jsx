import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

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

    handleAdd = name => {
        this.props.onAdd(name)
      }
      
    render() {
        return (
            <>
            <HabitAddForm onAdd={this.handleAdd} />
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
           <button className="habits-reset" onClick={this.props.onReset}>Count Reset All</button>
           </>
        );
    }
}

export default Habits;