import React from 'react';
import { Button } from '@material-ui/core';
import { RegisterBase } from './RegisterForm.style';
import { useForm } from 'react-hook-form';
import { RegisterFormShellProps } from './RegisterForm';
import ValidationInput from '../Forms/ValidatonInput/ValidationInput';
import { RegisterData } from '../../Models/AuthModels';

const RegisterFormShell = ({ sendRegister }: RegisterFormShellProps) => {
	const { register, handleSubmit, errors, watch } = useForm();

	const onSubmit = (data: RegisterData) => {
		sendRegister(data);
	};

	return (
		<RegisterBase onSubmit={handleSubmit(onSubmit)}>
			<h2>Register</h2>
			<ValidationInput
				register={register}
				errors={errors}
				watch={watch}
				type='text'
				field='email'
				label='E-mail'
			/>
			<ValidationInput
				register={register}
				errors={errors}
				watch={watch}
				type='text'
				field='firstname'
				label='Firstname'
			/>
			<ValidationInput
				register={register}
				errors={errors}
				watch={watch}
				type='text'
				field='lastname'
				label='Lastname'
			/>
			<ValidationInput
				register={register}
				errors={errors}
				watch={watch}
				type='password'
				field='password'
				label='Password'
			/>
			<ValidationInput
				register={register}
				errors={errors}
				watch={watch}
				type='password'
				field='confirmPassword'
				label='Confirm Password'
			/>
			<Button type='submit' variant='contained' color='primary'>
				Submit
			</Button>
		</RegisterBase>
	);
};

export default RegisterFormShell;
