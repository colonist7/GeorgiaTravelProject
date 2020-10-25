import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { LoginBase } from './LoginForm.style';
import { useMainRoutes } from '../../Routing/Main/MainRoutes';
import { useForm } from 'react-hook-form';
import ValidationInput from '../Forms/ValidatonInput/ValidationInput';
import { LoginFormShellProps } from './LoginForm';

const LoginFormShell = ({ sendLogin }: LoginFormShellProps) => {
	const { Register } = useMainRoutes();
	const { register, handleSubmit, errors, watch } = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
		console.log(sendLogin);
		sendLogin(data);
	};

	return (
		<LoginBase onSubmit={handleSubmit(onSubmit)}>
			<h2>Log In</h2>
			<ValidationInput watch={watch} errors={errors} label='E-mail' field='email' register={register} />
			<ValidationInput
				type='password'
				watch={watch}
				errors={errors}
				label='Password'
				field='password'
				register={register}
			/>
			<Button type='submit' variant='contained' color='primary'>
				Login
			</Button>
			<p>or</p>
			<Link to={Register}>Register</Link>
		</LoginBase>
	);
};

export default LoginFormShell;
