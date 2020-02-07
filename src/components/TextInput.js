import { InputAdornment, withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import React, { Component } from 'react';

class TextInput extends Component{

	

	render(){
		return (
			<TextField type = {this.props.type} 
			name= {this.props.name}
		    label ={this.props.label}
			value={this.props.value}
			variant = {this.props.variant}
			InputProps={this.props.inputProps}
			onChange = {this.props.onChange}
			>
			</TextField>
			)
	}
}

export default TextInput;