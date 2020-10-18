import React from 'react';
import { connect } from 'react-redux';
import LoginFormShell from './LoginForm.shell';

interface LoginFormProps {}

export interface LoginFormShellProps {}

const LoginForm = (props: LoginFormProps) => {
	const {} = props;

	return <LoginFormShell />;
};

const mapStateToProps = (state: any) => {
	let {} = state.LoginFormReducer;

	return {};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		// fetchInfo: (msg = 'ACTION') => {
		// 	dispatch(fetchLoginFormInformation());
		// },
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
