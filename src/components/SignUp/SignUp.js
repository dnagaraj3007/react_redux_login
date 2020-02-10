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

	onChange(event){
		event.preventDefault();
		const {name, value} = event.target;
		this.setState({
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
				onChange = {this.onChange}/>

			</div>
			<div>

				<TextInput required name='email' 
				label='Email' 
				variant ='outlined' 
				value = {this.state.email}
				onChange = {this.onChange}/>

			</div>

			<div>

				<TextInput name = 'password'
				label = 'Password'
				type = {this.state.isPasswordMasked? 'password': 'text'}
				variant = 'outlined'
				value = {this.state.password}
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