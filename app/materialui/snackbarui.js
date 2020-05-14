import React,{Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
export default class Snackbarui extends Component{
  render(){
    return(<div>
    <Snackbar
        open={this.props.open}
        onClose={this.props.close}
        anchorOrigin={this.props.anchorOrigin}
        message={this.props.message}
      />
    </div>)
  }
}