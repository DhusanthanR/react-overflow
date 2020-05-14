import React,{Component} from 'react';
import Button from '../../materialui/button';
import Snackbar from '../../materialui/snackbarui';
import {withRouter} from 'react-router-dom';
import './bodycontent.css';
class Bodycontent extends Component{
  constructor(){
    super()
    this.state={
      title:'',
      question:'',
      open:false
    }
  }
  inputChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})  
  }
  isClicked=()=>{
     
    if(this.state.title && this.state.question){
      let myobj_serialized = JSON.stringify(this.state)
      console.log(myobj_serialized);
    localStorage.setItem('myobj',myobj_serialized)
    console.log(localStorage)
    // localStorage.setItem('question',this.state.title)
    this.props.history.push('/home/question')
  }
  else{
    this.setState({
       open:true
     })
  }
  }
   snackClose=()=>{
    this.setState({
      open:false
    })
  }
  render(){
    return(<div>
      <div className="container">
      <div className="col-md-12 m-3">
        <h1>Ask a question</h1>
      </div>
      <div className="col-md-12 d-flex flex-column textContent">
      <div className="titles"><h4>Title</h4>
      <p>Be specific and imagine you’re asking a question to another person</p>
      </div>
      <input className="mt-1 mb-3" type="text" name="title" onChange={this.inputChange} placeholder="e.g is there an R function for finding the text of element in a vector?"/>
     <div className="titles"><h4>Body</h4>
      <p>Include all the information someone would need to answer your question</p>
      </div>
      <textarea className="m-2" name="question" onChange={this.inputChange} placeholder="e.g (array, python, programs,... etc)"></textarea>
      <Button className="button ml-3"  name="Review your question" onclick={this.isClicked}/>
      </div>
    </div>
    <Snackbar open={this.state.open} close={this.snackClose} message="Enter your queries...!" anchorOrigin={{vertical: 'bottom',  horizontal: 'right', }}/>
    </div>)
  }
}
export default  withRouter(Bodycontent);