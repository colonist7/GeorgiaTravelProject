import React from 'react';
import { connect } from 'react-redux';
import { RegisterData } from '../../Models/AuthModels';
import { sendRegister as SendRegister } from '../../Redux/Reducers/AuthReducer';
import RegisterFormShell from './RegisterForm.shell';

interface RegisterFormProps {
	sendRegister(formdata: RegisterData): void;
}

export interface RegisterFormShellProps extends RegisterFormProps {}

const RegisterForm = ({ sendRegister }: RegisterFormProps) => {
	return <RegisterFormShell sendRegister={sendRegister} />;
};

const mapStateToProps = (state: any) => {
	let {} = state.AuthReducer;

	return {};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		sendRegister: (formdata: RegisterData) => {
			dispatch(SendRegister(formdata));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
