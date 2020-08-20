import React, { Component } from 'react';
import Customer from "./components/Customer"
import './App.css';
const customers = [{
  "id": 1,
  "name": "홍길동",
  "gender": "남",
  "img": "https://placeimg.com/1024/640/1"
},
{
  "id": 2,
  "name": "이무기",
  "gender": "남",
  "img": "https://placeimg.com/1024/640/2"
},
{
  "id": 3,
  "name": "홍여령",
  "gender": "여",
  "img": "https://placeimg.com/1024/640/3"
}]
class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {return (<Customer key={c.id} id={c.id} name={c.name} gender={c.gender} img={c.img}></Customer>)})
        }
      </div>
    )
  }
}

export default App;
