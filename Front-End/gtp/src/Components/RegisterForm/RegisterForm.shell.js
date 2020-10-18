import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { RegisterBase, Input } from './RegisterForm.style';

const RegisterForm = () => {
	return (
		<RegisterBase>
			<h2>Register</h2>
			<Input id='standard-basic' label='E-mail' />
			<Input id='standard-basic' label='Firstname' />
			<Input id='standard-basic' label='LastName' />
			<Input id='standard-basic' label='Password' />
			<Input id='standard-basic' label='Confirm Password' />
			<Button variant='contained' color='primary'>
				Submit
			</Button>
		</RegisterBase>
	);
};

export default RegisterForm;
