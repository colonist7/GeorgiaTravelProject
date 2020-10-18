import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import vars from '../../Assets/variables';

export const RegisterBase = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 350px;
	height: auto;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	padding: 30px;
	margin: 50px auto;

	& > h2 {
		color: ${vars.mainColor};
		margin-bottom: 30px;
	}

	p {
		margin: 10px auto;
	}

	& > a {
		text-decoration: none;
		color: ${vars.secondaryColor};
	}
`;

export const Input = styled(TextField)`
	width: 100%;
	margin: 0 0 30px !important;
`;
