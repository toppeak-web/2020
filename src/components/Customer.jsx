import React from "react"

class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustomerProfile id={this.props.id} img={this.props.img} name={this.props.name}/>
                <CustomerInfo name={this.props.name} gender={this.props.gender}/>
            </div>
        )
    }
}
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.img} alt={this.props.id}/>
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