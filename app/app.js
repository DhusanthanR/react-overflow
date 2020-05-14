import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './login/login';
import Home from './home/home';
export default class App extends Component{
  render(){
    return(<React.Fragment>
    {/*<Login/>*/}
    <Router>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
    </Switch>
    </Router>
    </React.Fragment>)
  }
}
