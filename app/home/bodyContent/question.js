import React,{Component} from 'react';

export default class Question extends Component{
  constructor(){
    super()
    this.state={
      questions:localStorage.getItem("title"),
      secondques:JSON.parse(localStorage.getItem("myobj"))
    }
  }
  render(){
    console.log(this.state.secondques)
    return(<div>
    <div className="container">
    <h1>Questions.....?</h1>
    <div className="col-md-12">
    <div className="row">
    <h3>Title : {this.state.secondques.title}</h3><br/>
    <h3>Question : {this.state.secondques.question}</h3>
    </div>
    </div>
    </div>
    </div>)
  }
}