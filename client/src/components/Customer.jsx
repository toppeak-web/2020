import React from "react"
import {TableCell,TableRow} from "@material-ui/core/"

class Customer extends React.Component{
    render(){
        return(
                <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile" style={{width:64, height:64}}/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                </TableRow>
        )
    }
}
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt={this.props.id}/>
            </div>
        )
    }
}
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <h2>이름:{this.props.name}</h2>
                <h2>성별:{this.props.gender}</h2>
            </div>
        )
    }
}
export default Customer