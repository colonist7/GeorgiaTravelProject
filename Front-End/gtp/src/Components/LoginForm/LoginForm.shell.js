import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { LoginBase, Input } from './LoginForm.style';

const LoginForm = () => {
	return (
		<LoginBase>
			<h2>Log In</h2>
			<Input id='standard-basic' label='E-mail' />
			<Input id='standard-basic' label='Password' />
			<Button variant='contained' color='primary'>
				Login
			</Button>
			<p>or</p>
			<Link to='/register'>Register</Link>
		</LoginBase>
	);
};

export default LoginForm;
