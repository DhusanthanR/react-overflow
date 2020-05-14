import React,{Component} from 'react';
import Navbar from './nav/navbar';
import Body from './bodyContent/bodycontent';
import Question from './bodyContent/question';
import './home.css';
import { Switch,Redirect, Route} from "react-router-dom";
class Home extends Component{
  constructor(props){
    super(props)
       const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn
    };

  }
  render(){ 
  if(this.state.loggedIn === false){
    return <Redirect to="/"/>
  }
    return(<div className="home-content">
    <Navbar/>
    <Switch>
    <Route path="/home/question" component={Question}/>
    <Route exact path="/home" component={Body}/>
    </Switch>
    </div>)
  }
}
export default Home;