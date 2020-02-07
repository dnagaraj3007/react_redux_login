import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { RemoveRedEye } from '@material-ui/icons';

import TextInput from './TextInput'

class SignUp extends Component{
	constructor(props){
		super(props);
		this.state ={
			name:'',
			email:'',
			password:''
		}
		this.onChange = this.onChange.bind(this);
	}


onChange(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	render(){
		return (
			<div>
			<form>
				<TextInput required name='name' 
				label='Name' 
				variant ='outlined' 
				value = {this.state.name}
				onChange = {this.onChange}/>

				<br/>

				<TextInput required name='email' 
				label='Email' 
				variant ='outlined' 
				value = {this.state.email}
				onChange = {this.onChange}/>

				<br/>

				

				<TextInput name = 'password'
				label = 'Password'
				type = 'password' 
				variant = 'outlined'
				value = {this.state.password}
				onChange = {this.onChange}
				inputProps = {{
          		  	endAdornment: (
            			<InputAdornment position="end">
              				<RemoveRedEye />
           			    </InputAdornment>
          			),
        		}}/>
			</form>
			</div>
		)
	}
}



export default SignUp