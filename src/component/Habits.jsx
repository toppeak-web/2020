import React, { Component } from 'react';
import Habit from './Habit';

class Habits extends Component {
    state = {
        habits:[
            {id:0, name:"Reading", count: 0},
            {id:1, name:"Coding", count: 0},
            {id:2, name:"Running", count: 0}

        ]
    }
    

    handleIncrement = habit => {
        // this.setState({count: this.state.count+1})
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit) //this 배열의 순서
        const count = habits[index].count++;  //해당 순서 index에 맞는 카운트를 1증가 시킨다
        this.setState({habits})
        console.log(count)
    }
    handleDecrement = habit =>{
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        const count = habits[index].count-1
        habits[index].count = count < 0 ? 0 : count
        this.setState({habits})
        console.log(count)
    }

    handleDelete = habit => {
        const habits = this.state.habits.filter(i => 
            i.id !== habit.id)
            this.setState({ habits })
    }
    render() {
        return (
           <ul>
               {this.state.habits.map(habita=>(
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