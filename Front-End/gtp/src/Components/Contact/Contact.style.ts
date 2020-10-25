import styled from 'styled-components';
import vars from '../../Assets/variables';

export const ContactBase = styled.div`
	h1 {
		text-align: center;
	}

	.contact-row {
		display: flex;
		/* align-items: center; */
		flex-direction: column;
		margin-bottom: 15px;

		h3 {
			padding: ${vars.padding};
			color: ${vars.mainColor};
			margin: 0;
			font-size: 22px;
		}

		p {
			padding: ${vars.padding};
			color: ${vars.textColor};
			font-size: 22px;
		}
	}

	.map {
		position: relative;

		img {
			width: 100%;
		}
	}
`;
