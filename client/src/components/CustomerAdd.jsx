// 고객 추가 양식
import React from "react";
import {post} from "axios"


class CustmerAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            file : null,   //변수값초기화
            userName : "",
            gender : "",
            fileName: ""
        }
    }

    handleFormSubmit = (e) =>{
        e.preventDefault()
        this.addCustomer()
            .then((response) =>{
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: "",
            gender: "",
            fileName: ""
        })
        
    }

    handleFileCH = (e) =>{
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }
    handleValueCH = (e) =>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    addCustomer = () =>{
        const url = "/api/customers";
        const formData = new FormData();
        formData.append("img", this.state.file);
        formData.append("name", this.state.userName);
        formData.append("gender", this.state.gender);
        const config = {
            headers : {
                "content-type" : "multipart/form-data"
            }
        }
        return post(url, formData, config)
    }
    
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객추가</h1>
                프로필 이미지; <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileCH}/> <br/>
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueCH}/><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueCH}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustmerAdd;