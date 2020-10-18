import React, { Component } from 'react';
import './App.css';
import Habits from './component/Habits';
import Navbar from './component/Navbar';

class App extends Component {

  state = {
    habits:[
        {id:0, name:"Reading", count: 0},
        {id:1, name:"Coding", count: 0},
        {id:2, name:"Running", count: 0}

    ]
  }


  handleIncrement = habit => { // habit 업데이트 해야하는
    const habits = this.state.habits.map(i => {
      if(i.id === habit.id){
        return {...habit, count: habit.count + 1} //모두 복사하고 새로운 오브젝트에복사해서 count를 덮어쓴다
      } else{
        return i;
      }
    })
    this.setState({ habits })
  }

  handleDecrement = habit => {
    const habits = this.state.habits.map(i => {
      if(i.id === habit.id){
        return {...habit, count: habit.count - 1}
      } else{
        return i;
      }
    })
    this.setState({ habits })
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit)
    // const count = habits[index].count - 1
    // habits[index].count = count < 0 ? 0 : count
    // this.setState({ habits })
    // console.log(count)
  }

  handleDelete = habit => {
    const habits = this.state.habits.filter(i =>
      i.id !== habit.id)
    this.setState({ habits })
  }

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}]
    this.setState({habits})
  }
  handleReset = () =>{
    const habits = this.state.habits.map(i=>{
      if(i.count !== 0){  //0이 아니라면 0으로바꾼다
        return {...i, count: 0}
      }
      return i; //0이면 그냥 돌려보네
    })
    this.setState({ habits })
  }
  render() {
    return (     
      <>
        <Navbar onAdd={this.handleAdd} totalCount={this.state.habits.filter(i=> i.count > 0).length}/>   
        <Habits
           tomato={this.state.habits}
           onIncrement={this.handleIncrement}
           onDecrement={this.handleDecrement}
           onDelete={this.handleDelete}
           onAdd={this.handleAdd}
           onReset={this.handleReset}
           />   
        
      </>
    );
  }
}


export default App;
