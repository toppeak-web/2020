import React, { Component } from 'react';
import Customer from "./components/Customer"
import './App.css';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
// import Paper from "@material-ui/core/Paper"
// import Table from "@material-ui/core/Table"
// import TableHead from "@material-ui/core/TableHead"
// import TableRow from "@material-ui/core/TableRow"
// import TableCell from "@material-ui/core/TableCell"
// import TableBody from "@material-ui/core/TableBody"
import{withStyles} from "@material-ui/core/styles"
const styles = theme =>({
  root: {
    width:"100%",
    marginTop:theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table:{
    minWidth:1080
  }
})
const customers = [{
  "id": 1,
  "name": "홍길동",
  "gender": "남",
  "img": "https://placeimg.com/64/64/1"
},
{
  "id": 2,
  "name": "이무기",
  "gender": "남",
  "img": "https://placeimg.com/64/64/2"
},
{
  "id": 3,
  "name": "홍여령",
  "gender": "여",
  "img": "https://placeimg.com/64/64/3"
}]
class App extends Component {
  render() {
    const {classes} =this.props
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>성별</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => { return (<Customer key={c.id} id={c.id} name={c.name} gender={c.gender} img={c.img}></Customer>) })
            }
          </TableBody>
        </Table>
        </Paper>
    )
  }
}

export default withStyles(styles) (App);
