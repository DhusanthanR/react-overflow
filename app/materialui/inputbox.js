import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
class Inputbox extends Component{
render(){
  return(<div>
   <TextField className={this.props.className} style={this.props.style} id={this.props.id}  name={this.props.name} label={this.props.lable} type={this.props.type} onChange={this.props.setData}/>
  </div>)
}
}
export default Inputbox;
