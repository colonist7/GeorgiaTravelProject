import React from 'react';
import { connect } from 'react-redux';
import { LoginData } from '../../Models/AuthModels';
import { sendLogin as SendLogin } from '../../Redux/Reducers/AuthReducer';
import LoginFormShell from './LoginForm.shell';

interface LoginFormProps {
	sendLogin(formdata: LoginData): void;
}

export interface LoginFormShellProps extends LoginFormProps {}

const LoginForm = ({ sendLogin }: LoginFormProps) => {
	return <LoginFormShell sendLogin={sendLogin} />;
};

const mapStateToProps = (state: any) => {
	let {} = state.AuthReducer;

	return {};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		sendLogin: (formdata: LoginData) => {
			dispatch(SendLogin(formdata));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
