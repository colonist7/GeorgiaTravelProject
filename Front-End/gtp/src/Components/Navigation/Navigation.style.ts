import styled from 'styled-components';
import vars from '../../Assets/variables';
import { flexCenter, flexBetween } from '../../Assets/mixins';

export const NavigationBase = styled.nav`
	height: auto;
	padding: ${vars.padding};
	background: ${vars.mainColor};
	position: relative;

	ul {
		${flexCenter};
		padding: 0;
		list-style: none;

		li {
			font-size: 1.1rem;
			padding: ${vars.padding};

			a {
				color: #fff;
				text-decoration: none;
			}
		}
	}
`;

export const FlexBetween = styled.div`
	${flexBetween};
`;

export const Logo = styled.img`
	display: block;
	padding: ${vars.padding};
	width: 80px;
`;
