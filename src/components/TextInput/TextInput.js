import TextField from '@material-ui/core/TextField';

import React, { Component } from 'react';

import './TextInput.css'

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
			error ={this.props.error}
			helperText = {this.props.helperText}
			className = 'TextInput'
			>
			</TextField>
			)
	}
}

export default TextInput;