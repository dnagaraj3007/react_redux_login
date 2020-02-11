import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { RemoveRedEye } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'

import TextInput from '../TextInput/TextInput'
import './SignUp.css'

const styles = theme => ({
  eye: {
    cursor: 'pointer',
  },
});


class SignUp extends Component{
	constructor(props){
		super(props);
		this.state ={
			name:'',
			email:'',
			password:'',
			isPasswordMasked: true,
			errors:{
				name:'',
				email:'',
				password:''
			}
		}
		this.onChange = this.onChange.bind(this);
		this.togglePasswordMask = this.togglePasswordMask.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}


	validateEmail(email) 
		{
 		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  			return true
  		else
  			return false;
		}

	validateElement(name, value){
		let errors = this.state.errors;
		if(typeof value !=='object'){
		switch(name){
			case 'name':
				errors.name = value.length<5? 'Name must be atleast 5 charaters length': ''
				break;
			case 'email':
				errors.email = this.validateEmail(value)? '': 'Please enter valid email'
				break;
			case 'password':
				errors.password = value.length<8 ? 'Password must atleast be 8 characters':''
				break;
			default:
				break;
		}
	}
		return errors;
	}

	formValidation(){
		for(var i in this.state){
			let errors = this.validateElement(i, this.state[i]);
			this.setState({
			errors
			})
		}

		for(var i in this.state.errors){
			if(this.state.errors[i] !='')
				return false;
		}
		return true;
	}

	onChange(event){
		event.preventDefault();
		const {name, value} = event.target;
		let errors = this.validateElement(name, value)
		this.setState({
			errors,
			[name] : value
		})
	}

	togglePasswordMask(event){
		this.setState({
			isPasswordMasked : !this.state.isPasswordMasked
		})
	}

	onSubmit(event){
		event.preventDefault();
		if(this.formValidation()){
			console.log('valid form')
		}else{
			console.log("INVALID", this.state.errors)
		}
	}

	render(){
		const { classes } = this.props;
		return (
			<div>
			<Card className = 'Card'>
			<CardContent>
			<form onSubmit={this.onSubmit}>
			<h2> Create account </h2>

			<div>
				<TextInput required name='name' 
				label='Name' 
				variant ='outlined' 
				value = {this.state.name}
				error={this.state.errors.name? true: false}
				helperText = {this.state.errors.name}
				onChange = {this.onChange}/>

			</div>
			<div>

				<TextInput required name='email' 
				label='Email' 
				variant ='outlined' 
				value = {this.state.email}
				error={this.state.errors.email? true: false}
				helperText = {this.state.errors.email}
				onChange = {this.onChange}/>

			</div>

			<div>

				<TextInput name = 'password'
				label = 'Password'
				type = {this.state.isPasswordMasked? 'password': 'text'}
				variant = 'outlined'
				value = {this.state.password}
				error={this.state.errors.password? true: false}
				helperText = {this.state.errors.password}
				onChange = {this.onChange}
				inputProps = {{
          		  	endAdornment: (
            			<InputAdornment position="end">
              				<RemoveRedEye className={classes.eye} onClick = {this.togglePasswordMask}/>
           			    </InputAdornment>
          			),
        		}}/>
        	</div>
        	<div>
        		<Button type='submit' variant="contained" color="primary"> Sign up! </Button>
        	</div>
			</form>
			</CardContent>
			</Card>
			</div>
		)
	}
}

SignUp = withStyles(styles)(SignUp);



export default SignUp