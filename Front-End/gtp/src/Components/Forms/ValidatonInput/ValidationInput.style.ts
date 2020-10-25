import styled from 'styled-components';
import variables from '../../../Assets/variables';

interface InputBaseProps {
	isEmpty: boolean;
}

export const InputBase = styled.div<InputBaseProps>`
	width: 100%;
	margin: 0 0 40px !important;

	.group {
		position: relative;

		input {
			border-top: none;
			border-left: none;
			border-right: none;
			border-bottom: 1px solid #aaa;
			outline: none;
			width: 100%;
			padding-bottom: 5px;

			&:focus ~ label {
				top: -20px;
				left: 0px;
				transform: scale(0.6);
				color: ${variables.mainColor};
			}
		}

		label {
			position: absolute;
			left: ${({ isEmpty }) => (isEmpty ? '0px' : '0px')};
			top: ${({ isEmpty }) => (isEmpty ? '-5px' : '-20px')};
			color: ${({ isEmpty }) => (isEmpty ? '#aaa' : variables.mainColor)};
			transform: ${({ isEmpty }) => (isEmpty ? 'scale(1)' : 'scale(0.6)')};
			transform-origin: 0 0;
			transition: all 0.2s ease-in-out;
		}
	}

	.error {
		color: red;
	}
`;
