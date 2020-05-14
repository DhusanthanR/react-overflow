import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
export default class Button extends Component{
  render(){
    return(<React.Fragment>
    <Button variant="contained" className={this.props.className} onClick={this.props.onclick}>{this.props.name}</Button>
    </React.Fragment>)
  }
}